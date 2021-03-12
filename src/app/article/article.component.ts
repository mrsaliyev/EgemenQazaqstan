import { Component, OnInit } from '@angular/core';
import {News} from '../news';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  newsList: News[];
  public titleStyles = {
    color: 'green',
    fontStyle: 'italic'
  };
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsList = this.newsService.getNews();
  }

}
