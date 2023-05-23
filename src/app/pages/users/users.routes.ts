import { Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserEditComponent } from "./user-edit/user-edit.component";

export const UserRoutes: Routes = [
    { path: '', title: 'Employee List', component: UserListComponent },
    { path: 'add', title: 'Add new employee', component: UserAddComponent },
    { path: 'edit', title: 'Edit employee', component: UserEditComponent },
]