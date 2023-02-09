import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties() : Observable<IProperty[]>
  {
    return this.http.get('assets/json/properties.json').pipe(
      map(data =>{
        const propertiesArray: Array<IProperty> = [];

        const values = Object.values(data);
        values.forEach(val => {
          propertiesArray.push(val);
        });

        return propertiesArray;
      })
    )
  }

}
