import { ImportInterfaceDetail } from './import-interface-detail';
import { Configuration } from './configuration';

export class ImportInterface extends ImportInterfaceDetail{
	configuration: Configuration;

	constructor(id: number, name: string, configuration: Configuration){
		super(id, name);
		this.configuration = configuration;
	}
}