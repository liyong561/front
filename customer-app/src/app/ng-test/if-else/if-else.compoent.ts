import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-if-else',
  templateUrl:'./if-else.component.html',
  styleUrls:['./if-else.component.scss']
})
export class IfElseComponent implements OnInit{
        // 简单的数据结构
        language:boolean = false;
        nameZh:string;
        nameEn:string;

    ngOnInit(): void {
        this.nameEn="the Europ is not right";
        this.nameZh="中国是个大国家";
    }


    transfer():void{
        this.language = !this.language;
    }
}