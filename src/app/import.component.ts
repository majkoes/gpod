import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ImportInterface } from './import-interface';
import { RibsService } from './ribs.service';

@Component({
  selector: 'my-imports',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>Import Interfaces</h2>
  <ul class="imports">
    <li *ngFor="let importIF of importIFs"
        [class.selected] = "importIF === selectedImportIF"
       (click)="onSelect(importIF)">
      {{importIF.name}}
    </li>
  </ul>
  <import-detail [importIF]="selectedImportIF"></import-detail>
  <br/>
  <button *ngIf="!addNew" (click)="addNew= true">add new</button>
  <div *ngIf="addNew">
      <div><label>Import Interface Name</label>
      <input #importName /> </div>
      <div>
      <label>Import Interface File</label>
      <input #importFile /> </div>
      <div><button (click)="add(importName.value, importFile.value); importName.value=''; importFile.value=''">
        Add
      </button></div>
    </div>
  `,
  providers:[RibsService]
})

export class ImportComponent implements OnInit{
	importIFs: ImportInterface[];
  addNew: boolean;

 	selectedImportIF: ImportInterface;
   importIF: ImportInterface;

 	constructor(private ribsService: RibsService) { }

	ngOnInit(): void {
		this.getImportIFs();
	}

	onSelect(importIF: ImportInterface) : void {
    this.selectedImportIF = importIF;
	}

	getImportIFs(): void {
		this.ribsService.getImportIFs().then(importIFs => this.importIFs = importIFs);
	}

  add(name: string, file: string): void {
      if (!name || !file) { return; }
      this.ribsService.createImportInterface(name, file);
      location.reload();
      this.addNew = false;
    };
}


