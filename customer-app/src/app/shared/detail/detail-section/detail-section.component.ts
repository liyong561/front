import {Component, Input, OnInit} from '@angular/core';
import {DetailSection} from "../../models";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-detail-section',
  templateUrl: './detail-section.component.html',
  styleUrls: ['./detail-section.component.scss']
})
export class DetailSectionComponent implements OnInit {

  Math = Math;

  @Input() section: DetailSection;
  @Input() editMode: boolean;
  @Input() form: FormGroup;
  @Input() showErrorMessage: boolean;
  @Input() data: any;
  @Input() twoColumns: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
