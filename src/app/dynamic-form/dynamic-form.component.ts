import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import fields from '../jsonData/config.json';  

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  fields: any = fields;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    let group: any = {};
    this.fields.forEach((field: any) => {
      group[field.name] = [''];
    });
    this.form = this.fb.group(group);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
