import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
books;
dvds;
  constructor(private http:Http,private route:ActivatedRoute) { }
  url='http://localhost:9000/itemlist';

  ngOnInit() {
    this.http.get(this.url).subscribe(response =>
      {
          this.books=response.json();
      })
      this.http.get(this.url).subscribe(response =>
        {
            this.dvds=response.json();
        })
  }
display(book,dvd){

}

}
