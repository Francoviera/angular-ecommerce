import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../shared/models/product';
import { ShopItem } from '../shared/models/shopItem';

@Injectable()
export class ShoppingCartService {
    private counterSource = new BehaviorSubject<number>(0);
    public counter = this.counterSource.asObservable();


    shopItems: ShopItem[] = [];

    constructor(){
        console.log(this.counter)
    }

    public get(): ShopItem[] {
        return this.shopItems;
    }

    public add(item: ShopItem): void {
        debugger;
        let i= this.shopItems.findIndex(e => e.product.id === item.product.id);
        if(i >= 0){
            this.shopItems[i].lot++;
        }else{
            this.shopItems.push(item);
        }
        this.counterSource.next(this.shopItems.length);
    
    }

    public remove(id: number): void{
        let i= this.shopItems.findIndex(item => item.id === id);
        i >= 0 ? this.shopItems.splice(i, 1) : "";
        this.counterSource.next(this.shopItems.length);

    }

}
