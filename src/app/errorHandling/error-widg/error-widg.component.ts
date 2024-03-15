import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-widg',
  templateUrl: './error-widg.component.html',
  styleUrls: ['./error-widg.component.css']
})
export class ErrorWidgComponent {
  @Input()
  error:Error|null=null
}
