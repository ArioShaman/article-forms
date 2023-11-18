import { Route } from '@angular/router';
import { Example01Component, Example02Component } from './examples';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'example-01',
    pathMatch: 'full',
  },
  {
    path: 'example-01',
    component: Example01Component,
  },
  {
    path: 'example-02',
    component: Example02Component,
  },
];
