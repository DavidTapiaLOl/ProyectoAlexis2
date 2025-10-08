import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarLateralComponent } from "./navbar-lateral/navbar-lateral.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarLateralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segundoP19';
}
