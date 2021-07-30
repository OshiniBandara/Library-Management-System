import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";

@Component({
  selector: 'app-borrowbook',
  templateUrl: './borrowbook.component.html',
  styleUrls: ['./borrowbook.component.css']
})
export class BorrowbookComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:Http) { }
  url='http://localhost:9000/allborrowbooks';
  borrowbooks;
  ngOnInit() {

    this.http.get(this.url).subscribe(response =>
      {
          this.borrowbooks=response.json();
      })
  }
  isbn;
  title;
  borroweddate;
  reader;
 
  borrowbook(){
    //alert('Successfully borrowed a Book! \n\n' + JSON.stringify(this.isbn)+ 'from the list')
    console.log(this.isbn);
    let post=
    {
      isbn:this.isbn,
      title:this.title,
      borrowdate:this.borroweddate,
      reader:this.reader,
      
    }
    var angular: any;
    var app = angular.module('borrowbook', []);

  app.controller("my-controller", function($scope) {
  $scope.mydate = new Date(this.borrowdate);

  var numberOfDaysToAdd = 7;
  $scope.newdate = $scope.mydate.setDate($scope.mydate.getBorrowdate() + numberOfDaysToAdd); 

});
    
      this.http.post(this.url,post).subscribe(
        response =>
        {
          console.log(response);
          
        }
      )
      }
    }
