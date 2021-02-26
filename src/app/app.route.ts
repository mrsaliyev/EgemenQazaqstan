
import {Routes} from '@angular/router';
import {MainNewsComponent} from './main-news/main-news.component';
import {VideoNewsComponent} from './video-news/video-news.component';
import {PhotoNewsComponent} from './photo-news/photo-news.component';
import {ArticleComponent} from './article/article.component';
import {ErrorComponent} from './error/error.component';

export const routes: Routes = [
  {path: 'mainNews', component: MainNewsComponent},
  {path: 'videoNews', component: VideoNewsComponent},
  {path: 'photoNews', component: PhotoNewsComponent},
  {path: 'article', component: ArticleComponent},
  {path: '', redirectTo: 'mainNews', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];
