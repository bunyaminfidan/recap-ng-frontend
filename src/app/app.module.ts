import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // api istek için http isteği için gerek
import { FormsModule } from '@angular/forms'; // ngModule kullanmak için. html de girilen texti alabilmek için.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';//Bildirim işlemleri için. Alertfy gibi

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { RentalCarComponent } from './components/rental-car/rental-car.component';
import { PaymentComponent } from './components/payment/payment.component';




@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    CarDetailComponent,
    CarImageComponent,
    FilterPipePipe,
    CarFilterComponent,
    RentalCarComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // api istek için http isteği için gerek
    FormsModule, // ngModule kullanmak için. html de girilen texti alabilmek için. benim uygulamama forms ile ilgili çalışmları desteğini ver
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }), //Bildirim işlemleri için. Alertfy gibi
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
