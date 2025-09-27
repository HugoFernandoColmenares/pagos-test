import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public successAlert(message: string = 'Operación exitosa.') {
    Swal.fire({
      title: 'Éxito',
      text: message,
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }

  public errorAlert(message: string = 'Algo salió mal.') {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

  public optionsAlert(title: string = '¿Desea continuar?') {
  return Swal.fire({
    title,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
  });
}
}
