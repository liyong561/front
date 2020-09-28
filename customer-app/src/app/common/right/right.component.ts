import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-right',
    templateUrl:'./right.component.html',
    styleUrls:[]

})
export class RightComponent implements OnInit{
    ngOnInit(): void {
       console.log("this is from right page");
    }
}