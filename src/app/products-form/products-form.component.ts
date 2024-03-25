import { Component } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css'
})
export class ProductsFormComponent {
  products: Product[] = [{
    id: 1,
    name: 'Produto 1',
    description: 'Descrição do Produto 1',
    price: 10,
    quantity: 5
  }]

  formGroupProduct: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
    });
  }

  save() {
    this.products.push(this.formGroupProduct.value);
  }
}
