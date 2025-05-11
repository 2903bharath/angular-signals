import { ApplicationConfig, EnvironmentInjector, importProvidersFrom, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay'

export const appConfig: ApplicationConfig = {
 providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(), 
    provideRouter(routes), 
    importProvidersFrom(OverlayModule),
    {
      provide: 'SWIMLANE_INJECTOR',
      useFactory: () => inject(EnvironmentInjector),
    }
  ]
};
