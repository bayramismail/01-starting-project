import { Component, input, output, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TicketModel } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<TicketModel>();
  close = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }
  onMarkAsComplated() {
    this.close.emit();
  }
}
