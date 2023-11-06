import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { user } from './user';
import { Router } from '@angular/router';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { formData } from '../admin-layout/formData';

@Component({
  selector: 'app-add-user-layout',
  templateUrl: './add-user-layout.component.html',
  styleUrls: ['./add-user-layout.component.css']
})
export class AddUserLayoutComponent implements OnInit{

    userlist: user[] = [];
    showImagePopup: boolean = false;

  name = '';
  surname = '';
  id = '';
  number = '';
  email = '';
  password = ''; 
  user_device = 'NA';
  position = '';

  picture: Blob = new Blob;

  @ViewChild('canvas', { static: false }) canvasRef!: ElementRef;
  
    canvas!: HTMLCanvasElement;
    webcam: any;
    webcamWidth = 200;
    webcamHeight = 200;
    photo: WebcamImage | undefined;
    photoFormat: string | undefined;
    webcamInitialized = false;
    videoStream: MediaStream | null = null;
    imageBlob = new Blob();
    

  constructor(private http: HttpClient, private service: UserService, private router: Router){
    this.webcam = WebcamUtil.getAvailableVideoInputs();
  };
  
  ngOnInit(): void {
  }

  register(){
      if (
        !this.name ||
        !this.surname ||
        !this.id ||
        !this.number ||
        !this.email ||
        !this.password ||
        !this.position
      ) {
        alert("Please complete all the required fields before submitting.");
        return;
      }

        const blobImg = this.capture();

        const formData = new FormData();

        formData.append('name', this.name);
        formData.append('surname', this.surname);
        formData.append('id', this.id);
        formData.append('number', this.number);
        formData.append('email', this.email);        
        formData.append('password', this.password);
        formData.append('user_device', this.user_device);
        formData.append('position', this.position);
        formData.append('picture', blobImg, 'picture.png');

        console.log(formData.get('name'), 
        formData.get('surname'), 
        formData.get('id'),
        formData.get('number'),
        formData.get('email'),
        formData.get('password'),
        formData.get('user_device'),
        formData.get('position'),
        formData.get('picture'));

        this.service.addNewUser(formData).subscribe(
          (error) => {
            console.error('Error sending data to Spring Boot:', error);
          },
          (response) => {
            alert("User successfully added!");
            this.router.navigate(['/manager']);
          }
        );
        
  }

    cancel(){
        this.router.navigate(['/manager']);
    }

    openImagePopup() {
      this.showImagePopup = true;
    }

    StartCamera() {
      //this.photo = undefined;
      //this.photoFormat = undefined;
      WebcamUtil.getAvailableVideoInputs().then((mediaDevices: MediaDeviceInfo[]) => {
        if (mediaDevices && mediaDevices.length > 0) {
          this.webcam = mediaDevices[0];
          navigator.mediaDevices.getUserMedia({ video: { deviceId: this.webcam.deviceId } })
            .then((stream) => {
              this.webcam.stream = stream;
            })
            .catch((error) => {
              console.error('Error accessing webcam:', error);
            });
        } else {
          console.error('No camera found');
        }
      });
    }

    capture() {
      this.canvas = this.canvasRef.nativeElement;
      const context = this.canvas.getContext('2d');
      const video = document.createElement('video');

      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
          video.play();
        })
        .catch((error) => {
          console.error('Error accessing webcam:', error);
        });

        video.addEventListener('canplay', () => {
          const context = this.canvas.getContext('2d')!;
          context.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);
          const imageDataURL = this.canvas.toDataURL('image/png');
          this.imageBlob = this.dataURItoBlob(imageDataURL);
        
          if (this.videoStream) {
            this.videoStream.getTracks().forEach((track) => track.stop());
          }
        }); 
        return this.imageBlob; 
    }
    
    dataURItoBlob(dataURI: string): Blob {
      const byteString = atob(dataURI.split(',')[1]);
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      
      return new Blob([ab], { type: mimeString });
    } 
  }

