import { Component } from '@angular/core';
import { FoodEntry } from './foodEntry';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food log';
  foodEntries: Array<FoodEntry>;
  foodData: any;
  foodName: string;
  foodItem = new FoodEntry();

  constructor (private http: HttpClient) { }

  showAllFoods() {
    this.http.get<Array<FoodEntry>>('http://localhost:8080/home/foodlog').subscribe(foodEntries => {
      this.foodEntries = foodEntries;
      console.log(this.foodEntries);
    })
  }

  getFood() {
    this.http.get('https://api.nal.usda.gov/ndb/reports/?ndbno=80200&type=b&format=json&api_key=DEMO_KEY').subscribe
    (foodObject => {
      this.foodData = foodObject;
      this.foodName = this.foodData.report.food.name;
      //this.foodItem = new FoodEntry();
      this.foodItem.foodName = this.foodData.report.food.name;
      console.log(this.foodItem.foodName);
    })
  }

  lukaWantsABetterMethodNameForPosting () {
    this.http.post('http://localhost:8080/home/foodlog', this.foodItem).subscribe
    (pancake => {
      console.log("success");
    })
  }

  deleteFoodsOnTheList() {
    this.http.delete('http://localhost:8080/home/id', )
  }





  
}


