import { BasePage } from '../base-page';

import { Component, ViewEncapsulation } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';


declare var Base64: any;

@Component({
  selector: 'gy-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResetPasswordComponent extends BasePage {
  pageName = "reset-password";

  constructor(

    router: Router,
    activeRoute: ActivatedRoute,

    private location: Location) {
    super( router, activeRoute);
  }
  // 表单数据
  public validateForm = {
    password: "", // 密码
    checkPassword: "", // 校验密码
    phoneNumber: "", // 手机号
    captcha: "", // 图片验证码
    smsCaptcha: "", // 手机验证码
    passwordVfict: "", // 密码 错误提示
    checkPasswordVfict: "", // 校验密码 错误提示
    phoneNumberVfict: "", // 手机号 错误提示
    captchaVfict: "", // 图片验证码 错误提示
    smsCaptchaVfict: "" // 手机验证码 错误提示
  };
  // 手机号码地区码列表
  public mobileAreaList = [
    { code: 1, val: '86', lang: 'zh-CN' },
    { code: 2, val: '886', lang: 'zh-TW' },
    { code: 3, val: '213', lang: 'ar-DZ' },
    { code: 4, val: '963', lang: 'ar-SY' },
    { code: 5, val: '966', lang: 'ar-SA' },
    { code: 6, val: '1', lang: 'en-US' },
    { code: 7, val: '420', lang: 'cs-CZ' },
    { code: 8, val: '49', lang: 'de-DE' },
    { code: 9, val: '45', lang: 'da-DK' },
    { code: 10, val: '30', lang: 'el-GR' },
    { code: 11, val: '61', lang: 'en-AU' },
    { code: 12, val: '44', lang: 'en-GB' },
    { code: 13, val: '852', lang: 'en-HK' },
    { code: 14, val: '91', lang: 'en-IN' },
    { code: 15, val: '64', lang: 'en-NZ' },
    { code: 16, val: '27', lang: 'en-ZA' },
    { code: 17, val: '260', lang: 'en-ZM' },
    { code: 18, val: '34', lang: 'es-ES' },
    { code: 19, val: '358', lang: 'fi-FI' },
    { code: 20, val: '33', lang: 'fr-FR' },
    { code: 21, val: '972', lang: 'he-IL' },
    { code: 22, val: '36', lang: 'hu-HU' },
    { code: 23, val: '39', lang: 'it-IT' },
    { code: 24, val: '81', lang: 'ja-JP' },
    { code: 25, val: '60', lang: 'ms-MY' },
    { code: 26, val: '47', lang: 'nb-NO' },
    { code: 27, val: '32', lang: 'nl-BE' },
    { code: 28, val: '48', lang: 'pl-PL' },
    { code: 29, val: '55', lang: 'pt-BR' },
    { code: 30, val: '351', lang: 'pt-PT' },
    { code: 31, val: '7', lang: 'ru-RU' },
    { code: 32, val: '381', lang: 'sr-RS' },
    { code: 33, val: '90', lang: 'tr-TR' },
    { code: 34, val: '84', lang: 'vi-VN' },
    { code: 35, val: '62', lang: 'id-ID' },
    { code: 36, val: '92', lang: 'ur-PK' },
    { code: 37, val: '63', lang: 'en-PH' },
    { code: 38, val: '65', lang: 'zh-SG' },
    { code: 39, val: '66',lang:'TH'},
    { code: 40, val: '91', lang: 'IN' },
    { code: 41, val: '962', lang: 'JO' },
    { code: 42, val: '84', lang: 'VN' },
    { code: 43, val: '62', lang: 'ID' },
    { code: 44, val: '95', lang: 'MM' },
    { code: 45, val: '880', lang: 'BD' }
  ];
  // 选择的地区码
  public selectMobileArea = this.mobileAreaList[0];
  // 是否显示密码强度
  public isShowPasswordIntensity = false;
  // 图片验证码
  public imgCodeUrl = "";
  // 图片验证码key
  private imgCodeKey = "";
  // 显示发送验证码的字符
  public sendBtnTxt = "authMgmt.iRegister.send"; //发送
  // 是否改变发送验证码的文字状态
  public isChangeSendBtnTxt = false;
  public successUpdate = false;
  onInit() {

    this.updateImgCode();
  }
 // CryptoJS加密
 encryptByDES(message) {
  
  return "dd";
}
  // 更新图片验证码
  updateImgCode() {
    return  this.imgCodeUrl = "../../../assets/img/flower01.jpg";

  }



  // --------------------------------关于重置密码的问题----------------------------

  // 提交：
  submitForm() {
    let flag = this.formVlidate(),
      that = this;
    if (!flag) {
      return
    }
    // 验证图片验证码
    // this.authService.confirmImgCaptcha({ uckey: this.imgCodeKey, vcode: this.validateForm.captcha }).then(res => {
    //   if (!!res && !!res.error_msg) {
    //     this.nzMsg.create("error", res.error_msg);
    //     return
    //   }
      // 验证邀请码，手机号码，邮箱号码，密码进行注册
      let base64 = new Base64();
      let rqData = {
        // "invitValue": base64.encode(that.validateForm.phoneNumber), // 15100234762 不为空, 手机号或邮箱，base64加密传输
        // "credential": base64.encode(that.validateForm.checkPassword),//   不为空,密码，base64加密传输
        validateCode: that.validateForm.smsCaptcha, //验证码
        mobile: that.validateForm.phoneNumber,
        password:that.encryptByDES(that.validateForm.checkPassword), // encryptByDES编码, 
      }
        /*let id = res2.userId;
        let userInfo={
          userId: res2.userId
        }
        AppCommon.rgsUser=userInfo;*/
        this.successUpdate = true;
      };
  //   })
  // }
  // 所有input的校验
  formVlidate() {
    let validateForm = this.validateForm;

    this.passwordVlidate(); // 密码校验
    this.checkPasswordVlidate(); // 确认密码校验
    this.phoneNumberVlidate(); // 手机号校验

 
    this.smsCaptchaVlidate(); // 手机验证码校验
    if (validateForm.passwordVfict || validateForm.checkPasswordVfict || validateForm.phoneNumberVfict || validateForm.captchaVfict || validateForm.smsCaptchaVfict) {
      return false;
    }
    return true;
  }

  // 发送验证码时候的，验证图片验证码
  formVliImg(){
    let validateForm = this.validateForm;

    if (validateForm.captchaVfict) {
      return false;
    }
    return true;
  }
  // 密码获取焦点
  passworFocus() {
    this.isShowPasswordIntensity = true;
  }
  // 密码失去焦点
  passwordBlur() {
    this.passwordVlidate();
    this.isShowPasswordIntensity = false;
  }
  // 密码校验
  passwordVlidate() {
    let validateForm = this.validateForm;
    if (!validateForm.password) {
      validateForm.passwordVfict = "authMgmt.iRegister.writePassword";
      return
    }
    if (validateForm.password.length < 8 || validateForm.password.length > 16) {
      validateForm.passwordVfict = "authMgmt.iRegister.errorCode1";
      return
    }
    if (!(/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,16}$/.test(validateForm.password))) {
      // "密码至少包含数字、大写字母、小写字母、特殊字符中的三种类型"
      validateForm.passwordVfict = "basciFrwk.password.tip20";
      return
  }
    validateForm.passwordVfict = "";
  }
  // 确认密码校验
  checkPasswordVlidate() {
    let validateForm = this.validateForm;
    if (!!validateForm.passwordVfict) {
      validateForm.checkPasswordVfict = "";
      return
    }
    if (!validateForm.checkPassword) {
      validateForm.checkPasswordVfict = "authMgmt.iRegister.errorCode5";
      return
    }
    if (validateForm.password != validateForm.checkPassword) {
      validateForm.checkPasswordVfict = "authMgmt.iRegister.errorCode2";
      return
    }
    validateForm.checkPasswordVfict = "";
    return
  }
  // 手机号校验
  phoneNumberVlidate() {
    let lang = this.selectMobileArea.lang,
      validateForm = this.validateForm;
    if (!validateForm.phoneNumber) {
      validateForm.phoneNumberVfict = "authMgmt.iRegister.writePhone";
      return
  }

    validateForm.captchaVfict = "";
  }
  // 手机验证码校验
  smsCaptchaVlidate() {
    let validateForm = this.validateForm;
    if (!validateForm.smsCaptcha) {
      validateForm.smsCaptchaVfict = "authMgmt.iRegister.placeHolder8";
      return
    }
    validateForm.smsCaptchaVfict = "";
  }
  getVerification(){
    let data = {
      "optType": "mobile",//发送类型,String;必填项 email mobile
      "mobileEmail": this.validateForm.phoneNumber || "",//如果不写，默认发送 登录用户的。写了发送这个。 邮箱或手机号
      "nationCode": this.selectMobileArea.val,
      "smsType": "identity",
      "uckey": this.imgCodeKey, 
      "imageVCode": this.validateForm.captcha
      // "verifyAccount": "yes", 
      //如果是yes  验证账号是否已经存在。
    };

      this.isChangeSendBtnTxt = true;
    
  }

  getConfirmImgCaptcha(callback){

  }
  getSendCode(){
    let data = {
      "optType": "mobile",//发送类型,String;必填项 email mobile
      "mobileEmail": this.validateForm.phoneNumber || "",//如果不写，默认发送 登录用户的。写了发送这个。 邮箱或手机号
      "nationCode": this.selectMobileArea.val,
      "smsType": "identity",
      "verifyAccount": "yes", //如果是yes  验证账号是否已经存在。
    };
   
  }
  // 发送验证码
  sendVcode() {
    this.phoneNumberVlidate();
    let flag = this.formVliImg();
    if (!flag || !!this.validateForm.phoneNumberVfict) {
      return
    }else{
       this.getVerification()
      // this.getConfirmImgCaptcha(this.getSendCode.bind(this));
    }  
  }

  // 返回登录
  goBackLogin() {

    this.router.navigate(['gyauth/login']);
  }
}
