import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import {CharacterService} from "../services/character.service";
import {UserService} from "../services/user.service";
import {ToastrService} from "ngx-toastr";

import {Character}  from "../models/character.model";
import {load} from "@angular-devkit/build-angular/src/utils/server-rendering/esm-in-memory-file-loader";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

    characters: any[] = [];
    users: any[] = [];
    characterData: Character = {
      name: '',
      user: 0
    };
    createCharacterModal?: NgbModalRef;
    deleteCharacterModal?: NgbModalRef;
    deleteCharacter: Character = {
      name: '',
      user: 0
    };

    constructor(private characterService: CharacterService, private modalService: NgbModal,
                private userService:UserService, private toastrService: ToastrService) { }

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
        this.characterService.deleteCharacter(id).subscribe(
          (response) => {
            this.toastrService.success("Character deleted");
            this.characters = this.characters.filter(character => character.id != id);
          },
          (error) => {
            this.toastrService.error('There was an error deleting the character: ' + error);
            console.log(error);
          }
        );
      }
    }

    openModal(content:any) {
      this.createCharacterModal = this.modalService.open(content)
    }

    createCharacter() {
      if (this.createCharacterModal instanceof NgbModalRef) {
        this.createCharacterModal.dismiss('success');
      }
      this.characterService.createCharacter(this.characterData).subscribe(
        (response) => {
          this.toastrService.success("Character created");
          this.loadCharacters();
        },
        (error) => {
          this.toastrService.error('There was an error creating the character: ' + error);
          console.log(error);
        }
      );
    }
}
