export interface Product {
  Id: number;
  Name: string;
  Sku: string;
  CategoryId: number;
  Price: number;
  StockQuantity: number;
  Active: boolean;
  Description?: string;
}