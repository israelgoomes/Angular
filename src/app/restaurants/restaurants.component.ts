import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/resturant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
restaurant: Restaurant[] 


  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
this.restaurant = this.restaurantService.restaurants()
  }

}
