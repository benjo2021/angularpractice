import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';
import { FormComponent } from './component/form/form.component';
import { Error404Component } from './component/error404/error404.component';

const routes: Routes = [
  {
    path: "home",component : HomeComponent
  },
  {
    path: "main",component: MainComponent
     
    
  }  ,
  {
    path: "main",children:[
      {
        path: "main",component:MainComponent
      },
      {
        path: "form",component:FormComponent
      }
    ]
  },
  {
    path: "",component : MainComponent
  },
  {
    path: "**",component : Error404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
