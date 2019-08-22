import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Product List';
  product;
  constructor(private service: ProductService) {}
  ngOnInit() {
    this.service.onLoad().subscribe(
      prod => { this.product = prod ; },
      err => { console.log(err); }
    );
  }
}
