import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-data',
  templateUrl: './binding-data.component.html',
  styleUrls: ['./binding-data.component.css']
})
export class BindingDataComponent implements OnInit {
  gameName = "";
  gameGenre = "";
  gameConsole: string[] = [];
  gameCode: number | null = null;
  isDisabled = false;
  gameList: { name: string; genre: string; code: number | null }[] = [];

  constructor() { 
 }

  ngOnInit(): void {
  }

  
onGameNameChange(event: any) {
    this.gameConsole = event.target.value;
  }
  
  addGame(){
    const newGame={
      name: this.gameName,
      genre: this.gameGenre,
      code: this.gameCode,
    }
    this.gameList.push(newGame)
  }

  addConsole (event: any){
    this.gameConsole.push(event.target.value);
  }

}
