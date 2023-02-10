import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InventoryService } from 'src/app/service/inventory';
import { ShoppingCartService } from 'src/app/service/shopping-cart';
import { Product } from 'src/app/shared/models/product';
import { ShopItem } from 'src/app/shared/models/shopItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  items: Product[]= [];
  itemsFiltered: Product[]= [];

  constructor(private inventoryService: InventoryService){

  }
  ngOnInit(): void {
    this.items= this.inventoryService.get();
  }

  filterProducts(text: string): void{
    this.itemsFiltered = this.items.filter(item => { item.title.toLowerCase() === text });
  }

}
