import { Component, ViewContainerRef, ComponentRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CaracteristicasService } from 'src/app/services/caracteristicas.service';
import { TableComponent } from '../table/table.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent {
  
  constructor(private caracteristicasService: CaracteristicasService, private viewContainer: ViewContainerRef) {
    this.viewContainer.createComponent(TableComponent);
  }
  // Create a FormGroup instance.
  
  form = new FormGroup({
    // Create a FormControl instance for each form field.
    gce_nombre_equipo: new FormControl('', [Validators.required]),
    gce_board: new FormControl('', [Validators.required]),
    gce_case: new FormControl('', [Validators.required]),
    gce_procesador: new FormControl('', [Validators.required]),
    gce_grafica: new FormControl('', [Validators.required]),
    gce_ram: new FormControl('', [Validators.required]),
    gce_disco_duro: new FormControl('', [Validators.required]),
    gce_teclado: new FormControl('', [Validators.required]),
    gce_mouse: new FormControl('', [Validators.required]),
    gce_pantalla: new FormControl('', [Validators.required]),
    gce_estado: new FormControl('1', [Validators.required]),
  });

onSubmitForm()  { 
  this.caracteristicasService.add(this.form.value).subscribe((resp : any)=>{
    this.viewContainer.clear();
    this.viewContainer.createComponent(TableComponent);
    this.form = new FormGroup({
      // Create a FormControl instance for each form field.
      gce_nombre_equipo: new FormControl('', [Validators.required]),
      gce_board: new FormControl('', [Validators.required]),
      gce_case: new FormControl('', [Validators.required]),
      gce_procesador: new FormControl('', [Validators.required]),
      gce_grafica: new FormControl('', [Validators.required]),
      gce_ram: new FormControl('', [Validators.required]),
      gce_disco_duro: new FormControl('', [Validators.required]),
      gce_teclado: new FormControl('', [Validators.required]),
      gce_mouse: new FormControl('', [Validators.required]),
      gce_pantalla: new FormControl('', [Validators.required]),
      gce_estado: new FormControl('1', [Validators.required]),
    });
  })
  }
  
}