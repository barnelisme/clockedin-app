import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { formData } from './formData';
import { DatePipe } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Observable, map, startWith } from 'rxjs';
import { SubjectModel } from './SubjectModel';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { ScaleType } from '@swimlane/ngx-charts';

export interface subjectInterface {
  faculty: string;
  department: string;
  subject: string;
}

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit,AfterViewInit,OnDestroy{

  obs!:Observable<any>;
  displayedColumns: string[] = ['faculty', 'department', 'subject'];
  dataSource = new MatTableDataSource<SubjectModel>([]);

  searchData: formData = {
    startDate: new Date,
    endDate: new Date,
    subject:''
  };

  globalParameter: SubjectModel[] = [];

  parameter: SubjectModel = {
    faculty: '',
    facultyNumber: 0,
    department: 0,
    subjectCode: 0
  };

  ICTattendeesNumber:number = 0;
  engineeringAttendees: number = 13;


  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;
  legendTitle :string = "University Global Status"
  legendOptions = true;
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

  scheme = {
    name: 'ticketStatusScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FFA500', '#FFFF00', '#ADD8E6', '#FFFF50', '#FFFE90', '#FFF0DB']
  };
  
  showLabels = true;
  public multiBarChar: any[] = [];
  public multiPieChar: any[] = [];

  public multiBarChar2: any[] = [];
  public multiPieChar2: any[] = [];

  public multiBarChar3: any[] = [];
  public multiPieChar3: any[] = [];

  public multiBarChar4: any[] = [];
  public multiPieChar4: any[] = [];

  public trendGraph: any[] = [];

  isPieChart: boolean = true;
  isBarChart: boolean = false;
  isDoughnut: boolean = false;

    // Ripple values
    color:string = "#FF4D0030";
    radius:number = 30;
    centered:boolean = true;
    unbounded:boolean = true;

  constructor(private http: HttpClient, private service: UserService, private datePipe: DatePipe){}

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


  ngOnInit(): void {
    this.getICTAttendees();
    this.getGlobalParameter();
  }

  getGlobalParameter() {
    this.service.getParameter().subscribe(
      (data: SubjectModel[]) => {

        console.log(data);

        this.globalParameter = data;
        this.dataSource.data = data;
        this.updateMultiData();
        this.updateMultiData2()
        this.updateMultiData3();
        this.updateMultiData4()
      },
      (error) => {
        console.error('Error getting engineering subjects:', error);
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
  if (this.globalParameter && this.globalParameter.length > 0) {
    const firstItem = this.globalParameter[0];

    this.parameter.faculty = firstItem.faculty;
    this.parameter.facultyNumber = firstItem.facultyNumber;
    this.parameter.department = firstItem.department;
    this.parameter.subjectCode = firstItem.subjectCode;

    this.multiBarChar = [
      {
        "name": this.parameter.faculty,
        "series": [
          {
            "name": "Subjects",
            "value": this.parameter.subjectCode
          },
          {
            "name": "Departement",
            "value": this.parameter.department
          }
        ]
      }
    ];

    this.multiPieChar = [
      {
        name: 'Faculty',
        value: this.parameter.facultyNumber,
      },
      {
        name: 'Department',
        value: this.parameter.department,
      },
      {
        name: 'Subject',
        value: this.parameter.subjectCode,
      },
    ];
  }
}

updateMultiData2() {
  if (this.globalParameter && this.globalParameter.length > 0) {
    const secondItem = this.globalParameter[1];

    this.parameter.faculty = secondItem.faculty;
    this.parameter.facultyNumber = secondItem.facultyNumber;
    this.parameter.department = secondItem.department;
    this.parameter.subjectCode = secondItem.subjectCode;

    this.multiBarChar2 = [
      {
        "name": this.parameter.faculty,
        "series": [
          {
            "name": "Subjects",
            "value": this.parameter.subjectCode
          },
          {
            "name": "Departement",
            "value": this.parameter.department
          }
        ]
      }
    ];

    this.multiPieChar2 = [
      {
        name: 'Faculty',
        value: this.parameter.facultyNumber,
      },
      {
        name: 'Department',
        value: this.parameter.department,
      },
      {
        name: 'Subject',
        value: this.parameter.subjectCode,
      },
    ];
  }
}

updateMultiData3() {
  if (this.globalParameter && this.globalParameter.length > 0) {
    const thirdItem = this.globalParameter[2];

    this.parameter.faculty = thirdItem.faculty;
    this.parameter.facultyNumber = thirdItem.facultyNumber;
    this.parameter.department = thirdItem.department;
    this.parameter.subjectCode = thirdItem.subjectCode;

    this.multiBarChar3 = [
      {
        "name": this.parameter.faculty,
        "series": [
          {
            "name": "Subjects",
            "value": this.parameter.subjectCode
          },
          {
            "name": "Departement",
            "value": this.parameter.department
          }
        ]
      }
    ];

    this.multiPieChar3 = [
      {
        name: 'Faculty',
        value: this.parameter.facultyNumber,
      },
      {
        name: 'Department',
        value: this.parameter.department,
      },
      {
        name: 'Subject',
        value: this.parameter.subjectCode,
      },
    ];
  }
}


updateMultiData4() {
  if (this.globalParameter && this.globalParameter.length > 0) {
    const fourthItem = this.globalParameter[3];

    this.parameter.faculty = fourthItem.faculty;
    this.parameter.facultyNumber = fourthItem.facultyNumber;
    this.parameter.department = fourthItem.department;
    this.parameter.subjectCode = fourthItem.subjectCode;

    this.multiBarChar4 = [
      {
        "name": this.parameter.faculty,
        "series": [
          {
            "name": "Subjects",
            "value": this.parameter.subjectCode
          },
          {
            "name": "Departement",
            "value": this.parameter.department
          }
        ]
      }
    ];

    this.multiPieChar4 = [
      {
        name: 'Faculty',
        value: this.parameter.facultyNumber,
      },
      {
        name: 'Department',
        value: this.parameter.department,
      },
      {
        name: 'Subject',
        value: this.parameter.subjectCode,
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
/*
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
*/
  updatePieChartType() {
    this.isPieChart = true;
    this.isBarChart = false;
    this.isDoughnut = false;
  }

  updateBarChartType() {
    this.isPieChart = false;
    this.isBarChart = true;
    this.isDoughnut = false;
  }

  updateDoughnutChartType() {
    this.isPieChart = false;
    this.isBarChart = false;
    this.isDoughnut = true;
  }
  
}