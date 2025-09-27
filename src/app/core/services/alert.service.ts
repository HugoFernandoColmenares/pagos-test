import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public successAlet(message: string = 'Operación exitosa.') {
    Swal.fire({
      title: 'Éxito',
      text: message,
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }

  public errorAlet(message: string = 'Algo salió mal.') {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

  public optionsAlet(title: string = '¿Desea continuar?') {
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    });
  }
}
