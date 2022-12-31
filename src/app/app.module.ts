import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { HomeModule } from 'src/app/home/home.module';
import { AuthInterceptor } from 'src/app/auth/services/auth.interceptor.service';
import { BoardsModule } from 'src/app/boards/boards.module';
import { InLineFormModule } from 'src/app/modules/inlineform/in-line-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    HomeModule,
    BoardsModule,
    InLineFormModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
