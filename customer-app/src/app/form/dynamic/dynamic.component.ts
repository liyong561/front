import { Component, Input } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/shared/models/question-base';

@Component({
    selector:'app-form-dynamic',
    templateUrl:'./dynamic.component.html',
    styleUrls:[]
})
export class DynamicComponent{
    @Input() 
    question: QuestionBase<string>;
    @Input() 
    form: FormGroup;
    get isValid() { return this.form.controls[this.question.key].valid; }
}