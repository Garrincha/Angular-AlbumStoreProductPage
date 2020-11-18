import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json'; 

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<any> {
    return this._http.get(this._albumUrl).map(
      res => res.json()
    );
  }
}
