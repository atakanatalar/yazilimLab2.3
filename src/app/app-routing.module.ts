import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BroadcastDetailComponent } from './broadcast-detail/broadcast-detail.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  //{ path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
  {path:"login", component:LoginComponent},
  {path:"admin", component:AdminComponent},
  {path:"user/:uuid", component:UserDetailComponent},
  {path:"yayin/:uuid", component:BroadcastDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
