import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  viewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  //ViewChild içine 'form' ,ButtonComponent .vb yazdığımızda bunu html tarafında arayacaktır ve ona ulaşabilmemiz sağlayacaktır.
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //viewChild signal hali
  private readonly form =
    viewChild.required<ElementRef<HTMLFormElement>>('form');
  //  onSubmit(titleElement:HTMLInputElement){
  //   console.dir(titleElement);

  //  }
  onSubmit(title: string, ticketText: string) {
    console.log(title, ticketText);

    this.form().nativeElement.reset();
  }
  ngOnInit(): void {
    console.log('On init');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After view init');
    console.log(this.form().nativeElement);
  }
}
