import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from "ngx-toastr";

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
    user: 0,
    name: ''
  }

  constructor(private route: ActivatedRoute, private characterService: CharacterService,
              private toastrService: ToastrService, private location: Location) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? parseInt(idParam) : 0;
    this.characterService.getCharacter(this.id).subscribe({
      next: (response) => {
        console.log(response);
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

}
