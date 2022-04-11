import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-activity',
  templateUrl: './register-activity.component.html',
  styleUrls: ['./register-activity.component.css']
})
export class RegisterActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formValue:any): void{
    console.log(formValue);
  }

}
 