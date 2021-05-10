import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HelpComponent } from './help/help.component';
import { ScamComponent } from './scam/scam.component';
import { SafetyComponent } from './safety/safety.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CompanyAboutComponent } from './company-about/company-about.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { BestOfCompanyComponent } from './best-of-company/best-of-company.component';


@NgModule({
  declarations: [AboutComponent, HelpComponent, ScamComponent, SafetyComponent, TermsOfUseComponent, PrivacyPolicyComponent, CompanyAboutComponent, OpenSourceComponent, BestOfCompanyComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
