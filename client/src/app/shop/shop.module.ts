import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {SharedModule} from "../shared/shared.module";



// @ts-ignore
@NgModule({
  declarations: [ShopComponent, ProductItemComponent],
  exports: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ShopModule { }
