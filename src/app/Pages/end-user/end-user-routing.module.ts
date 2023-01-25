import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/Pages/end-user/login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
{path:'about',component: AboutComponent,},
{path:'home',component: HomeComponent,},
{path:'contact',component: ContactComponent,},
{path:'faq',component: FaqComponent,},
{path:'login',component: LoginComponent,},
{path:'**',component: NotFoundComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndUserRoutingModule { }
