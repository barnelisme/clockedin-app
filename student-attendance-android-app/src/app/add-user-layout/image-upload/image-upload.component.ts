import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage, WebcamInitError  } from 'ngx-webcam';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit{

      // ngx-webcam properties
      @ViewChild('ngxWebcam')webcamElement!: ElementRef;
      //showCamera: boolean = false;
      //trigger: any = false;
      //showImageDiv: boolean = false;
      webcamWidth = 200;
      webcamHeight = 200;
      //selectedSource: 'upload' | 'camera' = 'upload';
      //uploadedPhoto: File | undefined;
      photo: WebcamImage | undefined;
      photoFormat: string | undefined;

  constructor(private http: HttpClient, private service: UserService, private router: Router){}
  
  
  ngOnInit(): void {
  }
;
/*
  //@Input() imageUrl: string;

        // Toggle between camera and upload source
        toggleSource(source: 'upload' | 'camera') {
          this.selectedSource = source;
          }
      
          uploadPhoto(event: any) {
          const file = event.target.files[0];
          if (file) {
            this.uploadedPhoto = file;
            const reader = new FileReader();
            reader.onload = () => {
              //this.userDetails.photo = reader.result as string;
            };
            reader.readAsDataURL(file);
          }
        }
      
        removeUploadedPhoto() {
          this.uploadedPhoto = undefined;
          //this.userDetails.photo = '';
        }
      
          // Open the camera for taking a picture
          openCamera() {
            this.showCamera = true;
            this.trigger = this.trigger ? false : true;
          }
        
          // Handle captured photo (from ngx-webcam)
          takePicture(webcamImage: WebcamImage) {
            // Process the captured photo (e.g., display it in your UI)
            // For example:
            // this.capturedPhoto = webcamImage.imageAsDataUrl;
            this.showCamera = false;
          }
  */
}
