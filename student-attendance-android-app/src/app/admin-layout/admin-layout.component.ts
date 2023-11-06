import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { formData } from './formData';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit{

  searchData: formData = {
    startDate: new Date,
    endDate: new Date,
    subject:''
  };

  engineeringSubjects:number = 0;
  ICTSubjects:number = 0;
  ICTattendeesNumber:number = 0;
  engineeringAttendees: number = 13;


  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;
  legendTitle :string = "University Global Status"
  view: any[] = [600, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'University Global';
  showYAxisLabel = true;
  yAxisLabel = 'Subjects';
  timeline = true;
  doughnut = false;
  chartDoughnut = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  showLabels = true;

  public multiBarChar: any[] = [];
  public multiPieChar: any[] = [];
  public trendGraph: any[] = [];

  isPieChart: boolean = true;
  isBarChart: boolean = false;
  isDoughnut: boolean = false;

  constructor(private http: HttpClient, private service: UserService, private datePipe: DatePipe){}

  ngOnInit(): void {
    this.getEngineeringSubjects();
    this.getICTSubjects();
    this.getICTAttendees();
  }

  getEngineeringSubjects() {
    this.service.getEngineeringSubjects().subscribe(
      (data: number) => {
        this.engineeringSubjects = data;
        this.updateMultiData();
      },
      (error) => {
        console.error('Error getting engineering subjects:', error);
      }
    );
  }

  getICTSubjects() {
    this.service.getICTSubjects().subscribe(
      (data: number) => {
        this.ICTSubjects = data;
        this.updateMultiData();
      },
      (error) => {
        console.error('Error getting ICT subjects:', error);
      }
    );
  }

  getICTAttendees() {
    this.service.getAttendees().subscribe(
      (data: number) => {
        this.ICTattendeesNumber = data;
      },
      (error) => {
        console.error('Error getting attendees number:', error);
      }
    );
  }

  updateMultiData() {
    if (this.searchData.startDate !== null  && this.searchData.endDate !== null) {
      this.multiBarChar = [
        {
          "name": "Engineering and the Built Environment",
          "series": [
            {
              "name": "Subjects",
              "value": this.engineeringSubjects
            },
            {
              "name": "Departement",
              "value": 1
            }
          ]
        },
        {
          "name": "Information and Communication Technology",
          "series": [
            {
              "name": "Subjects",
              "value": this.ICTSubjects
            },
            {
              "name": "Departement",
              "value": 1
            }
          ]
        }
      ];

      this.multiPieChar = [
        {
          name: 'Engineering Subjects',
          value: this.engineeringSubjects,
        },
        {
          name: 'ICT Subjects',
          value: this.ICTSubjects,
        },
        {
          name: 'Department',
          value: 1,
        },
      ];
    }
  }

  search() {
  console.log(this.searchData);
    this.service.getFacultyTrendData(this.searchData).subscribe(
      (data: any[]) => {
        console.log(this.searchData);
        if (data && data.length > 0) {
          this.trendGraph = [
            {
              "name": "Students",
              "series": data.map(entry => {
                return {
                  "name": entry.date,
                  "value": entry.attendeeCount
                };
              })
            }
          ];
        }
      },
      (error) => {
        console.error('Error getting trend data:', error);
      }
    );
  }

  showPieChart() {
    this.isPieChart = true;
    this.isBarChart = false;
    this.isDoughnut = false;
  }

  showBarChart() {
    this.isPieChart = false;
    this.isBarChart = true;
    this.isDoughnut = false;
  }

  showDoughnutChart(){
    this.isPieChart = false;
    this.isBarChart = false;
    this.isDoughnut = true;
  }
}