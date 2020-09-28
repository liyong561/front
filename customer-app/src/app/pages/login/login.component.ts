import { OnInit, Component } from '@angular/core';

@Component({
    selector:"app-login",
    templateUrl:"./login.component.html",
    styleUrls:["./login.component.scss"]
})
export class LoginComponent implements OnInit{
    ngOnInit(): void {
        console.log("this is login component")
    }

}