import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'div[thCardImg]',
  standalone: true,
  imports: [],
  templateUrl: './th-card-img.component.html',
  styleUrl: './th-card-img.component.css'
})
export class ThCardImgComponent {

 @Input() img:string="";
 @Input() alt:string="";

}
