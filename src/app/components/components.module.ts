import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card/character-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CharacterCardComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [CharacterCardComponent],
})
export class ComponentsModule {}
