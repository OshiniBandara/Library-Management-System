import { BrowserModule } from '@angular/platform-browser';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import{HttpModule} from '@angular/http';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddComponent } from './add/add.component';

import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';
import { BorrowComponent } from './borrow/borrow.component';
import { ReturnComponent } from './return/return.component';
import { RouterLink, RouterModule  } from '@angular/router';
import { BorrowbookComponent } from './borrowbook/borrowbook.component';
import { BorrowdvdComponent } from './borrowdvd/borrowdvd.component';
import { MenustudentComponent } from './menustudent/menustudent.component';
import { LoginComponent } from './login/login.component';
import { DisplaydvdComponent } from './displaydvd/displaydvd.component';
import { ListitemComponent } from './listitem/listitem.component';
import { BorrowlistComponent } from './borrowlist/borrowlist.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddComponent,
    routingComponents,
    DeleteComponent,
    DisplayComponent,
    DisplaydetailsComponent,
    BorrowComponent,
    ReturnComponent,
    BorrowbookComponent,
    BorrowdvdComponent,
    MenustudentComponent,
    LoginComponent,
    DisplaydvdComponent,
    ListitemComponent,
    BorrowlistComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'menu',component:MenuComponent},
      {path: 'menustudent',component:MenustudentComponent},
      {path:'add',component:AddComponent},
      {path:'delete',component:DeleteComponent},
      {path:'display',component:DisplayComponent},
      {path:'borrow',component:BorrowComponent},
      {path:'return',component:ReturnComponent},
      {path:'logout',component:LoginComponent},
      {path:'listitem',component:ListitemComponent},
      {path:'report',component:ReportComponent},
      {path:'bitem',component:BorrowlistComponent}
     

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
