import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Employee } from "../model/user/user.model";
import axios from "axios"
import { EmployeeRegistrationDTO } from "../model/user/userRegistrationDTO";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private apiUrl = "http://localhost:8888/employees";

    getEmpleados() {
        return axios.get(this.apiUrl);
    }

    getEmpleado(id: number) {
        const url = `${this.apiUrl}/${id}`;
        return axios.get<Employee>(url);
    }

    addEmpleado(employee: EmployeeRegistrationDTO) {
        return axios.post<Employee>(this.apiUrl, employee);
    }

    updateEmpleado(id: number, employee: EmployeeRegistrationDTO) {
        console.log("KILOOOOOOOOOOOOOOOOOO")
        console.log(employee)
        return axios.put<EmployeeRegistrationDTO>(`${this.apiUrl}/${id}`, employee);
    }

    deleteEmpleado(id: number) {
        const url = `${this.apiUrl}/${id}`;
        return axios.delete(url);
    }
}