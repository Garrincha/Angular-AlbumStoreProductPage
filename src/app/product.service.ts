import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json'; 

  constructor(private _http: HttpClient) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).pipe(
      map(res => {
        console.log('RESULT : ', res);
        
        return res
      })
    );
  }
}
