import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

    characters: any[] = [];

    constructor(private characterService: CharacterService) { }

    ngOnInit(): void {
        // TODO: String type the character object (and others) instead of using data:any
        this.characterService.getCharacters().subscribe((data: any) => {
            this.characters = data;
        });
    }
}
