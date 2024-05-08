import { Component } from '@angular/core';

@Component({
  selector: 'column',
  standalone: true,
  imports: [],
  template: `
  <div class="col-4 mycol">
	<div>
		<img src="/assets/stuff.png" />
	</div>
</div>
  `,
  styleUrl: './column.component.css'
})
export class ColumnComponent {

}
