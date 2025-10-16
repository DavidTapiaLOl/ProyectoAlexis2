import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Navbarlateral';
/* =======
import { NavbarLateralComponent } from "./navbar-lateral/navbar-lateral.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarLateralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segundoP19';
>>>>>>> f80225a43bf03efcced3f0155698c1b7e62da3b1 */
}
