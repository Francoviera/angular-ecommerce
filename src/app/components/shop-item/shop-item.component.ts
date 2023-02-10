import { Component, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shopping-cart';
import { Product } from 'src/app/shared/models/product';
import { ShopItem } from 'src/app/shared/models/shopItem';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent {
  @Input() product: Product | undefined;

  constructor(private shoppingService: ShoppingCartService){
  }

  public addItem(product: Product | undefined): void{
    debugger;
    let count: number= 0;
    let e= this.shoppingService.counter.subscribe(result => {
      count= result;
    });
    if(product){
      let item: ShopItem= {
        id: count+1,
        product: product,
        lot: 1
      }
      this.shoppingService.add(item);
    }
    
  }
}
