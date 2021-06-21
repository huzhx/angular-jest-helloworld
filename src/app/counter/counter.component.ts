import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() counter = 0;

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
