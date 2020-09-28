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
    // 小试牛刀用了一下Promise对象
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
