import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { ImageModel } from 'src/app/admin/image.model';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  image: ImageModel;
  itemList: AngularFireList<any>
  linkList: AngularFireList<any>

  constructor(private af: AngularFireStorage, private db: AngularFireDatabase) { 
    this.linkList = db.list('floorplans')
  }

  addImage(image: ImageModel) {
    this.itemList.push(image);
  }

  addLink(image: ImageModel) {
    this.linkList.push(image);
  }

  getImage() {
    return this.itemList;
  }
}
