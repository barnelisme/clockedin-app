import { Component, OnInit } from '@angular/core';
declare var device:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(){};

  title = 'student-attendance-android-app';


  ngOnInit(): void {
    document.addEventListener('deviceReady', function () {
      alert(device.platform);
    }, false);
  } 
}
