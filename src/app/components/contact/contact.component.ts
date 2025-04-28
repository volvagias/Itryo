import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  public form!: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required, this.numericValidator],
      message: ['', Validators.required],
    })
  }

  /* Getters para sintetizar los validators en el html */
  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  get message() {
    return this.form.get('message');
  }

  /* Función para hacer validator que acepte solo números (phone) */
  numericValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    // Verifica si el valor no es solo números
    const isValid = /^[0-9]*$/.test(value); // Permite campos vacíos, ajusta según sea necesario
    return isValid ? null : { numericValidator: true };
  }

  async sendEmail() {
    if (this.form.invalid) {
      Swal.fire({
        icon: "error",
        title: "No se ha podido enviar su consulta.",
        text: "Datos incompletos o incorrectos.",
        confirmButtonText: 'ACEPTAR',
        /* Los estilos los puse en el style general para que funcionen */
      });
    } else {
      Swal.fire({
        title: 'Enviando...',
        text: 'Por favor, espere un momento.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
    }
  }

}
