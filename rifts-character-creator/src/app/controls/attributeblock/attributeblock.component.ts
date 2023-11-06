import {ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {Attribute, Roll, Stat} from "../../models/stats.model";

@Component({
  selector: 'app-attributeblock',
  templateUrl: './attributeblock.component.html',
  styleUrls: ['./attributeblock.component.scss']
})
export class AttributeBlockComponent {
  private _attribute:Attribute = new Attribute();
  @Input() attributeLabel: string = "";
  @Input() isStat: boolean = false;
  @Output() changeDetected: EventEmitter<void> = new EventEmitter<void>();
  showModal: boolean = false;
  needsRolls: boolean = this.attribute.rolls.some(roll => roll.value == null || roll.value == 0 || roll.value == undefined);

  @Input()
  set attribute(value: Attribute) {
    this._attribute = value;
    this.needsRolls = this.attribute.rolls.some(roll => roll.value == null || roll.value == 0 || roll.value == undefined);
  }

  handleRollsUpdated(rolls: Roll[]) {
    this.attribute.rolls = rolls;
    this.attribute.max_value = rolls.reduce((app, roll) => app + (roll.value || 0), 0);
    this.needsRolls = this.attribute.rolls.some(roll => roll.value == null || roll.value == 0 || roll.value == undefined);
    this.changeDetected.emit();
  }

  get attribute(): Attribute {
    return this._attribute;
  }

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
