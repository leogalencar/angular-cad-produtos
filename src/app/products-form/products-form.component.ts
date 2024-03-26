import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css'
})
export class ProductsFormComponent implements OnInit {
  products: Product[] = [];

  formGroupProduct: FormGroup;

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.service.getProducts().subscribe({
      next: data => this.products = data
    })
  }

  constructor(private formBuilder: FormBuilder, private service: ProductService) {
    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
    });
  }


  save() {
    // this.products.push(this.formGroupProduct.value);
    this.service.saveProducts(this.formGroupProduct.value).subscribe({
      next: data => this.products.push(data)
    })
  }
}
