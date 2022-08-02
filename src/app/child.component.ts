import { Component, DoCheck, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html',
  styleUrls: ['child.component.css'],
})
export class ChildComponent implements OnChanges, DoCheck {
  @Input() players;

  constructor() {}

  // Whenever we add the new player ngOnChanges will not be triggered. As the new player is just pushed into the players Array in the parent component (App) thereby not changing the reference. Hence this hook is not called.
  ngOnChanges(changes) {
    console.log(changes);
    console.log('OnChanges called');
  }

  ngDoCheck() {
    console.log('DoCheck called');
    // Perform sorting here:

    this.players = this.players.sort((player1, player2) => {
      return player1.name.localeCompare(player2.name);
    });
  }
}
