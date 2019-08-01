/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';
import { ScorecardRoutingModule } from './scorecard-routing.module';

/** Custom Components */
import { ScorecardComponent } from './scorecard.component';

/**
 * Scorecard Module
 *
 * Scorecard components should be declared here.
 */
@NgModule({
  imports: [
    SharedModule,
    ScorecardRoutingModule
  ],
  declarations: [
    ScorecardComponent
  ]
})
export class ScorecardModule { }
