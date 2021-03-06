import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-family-dialogue',
  templateUrl: './edit-family-dialogue.component.html',
  styleUrls: ['./edit-family-dialogue.component.css']
})
export class EditFamilyDialogueComponent implements OnInit {
  data: any;
  familyData: any;
  Occupation: string[] = ['Private Company', 'Business/Self Employed', 'Government Job', 'Doctor', 'Teacher', 'Not Working'];
  Status: string[] = ['Alive', 'Not Alive'];
  FamilyType: string[] = ['JointFamily', 'Nuclear Family', 'Others'];
  Count: any[] = ['None', 0, 1, 2, 3, '3+'];
  HouseType: string[] = ['Owned', 'Rented', 'Leased'];
  @ViewChild('familyForm') familyForm: NgForm;


  constructor(private http: HttpClient, public dialogRef: MatDialogRef<EditFamilyDialogueComponent>, @Inject(MAT_DIALOG_DATA) data) { 
    this.data = data;
  }

  ngOnInit() {
    this.familyData = this.data.familyDetails;
  }

  onSubmit() {
    console.log(this.familyForm);
    const familyDataForm = new FormData();
    familyDataForm.append('identity_number', this.familyData.identity_number);
    familyDataForm.append('temple_id',this.familyData.temple_id);
    familyDataForm.append('family_type', this.familyForm.value.family_type);
    familyDataForm.append('about', this.familyData.about);
    familyDataForm.append('occupation_father', this.familyForm.value.father_occupation);
    familyDataForm.append('occupation_mother', this.familyForm.value.mother_occupation);
    familyDataForm.append('married_sons', this.familyForm.value.married_sons);
    familyDataForm.append('unmarried_sons', this.familyForm.value.unmarried_sons);
    familyDataForm.append('married_daughters', this.familyForm.value.married_daughters);
    familyDataForm.append('unmarried_daughters', this.familyForm.value.unmarried_daughters);
    familyDataForm.append('locality', this.familyData.locality);
    familyDataForm.append('city', this.familyData.city);
    familyDataForm.append('address', this.familyData.address);


    this.http.post('https://partner.hansmatrimony.com/api/updateFamilyDetails', familyDataForm).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.dialogRef.close();
  }

}
