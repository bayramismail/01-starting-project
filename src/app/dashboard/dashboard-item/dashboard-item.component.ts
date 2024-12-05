import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // encapsulation:ViewEncapsulation.None,
  // host: {
  //   class: 'dashboard-item',
  // },
})
export class DashboardItemComponent {
  title = input.required<string>();
  image = input.required<ImageType>();
}

type ImageType = {
  src: string;
  alt: string;
};
