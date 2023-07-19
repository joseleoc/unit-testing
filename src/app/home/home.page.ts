import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { RefresherCustomEvent } from '@ionic/angular';
import { Character } from 'src/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  characters: Character[] = [];

  constructor(private service: DataService) {}

  ngOnInit() {
    this.service.getCharacters().then(
      (res) => {
        this.characters = res;
      },
      (err) => {
        console.log('error al obtener: ', err);
      }
    );
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
}
