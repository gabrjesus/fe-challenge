import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IBaseResponse } from '../models/base-response.model';
import { ICharacter } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = `${environment.baseUrl}/${environment.endpoints.characters}`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<IBaseResponse<ICharacter[]>> {
    return this.http.get<IBaseResponse<ICharacter[]>>(this.url);
  }
}
