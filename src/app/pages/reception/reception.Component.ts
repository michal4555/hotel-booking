import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';       // חשוב בשביל ngModel
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reception',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './reception.html',
  styleUrl: './reception.scss'
})
export class ReceptionComponent {

}
