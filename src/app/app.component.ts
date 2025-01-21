import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { AcordionComponent } from './components/acordion/acordion.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, AcordionComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
