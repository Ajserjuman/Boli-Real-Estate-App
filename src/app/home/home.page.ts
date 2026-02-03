import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonItem, IonLabel, IonSpinner } from '@ionic/angular/standalone';
import { Data } from '../data';
import { NgClass } from '@angular/common';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, NgClass, NgForOf, CommonModule, IonButton, IonIcon, IonItem, IonLabel, IonSpinner, IonItem],
})
export class HomePage {
  response: any;
  records: any[] = [];

  constructor(private data: Data, private router: Router) {}

  ngOnInit() {
    this.data.generatelist({
    auction_id: 32,
    }).subscribe({
      next: (res) => {
        console.log(res);
        this.response = res;
        this.records = this.response.result.records;
        console.log(this.records);
        console.log(this.response.result);
        console.log(this.response.result.count);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  
  goToDetail(id:number){
    console.log(id);
    this.router.navigate(['/detail'],{
      queryParams: {
        id: id,
      },
    });
  }

  goToFilter(){
    this.router.navigate(['/list-filter']);
  }
  
}
