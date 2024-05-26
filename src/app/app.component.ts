import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonComponent } from "./person/person.component";
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PersonComponent, HttpClientModule, LoginComponent]
})
export class AppComponent {
  title = 'my-app';
  data = this.title;
}
