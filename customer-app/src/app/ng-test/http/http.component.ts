import { Component, OnInit } from "@angular/core";




@Component({
    selector:'app-test',
    templateUrl:'./http.component.html',
    styleUrls:['./http.component.scss']
})
export class HttpCompoent implements OnInit{
    info:string;

    ngOnInit(): void {
        // 手动实现ajax.
        var xhr = new XMLHttpRequest;
        var url = 'http://127.0.0.1:8081/health';
        xhr.open("GET",url,true);
        // 回调函数
        xhr.onreadystatechange=function(){
            if(xhr.status == 200){
                // this的指向不明
                 HttpCompoent.prototype.info= xhr.response;
                 console.log(HttpCompoent.prototype.info);
            }else{
                console.log("can't get from server");
                HttpCompoent.prototype.info="can't connect to server";
            }
        };
        // 发送请求
        xhr.send(null); 
    }
}