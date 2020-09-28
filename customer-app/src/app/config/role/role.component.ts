import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-role',
    templateUrl:'./role.component.html',
    styleUrls:[]
})
export class RoleComponent implements OnInit{
    // js中的‘，"
    roleName = 'superUser';
    heroes = ['Sam','Kebe','Swaft','Titi'];
    imgSrc= '../../../assets/img/flower02.jpeg';
    msg = "null";
    values= 'values';
    update= 'update';
    birthday = new Date(2020,9,13);
    
    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    onSave(target:any){
        alert('you have save the data');

    }
    onKey(target:any){
       this.msg= target.target.value;
    }
    onEnter(val:string){
        this.values =val;
    }
    onUpdate(val:string){
        this.update =val;
    }

}