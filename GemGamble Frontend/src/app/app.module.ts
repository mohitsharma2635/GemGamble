import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { GameCompComponent } from './game-comp/game-comp.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Login/Login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    GameCompComponent,
    LoginComponent,
      FooterComponent
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
