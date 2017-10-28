import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routing';
import {TestComponent} from './app.component';
import { MdTab, MdTabGroup, MdTabsModule} from '@angular2-material/tabs';
import { KWayComponent } from './k-way/k-way.component';
import { AssociativeComponent } from './associative/associative.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    KWayComponent,
    AssociativeComponent,
    AboutUsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule,
    MdTabsModule,
    // MdTab,
    // MdTabGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
