import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { ThCardImgComponent } from '../th-card-img/th-card-img.component';

@Component({
  selector: 'app-th-card',
  standalone: true,
  imports: [CommonModule, ThCardImgComponent],
  templateUrl: './th-card.component.html',
  styleUrl: './th-card.component.css',
})
export class ThCardComponent {
  @ContentChild('headera', { read: TemplateRef })
  headerTemplate!: TemplateRef<any>;

  @Input() headerImage: string = '';
  @Input() headerVisible: boolean = false;
  @Input() footerVisible: boolean = false;
}
