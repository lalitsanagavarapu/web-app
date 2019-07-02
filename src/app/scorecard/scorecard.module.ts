/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';

/** Custom Components */
import { ScorecardComponent } from './scorecard.component';


/**
 * Self Service Module
 *
 * All components related to self service admin portal functions should be declared here.
 */
@NgModule({
  imports: [
    SharedModule,
    ScorecardRoutingModule
  ],
  declarations: [
    ScorecardComponent,
  ]
})
export class ScorecardRoutingModule { }
