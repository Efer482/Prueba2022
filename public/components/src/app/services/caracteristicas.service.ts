import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Servicio que proporciona acceso a las caracteristicas a través de una API REST.
 */

@Injectable({
  providedIn: 'root'
})
export class CaracteristicasService {
  /** 
   * La URL base de la API REST.
   * @type {string}
  */
  _apiPath = 'http://127.0.0.1:8000/api/Caracteristicas/';

    /**
   * Trea el servicio HttpClient al componente.
   * @param {HttpClient} http El servicio que permite realizar peticiones HTTP.
   */
  constructor(private http: HttpClient) { 
  }
  /**
   * La función getAll() realiza una petición HTTP GET para obtener todas las caracteristicas.
  */
  getAll() {
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.get(this._apiPath+'getAll', {
      headers : header
    })

  }
  /**
   * La función add() Realiza una petición HTTP POST para agregar un computador.
   * @param {caracteristica} La variable que contiene los datos de la caracteristica a agregar.
  */
   add(computador: any) {
    console.log(computador)

    return this.http.post(this._apiPath, computador, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

