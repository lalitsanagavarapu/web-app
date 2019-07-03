/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom Components */
import { NavigationdupComponent } from './navigationdup.component';

/** Navigation Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: 'navigationdup',
      component: NavigationdupComponent,
      data: { title: extract('Navigationdup'), breadcrumb: 'Navigationdup' }
    }
  ])
];

/**
 * Navigation Module
 *
 * Configures the navigation (by offices) routes.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NavigationdupRoutingModule { }
