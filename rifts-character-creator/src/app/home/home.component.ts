import { Component } from '@angular/core';
import {CharacterService} from "../services/character.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    characters: any[] = [];

    constructor(private characterService: CharacterService) { }

    ngOnInit(): void {
        // TODO: String type the character object (and others) instead of using data:any
        this.characterService.getCharacters().subscribe((data: any) => {
            this.characters = data;
        });
    }

    button_click(): void {

    }
}
