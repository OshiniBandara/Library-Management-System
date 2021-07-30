import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-deletedvd',
  templateUrl: './deletedvd.component.html',
  styleUrls: ['./deletedvd.component.css']
})
export class DeletedvdComponent implements OnInit {
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
  delete(dvd)
  {
    // alert('Successfully deleted a Book! \n\n' + JSON.stringify(this.isbn)+ 'from the list')
    console.log(dvd);
    
    
    this.http.delete(this.url+'/'+dvd.id).subscribe(response =>
      {
        console.log(response);
        this.ngOnInit();
        
      })
  }

}
