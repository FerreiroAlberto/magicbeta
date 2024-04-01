import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MtgApi } from '../model';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  baseUrl = 'https://api.magicthegathering.io/v1/cards?pageSize=8&page=';
  constructor(private http: HttpClient) {}
  getList(
    page: number = 1,
    color: string = '',
    types: string = ''
  ): Observable<MtgApi> {
    return this.http.get<MtgApi>(
      this.baseUrl + page + '&colors=' + color + '&types=' + types
    );
  }
}
