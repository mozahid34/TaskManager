import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  {path:"", redirectTo:"view", pathMatch:"full"},
  {path:"create", component:CreateTaskComponent},
  {path:"view", component:ViewTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
