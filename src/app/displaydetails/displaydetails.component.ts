import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent implements OnInit {
books;
  constructor(private http:Http,private route:ActivatedRoute) { }
  url='http://localhost:9000/books';
  ngOnInit() {
    this.http.get(this.url).subscribe(response =>
      {
          this.books=response.json();
      })
  }
isbn;
  display(book){
    }
    
}
