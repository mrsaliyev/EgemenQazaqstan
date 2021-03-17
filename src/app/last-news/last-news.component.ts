import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.scss']
})
export class LastNewsComponent implements OnInit {
  @Input() public parentData;

  newsList: News[];
  public titleStyles = {
    color: 'black',
    fontStyle: 'italic'
  };
  isGreen = true;
  dollar: number;
  kzt: number;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsList = this.newsService.getNews();
  }
}
