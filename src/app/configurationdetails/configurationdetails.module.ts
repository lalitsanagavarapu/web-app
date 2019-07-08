/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';
import { ConfigurationdetailsRoutingModule } from './configurationdetails-routing.module';

/** Custom Components */
import { ConfigurationdetailsComponent } from './configurationdetails.component';

/**
 * Configuration Module
 *
 * Configuration components should be declared here.
 */
@NgModule({
  imports: [
    SharedModule,
    ConfigurationdetailsRoutingModule
  ],
  declarations: [
    ConfigurationdetailsComponent
  ]
})
export class ConfigurationdetailsModule { }
