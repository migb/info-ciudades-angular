import { Component, Input } from '@angular/core';

/**
 * Componente Loader.
 */

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['loader.component.scss']
})
export class LoaderComponent {

  @Input() show = false;


}
