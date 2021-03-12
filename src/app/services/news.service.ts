import {Injectable} from '@angular/core';
import {News} from '../news';
import {LoggingService} from './logging.service';


@Injectable()
export class NewsService {

  constructor(private loggingService: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  getNews() {
    let newsList: News[];
    newsList = [
      new News(1, '3 Factors That Drive the U.S. Dollar', 'The economy\'s performance is at the heart of the decision to buy or sell dollars. A strong economy will attract investment from all over the world due to the perceived safety and the ability to achieve an acceptable rate of return on investment. Since investors always seek out the highest yield that is predictable or "safe," an increase in investment, particularly from abroad, creates a strong capital account and a resulting high demand for dollars.'),
      new News(2, 'COVID research updates: Viral variant causes a more deadly form of COVID', '11 March — Viral variant causes a more deadly form of COVID People infected with the coronavirus variant called B.1.1.7 are at a higher risk of dying than are people infected with other circulating variants, regardless of their age, sex and pre-existing health problems.'),
      new News(3, 'Joe Biden congratulated Kassym-Zhomart Tokayev and Kazakhstanis on Nauryz', 'This year the Republic of Kazakhstan celebrates the 30th anniversary of its Independence. Congratulating you on this event, I assure that my Administration attaches great importance to working with you and the people of Kazakhstan. For many years we have maintained a close partnership in the field of nuclear non-proliferation and strengthening peace and security.'),
      new News(4, 'Challenge to prevent Internet fraud launched in the villages of North Kazakhstan region', 'The region is witnessing a surge in online fraud. According to the press service of the police department, 150 such crimes have already been registered this year.'),
      new News(5, 'From 2021, the requirements for working out the grant have been simplified - Ministry of Education', 'In 2016, amendments were made to the Law "On Education" regarding the development of university graduates who studied under state educational grants. According to the amendments adopted by the Parliament, the grant holders had to work in their specialty in state organizations for at least three years.'),
      new News(6, 'Alexey Tsoi spoke about the progress of vaccination in Kazakhstan', 'The head of the Ministry of Health noted that, on behalf of the Head of State, on February 1, 2021, vaccination against coronavirus infection has begun in the Republic of Kazakhstan.')
    ];
    this.loggingService.log('List of news: ' + newsList);
    return newsList;
  }
}
