import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  news: string[] = ['First news', 'Second News', 'Third News', 'Fourth news', 'Fifth news'];
  public titleStyles = {
    color: 'green',
    fontStyle: 'italic'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
