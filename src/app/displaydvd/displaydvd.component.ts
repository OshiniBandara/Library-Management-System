import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";

@Component({
  selector: 'app-displaydvd',
  templateUrl: './displaydvd.component.html',
  styleUrls: ['./displaydvd.component.css']
})
export class DisplaydvdComponent implements OnInit {
dvds;
  constructor(private route:ActivatedRoute,private http:Http) { }
  url='http://localhost:9000/dvds';
  ngOnInit() {
    this.http.get(this.url).subscribe(response =>
      {
          this.dvds=response.json();
      })
  }
  
  display(dvd){
    
  }
}
