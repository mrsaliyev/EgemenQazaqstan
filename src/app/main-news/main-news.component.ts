import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent implements OnInit {
  constructor() { }
  @Output() public childEvent = new EventEmitter();

  // tslint:disable-next-line:typedef variable-name
   message: string;

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  sendData(message) {
    this.childEvent.emit(message);
  }
}
