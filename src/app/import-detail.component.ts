import { Component, Input } from '@angular/core';
import { ImportInterface } from './import-interface';
import { RibsService } from './ribs.service';

@Component({
	selector: 'import-detail'
  ,
	template: `
    <div *ngIf="importInterface">
      <h2>{{importInterface.name}} details</h2>
      <div>
        <label>name: </label>
        <input [(ngModel)]="importInterface.name"/>
      </div>
      <div>
        <label>file name: </label>
        <input [(ngModel)]="importInterface.configuration.file"/>
        <div>
          <button (click)="update(importInterface);">
            Update
          </button>
        </div>
        <div>
          <button (click)="delete(importInterface);">
            Delete
          </button>
        </div>  

      <div> <button (click)="run(importInterface.id);">run</button>
          <div><button (click)="stop(importInterface.id);">stop</button></div> 
    </div>
  `
  ,
  providers:[RibsService]
})

export class ImportDetailComponent{
	@Input() importInterface: ImportInterface;

  constructor(private ribsService: RibsService) { }

}