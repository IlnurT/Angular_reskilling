import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/basket-button/navbar/navbar.component';
import { BasketButtonComponent } from './components/basket-button/basket-button.component';
import { HomeButtonComponent } from './components/home-button/home-button.component';
import { ShoppingCartButtonComponent } from './components/shopping-cart-button/shopping-cart-button.component';
import { ItemsCardComponent } from './components/items-card/items-card.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BasketButtonComponent,
    HomeButtonComponent,
    ShoppingCartButtonComponent,
    ItemsCardComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
