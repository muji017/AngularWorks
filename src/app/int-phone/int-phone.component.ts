import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-int-phone',
  templateUrl: './int-phone.component.html',
  styleUrls: ['./int-phone.component.css']
})
export class IntPhoneComponent {

  telForm!:FormGroup
  constructor(private formBuilder:FormBuilder){
    this.telForm=this.formBuilder.group({
      name:['',Validators.required],
      phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]]
    })
  }

  ngOnInit(){

  }
}
