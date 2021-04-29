import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {News} from '../news';
import {LoggingService} from './logging.service';


@Injectable()
export class NewsService {
  url = 'http://localhost:3000/news';
  constructor(private http: HttpClient, private loggingService: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  getNews() {
    return this.http.get<News[]>(this.url);
  }
}
