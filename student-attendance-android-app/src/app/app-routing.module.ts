import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { ClasslistSearchComponent } from './classlist-search/classlist-search.component';
import { ManagerComponent } from './manager/manager.component';
import { AddUserLayoutComponent } from './add-user-layout/add-user-layout.component';
import { RemoveUserLayoutComponent } from './remove-user-layout/remove-user-layout.component';
import { ViewUserLayoutComponent } from './view-user-layout/view-user-layout.component';
import { ImageUploadComponent } from './add-user-layout/image-upload/image-upload.component';



const routes: Routes = [

  {path: '', redirectTo: '/login-layout', pathMatch: 'full'},
  {path: 'login-layout', component: LoginLayoutComponent},
  {path: 'admin-layout', component: AdminLayoutComponent},
  {path: 'student-search', component: StudentSearchComponent},
  {path: 'classlist-search', component: ClasslistSearchComponent},
  {path: 'custom-search', component: CustomSearchComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'add-user-layout', component: AddUserLayoutComponent},
  {path: 'remove-user-layout', component: RemoveUserLayoutComponent},
  {path: 'view-user-layout', component: ViewUserLayoutComponent},
  {path: 'image-upload', component: ImageUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
