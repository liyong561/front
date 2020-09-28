import {FormGroup, ValidatorFn, Validators} from "@angular/forms";
import * as moment from "./gk-detail/gk-detail.component";
import {Observable} from "rxjs";

export class DetailSectionItem {
  title: string;
  titleFun?: (item) => string;
  field?: string;
  content?: string;
  span?: number;
  contentSpan?: number;
  titleSpan?: number;
  controlSpan?: number;
  control?: 'date' | 'date_with_disable' | 'date_readonly' | 'select' | 'select_readonly' | 'multi_select'
    | 'search_select' | 'search_select_single' | 'search_select_single_relate'
    | 'textarea' | 'search_select_single_contract'
    | 'number' | 'two_number' | 'percent' | 'currency' | 'positiveInteger' | 'select_enum' | 'date_range'
    | 'dict_enum_single' | 'dict_enum_multi' | 'location_select' | 'editable_table' | 'datetime' | 'cascade' | 'function' | 'date_years' | 'year';
  control_select_options?: {label: string, value: any}[];
  control_search_select_updateFunc?: Function;
  search_select_update_patchFunc?: Function;
  control_search_select_labels_field?: string;
  required?: boolean;
  placeholder?: string;
  related?: boolean;
  readonly ?: boolean;
  relatedFun?: (item) => boolean;
  relatedForm?: () => FormGroup;
  defaultValue?: any;
  number_min?: number;
  number_max?: number;
  number_digits?: number;
  number_step?: number;
  search_select_single_relate_form?: () => FormGroup;
  search_select_single_relate_label?: string;
  hidden?: boolean;
  two_number_1?: NumberLimit;
  two_number_2?: NumberLimit;
  columnWidthPercent?: number;
  hidden_b?: boolean;
  width?: any;
  nzDisabledDate?: Function;
  validators?: ValidatorFn[];
  titleStyle?: any;
  enum_key?: string;
  location_lat_field?: string;
  location_lon_field?: string;
  editable_table_columns?: DetailSectionItem[];
  hideTitle?: boolean;
  editable_table_row_actions?: TableRowAction[];
  enableRowEdit?: boolean;
  enableRowAdd?: boolean;
  enableRowDelete?: boolean;
  rowEditAction?: (data: any) => Observable<{success: boolean}>;
  rowDeleteAction?: (data: any) => Observable<{success: boolean}>;
  rowAddAction?: (data: any) => Observable<{success: boolean}>;
  options?:any[];
  showSearch?:boolean = false;
  dateRangeStartDtField?: string;
  dateRangeEndDtField?: string;
  formatterFunc?: (row) => any;
  clearable ?: boolean;
  years?: string[];
  obj?: any;
}

export class DetailSectionRow {
  items: DetailSectionItem[];
  leftAlign?: boolean = true;
  marginLeft?: string;
}

export class DetailSection {
  title?: string;
  noTitle?: boolean;
  noPrintTitle?: boolean;
  sectionType?: 'table';
  rows?: DetailSectionRow[];
  collapsible?: boolean;
  collapseActiveFunc?: () => boolean;
  hidden?: boolean;
  hidden_divider?: boolean;
}

export class SearchFormItem {
  label: string;
  field: string;
  control?: 'date' | 'select' | 'date_years';
  control_select_options?: {label: string, value: any}[]
}

export class TableColumnItem {
  title: string;
  field?: string;
  formatter?: 'function' | 'date' | 'select' | 'multi_select'
    | 'action' | 'currency' | 'datetime' | 'percent' | 'progress'
    | 'dict_enum_single' | 'dict_enum_multi';
  formatterFunc?: (row) => any;
  actionFunc?: (row) => any;
  control_select_options?: {label: string, value: any}[];
  editControl?: 'date' | 'number' | 'display' | 'select' | 'input';
  required?: boolean;
  related?: boolean;
  relatedForm?: () => FormGroup;
  number_min?: number;
  number_max?: number;
  number_digits?: number;
  number_step?: number;
  search_select_single_relate_form?: () => FormGroup;
  search_select_single_relate_label?: string;
  displayFormatterFunc?: (value) => string;
  columnWidthPercent?: number;
  styleFunc?: (item) => Object;
  enum_key?: string;
  maxLength?:number;
}


export class ExportColumnItem {
  title: string;
  field: string;
  formatter?: 'date' | 'currency' | 'datetime' | 'percent' | 'progress' | 'dict_enum_single'| 'dict_enum_multi'
  enum_key?: string;
  enum_values?:{fieldCode: string, fieldName: string, dataType: string}[];
}

export class ImportParams {
  authUrl?:string;
  templateFile: {
    fileName: string,
    url: string
  };
  uploadUrl: string
}

export class Breadcrumb {
  title: string;
  link?: string;
}

export class CustomerBtn {
  title: string;
  type: 'primary' | 'default' | 'danger';
  action: () => void;
  disableFunc?: (item) => boolean;
  hideOnAddMode?: boolean;
  hideOnEditMode?: boolean;
}

export const ENUM_BUSINESS_TYPE: {label: string, value: any}[] = [
  { label: '国有企业', value: 'SOE' },
  { label: '民营企业', value: 'PRIVATE_ENTERPRISE' },
  { label: '民营国参', value: 'PUBLIC_PRIVATE' },
];

export const ENUM_CURRENCY: {label: string, value: any}[] = [
  {label: '人民币', value: '人民币'},
  {label: '美元', value: '美元'},
];

export const ENUM_ENTRY_LEAVE_TYPE: {label: string, value: any}[] = [
  {label: '进场', value: '1'},
  {label: '退场', value: '2'},
];

export const ENUM_LEAVE_SETTLEMENT_TYPE: {label: string, value: any}[] = [
  {label: '总结算', value: '2'},
  {label: '催收结算-付款', value: '3'},
  {label: '催收结算-收款', value: '4'},
];

// 回款计划，计划执行状态
export const ENUM_PAYBACK_STATUS: {label: string, value: any}[] = [
  {label: '未完成', value: 1},
  {label: '已完成', value: 2},
  {label: '已中止', value: 3}
];

// 计划提醒管理，提醒类型
// 结算回款、巡检盘点、维修保养、合同到期、设备保险到期、履约保函到期、保证金收回
export const ENUM_NOTIFY_TYPES: {label: string, value: any}[] = [
  {label: '催收结算', value: '催收结算'},
  // {label: '巡检盘点', value: '巡检盘点'},
  // {label: '维修保养', value: '维修保养'},
  {label: '合同到期', value: '合同到期'},
  {label: '保险到期', value: '保险到期'},
  // {label: '履约保函到期', value: '履约保函到期'},
  // {label: '保证金收回', value: '保证金收回'},
];

export const ENUM_NOTIFY_REMINDERTYPE: {label: string, value: any}[] = [
  {label: '系统消息', value: 'msg'},
  {label: '短信', value: 'sms'},
  {label: 'APP推送', value: 'app'},
];

export const ENUM_NOTIFY_PARAMETERVALUE: {label: string, value: any}[] = [
  {label: '系统时间', value: "1"},
];

export const ENUM_NOTIFY_REMINDTRIGGER: {label: string, value: any}[] = [
  {label: '提前1天', value: 1},
  {label: '提前2天', value: 2},
  {label: '提前3天', value: 2},
  {label: '提前4天', value: 4},
  {label: '提前5天', value: 5},
  {label: '提前6天', value: 6},
  {label: '提前7天', value: 7},
  {label: '提前8天', value: 8},
  {label: '提前9天', value: 9},
  {label: '提前10天', value: 10},
  {label: '提前11天', value: 11},
  {label: '提前12天', value: 12},
  {label: '提前13天', value: 13},
  {label: '提前14天', value: 14},
  {label: '提前15天', value: 15},
  {label: '提前16天', value: 16},
  {label: '提前17天', value: 17},
  {label: '提前18天', value: 18},
  {label: '提前19天', value: 19},
  {label: '提前20天', value: 20},
  {label: '提前21天', value: 21},
  {label: '提前22天', value: 22},
  {label: '提前23天', value: 23},
  {label: '提前24天', value: 24},
  {label: '提前25天', value: 25},
  {label: '提前26天', value: 26},
  {label: '提前27天', value: 27},
  {label: '提前31天', value: 31}
];

export const ENUM_NOTIFY_FREQUENCYUNIT: {label: string, value: any}[] = [
  {label: '天', value: "2"},
  {label: '小时', value: "1"},
];

// 流程名称
export const ENUM_NOTIFY_MODELNAME: {label: string, value: any}[] = [
  {label: '以租代售结算流程', value: 'SYZL00119050908555317'},
  {label: '工程合同结算流程', value: 'SYZL00119051211462247'},
  {label: '设备交接流程', value: 'SYZL00119051211455339'},
];

export const ENUM_NOTIFY_IFRELEVANCE: {label: string, value: any}[] = [
  {label: '是', value: 1},
  {label: '否', value: 0},
];

// 合同类型
export const ENUM_NOTIFY_CONTRACTTYPE: {label: string, value: any}[] = [
  // {label: '以租代售', value: '以租代售'},
  {label: '以租代售合同', value: '以租代售合同'},
  {label: '裸租', value: '裸租'},
  {label: '包租', value: '包租'},
  {label: '零租', value: '零租'},
  {label: '工程', value: '工程'},
];


export const ENUM_SUBCONTRACTOR_TYPE: {label: string, value: any}[] = [
  {label: '劳务分包', value: '劳务分包'},
  {label: '专业分包', value: '专业分包'},
];

export const ENUM_CUSTOMER_TYPE: {label: string, value: any}[] = [
  {label: '吊装服务公司', value: '吊装服务公司'},
  {label: '建筑工程公司', value: '建筑工程公司'},
  {label: '设备租赁公司', value: '设备租赁公司'},
  {label: '个体', value: '个体'},
];


export class TableRowAction  {
  title: string;
  disableField?: string;
  func: Function;
  disableFunc?: Function;
  confirm?: boolean;
  type?: 'confirm';
  confirmHint?: string;
  displayFunc?: (item) => boolean;
}

export class TableAction {
  title: string;
  type: 'primary' | 'dashed' | 'danger' | 'default';
  disabledFunc?: Function;
  func: Function;
  displayFunc?: () => boolean;
  fileInput?: boolean;
  icon?: string;
}

export class TableFilter {
  title: string;
  field: string;
  options: {label: string, value: any}[];
}

export class NumberLimit {
  title?: string;
  max?: number;
  min?: number;
  step?: number;
  digits?: number;
  field: string;
}


export const ENUM_COST_TYPES: {label: string, value: any}[] = [
  {label: '设备-维修费', value: '001'},
  {label: '设备-配件费', value: '002'},
  {label: '设备-油费', value: '003'},
  {label: '设备-运输费', value: '004'},
  {label: '设备-路桥费', value: '005'},
  {label: '设备-保险费', value: '006'},
  {label: '支出-还款', value: '007'},
  {label: '支出-备用金', value: '008'},
  {label: '差旅-餐费', value: '009'},
  {label: '差旅-住宿', value: '010'},
  {label: '差旅-油费', value: '011'},
  {label: '差旅-路桥费', value: '012'},
  {label: '差旅-交通费', value: '013'},
  {label: '差旅-电话费', value: '014'},
  {label: '业务招待费', value: '015'},
  {label: '收支户往来', value: '016'},
  {label: '司机-工资', value: '017'},
  {label: '司机-交通费', value: '018'},
  {label: '司机-餐补', value: '019'},
  {label: '司机-住宿', value: '020'},
  {label: '司机-带班费', value: '021'},
  {label: '司机-生活用品', value: '022'},
  {label: '资产采购', value: '023'},
  {label: '税金', value: '024'},
  {label: '办公费', value: '025'},
  {label: '场地租赁费', value: '026'},
  {label: '外租设备费', value: '027'},
  {label: '权证办理', value: '028'},
  {label: '设备年审', value: '029'},
  {label: '违章办理费', value: '030'},
  {label: '信息费', value: '031'},
  {label: '广告费', value: '032'},
  {label: '奖金', value: '033'},
  {label: '司机-过节福利', value: '034'},
  {label: '其他支出', value: '035'},
  {label: '房租押金', value: '036'},
  {label: '租赁收入', value: '037'},
  {label: '其他收入', value: '038'},
  {label: '保险费', value: '保险费'}
];


export class ExpireNotify {
  contractCode: string;
  contractType: string; // 包租 裸租
  contractId: string;
  contractBeginDate: Date;
  contractEndDate: Date;
  reminderUserId: string;
  reminderUserName: string;
  reminderCustomerId: string;
  reminderCustomerName: string;
  deviceCode?: string;
}

export class EditableTableField {
  title: string;
  field: string;
  columnWidthPercent?: number;
}

export const COST_OTHER_DEVICE_ID = 'other';
export const COST_OTHER_DEVICE_NAME = '其他';

/**
 * {1: '已完成', 2: '进行中'}
 */
export const DEVICE_USING_STATUS = [
  {label: '已完成', value: 1},
  {label: '进行中', value: 2},
];

export const REIMBURSEMENT_TYPES: {label: string, value: any}[] = [
  {label: '设备-维修费', value: '设备-维修费'},
  {label: '设备-配件费', value: '设备-配件费'},
  {label: '设备-燃油费', value: '设备-燃油费'},
  {label: '设备-运输费', value: '设备-运输费'},
  {label: '设备-路桥费', value: '设备-路桥费'},
  {label: '设备-保险费', value: '设备-保险费'},
  {label: '业务差旅-餐补', value: '业务差旅-餐补'},
  {label: '业务差旅-住宿', value: '业务差旅-住宿'},
  {label: '业务差旅-燃油费', value: '业务差旅-燃油费'},
  {label: '业务差旅-路桥费', value: '业务差旅-路桥费'},
  {label: '业务差旅-交通费', value: '业务差旅-交通费'},
  {label: '业务差旅-通讯费', value: '业务差旅-通讯费'},
  {label: '业务招待费', value: '业务招待费'},
  {label: '司机-工资', value: '司机-工资'},
  {label: '司机-预支工资', value: '司机-预支工资'},
  {label: '司机-交通费', value: '司机-交通费'},
  {label: '司机-餐补', value: '司机-餐补'},
  {label: '司机-住宿', value: '司机-住宿'},
  {label: '司机-带班费', value: '司机-带班费'},
  {label: '司机-生活费', value: '司机-生活费'},
  {label: '司机-福利', value: '司机-福利'},
  {label: '资产采购费', value: '资产采购费'},
  {label: '税金', value: '税金'},
  {label: '办公费', value: '办公费'},
  {label: '场地租赁费', value: '场地租赁费'},
  {label: '外租设备费', value: '外租设备费'},
  {label: '权证办理费', value: '权证办理费'},
  {label: '设备年审费', value: '设备年审费'},
  {label: '违章办理费', value: '违章办理费'},
  {label: '信息费', value: '信息费'},
  {label: '广告费', value: '广告费'},
  {label: '奖金', value: '奖金'},
  {label: '其他支出', value: '其他支出'},
  {label: '房租押金', value: '房租押金'},
];

export const ENUM_CONTRACT_PAYTYPE_OO: {label: string, value: any}[] = [
  {label: '电汇', value: '电汇'},
  {label: '银行承兑', value: '银行承兑'},
];

export class GkInfoDetail {
  daysInfo: {
    deviceCode: string,
    address: string,
    startTime: string,
    endTime: string,
    workHours: any
  }[] = [];
}

export class PrintParams {
  component: any;
  title?: string;
  componentParams?: {[key: string]: any};
}

export class Role {
  roleName: string;
  parentId: number; // 0 超级管理员
  roleId: number;
}

export class Menu {
  path: string;
  type: 0 | 1;
  name: string;
  check: boolean;
  childs?: Menu[]
}
