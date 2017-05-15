/** SERVICIO DE PROPIEDADES 
    *Utiliza:
     * mock-properties.ts            --> donde estan almacenado los dato
     * property-service-mock.ts      --> en el que estamos
     * property-service-rest.ts      --> .json
*/

import {Injectable} from '@angular/core';
import properties from './mock-properties';

@Injectable()
export class PropertyService {

  favoriteCounter: number = 0;
  favorites: Array<any> = [];

  findAll() {
    return Promise.resolve(properties);
  }

  findById(id) {
    return Promise.resolve(properties[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(properties.filter((property: any) =>
        (property.title +  ' ' +property.address +  ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

/**Guardar en favoritos */
  favorite(property) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, property: property});
    return Promise.resolve();
  }

/**Eliminar de favoritos */
  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }

}
