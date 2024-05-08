import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ColumnComponent} from './column/column.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ColumnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-playground';
}
