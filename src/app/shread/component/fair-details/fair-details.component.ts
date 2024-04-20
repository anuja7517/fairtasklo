import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../model/fair.interface';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
@Input()getfairDetails!:Ifair
  constructor() { }

  ngOnInit(): void {
  }

}
