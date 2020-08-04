import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Output()
  public click: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  public text: string = '';

  @Input()
  public disabled: boolean = false;

  @Input()
  public action: () => void;

  @Input()
  public icon: string;

  @Input()
  public type: 'normal' | 'mini' | 'full' = 'normal';

  @Input()
  public color: 'red' | 'green' = 'red';

  public onClick() {
    this.click.emit();
  }

}
