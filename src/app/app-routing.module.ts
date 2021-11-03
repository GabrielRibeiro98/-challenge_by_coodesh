import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './pages/articles/articles.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  {path: '', pathMatch: 'full', redirectTo: 'articles'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
