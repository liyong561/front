import { Component, OnInit } from "@angular/core";

@Component({
    selector:'myFooter',
    templateUrl:'./footer.component.html',
    styleUrls:[]

})
export class FooterComponent implements OnInit{
    ngOnInit(): void {
        console.log("this is from footer page");
    }

}