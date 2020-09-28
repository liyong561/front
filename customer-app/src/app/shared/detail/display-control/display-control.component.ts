import {Component, Input, OnInit} from '@angular/core';
import {DetailSectionItem} from "../../models";
import {FormGroup} from "@angular/forms";
import {DictionaryService} from "../../dictionary.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-display-control',
  templateUrl: './display-control.component.html',
  styleUrls: ['./display-control.component.scss']
})
export class DisplayControlComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() item: DetailSectionItem;
  @Input() data: any;

  constructor(
    private dictSrv: DictionaryService
  ) { }

  ngOnInit() {
  }

  getValue(item: DetailSectionItem) {
    if (item.related) {
      if (item.relatedForm) {
        if (item.control === "search_select_single") {
          return item.relatedForm().get(item.control_search_select_labels_field).value;
        }
        return item.relatedForm().get(item.field).value;
      } else {
        if (this.form) {
          return this.form.get(item.field).value;
        } else {
          return '';
        }
      }
    }

    if (item.control_search_select_labels_field) {
      return this.data ? this.data[item.control_search_select_labels_field] :
        this.form.get(item.control_search_select_labels_field).value
    } else {
      return this.data ? this.data[item.field] : this.form.get(item.field).value
    }
  }

  getDictEnumValue(item: DetailSectionItem) {
    return this.dictSrv.getEnums(item.enum_key).pipe(
      map(enums => {
        const value = this.data ? this.data[item.field] : this.form.get(item.field).value;
        const it = enums.find(v => v.value === value);
        return it ? it.label : '';
      })
    )
  }

  getMultiEnumValue(item: DetailSectionItem) {
    return this.dictSrv.getEnums(item.enum_key).pipe(
        map(enums => {
          const value = this.data ? this.data[item.field] : this.form.get(item.field).value;
          const _value = value || '';
          return  _value.split(',').map(v => {
            const it = enums.find(v1 => v1.value === v);
            return it ? it.label : '';
          }).join(',');
        })
    )
  }

  getLocationAddress(item: DetailSectionItem) {
    return this.form.get(item.field).value;
  }

  getCascadeValue(item: DetailSectionItem){
    let value = this.form.get(item.field).value;
    if(value){
      let list = item.options;


      let label = "";

      for (let i = 0; i < value.length - 1; i++) {
        for (let j in list) {
          if (list[j].value == value[i]) {
            if(label){
              label += ('/'+list[j].label);
            } else {
              label += list[j].label;
            }
            list = list[j].children;
            break;
          }
        }
      }

      for (let i in list) {
        if (list[i].value == value[value.length - 1]) {
          if(label){
            label += ('/'+list[i].label);
          } else {
            label += list[i].label;
          }

          return label;
        }
      }
    }else {
      return '';
    }
  }
}
