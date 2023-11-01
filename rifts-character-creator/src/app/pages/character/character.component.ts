import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

import {Character} from "../../models/character.model";
import {CharacterService} from "../../services/character.service";
import {ClassesService} from "../../services/classes.service";
import {Occ, Rcc} from "../../models/classes.model";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  id: number = 0;
  characterData: Character = {
    id: 0,
    user: 0,
    name: ''
  }
  rccs: Rcc[] = [];
  occs: Occ[] = [];
  private characterDataSubject: Subject<Character> = new Subject<Character>();

  constructor(private route: ActivatedRoute, private characterService: CharacterService,
              private toastrService: ToastrService, private location: Location, private classesService: ClassesService) {

    // Watch for changes and debounce by 2.5 seconds
    this.characterDataSubject.pipe(
        debounceTime(2500)
    ).subscribe(data => {
        this.autoSaveCharacterData();
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? parseInt(idParam) : 0;
    this.characterService.getCharacter(this.id).subscribe({
      next: (response) => {
        this.characterData = response;
        if(this.characterData.rccDetails != undefined)
          this.occs = this.characterData.rccDetails.occs;
      },
      error: (error) => {
        this.toastrService.error('There was an error loading the character: ' + error);
        console.error(error);
      }
    });

    this.classesService.getRccs().subscribe({
      next: (response) => {
        this.rccs = response;
      },
      error: (error) => {
        this.toastrService.error('There was an error loading the rcc table: ' + error);
        console.error(error);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  autoSaveCharacterData(): void {
    this.characterService.saveCharacter(this.characterData).subscribe({
      next: (response) => {
        this.characterData = response;
        this.toastrService.success('Changes saved to character');
      },
      error: (error) => {
        this.toastrService.error('There was an error updating the character: ' + error);
        console.error(error);
      }
    });
  }

  onPropertyChange(): void {
    this.characterDataSubject.next(this.characterData); // notify the subject to autosave when data changes
  }

  onRccChange(): void {
    let newRcc = this.rccs.find(rcc => rcc.id == this.characterData.rcc);
    this.occs = newRcc ? newRcc.occs : [];
    this.onPropertyChange();
  }

}
