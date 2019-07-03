/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';
import { NavigationdupRoutingModule } from './navigationdup-routing.module';

/** Custom Components */
import { NavigationdupComponent } from './navigationdup.component';

/**
 * Navigation Module
 *
 * Navigation components should be declared here.
 */
@NgModule({
  imports: [
    SharedModule,
    NavigationdupRoutingModule
  ],
  declarations: [
    NavigationdupComponent
  ]
})
export class NavigationdupModule { }
