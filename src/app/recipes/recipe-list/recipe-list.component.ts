import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('This is a test recipe', 'this is a test description,', 'https://media-cdn.tripadvisor.com/media/photo-s/07/a5/c9/d5/yummy-food.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

}
