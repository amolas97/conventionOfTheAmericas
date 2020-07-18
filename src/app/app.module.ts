import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';

//Services
import { SpeakersService } from "./services/speakers/speakers.service";

//Routes
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PlaceComponent } from './components/place/place.component';
import { SpeakerComponent } from './components/speaker/speaker.component';
import { ContactComponent } from './components/contact/contact.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    RegisterComponent,
    AboutUsComponent,
    PlaceComponent,
    SpeakerComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SpeakersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
