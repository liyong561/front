import { Component } from "@angular/core";
import { NzFormModule } from 'ng-zorro-antd/form';
import { FanMatiral, DeliveryProgress, PersonHour } from './models';


@Component({
    selector:'app-registry',
    templateUrl:'./registry.component.html',
    styleUrls:['./registry.component.scss']
})
export class RegistryComponent{
    cities=['长沙','武汉','重庆'];
    names=['liyong','liqiang','zhouwu'];
    nzSpan =10;
    listOfData: FanMatiral[] = [
        {
            num:'sz12333333',
            room :12,
            hub :1,
            blade :34,
            generator:2
        },
        {
            num:'sz12333333',
            room :12,
            hub :1,
            blade :34,
            generator:2
        },
        {   
            num:'sz12333333',
            room :12,
            hub :1,
            blade :34,
            generator:2
        }
      ];
    deliveryProgress:DeliveryProgress[]=[
        {   
            seat:'#111',
            fanWorkOrder:'2020-10-9',
            fanDelivery:'2020-10-12'
        },
        {
            seat:'#1321',
            fanWorkOrder:'2020-10-9',
            fanDelivery:'2020-10-12'
        },
        { 
            seat:'#121',
            fanWorkOrder:'2020-10-9',
            fanDelivery:'2020-10-12'
        },
    ];
    personHour:PersonHour[]=[
        {
            empCode:'80016334',
            empName:'李勇',
            phone:'13280803203',
            entryName:'黑山风场',
            startTime:new Date('2020-09-09'),
            endTime:new Date('2020-09-19'),
            days:12,
            createUser:'李勇',
            createTime:new Date('2020-09-11'),
        },
        {
            empCode:'80016234',
            empName:'李勇勇',
            phone:'13280803203',
            entryName:'黑山风场',
            startTime:new Date('2020-09-09'),
            endTime:new Date('2020-09-19'),
            days:12,
            createUser:'李勇',
            createTime:new Date('2020-09-11'),
        }
    ]
};

