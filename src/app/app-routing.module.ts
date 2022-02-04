import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { TableComponent } from './pages/table/table.component';


const routes: Routes = [{
  path: 'search',
  component: TableComponent
},
{
  path: '',
  redirectTo: '/search',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
