import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './core/parent/parent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SlideShowImgComponent } from './slide-show-img/slide-show-img.component';
import { ContentImgComponent } from './content-img/content-img.component';
import { ContentComponent } from './content/content.component';
import { CreateSideshowImgComponent } from './create-sideshow-img/create-sideshow-img.component';
import { CreateContentImgComponent } from './create-content-img/create-content-img.component';
import { CreateContentComponent } from './create-content/create-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'parent/dashboard', pathMatch: 'full' },
  {
      path: 'parent', component: ParentComponent,
      children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'slideshowimg', component: SlideShowImgComponent },
          { path: 'createslideshow', component: CreateSideshowImgComponent },
          { path: 'imagecontent', component: ContentImgComponent },
          { path: 'createimagecontent', component: CreateContentImgComponent },
          { path: 'content', component: ContentComponent },
          { path: 'createcontent', component: CreateContentComponent },
          
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
