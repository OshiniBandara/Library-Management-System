import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-adddvd',
  templateUrl: './adddvd.component.html',
  styleUrls: ['./adddvd.component.css']
})
export class AdddvdComponent implements OnInit {
dvds;
  constructor(private http:Http) { }
  url='http://localhost:9000/dvds';

  ngOnInit() {
    this.http.get(this.url).subscribe(response =>
      {
          this.dvds=response.json();
      })
  }
  isbn;
  title;
  sector;
  publishedday;
  publishedmonth;
  publishedyear;
  reader;
  publisheddate;
  availablelang;
  availablesub;
  producer;
  actor;
   adddvd(){
   // alert('Successfully added a new DVD! \n\n' + JSON.stringify(this.isbn)+ 'to the list')
    console.log(this.isbn);
    let post=
    {
      isbn:this.isbn,
      title:this.title,
      sector:this.sector,
      publisheddate:this.publishedday+"/"+this.publishedmonth+"/"+this.publishedyear,
      availablelang:this.availablelang,
      availablesub:this.availablesub,
      producer:this.producer,
      actor:this.actor,
    }
    this.http.post(this.url,post).subscribe(
      response =>
      {
        console.log(response);
        
      }
    )
   }
}
