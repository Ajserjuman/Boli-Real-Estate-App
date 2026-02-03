import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Data {
  constructor(private http: HttpClient) {}

  private LIST_URL = 'https://app.boli.ae/api/property/search/published_list_view';
  private DETAIL_URL = 'https://app.boli.ae/api/property/published_form';

  generatelist(payload: {
    auction_id: number;
  }) {
    return this.http.post<any>(this.LIST_URL, payload);
  }

  generateListDetail(payload: {
    auction_id: number;
  }) {
    return this.http.post<any>(this.DETAIL_URL, payload);
  }
}