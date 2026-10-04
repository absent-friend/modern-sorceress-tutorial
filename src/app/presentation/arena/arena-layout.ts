import { afterNextRender, Directive, ElementRef, inject, input, OnDestroy } from '@angular/core';
import { Arena } from './arena';
import { ArenaData } from './arena-data';

@Directive({
  selector: '[arenaLayout]',
})
export class ArenaLayout implements OnDestroy {
  private readonly arena = inject(Arena);
  private readonly el = inject(ElementRef);

  private readonly observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 50) {
      return;
    }
    this.switchToLayout();
  });

  public readonly arenaLayout = input.required<ArenaData>();

  constructor() {
    afterNextRender({
      read: () => {
        this.observer.observe(this.el.nativeElement);
      }
    })
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  switchToLayout() {
    this.arena.layout.set(this.arenaLayout());
  }
}
