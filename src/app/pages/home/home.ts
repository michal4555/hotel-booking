
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})

export class HomeComponent implements OnInit, OnDestroy {
  images = [
    'assets/20240411130700.389.jpg',
    'assets/FA7356C4-0C2F-263D-F39BA7BC1D9C547C.jpg',
    'assets/isrotel-eilat.jpg',
  ];

  currentImageIndex = 0;
  intervalId?: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 2000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
