import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DemoMaterialModule } from '../material-module';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DemoMaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private login : LoginService, private router: Router) {

  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    })
  }

  onSubmit(): void {
    let formData = this.myForm.value;
    this.login.getToken(formData).subscribe(
      (res:any) => {
        if (res.token) {
          sessionStorage.setItem('token', res.token);
          this.router.navigate(['/layout']); // Redirect to the dashboard after successful login
        }
        else {
          alert(res.message);
        }
      },
      (error) => {
        console.error(error);
        // Handle error (e.g., display a message to the user)
      }
    );
  }

  // onSubmit() {
  //   //console.log(formData);
  //   let formData = this.myForm.value;
  //   console.log('Form submitted with: ', formData);
  //   this.login.getToken(formData).subscribe((data) => {
  //     console.log(data);
  //   })
  // }

}
