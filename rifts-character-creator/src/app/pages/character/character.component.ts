import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

import {Character} from "../../models/character.model";
import {CharacterService} from "../../services/character.service";

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
  private characterDataSubject: Subject<Character> = new Subject<Character>();

  constructor(private route: ActivatedRoute, private characterService: CharacterService,
              private toastrService: ToastrService, private location: Location) {

    // Watch for changes and debounce by 5 seconds
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
      },
      error: (error) => {
        this.toastrService.error('There was an error deleting the character: ' + error);
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
      },
      error: (error) => {
        this.toastrService.error('There was an error update the character: ' + error);
        console.error(error);
      }
    });
  }

  onPropertyChange(): void {
    this.characterDataSubject.next(this.characterData); // notify the subject to autosave when data changes
  }

}
