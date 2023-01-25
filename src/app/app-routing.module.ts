import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/end-user/about/about.component';
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

    
    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }