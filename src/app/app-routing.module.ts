import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
