/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';
import { ScorecardRoutingModule } from './scorecard-routing.module'

/** Custom Components */
import { ScorecardComponent } from './scorecard.component';
import { FeatureComponent } from './feature/feature.component';


/**
 * Scorecard Module
 *
 * All components related to scorecard functions should be declared here.
 */
@NgModule({
  imports: [
    SharedModule,
    ScorecardRoutingModule
  ],
  declarations: [
    ScorecardComponent,
    FeatureComponent
  ]
})
export class ScorecardModule { }
