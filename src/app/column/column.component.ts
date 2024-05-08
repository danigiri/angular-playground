import { HostBinding, ViewEncapsulation, Component } from '@angular/core';

@Component({
  selector: 'column-component',
  standalone: true,
  imports: [],
  template: `
	<div>
		<img src="/assets/stuff.png" />
	</div>
  `,
  styleUrl: './column.component.css'
//,  encapsulation: ViewEncapsulation.Emulated,
//,  encapsulation: ViewEncapsulation.None
//,encapsulation: ViewEncapsulation.ShadowDom
})
export class ColumnComponent {


@HostBinding('class.col-4') get row() {return true;}
//@HostBinding('class.column') get column() {return true;}
@HostBinding('class.mycol') get mycol() {return true;}


}
