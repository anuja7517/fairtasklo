import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../model/fair.interface';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
@Input()getfair ! : Ifair
  constructor() { }

  ngOnInit(): void {
  }

}
