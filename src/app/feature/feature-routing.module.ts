/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom Components */
import { FeatureComponent } from './feature.component';

/** Feature Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: 'feature',
      component: FeatureComponent,
      data: { title: extract('Feature'), breadcrumb: 'Feature' }
    }
  ])
];

/**
 * Feature Module
 *
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FeatureRoutingModule { }
