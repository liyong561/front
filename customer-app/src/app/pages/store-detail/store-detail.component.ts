import { RouterModule, Router } from '@angular/router'
import {Component, OnInit } from '@angular/core'


@Component(
        {
            selector: 'app-store-detail',
            templateUrl :'./store-detail.component.html',
            styleUrls:['./store-detail.component.scss']
        }
)
 export  default class StoreDetailComponent implements OnInit{
    public name:string;
    public id:number;
    constructor(
    ){

    }
    ngOnInit(): void {
        this.name = 'ssss';
        // throw new Error("Method not implemented.");
    }

// 一个set方法
    setName(name :string){
        this.name  = name;
    }
}