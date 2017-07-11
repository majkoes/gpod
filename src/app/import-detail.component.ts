import { Component, Input } from '@angular/core';
import { ImportInterface } from './import-interface';


@Component({
	selector: 'import-detail',
	template: `
    <div *ngIf="importIF">
      <h2>{{importIF.name}} details</h2>
      <div>
        <label>name: </label> {{importIF.name}}
       <!-- <input [(ngModel)]="importIF.name" placeholder="name"/> -->
      </div>
      <div>
        <label>file name: </label>{{importIF.file}}
    </div>
  `
})

export class ImportDetailComponent {
	@Input() importIF: ImportInterface;
}