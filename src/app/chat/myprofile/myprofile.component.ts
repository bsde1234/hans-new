import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { EditPersonalDialogueComponent } from './edit-personal-dialogue/edit-personal-dialogue.component';
import { EditFamilyDialogueComponent } from './edit-family-dialogue/edit-family-dialogue.component';
import { EditPreferenceDialogueComponent } from './edit-preference-dialogue/edit-preference-dialogue.component';
import { AuthService } from 'src/app/Services/auth.service';
import { NgxNotificationService } from 'ngx-notification';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  @Input() personalProfileData: any;
  @Input() familyProfileData: any;
  @Input() preferenceProfileData: any;
  innerWidth: any;
  public message: string;
  backimagePath;
  imgURL: any;
  BackimgURL;
  suc : any = [];
  minHeight;
  maxHeight;

  constructor(private matDialog: MatDialog, private Auth: AuthService, private ngxNotificationService: NgxNotificationService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  setAge(dob: string) {
    if (dob != null) {
    return (Math.floor((Date.now() - new Date(dob).getTime()) / (1000 * 60 * 60 * 24 * 365)));
    } else {
      return null;
    }
  }
  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  console.log(this.innerWidth);
}
  getHeight(num: string) {

    switch (Number(num)) {
     case 53: return "4\'5\""
     case 54: return "4\'6\""
     case 55: return "4\'7\""
     case 56: return "4\'8\""
     case 57: return "4\'9\""
     case 58: return "4\'10\""
     case 59: return "4\'11\""
     case 60: return "5\'"
     case 61: return "5\'1\""
     case 62: return "5\'2\""
     case 63: return "5\'3\""
     case 64: return "5\'4\""
     case 65: return "5\'5\""
     case 66: return "5\'6\""
     case 67: return "5\'7\""
     case 68: return "5\'8\""
     case 69: return "5\'9\""
     case 70: return "5\'10\""
     case 71: return "5\'11\""
     case 72: return "6\'"
     case 73: return "6\'1\""
     case 74: return "6\'2\""
     case 75: return "6\'3\""
      case 76: return "6\'4\""
      case 77: return "6\'5\""
      case 78: return "6\'6\""
      case 79: return "6\'7\""
      case 80: return "6\'8\""
      case 81: return "6\'9\""
      case 82: return "6\'10\""
      case 83: return "6\'11\""
      case 84: return "7\'"
      default: return null
  }
  }
  getProfilePhoto(num: string, gen: string): String {
    if (num === null) {
      if (gen === 'Male') {
        return '../../assets/male_pic.png';
      } else {
        return '../../assets/female_pic.png';
      }
    } else {
      let carousel: any = JSON.parse(num);
    return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/'+carousel['3'];
    }
    }
    getProfilesPhoto(num: string, num2: string , gen: string): String {
      if (num === null || num === '' && num2 === null || num2 === '') {
        if (gen === 'Male') {
          return '../../assets/male_pic.png';
        } else {
          return '../../assets/female_pic.png';
        }
      } else {
        if (num === null || num === '') {
          let carousel: any = JSON.parse(num2);
      return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/'+carousel['3'];
        } else {
          let carousel: any = JSON.parse(num);
      return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/'+carousel['3'];
        }
      }
      }
    openPersonalDialog() {
      const dialogConfig = new MatDialogConfig();
      if (this.innerWidth >= 1024) {
        dialogConfig.minWidth = this.innerWidth - 200;
        dialogConfig.minHeight = 600;
      } else {
      dialogConfig.minWidth = this.innerWidth - 50;
      }
      dialogConfig.disableClose = false;
      dialogConfig.hasBackdrop = true;
        dialogConfig.data = {
          personalDetails: this.personalProfileData,
          familyDetails: this.familyProfileData,
        };
        let dialogRef = this.matDialog.open(EditPersonalDialogueComponent, dialogConfig);
  
    //   dialogRef.afterClosed().subscribe(
    //     data => {console.log(data);
    //       this.dialogData = data;
    //       this.formData = this.dialogData.formData;
    //       this.price = this.dialogData.price;
    //       this.getRazorPay(this.price,'live',0,this.formData.name,this.formData.email,this.formData.mobile)
    //     }
    // );
    }

    openFamilyDialog() {
      const dialogConfig = new MatDialogConfig();
      if (this.innerWidth >= 1024) {
        dialogConfig.minWidth = this.innerWidth - 200;
        dialogConfig.minHeight = 600;
      } else {
      dialogConfig.minWidth = this.innerWidth - 50;
      }
      dialogConfig.disableClose = false;
      dialogConfig.hasBackdrop = true;
        dialogConfig.data = {
          familyDetails: this.familyProfileData
        };
        let dialogRef = this.matDialog.open(EditFamilyDialogueComponent, dialogConfig);
  
    //   dialogRef.afterClosed().subscribe(
    //     data => {console.log(data);
    //       this.dialogData = data;
    //       this.formData = this.dialogData.formData;
    //       this.price = this.dialogData.price;
    //       this.getRazorPay(this.price,'live',0,this.formData.name,this.formData.email,this.formData.mobile)
    //     }
    // );
    }

    openPreferenceDialog() {
      const dialogConfig = new MatDialogConfig();
      if (this.innerWidth >= 1024) {
        dialogConfig.minWidth = this.innerWidth - 200;
        dialogConfig.minHeight = 600;
      } else {
      dialogConfig.minWidth = this.innerWidth - 50;
      }
      dialogConfig.disableClose = false;
      dialogConfig.hasBackdrop = true;
        dialogConfig.data = {
          preferencesDetails: this.preferenceProfileData
        };
        let dialogRef = this.matDialog.open(EditPreferenceDialogueComponent, dialogConfig);
  
    //   dialogRef.afterClosed().subscribe(
    //     data => {console.log(data);
    //       this.dialogData = data;
    //       this.formData = this.dialogData.formData;
    //       this.price = this.dialogData.price;
    //       this.getRazorPay(this.price,'live',0,this.formData.name,this.formData.email,this.formData.mobile)
    //     }
    // );
    }

    previewBack(files, index) {

      if (files.length === 0) {
        return;
      } else {
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = 'Only images are supported.';
          return;
        }
        const reader = new FileReader();
        this.backimagePath = files[0];
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
          this.BackimgURL = reader.result;
          this.uploadPhoto(this.backimagePath, index);
  
        };
      }
    }

    uploadPhoto(data, index) {
      const fifthstepdata = new FormData();
      fifthstepdata.append('identity_number', localStorage.getItem('identity_number'));
      fifthstepdata.append('url', data);
      fifthstepdata.append('index', index);
  
      this.Auth.FifthPage(fifthstepdata).subscribe(suc => {
        this.suc = suc;
         console.log('photos', suc);
         document.getElementById("imgProfile").setAttribute('src', this.BackimgURL);
        this.ngxNotificationService.sendMessage('Photo Uploaded Succesfully!', 'success', 'top-right');
      }, err => {
        this.ngxNotificationService.sendMessage('Photo could not be Uploaded!', 'success', 'top-right');
        // console.log(err);
        console.log(err);
      }); 
    }

}
