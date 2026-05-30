import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

// [DIRECTIVE: RevealOnScrollDirective] — Reusable scroll-triggered entrance.
// Adds the `.reveal` class (hidden + shifted, see _animations.scss) then toggles
// `.is-visible` via IntersectionObserver when the element scrolls into view.
//
// Usage in any template:
//   <div appReveal>...</div>
//   <div appReveal [revealDelay]="150">...</div>   <!-- stagger in ms -->
@Directive({
  selector: '[appReveal]',
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  // [PROPERTY: revealDelay] — Stagger delay in ms before this element animates in.
  readonly revealDelay = input<number>(0);
  // [PROPERTY: revealOnce] — Reveal a single time (true) or re-animate on re-entry.
  readonly revealOnce = input<boolean>(true);

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement as HTMLElement;
    this.renderer.addClass(el, 'reveal');
    this.renderer.setStyle(el, '--reveal-delay', `${this.revealDelay()}ms`);

    // Graceful fallback if IntersectionObserver is unavailable.
    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(el, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(el, 'is-visible');
            if (this.revealOnce()) {
              this.observer?.unobserve(el);
            }
          } else if (!this.revealOnce()) {
            this.renderer.removeClass(el, 'is-visible');
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
