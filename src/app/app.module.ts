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
import {FormsModule} from '@angular/forms';
import {NewsService} from './services/news.service';
import {LoggingService} from './services/logging.service';
import {AdminModule} from './admin/admin.module';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AdminModule
  ],
  providers: [NewsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
