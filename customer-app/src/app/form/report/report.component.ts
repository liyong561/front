import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';


@Component({
    selector:'app-report',
    templateUrl:'./report.component.html',
    styleUrls:[],
    providers:[FormBuilder]
})
export class ReportComponent implements OnInit{
        key = 'selecte one';
        name ='liyong will succesas';
        mode ='false';
        options =['Tiger','Bee','Oppo'];
        selectedValue = this.options[0];
        form;
      

    constructor(private formBuilder : FormBuilder){
    }
    ngOnInit(): void {
        // 这个formGroup怎么用在页面中
        // 绑定FromGroup和FormControl
        this.form =this.buildForm();
    }
    buildForm(){
        return this.formBuilder.group({
        selAdvertiser:[''],
        disAdvertiser:[''],
        adv_cont_title:[''],
        adv_cont_name:[''],
        adv_email: ['', Validators.pattern("^([A-Za-z0-9!#\$%&'\*\+=\?\^_`\{\|\}~-]+[\.]?)+@([A-Za-z0-9]+[\.])+[A-Za-z]{2,4}$")],
        adv_tel: ['', Validators.pattern('[^A-Za-z]+$')],
        adv_fax: ['', Validators.pattern('[^A-Za-z]+$')],//使用正则表达式进行校验
        proposal_num:[''],
        contract_num:[''],
        proposal_ver:[''],
        contract_ver:[''],
        package_name:[''],
        description:[''],
        deadline:[''],
        period:[''],
        agt_letter:[''],
        credit_ass:['']
      });
    }
    submit():void{
        console.log(this.form);
    }

}