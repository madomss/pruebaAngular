import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from 'src/app/model/user/user.model';
import { FormsModule } from '@angular/forms';
import { EmployeeRegistrationDTO } from 'src/app/model/user/userRegistrationDTO';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {

  @Input() employee!: Employee;

  _employeeService = inject(UserService);

  employeeDto: EmployeeRegistrationDTO = {
    cedula: '',
    nombres: '',
    apellidos: '',
    genero: '',
    fecha_nacimiento: '',
    email: '',
    nacionalidad: '',
    fecha_vencimiento_ci: '',
    cedula_file: '',
    foto_file: ''
  };

  ngOnInit(): void { }

  editarEmpleado(id: number): void {
    this.employeeDto.cedula = this.employee?.cedula;
    this.employeeDto.nombres = this.employee?.nombres;
    this.employeeDto.apellidos = this.employee?.apellidos;
    this.employeeDto.genero = this.employee?.genero;
    this.employeeDto.fecha_nacimiento = moment(this.employee.fecha_nacimiento).format("YYYY-MM-DD");
    this.employeeDto.email = this.employee?.email;
    this.employeeDto.nacionalidad = this.employee?.nacionalidad;
    this.employeeDto.fecha_vencimiento_ci = moment(this.employee.fecha_vencimiento_ci).format("YYYY-MM-DD");
    this.employeeDto.cedula_file = this.employee?.cedula_file;
    this.employeeDto.foto_file = this.employee?.foto_file;

    this._employeeService.updateEmpleado(id, this.employeeDto).then((response: any) => {
      alert('Empleado modificado exitosamente');
      response.data;
      console.log(response.data)
    }).catch((error: any) => {
      console.error(error);
    });
  }
}
