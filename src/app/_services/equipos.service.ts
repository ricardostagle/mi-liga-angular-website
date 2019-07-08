import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EquiposService {

  constructor(private http: HttpClient) { }

  obtener() {
    return this.http.get('https://api-mi-liga.now.sh/api/equipos')
  }

}
