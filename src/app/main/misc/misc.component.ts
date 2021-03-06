import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
  title = 'angular-learn';
  arr = [1, 2, 3];
  Observable;

  ngOnInit() {
    // 如何监听 title 值的变化
    this.Observable = new BehaviorSubject(0);
    this.Observable.subscribe((x) => {
      console.log('a' + x);
    });
    this.Observable.next(1);

    // const subject = new Subject();
    // subject.subscribe({
    //   next: (v) => {
    //     console.log('observerA: ' + v);
    //   }
    // });
    // subject.subscribe({
    //   next: (v) => {
    //     console.log('observerB: ' + v);
    //   }
    // });
    // subject.next(1);
    // subject.next(2);
  }

  onClick() {
    this.title = this.title === 'angular-learn' ? '666' : 'angular-learn';
    // this.Observable.next(this.title);
    this.Observable.subscribe((x) => {
      console.log('b' + x);
    });
    this.Observable.next(2 + Math.random());
  }
}
