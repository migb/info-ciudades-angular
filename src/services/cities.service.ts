import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class CitiesService {

  constructor(private http: HttpClient) { }

  public getCities(): Observable<any> {
    return this.http.get(`${environment.api}/cities`).pipe(
      retry(),
      catchError((error) => {
        return EMPTY;
      })
    );


  }

}
