import { Component, HostListener, Input, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PersonService } from '../service/person.service';
//import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../material-module';
import { error } from 'console';

export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
}

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DemoMaterialModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent implements OnInit {
  @Input() Item = '';
  myForm!: FormGroup;
  person_List: any;
  title = "Person List";
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'city'];
  //dataSource = ELEMENT_DATA;
  dataSource: any[] = [];
  clickedRows = new Set<PeriodicElement>();

  // @HostListener('click', ['$event']) 
  //   public clicked(e: MouseEvent): void {
  //     debugger;
  //       console.log('Host got clicked', e);
  //   }
  constructor(private person: PersonService, private fb: FormBuilder) {

  }
  ngOnInit() {
    this.personList();
    this.myForm = this.fb.group({
      lastname: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      address: [''],
      city: ['']
    })
  }

  personList() {
    this.person.getPersonList().subscribe(data => {
      this.dataSource = data;
    }, err => {
      console.log(err.message);
    }, () => {
      console.log('Completed');
    }
    )
  }

  addPerson(formVal: any) {
    this.person.addPerson(formVal).subscribe(res => {
      alert(res.toString());
    })
  }
  onSubmit() {
    //console.log(formData);
    console.log('Form submitted with: ', this.myForm.value);
    this.addPerson(this.myForm.value);
  }


}
