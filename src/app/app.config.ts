import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
export const appConfig: ApplicationConfig = {
  
  // Setup routing for the application using the defined routes in app.routes.ts
  providers: [
    provideRouter(appRoutes), // Configures Angular router with the application routes
    provideClientHydration() // Enables client-side hydration, especially useful for apps that use server-side rendering
  ]
};
