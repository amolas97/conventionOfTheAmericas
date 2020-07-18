import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PlaceComponent } from "./components/place/place.component";
import { SpeakerComponent } from "./components/speaker/speaker.component";
import { RegisterComponent } from "./components/register/register.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'place', component: PlaceComponent },
  { path:'home', component: SpeakerComponent },
  { path:'register', component: RegisterComponent },
  { path:'contact', component: ContactComponent },
  { path:'speakers', component: SpeakerComponent },
  { path:'aboutus', component: AboutUsComponent },
  { path:'**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
