import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './hero/add-user/add-user.component';
import { ViewComponent } from './hero/view/view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'add', 
    component: AddUserComponent 
  },
  { 
    path: 'display', 
    component: ViewComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
