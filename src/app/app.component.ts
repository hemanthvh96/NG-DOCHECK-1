import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  players = [
    { name: 'Hemanth', team: 'India', age: 26 },
    { name: 'Rohit', team: 'India', age: 33 },
    { name: 'Virat Kohli', team: 'India', age: 33 },
  ];

  onAddNewPlayer(nameRef, teamRef, ageRef) {
    this.players.push({
      name: nameRef.value,
      team: teamRef.value,
      age: +ageRef.value,
    });
    nameRef.value = '';
    teamRef.value = '';
    ageRef.value = '';
  }
}
