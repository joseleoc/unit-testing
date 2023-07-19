import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/models';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character | undefined = undefined;

  constructor() {}

  ngOnInit() {}
}
