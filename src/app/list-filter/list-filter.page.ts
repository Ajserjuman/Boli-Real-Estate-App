import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner, IonLabel, IonItem, IonButton, IonCard, IonSearchbar } from '@ionic/angular/standalone';
import { Data } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.page.html',
  styleUrls: ['./list-filter.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSpinner, IonLabel, IonItem, IonButton, IonCard, IonSearchbar]
})
export class ListFilterPage implements OnInit {

  response: any;
  records: any[] = [];
  public results : any = [];

  constructor(private data: Data, private router: Router) {}

  ngOnInit() {
    this.data.generatelist({
    auction_id: 32,
    }).subscribe({
      next: (res) => {
        console.log(res);
        this.response = res;
        this.records = this.response.result.records;
        this.results = [...this.records];
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

  handleInput(event: Event) {
    console.log("reached here");
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    console.log(target, query);
    this.results = this.records.filter((d) => d['title'].toLowerCase().includes(query));

  }

}
