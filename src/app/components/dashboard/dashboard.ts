import { Component } from '@angular/core';
import { Product } from '../../core/productDetails';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  //productsList : ProductDetails[] = []

  productsList: Product[] = [
  {
    Id: 1,
    Name: 'Laptop',
    Sku: 'LAP-001',
    CategoryId: 1,
    Price: 250000,
    StockQuantity: 10,
    Active: true,
    Description: 'Business laptop'
  },
  {
    Id: 2,
    Name: 'Wireless Mouse',
    Sku: 'MOU-001',
    CategoryId: 1,
    Price: 7500,
    StockQuantity: 3,
    Active: true,
    Description: 'Wireless optical mouse'
  },
  {
    Id: 3,
    Name: 'Mechanical Keyboard',
    Sku: 'KEY-001',
    CategoryId: 1,
    Price: 12000,
    StockQuantity: 15,
    Active: true,
    Description: 'RGB mechanical keyboard'
  },
  {
    Id: 4,
    Name: 'Monitor',
    Sku: 'MON-001',
    CategoryId: 1,
    Price: 45000,
    StockQuantity: 8,
    Active: true,
    Description: '24-inch Full HD monitor'
  },
  {
    Id: 5,
    Name: 'USB-C Hub',
    Sku: 'HUB-001',
    CategoryId: 1,
    Price: 9500,
    StockQuantity: 20,
    Active: false,
    Description: 'Multiport USB-C adapter'
  }
];

TotalProducts: number = this.productsList.length;
ActiveProducts : number = this.productsList.filter(Product => Product.Active).length
LowStockProducts : number = this.productsList.filter(Product => Product.StockQuantity < 5).length;

  constructor(){
    console.log("cons")
  }

  ngOnInit(){
    console.log("onInit")
  }
}
