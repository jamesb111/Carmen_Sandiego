import { Component } from '@angular/core';
import { PexelApiService } from './pexel-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carmen-Sandiego-FP';
  photo: any[];
  nextLocation: string = 'Moscow';

  constructor(private pexelService: PexelApiService) { }
 
  ngOnInit() {
    this.pexelService.getLocationPhoto(`${this.nextLocation}`).subscribe(response => {
      this.photo = response.photos[0].src.small;
      console.log(response);
      return this.photo;
    });
  }
}
