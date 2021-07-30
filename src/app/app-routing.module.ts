import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent} from './addbook/addbook.component';
import {AdddvdComponent} from './adddvd/adddvd.component';
import {DeletebookComponent} from './deletebook/deletebook.component';
import {DeletedvdComponent} from './deletedvd/deletedvd.component';
import {ReturnbookComponent} from './returnbook/returnbook.component';
import { ReturndvdComponent} from './returndvd/returndvd.component';
import { BorrowbookComponent} from './borrowbook/borrowbook.component';
import { BorrowdvdComponent} from './borrowdvd/borrowdvd.component';
import{ DisplaydetailsComponent} from './displaydetails/displaydetails.component';
import { MenuComponent } from './menu/menu.component';
import { MenustudentComponent } from './menustudent/menustudent.component';
import { DisplaydvdComponent } from './displaydvd/displaydvd.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  {path:'addbook',component: AddbookComponent},
  {path:'adddvd', component:AdddvdComponent},
  {path:'dbook', component: DeletebookComponent},
  {path:'ddvd', component:DeletedvdComponent},
  {path:'returnbook', component:ReturnbookComponent},
  {path: 'returndvd', component:ReturndvdComponent},
  {path: 'borrowbook', component:BorrowbookComponent},
  {path: 'borrowdvd', component:BorrowdvdComponent},
  {path: 'displaydetails', component:DisplaydetailsComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'menustudent', component:MenustudentComponent},
  {path: 'displaydetails',component:DisplaydetailsComponent},
  {path:'displaydvd',component:DisplaydvdComponent},
  {path:'report',component:ReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[AddbookComponent,AdddvdComponent,DeletebookComponent,DeletedvdComponent,ReturnbookComponent,ReturndvdComponent,BorrowbookComponent,BorrowdvdComponent,DisplaydetailsComponent,MenuComponent,MenustudentComponent,DisplaydvdComponent,ReportComponent]
