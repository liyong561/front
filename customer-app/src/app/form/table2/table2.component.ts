import { Component, OnInit } from '@angular/core';

interface ItemData {
  id: string;
  name: string;
  age: number;
  address: string;
}
// ts文件只是简单的有几个函数，没有应用模板的什么的东西
// 绝大部分的模板引用都在template中
@Component({
  selector: 'nz-demo-table-edit-row',
  templateUrl:'./table2.component.html',
  styles: ['./table2.compoent.scss']
})
export class NzDemoTableEditRowComponent implements OnInit {
    // 这个是什么结构，经查证，是ts的索引类型
  editCache: { [key: string]: { edit: boolean, data: ItemData } } = {};
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
      // 也是数组自带方法
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        // 使用冒号，不使用等号，这是对象的字面赋值
        edit: false,
        // 对象的扩展，复制
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
    // 我知道js数组中有一个push方法
      data.push({
        // 这个符号是有点特别,ts的字符串拼接
        id:`${i}`,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`
      });
    }
    this.listOfData = data;
    this.updateEditCache();
  }
}
