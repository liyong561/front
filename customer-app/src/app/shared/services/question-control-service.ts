import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { QuestionBase } from '../models/question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[] ) {
    let group: any = {};
    //这显然是一个数组的流操作
    questions.forEach(question => {
    // group的字典操作
    // 虽然很长，单其实就是创建了一个FormControl对象,要能理解这种程序语句
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}