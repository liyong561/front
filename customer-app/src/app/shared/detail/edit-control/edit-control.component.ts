import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DetailSectionItem} from "../../models";

@Component({
  selector: 'app-edit-control',
  templateUrl: './edit-control.component.html',
  styleUrls: ['./edit-control.component.scss']
})
export class EditControlComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() item: DetailSectionItem;
  @Input() showErrorMessage: boolean = false;

  private _width = '100%';
  @Input()
  set width(value: any) {
    if (value) {
      this._width = value;
    }
  };
  get width() {
    return this._width;
  }

  constructor() { }

  ngOnInit() {
  }

  openChange(data) {
    if(!data){
      if(this.item.control_search_select_updateFunc){
        this.item.control_search_select_updateFunc('',this.item.obj);
      }
    }
  }

  searchChange(data) {
    if(this.item.control_search_select_updateFunc){
      this.item.control_search_select_updateFunc(data,this.item.obj);
    }
  }
}
