import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/components/home/home.component';
import { LinkComponent } from './common/components/link/link.component';
import { ApiService } from './common/service/api.service';
import { MessageComponent } from './common/components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
