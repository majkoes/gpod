import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ImportInterface } from './import-interface';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class RibsService{

	private importsUrl = 'http://localhost:3000/imports';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getImportIFs(): Promise<ImportInterface[]> { 
		return this.http.get(this.importsUrl)
		.toPromise()
		.then(response => response.json() as ImportInterface[])
		.catch(this.handleError);
	};

	createImportInterface(name: string, file: string): Promise<ImportInterface> {
  	return this.http
    .post(this.importsUrl, JSON.stringify({id: this.guid(), name: name, file: file}), {headers: this.headers})
    .toPromise()
    .then(res => res.json() as ImportInterface)
    .catch(this.handleError);
	}

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