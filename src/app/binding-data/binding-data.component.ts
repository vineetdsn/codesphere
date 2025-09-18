import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-data',
  templateUrl: './binding-data.component.html',
  styleUrls: ['./binding-data.component.css']
})
export class BindingDataComponent implements OnInit {
  gameName = "";
  gameGenre = "";
  gameCode: number | null = null;
  isDisabled = false;
  gameList: { name: string; genre: string; code: number | null }[] = [];


  // Property Binding

  // Event Binding
  // Two way Binding


  constructor() { 
 }

  ngOnInit(): void {
  }
onGameNameChange(event: any) {
    this.gameName = event.target.value;
  }
  
  addGame(){
    const newGame={
      name: this.gameName,
      genre: this.gameGenre,
      code: this.gameCode,
    }
    this.gameList.push(newGame)
  }

}
