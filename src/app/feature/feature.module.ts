/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';

/** Custom Components */
import { FeatureComponent } from './feature.component';

/**
 * Feature Module
 *
 * Feature components should be declared here.
 */
@NgModule({
  imports: [
    SharedModule,
    FeatureRoutingModule
  ],
  declarations: [
    FeatureComponent,
  ]
})
export class FeatureModule { }
