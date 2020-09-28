<p align="center">
<img src="https://github.com/SevenOutman/vue-aplayer/blob/develop/src/assets/vue-aplayer-round.png" alt="Vue-APlayer" width="100">
</p>
<h1 align="center">Vue-APlayer</h1>

[![fork](https://gitee.com/liushuai05/vue-aplayer/badge/fork.svg?theme=dark)](https://gitee.com/liushuai05/vue-aplayer/members)
[![star](https://gitee.com/liushuai05/vue-aplayer/badge/star.svg?theme=dark)](https://gitee.com/liushuai05/vue-aplayer/stargazers)

> Vue implementation of [APlayer](https://github.com/MoePlayer/APlayer) prototype.
[**Demo**](https://sevenoutman.github.io/vue-aplayer)



![Screenshot](https://i.loli.net/2018/05/26/5b0912ce2e250.png)


### 特性
- Beautiful clean UI
- Lyrics scroll
- Playlist with repeat & shuffle controls
- Custom theme color / Self-adapting theme color
- Drag and place anywhere
- Mutex play
- HLS support
- **Easy props and API**
- **Dependency free** and light-weight (gzipped 16KB)

Using Vue-APlayer in your project? [Let me know!](https://github.com/SevenOutman/vue-aplayer/issues/26)



## 运行时要求

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)



## 使用
```HTML
<aplayer autoplay
  :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/secretbase.mp3',
    pic: 'https://cn-east-17-aplayer-35525609.oss.dogecdn.com/secretbase.jpg'
  }"
/>
```
#### 以下方法只是实现思路，仅供参考
```HTML
<!--下面是electron使用方法，该方法需要node fs支持-->
<aplayer autoplay ref="player" theme="pic" repeat="list" showLrc :narrow="false" :music="music" :list="music_list" />

<script>
    import { remote } from "electron";
    import path from "path";
    const fs = require("fs");
    import VueAplayer from "vue-aplayer";
    export default {
        name: "index",
        components: {
            //别忘了引入组件
            aplayer: VueAplayer
        },
        data() {
            return {
                music_list: [],
                music: {
                    // title: "王菲 - 红豆",
                    // src: "file:/home/edison/Music/王菲 - 红豆.mp3",
                    // lrc: "file:/home/edison/Music/王菲 - 红豆.lrc",
                    // artist: "王菲",
                    // pic: "file:/home/edison/Music/王菲 - 红豆.jpg"
                },
            }
        },
        created: function() {
            this.onload_music()
        },
        methods: {
            onload_music() {
                //获取歌词和图片等
                let resources = (basename, ext) => {
                    return new Promise((resolve, reject) => {
                        let res_path = path.join(music_path, basename + "." + ext);
                        fs.exists(res_path, exists => {
                            if (exists) {
                                resolve("file:" + res_path);
                            } else {
                                resolve(false);
                            }
                        });
                    });
                };
                //自动获取 ~/Music 目录下的所有音乐
                let music_path = path.join(remote.app.getPath("music"));
                //使用fs遍历目录
                fs.readdir(music_path, (err, files) => {
                    if (err) throw err;
                    //写入数组
                    let basename = path.basename(fPath).split(".")[0];
                    music = {
                        title: basename,
                        src: "file:" + fPath,
                        mus_id: md5(fPath),

                        artist: basename.split("-")[0].trim()
                    };
                    let lrc = await resources(basename, "lrc");
                    let pic =
                        (await resources(basename, "jpg")) ||
                        (await resources(basename, "png"));

                    if (lrc) {
                        music.lrc = lrc;
                    }
                    if (pic) {
                        music.pic = pic;
                    }

                    this.music_list.unshift(music);
                })
            }
        }
    }
</script>
```


```JS
// ES6
import Aplayer from 'vue-aplayer'

new Vue({
    components: {
        Aplayer
    }
})
```

 [**开发者参考文档**](https://gitee.com/liushuai05/vue-aplayer/blob/master/docs/README.zh-CN.md)


## 贡献

如果你有好建议或则发现bug请 [点这里提交](https://gitee.com/liushuai05/vue-aplayer/issues) 

## 来历
-`Vue-APlayer`名称应该用完全相同的大小写。
-版本`Vue-APlayer@1.x` （github）或`vue-aplayer@1.x`（npm）。

## 相关项目

- [APlayer](https://github.com/MoePlayer/APlayer): Prior art
- [@moefe/vue-aplayer](https://github.com/MoePlayer/vue-aplayer): Another Vue implementation of APlayer by [@u3u](https://github.com/u3u)


## 鸣谢

[@DIYgod](https://github.com/DIYgod), for creating APlayer and sharing cloud storage for hosting Vue-APlayer's demo page media resources.


## 版权

Vue-APlayer 使用 [MIT](https://github.com/SevenOutman/vue-aplayer/blob/master/LICENSE)版权.

Copyright (c) 2016-present Shenghao "Doma" Lei
Copyright (c) 2020-present EdisonLiu_

## 开发 
#### 使用npm/cnpm开发
```shell
npm install
npm run dev

```
#### 使用 Yarn 开发
```shell
yarn
yarn run dev
```
测试地址
http://localhost:4000

## 排错
1.如下错误说明node没有使用11以上版本
An unexpected error occurred: "EPERM: operation not permitted, copyfile   
