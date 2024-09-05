import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChamadasService {

  httpClient = inject(HttpClient);
  pathUrl = "https://66d3b38e5b34bcb9ab3cdba6.mockapi.io/aluguel"

  constructor() { }

  listagem(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.pathUrl}/listagem`);
  }

  detalhamento(id: number) {
    return this.httpClient.get(`${this.pathUrl}/listagem/${id}`);
  }
}
