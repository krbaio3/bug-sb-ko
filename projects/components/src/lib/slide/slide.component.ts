import { Component, EventEmitter, Input, Output } from "@angular/core";
import { LabelPosition, MaterialColor } from "../config/config";

import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: "css-slide",
  template: `
    <mat-slide-toggle
      (change)="onInnerChange($event)"
      (toggleChange)="onInnerToggleChange($event)"
      [aria-label]="ariaLabel"
      [color]="color"
      [disabled]="disabled"
      [labelPosition]="labelPosition"
    >
      {{ label }}
    </mat-slide-toggle>
  `,
  styles: [``],
})
export class SlideComponent {
  /**
   * Texto del slider
   * @required
   */
  @Input()
  label: string;

  /**
   * Aria Label
   */
  @Input()
  ariaLabel: string;

  /**
   * Whether the label should appear after or before the slide-toggle. Defaults to 'after'.
   */
  @Input()
  labelPosition: LabelPosition = LabelPosition.After;

  /**
   * Color del slider
   *
   */
  @Input()
  color: ThemePalette = MaterialColor.Primary;

  /**
   * Disabled
   *
   */
  @Input()
  disabled: boolean = false;

  /**
   * Optional change handler
   */
  @Output()
  changeEvent: EventEmitter<MatSlideToggleChange> = new EventEmitter<MatSlideToggleChange>();

  /**
   * onInnerChange: change handle event
   * @param $event
   */
  onInnerChange($event: MatSlideToggleChange) {
    this.changeEvent.emit($event);
  }

  /**
   * Optional toggleChange handler
   */
  @Output()
  toggleChange: EventEmitter<void> = new EventEmitter<void>();

  /**
   *
   * @param $event
   */
  onInnerToggleChange($event: void) {
    this.toggleChange.emit($event);
  }
}
