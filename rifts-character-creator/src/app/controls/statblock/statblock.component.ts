import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Stat} from "../../models/stats.model";

@Component({
  selector: 'app-statblock',
  templateUrl: './statblock.component.html',
  styleUrls: ['./statblock.component.scss']
})
export class StatBlockComponent {
  @Input() stat: Stat = new Stat();
  @Input() stat_label: string = "";
  @Output() changeDetected: EventEmitter<void> = new EventEmitter<void>();
  showModal: boolean = false;
  rolls: string = JSON.stringify(this.stat);

  onChange(): void {
    this.changeDetected.emit();
    // This function will be called when changes are made to the inputs.
    // The actual updating function should be passed by the parent component.
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  // Implement the logic to update max and buff and call onChange()
  updateMaxBuff(newMax: number, newBuff: number): void {
    this.onChange();
  }
}
