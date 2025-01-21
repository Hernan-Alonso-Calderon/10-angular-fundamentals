import { Component } from '@angular/core';
import { AccordionSectionComponent } from '../accordion-section/accordion-section.component';
import { BannerSectionComponent } from '../banner-section/banner-section.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AccordionSectionComponent, BannerSectionComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
