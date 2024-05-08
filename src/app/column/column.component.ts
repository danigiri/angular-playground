import { ViewEncapsulation, Component } from '@angular/core';

@Component({
  selector: 'column-component',
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
//,  encapsulation: ViewEncapsulation.Emulated,
//,  encapsulation: ViewEncapsulation.None
//,encapsulation: ViewEncapsulation.ShadowDom
})
export class ColumnComponent {

}
