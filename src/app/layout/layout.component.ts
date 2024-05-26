import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, PersonComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  click1() {
    debugger;
  }
}
