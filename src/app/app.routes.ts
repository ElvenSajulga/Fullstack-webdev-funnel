import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

// [COMPONENT: routes] — Single-page funnel. All sections live in HomeComponent.
// Add additional routes here if you later split the site into multiple pages.
export const routes: Routes = [
  { path: '', component: Home, title: '[YOUR FULL NAME] — Full Stack Developer' },
  { path: '**', redirectTo: '' },
];
