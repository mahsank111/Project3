import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

const routes: Routes = [
  { path: 'account-details', component: AccountDetailsComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: '', redirectTo: '/account-details', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
