import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { AcordionComponent } from './components/acordion/acordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, AcordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
