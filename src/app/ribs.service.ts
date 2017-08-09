import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ImportInterface } from './import-interface';
import { ImportInterfaceDetail } from './import-interface-detail';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class RibsService{

	private importsUrl = 'http://localhost:3000/imports';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getImportInterfaces(): Promise<ImportInterfaceDetail[]> { 
		return this.http.get(this.importsUrl)
		.toPromise()
		.then(response => response.json() as ImportInterfaceDetail[])
		.catch(this.handleError);
	};

	createImportInterface(importInterface: ImportInterface): Promise<ImportInterface> {
  	return this.http
    .post(this.importsUrl, JSON.stringify(importInterface), {headers: this.headers})
    .toPromise()
    .then(res => res.json() as ImportInterface)
    .catch(this.handleError);
	}

	getImportInterfaceById(id: number): Promise<ImportInterface> {
		return this.http.get(this.importsUrl+"/"+id)
		.toPromise()
		.then(response => response.json() as ImportInterface)
		.catch(this.handleError);
	}

	editImportInterface(importInterface: ImportInterface): Promise<ImportInterface> {
		return this.http.put(this.importsUrl+"/"+importInterface.id, JSON.stringify(importInterface), {headers: this.headers})
		.toPromise()
		.then(response => response.json() as ImportInterface)
		.catch(this.handleError);
	}

	deleteImportInterfaceById(importInterface: ImportInterface): void{
		this.http.delete(this.importsUrl+"/"+importInterface.id)
		.toPromise()
    	.then(res => res.json() as ImportInterface)
		.catch(this.handleError);
	}

	// temporary
	private guid() {
  	function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  		}
  	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
	}

	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error);
  		return Promise.reject(error.message || error);
	}
}