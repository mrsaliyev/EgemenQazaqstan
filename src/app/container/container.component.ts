import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }
  public new = '';
  public name = 'Egemen Qazaqstan';

  ngOnInit(): void {
  }

}
