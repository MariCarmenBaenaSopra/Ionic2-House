/**SERVICIO DE  AGENTES COMERCIALES
    *Utiliza:
     * mock-brokers.ts            --> donde estan almacenado los datos       
     * broker-service-mock.ts                                              --> en el que estamos
     * broker-service-rest.ts     --> .json                                     
*/

import {Injectable} from '@angular/core';
import brokers from './mock-brokers';

@Injectable()
export class BrokerService {

    findAll() {
        return Promise.resolve(brokers);
    }

    findById(id) {
        return Promise.resolve(brokers[id - 1]);
    }

}
