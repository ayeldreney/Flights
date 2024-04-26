import { Component, OnInit } from '@angular/core';
import { PassengerService } from './../api/services/passenger.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register-passenger',
  templateUrl: './register-passenger.component.html',
  styleUrls: ['./register-passenger.component.css']
})
export class RegisterPassengerComponent implements OnInit {

  constructor(private passengerService: PassengerService, private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  form = this.formBuilder.group({
    email: [''],
    firstName: [''],
    lastName: [''],
    isFemale: true
  })



  ngOnInit(): void {
       
  }

  checkPassgenger(): void {
    const params = { email: this.form.get('email')?.value }





  }


  register() {
    console.log("form values", this.form.value)
    
   

  }




}
