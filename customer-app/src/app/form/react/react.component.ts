import { Component } from "@angular/core";
import { FormControl,FormGroup,FormBuilder} from "@angular/forms"

@Component({
    selector:'app-react',
    templateUrl:'./react.component.html',
    styleUrls:[]
})
export class ReactComponent{
    // 响应式表单，这是由于单的来源于数据
    favoriteColorControl = new FormControl('');
    favoriteColor ='';
    date2 =null;

    profileForm = new FormGroup({
        // 这个名字和表单的名字需要一一对应
        firstName:new FormControl(''),
        lastName: new FormControl(''),
         date:new FormControl(''),
      });

      onChange(result: Date): void {
        console.log('onChange: ', result);
      }

    update(){
        this.favoriteColorControl.setValue("the new value");
    }
    onSubmit(){
        console.log(this.profileForm.value);
    }
    updateProfile() {
        this.profileForm.patchValue({
          firstName: 'Nancy',
          address: {
            // 字段名对不上，不会修改
            street: '123 Drew Street'
          }
        });
      }

      profileForm2 = this.fb.group({
        // 为什么赋值是数组
        firstName: [''],
        lastName: [''],
        address: this.fb.group({
          street: [''],
          city: [''],
          state: [''],
          zip: ['']
        }),
      });
    
      constructor(private fb: FormBuilder) { }
}