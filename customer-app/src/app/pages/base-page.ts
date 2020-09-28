/**
* 页面的公共方法，所有的页面component都继承自该类
**/
import { Router, ActivatedRoute } from '@angular/router';

import { OnInit, OnDestroy, Injectable, Directive } from '@angular/core';
import { Location } from '@angular/common';

@Directive(
)
export class BasePage implements OnInit, OnDestroy {
	constructor(
	
		protected router: Router,
		protected activedRoute: ActivatedRoute)
	 {
	}
	/**
	* 继承的具体业务页面，需要重写该属性
	**/
	public pageName = '';
	public currentUser;
	ngOnInit() {
		// 当前域名
		var hostName=location.hostname;
		console.log(hostName);
		if(hostName.indexOf('bdn-saas-dev')>-1){
			// 开发环境
			this.appSignList['FSM001']=this.urlList.dev;
		}
		else if(hostName.indexOf('saas-uop-pre')>-1){
			// 预发环境
			this.appSignList['FSM001']=this.urlList.pre;
		}
		else if(hostName.indexOf('s3.rootcloud.com')>-1){
			// 生产环境
			this.appSignList['FSM001']=this.urlList.prod;
		}
		else{
			// 测试环境(默认)
			this.appSignList['FSM001']=this.urlList.test;
		}

		//在需要登录的页面，如果用户未登录，跳转到登录页面
		// if(!this.router.isActive('auth', false) && !UserInfo.loginInfo){
		// 	this.goLogin();
		// 	return;
		// }
		this.onInit();
	}
	/**
	* 如果子页面需要用ngOnInit方法，需要重写该方法
	**/
	onInit() {

	}
	ngOnDestroy() {
	
		this.onDestroy();
	}
	/**
	* 如果子页面需要用ngOnDestroy方法，需要重写该方法
	**/
	onDestroy() {

	}
	goLogin(notMemorize = false) {


    if (!!notMemorize) {
			this.router.navigate(['gyauth/login']);
			return
		}
		// location.href = '/auth/login?url=' + this.router.url;
		this.router.navigate(['gyauth/login'], { queryParams: { url: this.router.url } });
	}
	getPageNo(pageSize: number = 0, total: number = 0) {
		return Math.ceil(total / pageSize);
	}
	/**
	 *IFSM独立域名地址 在应用跳转的时候配置
	*/
	public urlList:any={
		"test":"http://saas-uop-fsm-web.bdn-saas-alauda-qa.rootcloudapp.com",
		"dev":"http://saas-uop-fsm-web.bdn-saas-dev.irootechapp.com",
		"pre":"http://saas-uop-fsm-web-pre.irootech.com",
		"prod":"https://ifsm.rootcloud.com"
	};

	/**
	 * app应用标识和appCode对应表
	 */
	public appSignList: any = {
		// "A0103": "/common/view",//设备文档
		// "A0003": "/common/view",//设备管理
		// "A0002": "/common/view",//配置管理
		// "A0007": "/common/view",//菜单管理
		"A0010": "/orderMgmt/view",	//指令下发
		"A0012": "/position/view",	//位置管理
		"A0014": "/report-inquiry/view",		//明兴电缆
		"A0016": "/unlock/view",		//解锁机
		"A0031": "/sany-crane/view",		//三一重起
		"A0015": "/health-center/view",		//健康中心（汉种精机定制化开发）
		"A0026": "/data-center/view",		//数据中心（汉钟精机）
		"A0011": "/device-center/view",		//设备中心（汉钟精机）
		"A0024": "/largescreen-center/view", //大屏中心 (汉中精机)
		"A00032": "/device-report/view",	//设备报表(锐嘉包装)
		"A1000": "/technology-parameter/view",		//工艺参数管理(锐嘉包装)
		"A0017": "/air-pressure/view",		//格瑞拓空压监控
		"A0025": "/guangchai/view",		//广州柴油
		"A0029": "/qun-xing/view",		//群星机械工业大屏
		"A0030": "/deploy-link/view",		//格瑞拓配置链接
		"A0018": "/unlock-mgmt-chtc/view",		//解锁机管理（恒天九五）
		"A0019": "/equipment-monitoring/view",		//工况可视化（工品酷）
		"custom004": "/unlock-mgmt-xbzg/view",		//解锁机(星邦)
		"A0005": "/bang/view",		//云维修（哐当）
		"A0008": "/icsm/view",		//云服务（ICSM-OEM）
		"A0009": "/icsm-eu/view",		//云报修（ICSM-EU）
		"A0028": "/boiler/view",	//锅炉云（慧管锅炉）
		"ZC001": "/crrcgc/view",		//中车长江(中车长江)
		"A00034": "/batch-import/view",		//批量导入(通用功能)
		"A00033": "/camera/view",	   //摄像头维护(通用功能)
		"A0013": "/sany-service/view",	//三一服务
		"A0033": "/gdzy-manage/view",	//生产信息维护(中窑)
		"A0036": "/gdzy-query/view",	//设备信息查询(中窑)
		"A0020": "",		// 可视化（云视界）
		"Lens0001": "",		// 生产线设备展示
		"100096": "",		// 机床管理
		"100097": "",		// 机床服务
		"HTJW0007": "",		// 营销售后管理
		"A0027": "/sld-query/view",			//施罗德工程管理
		"GZYD001": "/gzyd-report/view",			//广州一道统计报表
		"A0041": "/device-list/view",			//历史故障查询和实时故障查询设计(恒天九五)
		"A0006": "/portal-mgmt/view",     // 门户管理（长沙经开发区）
		"Y0001": "/cloud-monitoring/view",     // 云监控（标准功能）
		"XB0001": "/sinoboom/view",     // 打印导出（星邦重工）
		"A0046": "/unlock-mgmt-chtcw/view", //解锁机(挖机)（恒天九五）
		"GNET0001": "/cncert/view", //国家互联网应急中心
		"Nyman_001": "/dictionary-01/view", //字典表映射-西安
		"D0999": "/dictionary-02/view", //字典表映射-西安
		"SY001": "",//三一客户云
		"A0045": "/hot-wheels/view",    //慧管锅炉（风火轮）
		"TC001": "/textileclound/view", //纺织云
		"A0048": "/jumpTracing/view", //溯源系统跳转
		"A0049": "/jumpEnergy/view", //能源管理	跳转
		"A0050": "/jumpProduce/view", //生产管理	跳转
		"A0051": "/jumpControl/view", //智能控制	跳转
		"CQCY0001": "/cqcy/view", //重庆川仪
		"T0001": "/tenant-mgmt/view", //租户管理
		"BIZ001":"/biz-report-query/view",	//业务报表
		"QH0003":"/device-qh/view",	//织造设备管理
		"YLDQ0001": "/yldq/view",  //优力电驱定制
		"Y0002": "/hkvs/view",  //优力电驱定制
		"BIZ002":"/biz-report-query/view",	//运行情况
		"HTJW0003":"/device-htjw/view",	//设备管理（恒天九五定制）
		"ICSM001":"/biz-icsm-report/view",		//ICSM通用业务报表
		"MONI001":"/device-data-monitor/view",		//设备数据监测(亨龙项目)
		"JK001":"/sewingMachine/view",       //杰克项目
		"NXGX004":"/nxgx-service-base/view",       	//基础档案(宁夏共享)
		"NXGX002":"/nxgx-service-asset/view",       	//资产管理(宁夏共享)
		"HTJW0004":"/htjw-report/view", // 报表服务(恒天九五定制)
		"HTJW0005":"/htjw-setting/view", // 配置管理(恒天九五定制)
		"JH0001": "/jhjj/view",   //江汉建机统计报表
		"PROXY001": "/platform-proxy-query/view",   //接口代理服务数据监测
		"HTJW0006":"/htjw-position/view", // 配置管理(恒天九五定制)
		"NXGX003":"/nxgx-service-visual/view", // 宁夏共享物联呈现功能
		"MXE001":"/mxe-service-bpm/view", // 玛西尔设备台帐定制
		"GZRJ001":"/gzrj-service-report/view", // 广州锐嘉项目
		"GZZT001":"/gzzt-service-console/view", // 广州展厅控制台
		"KEJ0001":"/kej/view", // 广州展厅控制台
		"XB0002":"/dynamic-password-mgmt/view", // 动态密码管理（星邦重工）
		"UNE0002":"/big-data-une/view", // 大数据（优力电驱）
		"DGYD001":"/dgyd-icsm-report/view", //	工单报表（东莞亿东项目）
		"KEJ0002":"/kej-report/view",				//快而居报表
		"SZNA001":"/szna-address-console/view", //	通讯录管理（深圳诺安）
		"BLLB0001":"/buhler-report/view",    //布勒莱宝报表
		"GT0001":"/gtdl/view",    //设备管理(国通电力)
		"FSM001":"http://saas-uop-fsm-web.bdn-saas-alauda-qa.rootcloudapp.com",  //FSM项目跳转到独立域名
		"ZDGF0001":"/zdgf/view", //网络协同制造（中电48所）,
		"MXE0002":"/icsm-mxe/view",  //云服务（玛西尔）
		"PEFG0001":"/parfigg-report/view"  //报表（帕尔菲格）
	}

}
