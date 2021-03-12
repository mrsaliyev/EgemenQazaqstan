import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {News} from '../news';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent implements OnInit {
  constructor(private newsService: NewsService) { }
  @Output() public childEvent = new EventEmitter();

  // tslint:disable-next-line:typedef variable-name
   message: string;

   newsList: News[];
   public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
   };
  ngOnInit(): void {
    this.newsList = this.newsService.getNews();
  }
  // tslint:disable-next-line:typedef
  sendData(message) {
    this.childEvent.emit(message);
  }
}
