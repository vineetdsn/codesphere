import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  fields: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('/assets/config.json').subscribe(data => {
      this.fields = data;

      let group: any = {};
      this.fields.forEach(field => {
        group[field.name] = [''];   
      });

      this.form = this.fb.group(group);
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
