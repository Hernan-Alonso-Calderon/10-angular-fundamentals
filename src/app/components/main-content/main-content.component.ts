import { Component } from '@angular/core';
import { AcordionComponent } from '../acordion/acordion.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AcordionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
