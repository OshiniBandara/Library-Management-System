import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
books;
  constructor(private route:ActivatedRoute,private http:Http) { }
    url='http://localhost:9000/books';
    
  

  ngOnInit() {

    this.http.get(this.url).subscribe(response =>
      {
          this.books=response.json();
      })
  }

}
