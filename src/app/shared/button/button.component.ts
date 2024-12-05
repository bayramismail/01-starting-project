import { Component } from '@angular/core';

@Component({
  /**
   * Bu, Angular'da belirli bir bileşen veya direktifi hedefleyen bir CSS seçicisidir.
   * button[appButton] ifadesi, appButton özniteliğine sahip <button> öğelerini seçer.
   * Angular, bu tür öznitelik seçicilerini bileşenler veya direktifler için kullanır.
   *  Yani, appButton özniteliğine sahip olan tüm butonlar, ilgili Angular bileşeni veya direktifi tarafından işlenecektir.
   */
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
