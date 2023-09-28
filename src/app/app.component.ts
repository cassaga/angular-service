import { Component } from '@angular/core';
import {NasaService} from "./nasa-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-service';
  public imgOfTheDay? : any;

  constructor(private nasaService: NasaService) { }


  ngOnInit(): void {
      this.nasaService.getImageOfTheDay().subscribe(api => {
      this.imgOfTheDay = api;
    });
  }


}
