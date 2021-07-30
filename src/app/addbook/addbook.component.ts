import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";




@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  url='http://localhost:9000/books';
  constructor(private http:Http) { }
books;

  ngOnInit() {
    this.http.get(this.url).subscribe(response =>
      {
          this.books=response.json();
      })
  }
  // onKeydown(event) {

  //   const pattern = /^[0-9]*$/;
  //   if (!pattern.test(event.target.value)) {
  //     event.target.value = event.target.value.replace(/[^0-9]/g, '');
  //   }
  // }


  isbn;
  title;
  sector;
  publishedday;
  publishedmonth;
  publishedyear;
  publisheddate;
  reader;
  author;
  publisher;
  numberofpages;
   addbook(){
    
    //const pattern = /[0-9\+\-\ ]/;
    // if (!pattern.test(event.target.value)) {
    //   event.target.value = event.target.value.replace(/[^0-9]/g, '');
    // }
    
     
   // console.log(this.isbn);
    let post=
    {
      isbn:this.isbn,
      title:this.title,
      sector:this.sector,
      publisheddate:this.publishedday+"/"+this.publishedmonth+"/"+this.publishedyear,
      numberofpages:this.numberofpages,
      publisher:this.publisher,
      author:this.author,

      
    }
  //   if(this.isbn=='/[0-9\+\-\ ]/'){
  //     console.log(this.isbn);
  //   alert('Successfully added a new Book! \n\n' + JSON.stringify(this.isbn)+ 'to the list')
  //  }
  //  else{
  //   console.log(this.isbn);
  //   alert('Failed to add a new book! \n\n ISBN number '+ JSON.stringify(this.isbn)+ 'to the list')
  //  }
    this.http.post(this.url,post).subscribe(
      response =>
      {
        console.log(response);
        
      }
    )
   }
  

}
