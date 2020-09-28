import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {CustomerBtn, DetailSection, DetailSectionItem,} from '../models';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() onEditMode: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  @Output() back: EventEmitter<any> = new EventEmitter();
  @Output() editModeSubmit: EventEmitter<any> = new EventEmitter();
  @Output() addModeSubmit: EventEmitter<any> = new EventEmitter();

  @Output() editSave: EventEmitter<any> = new EventEmitter();
  @Output() addSave: EventEmitter<any> = new EventEmitter();

  editSaveFn(){
      this.editSaveBtnLoading = true;

    this.editSave.emit();

          this.editSaveBtnLoading = false;


  }
  editModeSubmitFn() {
      this.editModeSubmitBtnLoading =true;

    this.editModeSubmit.emit();
            this.editModeSubmitBtnLoading =false;

  }
  addSaveFn(){
      this.addSaveBtnLoading = true;

    this.addSave.emit();
          this.addSaveBtnLoading = false;

  }
  addModeSubmitFn(){
      this.addModeSubmitBtnLoading = true;

    this.addModeSubmit.emit();
          this.addModeSubmitBtnLoading = false;

  }
  editSaveBtnLoading = false;
  editModeSubmitBtnLoading = false;
  addSaveBtnLoading = false;
  addModeSubmitBtnLoading = false;

  @Output() attachmentsManage: EventEmitter<any> = new EventEmitter();

  @Input() showErrorMessage: boolean = true;

  @Input() showAddSaveBtn: boolean = false;
  @Input() showEditSaveBtn: boolean = false;

  @Input() addOrSaveBtnTitle = "提交";

  @Input() showEditCancelBtn: boolean = true;

  @Input() showAttachmentsManage: boolean = false;

  @Input() sections: DetailSection[] = [];

  @Input() data: any;

  @Input() contentPadding: number = 32;

  @Input() twoColumns: boolean = false;

  @Input() editMode: boolean = false;

  @Input() form: FormGroup;

  @Input() useEditableMode: boolean = false;
  @Input() editAuthUrl: string = null;
  @Input() showEditAction: boolean = true;
  @Input() showEditBtn: boolean = true;

  @Input() useCustomerBtns: boolean = false;
  @Input() customerBtns: CustomerBtn[];

  @Input() editDisableFunc?: () => boolean;

  @Input() appendDefaultBtns: boolean = false;

  @Input() loading = false;

  @Input() set addMode(v:boolean) {
    this._addMode = v;
    this.editMode = v;
  };
  _addMode: boolean = false;

  private oldData: any;

  @Input() addOrEditBtnDisabled = false;

  @ContentChild('extraActions') _extraActions: TemplateRef<any>;
  @ContentChild('detailModeExtraActions') _detailModeExtraActions: TemplateRef<any>;
  @ContentChild('addModeExtraActions') addModeExtraActions: TemplateRef<any>;
  @Input() attachmentsTitle: string = "附件管理";

  constructor(
    public _message: NzMessageService,
    private http: BaseHttpService,
  ) { }

  ngOnInit() {

  }

  setEditMode(v: boolean) {
    this.editMode = v;
  }

  startEdit() {
    if(this.editAuthUrl != null && this.editAuthUrl !=''){
      this.http.httpGet(this.editAuthUrl ).subscribe(res=>{
        if(res && res.success){
          this.onEditMode.emit();
          this.editMode=true;
          this.oldData = Object.assign({}, this.form.getRawValue());
        }else{
          this._message.error(res.message);
        }
      })
    }else {
      this.onEditMode.emit();
      this.editMode=true;
      this.oldData = Object.assign({}, this.form.getRawValue());
    }

  }

  cancelEdit() {
    this.onCancel.emit();
    this.editMode=false;
    this.form.patchValue(this.oldData);
  }
}
