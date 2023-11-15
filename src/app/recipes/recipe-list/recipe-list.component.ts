import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: any[] = [
    {
      name: 'Test Recipe 1',
      description: 'Test Desc 1',
    },
    {
      name: 'Test Recipe 2',
      description: 'Test Desc 2',
    },
  ];
  @Output() recipeSelected = new EventEmitter<{}>();

  recipeWasSelected(data) {
    //console.log(data);
    this.recipeSelected.emit(data);
  }
}
