import { Component, OnInit,ViewChild,AfterViewInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../add-user-layout/user';
import { UserService } from '../user.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { ScaleType } from '@swimlane/ngx-charts';

export interface ManagerInterface {
  surname: string;
  id: number;
  position: string;
}

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit,AfterViewInit,OnDestroy{

  obs!:Observable<any>;
  displayedColumns: string[] = ['surname', 'id', 'position', 'deleteBtn'];
  dataSource = new MatTableDataSource<user>([]);

  scheme = {
    name: 'ticketStatusScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FFA500', '#FFFF00', '#ADD8E6', '#FFFF50', '#FFFE90', '#FFF0DB']
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy():void {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  gradient = false;
  showLegend = true;
  legendTitle :string = "User Status"
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  isDoughnut: boolean = false;
  multi: any[] = [];

  userlist: user[] = [];
  displayedUserList: user[] = [];
  searchInput: string = '';

  user: user = {
    name:'',
    surname:'',
    id:'',
    number:'',
    email:'',
    password:'',
    user_device:'',
    position:''
  };

  pageSize: number = 6;
  currentPage: number = 1;
  isPieChart: boolean = true;

  constructor(private router: Router, private service: UserService){}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((data: user[]) => {
      this.userlist = data;
      this.dataSource.data = data;
      this.updatePieChartData()
      this.updateUserList();
    });
  }

  dashboard(){
    this.router.navigate(['/admin-layout']);
  }

  add(){
    this.router.navigate(['/add-user-layout']);
  }

  pageChanged(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.updateUserList();
  }

  updateUserList() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.userlist = this.userlist.slice(startIndex, endIndex);
    this.displayedUserList = this.userlist.slice(startIndex, endIndex);
    //this.filterUserList();
  }

  updatePieChartData() {
    const totalUsers = this.userlist.length;
    const managerUsers = this.userlist.filter((user) => user.position === 'manager').length;
    const adminUsers = this.userlist.filter((user) => user.position === 'admin').length;
    const regularUsers = this.userlist.filter((user) => user.position === 'user').length;

    this.multi = [
      {
        name: 'Manager',
        value: managerUsers,
      },
      {
        name: 'Admin',
        value: adminUsers,
      },
      {
        name: 'Regular User',
        value: regularUsers,
      },
    ];
  }

  removeUser(userId: String) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.service.removeUser(userId).subscribe(
        (response) => {
          alert("User successfully deleted!");
          this.service.getAllUsers().subscribe((data: user[]) => {
            this.userlist = data;
          });
        },
        (error) => {
          console.error('Error deleting the user:', error);
        }
      );
    }
  }

  showPieChart() {
    this.isPieChart = true;
    this.isDoughnut = false;
  }

  showDoughnutChart(){
    this.isPieChart = false;
    this.isDoughnut = true;
  }
}
