import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ResortsComponent } from './routes/resorts/resorts.component';
import { ResortComponent } from './routes/resort/resort.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resorts', component: ResortsComponent },
  { path: 'resorts/:resortId', component: ResortComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }