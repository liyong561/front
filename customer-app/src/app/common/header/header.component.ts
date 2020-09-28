import { Component, OnInit } from "@angular/core";

// 这个组件不会单独程呈现给用用户，而是作为其它组件的一部分
@Component({
    selector:'myHeader',
    templateUrl:'./header.component.html',
    styleUrls:[]
})
export class HeaderComoponent implements OnInit{
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
