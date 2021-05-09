import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { HelpComponent } from './help/help.component';
import { SafetyComponent } from './safety/safety.component';
import { ScamComponent } from './scam/scam.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: '',
        component: HelpComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
      {
        path: 'safety',
        component: SafetyComponent
      },
      {
        path: 'scam',
        component: ScamComponent
      },
      {
        path: 'terms-of-use',
        component: TermsOfUseComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
