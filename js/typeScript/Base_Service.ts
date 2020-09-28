import { URLSearchParams } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { session } from '../widget/script/sessionStorage';
import { cookie } from '../widget/script/cookie';
import { Injectable } from '@angular/core';
import { NzMessageService } from '../ngdesign/ng-zorro-antd.module';
import { UserInfo } from '../common/userInfo';
import { AppCommon } from "../common/app-common";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import '../widget/script/base64.js'
declare var Base64: any;
import { Language } from '../common/language';
import {TranslateService} from "@ngx-translate/core";
@Injectable()
export class BaseService {
  public path: string = '';
// ts中的constructor怎么用？
  constructor(
    protected http: Http,
    public httpClient: HttpClient,
    public router: Router,
    public activedRoute: ActivatedRoute,
    public location: Location,
    public translate?: TranslateService
  ) {
    this.path = environment.getServer();
  }

  // -------处理流程appCode传参-------
  getAppCode(){
    let appCode = "";
    // ---icsm-EU端appcode使用A0008---
    if (AppCommon.currentAppcode=="A0009") {
      appCode = "A0008"
    }
    return appCode;
  }

  public jsonCall(data: any, url: string, type = 'post', withAppToken=false): any {
    type = type.toLocaleLowerCase();
    let tenatInfo = AppCommon.currentTenant || "";
    let myHeader: Headers = new Headers();
    //国际化标识
    let langFlag = Language.getLanguage();
    myHeader.append("Accept-Language", langFlag);
    if (tenatInfo && data.__isNeedHeader !== false) {
      myHeader.append("current_tenant", tenatInfo.tenantId);
      myHeader.append('current_app', AppCommon.currentAppcode || null);
    }
    if (withAppToken) {
      myHeader.append('app_token', '6c80ff93c2be4147996c20b2db5a6e5a');
    }
    delete data.__isNeedHeader
    return new Promise((resolve, reject) => {
      if (type == "get" || type == "delete") {
        let options = new RequestOptions({ search: data, headers: myHeader })
        this.http[type](url, options)
          .toPromise()
          // 与服务器连接成功
          .then(res => {
            if (res.status == 200 || res.status == 201 || res.status == 401 || res.status == 403) {
              //console.log(res);
              // console.log(res);
              this.handleSuccess(resolve, reject, res)
            }
          })
          // 与服务器连接失败
          .catch(
            res => {
              // console.log(res)
              this.handleError(resolve, reject, res)
            }
          );
      } else {
        let options = new RequestOptions({ headers: myHeader });
        this.http[type](url, data, options)
          .toPromise()
          // 与服务器连接成功
          .then(res => {
            if (res.status == 200 || res.status == 201) {
              this.handleSuccess(resolve, reject, res)
            }
          })
          // 与服务器连接失败
          .catch(res => { this.handleError(resolve, reject, res) });
      }
    })
  }
  /**
 * 处理请求成功
 * @param res
 * @returns data|obj
 */
  private handleSuccess(resolve: Function, reject: Function, res?: any) {
    let resHeaders = res.headers.toJSON() || {};
    let status_codes = resHeaders['status_code'] || resHeaders['Status_code'] || [];
    let status_code = status_codes[0] || "";
    if (status_code == 200 || !status_code) {
      if (resHeaders['x-total-count'] != undefined || resHeaders['X-Total-Count'] != undefined) {
        let data = res.json() || [];
        let total = resHeaders['x-total-count'] || resHeaders['X-Total-Count'] || [];
        total = total[0] || 0;
        resolve({ data: data, total: total });
      } else {
        if (!!res["_body"]) {
          let result = res["_body"];
          try {
            result = JSON.parse(result);
          } catch (error) {
            /*if (result == '成功') {
              result = '';
            } else {
              throw '';
            }*/
          }
          resolve(result);
        } else {
          resolve(null)
        }
      }
    } else {
      let status_msgs = resHeaders['status_msg'] || resHeaders['Status_msg'] || [];
      let status_msg = status_msgs[0] || "";
      let base64 = new Base64();
      status_msg = base64.decode(status_msg) || "服务异常";
      resolve({ error_msg: status_msg, error_code: status_code })
    }
  }


  /**
  * 处理请求错误
  * @param error
  * @returns data|obj
  */
  private handleError(resolve: Function, reject: Function, res?: any) {
    // 判断未登录或者登录已过期跳转到登录页面
    if (!!res && res.status == 401) {

      this.loginOut();
      return
    }
    let status_msg = "服务器异常!";
    if (!!res && res.status == 400) {
      let resHeaders = res.headers.toJSON() || {};
      let status_msgs = resHeaders['status_msg'] || resHeaders['Status_msg'] || [];
      status_msg = status_msgs[0] || "服务器异常!";
      let base64 = new Base64();
      status_msg = base64.decode(status_msg) || "服务异常";
    }
    if (!!res && res.status == 403) {
      let resHeaders = res.headers.toJSON() || {};
      let status_msgs = resHeaders['status_msg'] || resHeaders['Status_msg'] || [];
      status_msg = status_msgs[0] || "服务器异常!";
      let base64 = new Base64();
      status_msg = base64.decode(status_msg) || "服务异常";
    }
    resolve({ error_msg: status_msg });
  }
  // 查询所有省份
  getProvinces() {
    return this.jsonCall({}, '/saas-aba-base/api/areas/provinces', 'get');
  }
  // 获取区域
  getArea(areaCode) {
    return this.jsonCall({}, '/saas-aba-base/api/areas/children/' + areaCode, 'get');
  }
  // 登出
  logOut() {
    return this.jsonCall({}, this.path + '/auth/logout', 'post');
  }
  // 获取应用下的菜单
  getMyAppsMenu() {
    return this.jsonCall({}, this.path + '/saas-aba-base/api/menu/menu-user', 'get');
  }
  // 获取未读消息列表
  getMessageList() {
    let data = {
      msgTypeId: '',
      messageStatus: 0,
      page: 1,
      size: 6,
    };
    return this.jsonCall(data, this.path + '/saas-aba-base/api/message/get-message-list-page', 'get');
  }
  teststr(str) {
    var reg = /^[\u4E00-\u9FA5\s\w.-]+$/g,
      bool;
    if (reg.test(str)) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }
  testnamestr(str) {
    var reg = /^[\u4E00-\u9FA5\w]+$/g,
      bool;
    if (reg.test(str)) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }
  /*正则验证邮箱*/
  testemail(str) {
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g,
      bool;
    if (reg.test(str)) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }
  /*正则验证手机号*/
  testmobile(str) {
    var reg = /^1[3-8]\d{9}$/,
      bool;
    if (reg.test(str)) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }
  /*正则验证座机电话*/
  testtel(str) {
    var reg = /(^((\d{3,4}\-)|)\d{7,8}(|([-\u8f6c]{1}\d{1,5}))$)|(^1[3-8]\d{9}$)/,
      bool;
    if (reg.test(str)) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }
  testaddress(str) {
    var reg = /^[\u4E00-\u9FA5A-Za-z\d\-\_]{1,50}$/,
      bool;
    if (reg.test(str)) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }
  // 转化机构数据格式递归方法
  getTreeList(menu) {
    let list = [];
    let num = -1;
    for (let i = 0, len = menu.length; i < len; i++) {
      if (menu[i].level == 1) {
        list.push(menu[i]);
        menu.splice(i, 1);
        i--;
        len--;
      }
    }
    function getData(data) {
      if (menu.length == 0) {
        return;
      }
      for (let j = 0, jlen = data.length; j < jlen; j++) {
        let arr = [];
        for (let i = 0, len = menu.length; i < len; i++) {
          // //console.log(menu[i],'aaaaaa===',menu[i].parentMenuCode)
          if (menu[i].parentMenuCode == data[j].menuCode) {
            arr.push(menu[i]);
            menu.splice(i, 1);
            i--;
            len--;
          }
        }
        data[j].children = arr;
        if (data[j].children.length > 0) {
          getData(data[j].children)
        }
      }
    }
    getData(list);
    return list;
  }

  //下载excel文件post请求
  downLoadFile(url: any, data: any, fileName: any, callback: Function) {
    let other = this;
    // other.messageService.error("ssskkk")
    return new Promise((resolve, reject) => {
      let that = this,
        options: any = {},
        loginInfo = UserInfo.loginInfo;
      let tenatInfo = AppCommon.currentTenant || "";
      let langFlag = Language.getLanguage();
      this.httpClient.post(url, data, {
        headers: new HttpHeaders().set('current_tenant', tenatInfo.tenantId)
          .set('current_app', AppCommon.currentAppcode || null)
          .set('Accept-Language', langFlag || null),
        responseType: 'blob',
        observe: 'response'
      }).subscribe(res => {
        // console.log(res);
        // var resHeaders = res.headers.toJSON() || {};
        // //console.log(resHeaders);
        /**
         * 关于Blob 如何获取内容
         * https://developer.mozilla.org/zh-CN/docs/Web/API/Blob
         * reader.result 包含转化为类型数组的blob
         */
        var reader = new FileReader();
        reader.readAsText(res.body, 'utf-8');
        // reader.readAsArrayBuffer(res.body);
        reader.addEventListener("loadend", () => {
          let toJson;

          try {
            /**
             * 尝试将接口返回的数据转换成json格式
             * 接口正常情况下返回的数据流的形式，转成json数据肯定会报错。
             * catch捕获后执行文件下载。
             *
             * 假如能够顺利转成json,说明接口是报错状态，返回的是错误数据
             */
            toJson = JSON.parse(reader.result as any)

          } catch (error) {
            /*
            * 获取reseponse headers中的 文件名
            */
            // console.log("ssss");
            // alert("ssssssssssss");
            let disposition = res.headers.get('content-disposition');
            let status_code = res.headers.get('status_code');
            // console.log(status_code);
            // let resHeaders = res.headers.toJSON() || {};
            if (status_code == "11060") {
              // if(status_code==null){
              // console.log("ksjk");
              // that.messageService.error("ssssssssssss");
              //报错
              let status_msgs = res.headers.get('status_msg') || res.headers.get('Status_msg') || [];
              let status_msg = status_msgs[0] || "";
              let base64 = new Base64();
              status_msg = base64.decode(status_msg) || "服务异常";
              resolve({ error_msg: "数据量过大，不能正常导出，请缩小查询范围" })
              return;
            }
            let newfileName = '';
            if (disposition) {
              newfileName = decodeURI(disposition.split('=')[1]);
              // newfileName=newfileName.substring(0,fileName.length);
              fileName = newfileName;
            }
            this.downFile(res.body, fileName);
            // resolve();
            callback(null);
            return null;
          }
          //报错
          reject(toJson.msg);
          callback({ error_msg: toJson.msg });
        });
      }, err => {
        reject(err.msg);
        callback({ error_msg: err.msg });
      })
    });
  }
  downFile(blob, fileName) {
    if (fileName === "test") {

    }
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, fileName);
    } else {
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
      window.URL.revokeObjectURL(link.href);
    }
  }
  //下载excel文件get请求
  downLoadFileGet(url: any, fileName: any, callback: Function) {
    let other = this;
    return new Promise((resolve, reject) => {
      let that = this,
        options: any = {},
        loginInfo = UserInfo.loginInfo;
      let tenatInfo = AppCommon.currentTenant || "";
      let langFlag = Language.getLanguage();
      this.httpClient.get(url, {
        headers: new HttpHeaders().set('current_tenant', tenatInfo.tenantId)
          .set('current_app', AppCommon.currentAppcode || null)
          .set('Accept-Language', langFlag || null),
        responseType: 'blob',
        observe: 'response'
      }).subscribe(res => {
        var reader = new FileReader();
        reader.readAsText(res.body, 'utf-8');
        // reader.readAsArrayBuffer(res.body);
        reader.addEventListener("loadend", () => {
          let toJson;
          try {
            toJson = JSON.parse(reader.result as any)

          } catch (error) {
            let disposition = res.headers.get('content-disposition');
            let status_code = res.headers.get('status_code');
            if (status_code == "11060") {
              let status_msgs = res.headers.get('status_msg') || res.headers.get('Status_msg') || [];
              let status_msg = status_msgs[0] || "";
              let base64 = new Base64();
              status_msg = base64.decode(status_msg) || "服务异常";
              resolve({ error_msg: "数据量过大，不能正常导出，请缩小查询范围" })
              return;
            }
            this.downFile(res.body, fileName);
            callback(null);
            return null;
          }
          //报错
          reject(toJson.msg);
          callback({ error_msg: toJson.msg });
        });
      }, err => {
        reject(err.msg);
        callback({ error_msg: err.msg });
      })
    });
  }
  // 日期格式化
  add0(m) { return m < 10 ? '0' + m : m }
  format(time) {
    //时间戳是整数，否则要parseInt转换
    time = new Date(time);
    let y = time.getFullYear();
    let m = time.getMonth() + 1;
    let d = time.getDate();
    let h = time.getHours();
    let mm = time.getMinutes();
    let s = time.getSeconds();
    return y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
  }
  loginOut() {
    AppCommon.userInfo = null;
    AppCommon.commonApp = null;
    AppCommon.commonAppCode = null;
    AppCommon.currentApp = null;
    AppCommon.currentAppcode = null;
    AppCommon.currentTenant = null;
    AppCommon.tenants = null;
    AppCommon.wfFarmSheId = null;
    AppCommon.myUserInfo = null;

    this.router.navigate(['gyauth/login']);
  }
  consoleLog(info) {
    console.log(info);
  }

  /*获取logo*/
  getTenantLogo(data) {
    return this.jsonCall(data, this.path + '/saas-aba-base/api/enterprise/query-tenant-logo', 'get');
  }

  userPriseName(){
    return this.jsonCall({}, this.path + '/saas-aba-base/api/tenants/tenant-info', 'get');
  }
  // 查询登出个性化信息
  getLogoutCustom(data) {
    return this.jsonCall(data, this.path + '/saas-aba-base/api/person/b-person-sets/find-for-logout', 'get');
  }

  //金额格式化
  formatMoney(num){
    if(!num){
      if(num != 0){
        return ''
      } else {
        return '0.00'
      }
    }

    num = parseFloat((num + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";
    let l = num.split(".")[0].split("").reverse(),
      r = num.split(".")[1];
    let t = "";
    for(let i = 0; i < l.length; i ++ )
    {
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
  }


  getYears(){
    let years = [];
    let nowYear = new Date().getFullYear();
    years.push(nowYear+'');

    for (let i = 1;i < 11;i++ ){
      years.unshift(nowYear - i+'');
    }

    return years;
  }
}