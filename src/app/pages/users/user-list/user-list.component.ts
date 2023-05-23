import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../model/user/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditComponent } from '../user-edit/user-edit.component';
import * as bootstrap from 'bootstrap';
import { EmployeeRegistrationDTO } from 'src/app/model/user/userRegistrationDTO';
import * as moment from 'moment';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserEditComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  employees: Employee[] = [];
  selectedEmployee!: Employee;


  _employeeService = inject(UserService);
  _modalService = inject(NgbModal);
  _router = inject(Router)

  ngOnInit() {
    this._employeeService.getEmpleados().then((response: any) => {
      this.employees = response.data;
    }).catch((error: any) => {
      console.error(error);
    });
  }

  editEmpleado(employee: Employee): void {
    this.selectedEmployee = employee;
    this.selectedEmployee.fecha_nacimiento = moment.utc(new Date(employee.fecha_nacimiento)).format("YYYY-MM-DD");
    this.selectedEmployee.fecha_vencimiento_ci = moment.utc(new Date(employee.fecha_vencimiento_ci)).format("YYYY-MM-DD");
    const editModal = document.querySelector('#editModal');
    if (editModal) {
      const bootstrapModal = new bootstrap.Modal(editModal);
      bootstrapModal.show();
    }
  }

  eliminarEmpleado(id: number): void {
    this._employeeService.deleteEmpleado(id).then((response: any) => {
      response.data;
    }).catch((error: any) => {
      console.error(error);
    });
  }
}
