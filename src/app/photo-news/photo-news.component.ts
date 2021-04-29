import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {News} from '../news';

@Component({
  selector: 'app-photo-news',
  templateUrl: './photo-news.component.html',
  styleUrls: ['./photo-news.component.scss']
})
export class PhotoNewsComponent implements OnInit {
  newsList: News[];
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };
  constructor(private newsService: NewsService) { }

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

}
