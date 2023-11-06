import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Roll} from "../../models/stats.model";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import DiceBox from "@3d-dice/dice-box";
import {timer} from "rxjs";

@Component({
  selector: 'app-diceroller',
  templateUrl: './diceroller.component.html',
  styleUrls: ['./diceroller.component.scss']
})
export class DicerollerComponent {
  @Input() rolls: Roll[]  = [];
  diceRollerModal?: NgbModalRef;
  total: number | undefined = 0;
  @Output() rollsUpdated: EventEmitter<Roll[]> = new EventEmitter<Roll[]>();

  constructor(private modalService: NgbModal) {
    this.total = this.rolls.map(a => a.value).reduce((a:any,b:any) => a+b, 0);
  }

  startDiceRoller(content: any) {
    this.diceRollerModal = this.modalService.open(content);
  }

  closeDiceRoller() {
    this.diceRollerModal?.close()
    this.rollsUpdated.emit(this.rolls);
  }

  rollDice(roll: Roll) {
    const diceBox = new DiceBox("#dice-box", {
      assetPath: '/assets/dice-box/' // include the trailing backslash
    });
    diceBox.init().then(()=>{
      let notation = `${roll.dice}d${roll.pips}`;
      diceBox.onRollComplete = (result) => {
        roll.value = result[0].value;
        if(roll.exploding_gte != undefined && result[0].value >= roll.exploding_gte && roll.exploding_roll != undefined)
          this.rolls.push(roll.exploding_roll);
        timer(2000).subscribe(() => {
          diceBox.clear();
        })
      }
      diceBox.show();
      diceBox.roll(notation);
    });
  }
}

