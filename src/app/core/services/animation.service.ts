import { Injectable, NgZone, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private isBrowser: boolean;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  initAOS(): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out-cubic',
          once: true,
          mirror: false,
          anchorPlacement: 'top-bottom',
          offset: 100,
          delay: 0,
        });
      }, 100);
    });
  }

  refreshAOS(): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });
  }
}