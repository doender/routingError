import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-master',
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
    <ion-content>
        <ion-list>
            <ion-item (click)="openDetail(1)">
                <ion-label>Go to detail 1</ion-label>
            </ion-item>
            <ion-item (click)="openDetail(2)">
                <ion-label>Go to detail 2</ion-label>
            </ion-item>
            <ion-item (click)="openDetail(3)">
                <ion-label>Go to detail 3</ion-label>
            </ion-item>
        </ion-list>
    </ion-content>
  `
})
export class MasterPageComponent {

    constructor(private route: ActivatedRoute, private router: Router) {

    }

    openDetail(id: string) {
        this.router.navigate(['detail', id], { relativeTo: this.route });
    }


}
