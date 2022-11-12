import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  makeARequest() {
    this.http.get(
      'http://localhost:3000/api/scheduler/getData',
      {
        // headers: new HttpHeaders({
        //   'Authorization': 'ODhDW-tWOd7Uo0-lpyIV1nWzLQmRHqjH5hYR18QfKM4qco7GSIhWpuValltHQZCm-KGgVYRRn8YktfFosXauGwfpYYBd9i6ZbgD4_ebFoIQj7I5tnfLktAhG4IPqYHYx',
        // })
      }
    ).subscribe(res => {
      console.log(res)
    })
  }

}
