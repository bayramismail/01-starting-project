import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  /**
   * Kapsülleme Türleri:
ViewEncapsulation.Emulated (Varsayılan):
 Bileşenin stillerini benzersiz hale getirir ve sadece bu bileşen üzerinde etkili olmasını sağlar. 
Tarayıcıda standart CSS sınıfı benzeri çalışır, ancak Angular belirli sınıf adları ekleyerek bileşen tabanlı kapsülleme sağlar.

ViewEncapsulation.ShadowDom:
 Shadow DOM kullanarak bileşen stillerini izole eder. 
Bu sayede, bileşen DOM ağacının diğerlerinden bağımsız bir kapsama alanı oluşturur.

ViewEncapsulation.None:
 Bileşen için herhangi bir kapsülleme uygulanmaz, bileşenin CSS stilleri tüm uygulamaya yayılır ve global olarak uygulanır. 
Bu seçenek, stil kurallarını tüm uygulamaya yaymak istenildiğinde veya özel bir stil kapsüllemesine ihtiyaç duyulmadığında tercih edilebilir.
   */
  encapsulation: ViewEncapsulation.None,
  /**
   * Angular bileşen tanımında host özelliğini kullanarak bileşenin kök HTML elementine (host element) doğrudan bir CSS sınıfı (class) ekler.
   */
  /*bunun yerine @HostBinding kullanıla bilir */
  //bunun kullanı mı öneriliyor.
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className="control"
  // @HostListener('click') ht = this.onClick;
  label = input.required<string>();
  //Html de her hangi birseye erişmöek istersek kullana biliriz.
  private readonly el = inject(ElementRef);
  // @ContentChild('input') private readonly control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private readonly control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  /**
   *
   */
  constructor() {
    ///Angular projesinde her hangi biryerinde değişiklik olursa tekrar tekrar çalısır
    afterRender(() => {
      console.log('afterRender');
    });
    ///Bu tekrar tekrar çalışmaz
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }
  onClick() {
    console.log('Clicked');
    console.log(this.control());
    console.log(this.el);
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
}
