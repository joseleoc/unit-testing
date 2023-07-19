import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Character, CharactersResponse } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getCharacters(): Promise<Character[]> {
    return new Promise((resolve, reject) => {
      try {
        this.httpClient
          .get(`${environment.BaseUrl}/character`)
          .subscribe((res: any) => {
            resolve(res.results);
          });
      } catch (err) {
        reject(err);
      }
    });
  }
}
