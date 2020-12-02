import { Directive , HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAtFavDirective]'
})
export class AtFavDirectiveDirective{
  @HostBinding('class.danger-class') isDanger = true;
  constructor() { }

}
