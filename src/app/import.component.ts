import { Component } from '@angular/core';
import { OnInit } from '@angular/core'; 
import { ImportInterface } from './import-interface';
import { ImportInterfaceDetail } from './import-interface-detail';
import { RibsService } from './ribs.service';
import { Configuration } from './configuration';

import {AfterViewInit} from '@angular/core';  
import { Renderer2, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'my-imports',
  templateUrl: './import.component.html'
})



export class ImportComponent implements OnInit, AfterViewInit {



	importIFs: ImportInterfaceDetail[];
  addNew: boolean;

 	selectedImportIFDetail: ImportInterfaceDetail;
  importIFDetail: ImportInterfaceDetail;
  importInterface: ImportInterface;

constructor(private ribsService: RibsService, private elementRef: ElementRef, @Inject(DOCUMENT) private _document) {};

	ngOnInit(): void {
		this.getImportIFs();
	}

	onSelect(importIFDetail: ImportInterfaceDetail) : void {
    this.selectedImportIFDetail = importIFDetail;
    this.getImportIFById(this.selectedImportIFDetail.id);
	}

	getImportIFs(): void {
		this.ribsService.getImportInterfaces().then(importIFs => this.importIFs = importIFs);
	}

  getImportIFById(id: number): void {
    this.ribsService.getImportInterfaceById(id).then(importInterface => this.importInterface = importInterface);
  }

  add(name: string, file: string): void {
      if (!name || !file) { return; }

      var newImportInterface = new ImportInterface(this.getIncrementedId(), name, new Configuration(file));

      this.ribsService.createImportInterface(newImportInterface);
      location.reload();
      this.addNew = false;
    };



  update(importInterface: ImportInterface): void {
    this.ribsService.editImportInterface(importInterface);
    confirm("Interface updated");

  }

  delete(importInterface: ImportInterface): void {
    if (confirm("Delete interface configuration " + importInterface.name +" ?"))
    {
      this.ribsService.deleteImportInterfaceById(importInterface);
      location.reload();
    }
  }


    run(id: number): void{
      confirm("run if " + this.importInterface.id);
    }

    stop(id: number) : void {
      confirm("stop if " + this.importInterface.id);
    }

//temp
  getIncrementedId() : number {
    let res = 0;
     for (let i of this.importIFs){
       if (i.id > res) { res = i.id };
     }

     return res + 1;
  }


 ngAfterViewInit() {
   // load script
  var s = this._document.createElement("script");
  s.type = "text/javascript";
  s.src = "assets/imports.js";
  this.elementRef.nativeElement.appendChild(s); 
  }
}


