import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { ClasslistSearchComponent } from './classlist-search/classlist-search.component';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ManagerComponent } from './manager/manager.component';
import { AddUserLayoutComponent } from './add-user-layout/add-user-layout.component';
import { RemoveUserLayoutComponent } from './remove-user-layout/remove-user-layout.component';
import { ViewUserLayoutComponent } from './view-user-layout/view-user-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import { FilterUsersPipe } from './filter-users.pipe';
import {WebcamModule} from 'ngx-webcam';
import { ImageUploadComponent } from './add-user-layout/image-upload/image-upload.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FooterComponent } from './footer/footer.component';
import { MatChipsModule } from '@angular/material/chips';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    AdminLayoutComponent,
    StudentSearchComponent,
    ClasslistSearchComponent,
    CustomSearchComponent,
    ManagerComponent,
    AddUserLayoutComponent,
    RemoveUserLayoutComponent,
    ViewUserLayoutComponent,
    NavbarComponent,
    FilterUsersPipe,
    ImageUploadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatSelectModule,
    MatMenuModule,
    LayoutModule,
    NgxChartsModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    WebcamModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatChipsModule,
    CdkDropList,
    CdkDrag
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
