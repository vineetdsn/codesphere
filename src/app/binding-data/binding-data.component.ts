import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-data',
  templateUrl: './binding-data.component.html',
  styleUrls: ['./binding-data.component.css']
})
export class BindingDataComponent implements OnInit {
  gameName = "Need for Speed";
  gameGenre = "Racing";

  constructor() { }

  ngOnInit(): void {
  }

}
