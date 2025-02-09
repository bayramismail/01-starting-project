import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
}) //,OnDestroy
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval?: ReturnType<typeof setInterval>;
  //OnDestroy alternatifi olarak
  private readonly destoryRef = inject(DestroyRef);
  constructor() {
    effect(()=>{
      console.log(this.currentStatus());
    })
  }

  ngOnInit(): void {
    /* this.interval =*/ 
    const interval = setInterval(() => {
      const rnd = Math.random(); //0 - 0.999999999
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
    this.destoryRef.onDestroy(()=>{
      clearInterval(interval);
    })
  }
  ngAfterViewInit(): void {
    console.log('After View init');
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
