import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  {
    path: "home",component : HomeComponent
  },
  {
    path: "main",component : MainComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
