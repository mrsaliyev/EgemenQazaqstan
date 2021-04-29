import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LastNewsComponent } from './last-news/last-news.component';
import { ContainerComponent } from './container/container.component';
import { ErrorComponent } from './error/error.component';
import {MainNewsComponent} from './main-news/main-news.component';
import {PhotoNewsComponent} from './photo-news/photo-news.component';
import {VideoNewsComponent} from './video-news/video-news.component';
import {ArticleComponent} from './article/article.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.route';
import {CurrencyConverterPipe } from './pipes/currency-converter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewsService} from './services/news.service';
import {LoggingService} from './services/logging.service';
import {AdminModule} from './admin/admin.module';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {UserService} from './services/user.service';
import {AuthService} from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LastNewsComponent,
    ContainerComponent,
    MainNewsComponent,
    PhotoNewsComponent,
    VideoNewsComponent,
    ArticleComponent,
    ErrorComponent,
    CurrencyConverterPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NewsService, LoggingService, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
