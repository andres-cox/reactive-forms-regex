import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.component.html',
  styleUrls: ['./form-validators.component.css']
})
export class FormValidatorsComponent implements OnInit {
validationForm = this.formBuilder.group({
    reg1: ['',Validators.pattern("[a-z]")],
    reg2: ['',Validators.pattern("[a-zA-Z]*")],
    reg3: ['',Validators.pattern("[abcd]")],
    reg4: ['abccccc',Validators.pattern("abc{2,}")],
    reg5: ['ab',Validators.pattern("a(b|c)")],
    reg6: ['abcbcbc',Validators.pattern("a(bc){2,5}")],
    reg7: ['name@email.com',Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
    reg8: ['312-144-5555',Validators.pattern("([0-9]{3})[ -]?([0-9]{3})[ -]?([0-9]{4})")]    
  });
  regularExpresions = [
    "[a-z]*", 
    "[a-zA-Z]*", 
    "[abcd]",
    "AND abc{2,}",
    "OR a(b|c)",
    "a(bc){2,5}",
    "Email",
    "Phone Number"
  ]

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  }
  
  onSubmit() {
    console.warn(this.validationForm.value);
  }
}