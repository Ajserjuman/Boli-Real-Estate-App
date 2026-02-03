import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem } from '@ionic/angular/standalone';
import { Data } from '../data';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Swiper } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton,IonItem]
})
export class DetailPage implements OnInit {
  
  id: number = 0;
  response: any;
  images: any[] = [];
  view : boolean = false;

  constructor(private data: Data, private route: ActivatedRoute, private location : Location) {
    this.route.queryParams.subscribe((params) => {
      this.id = Number(params['id']);
    })
   };

  ngOnInit() {
    this.data.generateListDetail({
    auction_id: this.id,
  }).subscribe({
    next: (res) => {
      console.log(res);
      this.response = res.result.records;
      this.images = this.response.images;
      this.view = true;
      console.log(this.response);
      console.log(this.images);
    },
    error: (err) => {
      console.error(err);
    }
  });
  }

  goBack()
  {
    this.location.back();
  }

}
