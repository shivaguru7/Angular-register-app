import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm!:FormGroup
  submitted=false;
  title = 'RegisterValidation';
  constructor(private formBuilder:FormBuilder){}
  ngOnInit()
  {
    this.registerForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(14)]]
    })
  }
  onSubmit()
  {
    this.submitted=true
    if(this.registerForm.invalid)
    {
      return
    }
  }
}
