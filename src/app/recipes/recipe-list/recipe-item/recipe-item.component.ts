import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe = { name: '', description: '' };
  @Output() selectRecipe = new EventEmitter<{}>();

  recipeSelected() {
    //console.log(this.recipe);
    this.selectRecipe.emit(this.recipe);
  }
}
