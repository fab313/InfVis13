import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { MapOverviewComponent } from './components/map-overview/map-overview.component';

const routes: Routes = [
  { path: '', component: MapOverviewComponent},
  { path: 'documentation', component: DocumentationComponent},
  { path: 'advanced', component: AdvancedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
