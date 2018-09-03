import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  template: `
    <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>
        Detail {{id}}
      </ion-title>
    </ion-toolbar>
  </ion-header>
  `
})
export class DetailPageComponent {

  id: string;

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
  }

}
