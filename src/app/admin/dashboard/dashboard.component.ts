import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Emitters} from '../../emitters/emitters';
import {NewsService} from '../../services/news.service';
import {News} from '../../news';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  message = '';
  newsList: News[];
  private sanitizer: any;
  isGreen = true;

  constructor(private http: HttpClient, private newsService: NewsService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/users', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.login}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );

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
