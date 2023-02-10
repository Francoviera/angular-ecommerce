import { Product } from "./product";

export interface ShopItem {
    id: number;
    product: Product;
    lot: number;
}