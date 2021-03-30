import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css'],
})
export class CarFilterComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  brandIdFilter: number;
  colorIdFilter: number;

  constructor(
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((respone) => {
      this.brands = respone.data;
     
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data; 
    });
  }

  getSelectedBrand(id: number) {
    if (this.brandIdFilter == id) {
      return true;
    } else {
      return false;
    }
  }

  getSelectedColor(id: number) {
    if (this.colorIdFilter == id) {
      return true;
    } else {
      return false;
    }
  }

}
