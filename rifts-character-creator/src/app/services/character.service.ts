import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment'
import {Character} from "../models/character.model"

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

    private baseUrl: string = `${environment.baseUrl}/api/characters/`;

    constructor(private http: HttpClient) { }

    getCharacters(): Observable<any> {
      return this.http.get(this.baseUrl);
    }

    createCharacter(characterData: Character): Observable<Character> {
      return this.http.post<Character>(this.baseUrl, characterData);
    }

    deleteCharacter(id: number) {
      const deleteUrl = this.baseUrl + id.toString() + "/";
      return this.http.delete<Character>(deleteUrl);
    }

    getCharacter(id: number) {
      const getUrl = this.baseUrl + id.toString() + "/";
      return this.http.get<Character>(getUrl);
    }
}
