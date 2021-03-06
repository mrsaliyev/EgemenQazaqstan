import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.scss']
})
export class LastNewsComponent implements OnInit {
  @Input() public parentData;

  isGreen = true;
  dollar: number;
  kzt: number;
  constructor() { }

  ngOnInit(): void {
  }

}
