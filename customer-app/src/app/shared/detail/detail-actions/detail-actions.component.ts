import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {CustomerBtn} from "../../models";

@Component({
  selector: 'app-detail-actions',
  templateUrl: './detail-actions.component.html',
  styleUrls: ['./detail-actions.component.scss']
})
export class DetailActionsComponent implements OnInit {

  @Input() useEditableMode: boolean;
  @Input() edit: EventEmitter<any>;
  @Input() back: EventEmitter<any>;
  @Input() editModeSubmit: EventEmitter<any>;
  @Input() attachmentsManage: EventEmitter<any>;
  @Input() onEditMode: EventEmitter<any>;
  @Input() addModeSubmit: EventEmitter<any>;
  @Input() useCustomerBtns: boolean = false;
  @Input() customerBtns: CustomerBtn[];
  @Input() editDisableFunc?: () => boolean;

  @Input() appendDefaultBtns: boolean = false;
  @Input() _addMode: boolean;
  @Input() editMode: boolean;
  @Input() showAttachmentsManage: boolean;
  @Input() addOrEditBtnDisabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
