import { Component, OnInit } from '@angular/core';
import {News} from '../news';
import {NewsService} from '../services/news.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-news',
  templateUrl: './video-news.component.html',
  styleUrls: ['./video-news.component.scss']
})
export class VideoNewsComponent implements OnInit {

  newsList: News[];
  public titleStyles = {
    color: 'green',
    fontStyle: 'italic'
  };
  constructor(private newsService: NewsService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe
    (
      (response) =>
      {
        this.newsList = response;
      },

      // tslint:disable-next-line:no-shadowed-variable
      (error) =>
      {
        console.log('Error ' + error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  getEmbedUrl(news){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + news.link);
  }

}
