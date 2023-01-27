import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './lib/guard/auth.guard';
import { AboutComponent } from './Pages/end-user/about/about.component';
import { NotFoundComponent } from './Pages/end-user/not-found/not-found.component';
const routes: Routes = [
  
    {path:"",loadChildren: () =>

    import('./Pages/end-user/end-user.module').then(

      (m) => m.EndUserModule

    ),
    
  },
  {path:"admin" ,loadChildren: () =>

  import('./Pages/admin/admin.module').then(

    (m) => m.AdminModule

  )} 
  
  // ,canActivate:[AuthGuard]
  ,{path:'**',component: NotFoundComponent,}
    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }