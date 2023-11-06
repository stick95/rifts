import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {CharacterService} from "../../services/character.service";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";

import {Character}  from "../../models/character.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    characters: any[] = [];
    users: any[] = [];
    characterData: Character = new Character();
    createCharacterModal?: NgbModalRef;
    deleteCharacterModal?: NgbModalRef;
    deleteCharacter: Character = new Character();

    constructor(private characterService: CharacterService, private modalService: NgbModal,
                private userService:UserService, private toastrService: ToastrService, private router: Router) { }

    characterRowClicked(id: number) {
      this.router.navigate(['/character/' + id.toString()]).then();
    }

    ngOnInit(): void {
      // TODO: String type the character object (and others) instead of using data:any
      this.loadCharacters();
      this.userService.getUsers().subscribe((data:any) => {
        this.users = data;
      });
    }

    loadCharacters() {
      this.characterService.getCharacters().subscribe((data: any) => {
        this.characters = data;
      });
    }

    startDeleteCharacter(character: Character, content: any) {
      this.deleteCharacter = character;
      this.deleteCharacterModal = this.modalService.open(content);
    }

    confirmDelete(id?: number) {
      if (this.deleteCharacterModal instanceof NgbModalRef) {
        this.deleteCharacterModal.dismiss('success');
      }
      if(id != undefined) {
        this.characterService.deleteCharacter(id).subscribe({
          next: (response) => {
            this.toastrService.success("Character deleted");
            this.characters = this.characters.filter(character => character.id != id);
          },
          error: (error) => {
            this.toastrService.error('There was an error deleting the character: ' + error);
            console.error(error);
          }
        });
      }
    }

    startCreateCharacter(content:any) {
      this.characterData = new Character();
      this.createCharacterModal = this.modalService.open(content)
    }

    createCharacter() {
      if (this.createCharacterModal instanceof NgbModalRef) {
        this.createCharacterModal.dismiss('success');
      }
      this.characterService.createCharacter(this.characterData).subscribe({
        next: (response) => {
          this.toastrService.success("Character created");
          this.loadCharacters();
        },
        error: (error) => {
          this.toastrService.error('There was an error creating the character: ' + error);
          console.log(error);
        }
      });
    }
}
