import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../add-user-layout/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit{

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

  remove(){
    this.router.navigate(['/remove-user-layout']);
  }

  viewUser(){
    this.router.navigate(['/view-user-layout']);
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
