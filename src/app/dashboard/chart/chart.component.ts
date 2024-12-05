import { Component, Input } from '@angular/core';
import { ThCardComponent } from '../../shared/th-card/th-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule,ThCardComponent],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  @Input() chartData: any[] = [];  
  @Input() footer:string="";

}
