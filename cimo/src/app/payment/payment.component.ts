import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      dui: ['', Validators.required],
        tarjeta: ['', Validators.required],
        cvv: ['', Validators.required],
        fecha_exp: ['', Validators.required]

    });
  }
}

