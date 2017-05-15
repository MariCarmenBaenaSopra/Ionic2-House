/**SERVICIO DE  AGENTES COMERCIALES
    *Utiliza:
     * mock-brokers.ts            --> donde estan almacenado los datos       
     * broker-service-mock.ts      
     * broker-service-rest.ts     --> .json                             --> en el que estamos
*/

import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {SERVER_URL} from './config';
import {Http} from '@angular/http';

let brokersURL = SERVER_URL + 'brokers/';

@Injectable()
export class BrokerService {

    constructor(public http: Http) {}

    findAll() {
        alert("findall");
        return this.http.get(brokersURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(brokersURL + id)
            .map(res => res.json())
            .toPromise();
    }

}
