import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rcc, Occ} from "../models/classes.model";

@Injectable({
  providedIn: 'root'
})

export class ClassesService {

    private rccBaseUrl: string = `${environment.baseUrl}/api/rccs/`;
    private occBaseUrl: string = `${environment.baseUrl}/api/occs/`;

    constructor(private http: HttpClient) { }

    getRccs(): Observable<any> {
      return this.http.get(this.rccBaseUrl);
    }

    getOccs(): Observable<any> {
      return this.http.get(this.occBaseUrl);
    }

}
