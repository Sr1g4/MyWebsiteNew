import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showElement: boolean = true;  // This should be set based on some condition

  constructor() { }

  ngOnInit(): void {
    // You might set showElement based on some conditions or data loaded
  }

  // Any function that might toggle this value
  toggleShowElement(): void {
    this.showElement = !this.showElement;
  }
}