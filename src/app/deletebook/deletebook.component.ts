import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";


@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
books;
  constructor(private http:Http) { }
  url='http://localhost:9000/books';
  ngOnInit() {
    this.http.get(this.url).subscribe(response =>
      {
          this.books=response.json();
      })
  }

  isbn;

  delete(book)
  {
   // alert('Successfully deleted a Book! \n\n' + JSON.stringify(this.isbn)+ 'from the list')
    console.log(book);
    
    this.http.delete(this.url+'/'+this.isbn).subscribe(response =>
      {
        console.log(response);
        this.ngOnInit();
        
      })
  }


}
