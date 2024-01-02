import { Component,OnInit } from '@angular/core';
import { PassengerService } from './../api/services/passenger.service';
import { FormBuilder } from '@angular/forms'
import { first } from 'rxjs';




@Component({
  selector: 'app-register-passenger',
  templateUrl: './register-passenger.component.html',
  styleUrls: ['./register-passenger.component.css']
})
export class RegisterPassengerComponent implements OnInit {

  constructor(private passengerService: PassengerService, private formBuilder: FormBuilder) { }

  form = this.formBuilder.group({
    email: [''],
    firstName: [''],
    lastName: [''],
    isFemale: true
  })



  ngOnInit(): void {
       
  }


  register(): void {
    console.log("form values", this.form.value)
    this.passengerService.registerPassenger({ body: this.form.value }).subscribe(
      _ => console.log("form posted to server")
    );

  }




}
