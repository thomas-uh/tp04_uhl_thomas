import { AccountCreationFormComponent } from './account-creation-form/account-creation-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';


const routes: Routes = [
  {
    path: 'create',
    component: AccountCreationFormComponent
  },
  {
    path: 'view',
    component: AccountDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AccountComponentRoutingModule {}
