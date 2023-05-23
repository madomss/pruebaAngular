import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRegistrationDTO } from 'src/app/model/user/userRegistrationDTO';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  _employeeService = inject(UserService);

  employee: EmployeeRegistrationDTO = {
    cedula: '',
    nombres: '',
    apellidos: '',
    genero: '',
    fecha_nacimiento: '',
    email: '',
    nacionalidad: '',
    fecha_vencimiento_ci: '',
    cedula_file: '',
    foto_file: '',
  };

  ngOnInit(): void {
  }

  agregarEmpleado(): void {
    this._employeeService.addEmpleado(this.employee)
      .then((response: any) => {
        alert('Empleado agregado exitosamente!');
        response.data;
      }).catch((error: any) => {
        console.error(error);
      });
  }

}
