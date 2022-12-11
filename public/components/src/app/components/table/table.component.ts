import { Component } from '@angular/core';
import { CaracteristicasService } from 'src/app/services/caracteristicas.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent{
  /** 
   * Almacena las caracteristicas de la petición. Se declara tipo any para usar ngFor.
   * @type {Array<any>}
   */
  public caracteristicas : Array<any> = []

  /**
   * Trae el servicio CaracteristicasService al componente.
   * @param {CaracteristicasService} caracteristicasService El servicio que proporciona acceso a las caracteristicas.
   */
  constructor(private caracteristicasService: CaracteristicasService) {}

  /** 
  * @function {ngOnInit()} se ejecuta cuando el componente se inicializa
  */
  ngOnInit() {
    // Llama al servicio CaracteristicasService para obtener las caracteristicas
    this.caracteristicasService.getAll().subscribe((resp : any)=>{
      this.caracteristicas = resp
    })
  }
}
