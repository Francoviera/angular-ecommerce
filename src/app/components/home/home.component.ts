import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shopping-cart';
import { ShopItem } from 'src/app/shared/models/shopItem';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{

  counter = this.shoppingService.counter;
  shopCartList: ShopItem[] = this.shoppingService.get();
  filtered: boolean = false;
  shopCartListSelected: boolean = false;
  searchInput: string= "";

  @ViewChild('ListComponent', { static: false })
   list: ListComponent | undefined;

  constructor(private shoppingService: ShoppingCartService){
    // this.counter = this.shoppingService.get().length;
  }
  ngAfterViewInit(): void {
    console.log(this.counter)
  }

  ngOnInit(): void {
  }

  search(): void {
    this.list?.filterProducts(this.searchInput.toLowerCase());
  }

  toggleShopCart(): void {
    this.shopCartListSelected= !this.shopCartListSelected;
  }

  removeItem(item: ShopItem){
    debugger;
    this.shoppingService.remove(item.id);
  }

}
