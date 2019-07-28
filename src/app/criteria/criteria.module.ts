/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';
import { CriteriaRoutingModule } from './criteria-routing.module';

/** Custom Components */
import { CriteriaComponent } from './criteria.component';

/**
 * Criteria Module
 *
 * Criteria components should be declared here.
 */
@NgModule({
  imports: [
    SharedModule,
    CriteriaRoutingModule
  ],
  declarations: [
    CriteriaComponent
  ]
})
export class CriteriaModule { }
