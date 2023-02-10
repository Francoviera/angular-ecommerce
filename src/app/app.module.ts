import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ShoppingCartService } from './service/shopping-cart';
import { InventoryService } from './service/inventory';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ShoppingCartComponent,
    HomeComponent,
    ShopItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingCartService, InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
