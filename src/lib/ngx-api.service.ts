import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxApiService {
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    @Inject('endpoint') private endpoint: string,
    private http: HttpClient
  ) {}

  get<T = any>(): Promise<T> {
    return firstValueFrom(this.http.get<T>(this.apiUrl + this.endpoint));
  }

  post<T = any>(body: T | any): Promise<T> {
    return firstValueFrom(this.http.post<T>(body, this.apiUrl + this.endpoint));
  }

  put<T = any>(body: T | any): Promise<T> {
    return firstValueFrom(this.http.put<T>(body, this.apiUrl + this.endpoint));
  }

  delete<T = any>(path: string = ''): Promise<T> {
    return firstValueFrom(this.http.delete<T>(this.apiUrl + this.endpoint));
  }
}
