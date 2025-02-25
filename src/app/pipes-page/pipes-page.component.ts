import { CurrencyPipe, DatePipe, JsonPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { KebabCasePipe } from './kebab-case.pipe';

@Component({
  selector: 'app-pipes-page',
  imports: [UpperCasePipe, CurrencyPipe, JsonPipe, DatePipe, PercentPipe, KebabCasePipe],
  templateUrl: './pipes-page.component.html',
  styleUrl: './pipes-page.component.scss'
})
export class PipesPageComponent {
  upperCaseString="to upper case"
  price="3.54"
  randomObject = {
    name: "hi",
    age: 30
  }
  today="2-25-25"
  percentValue=0.26
  toKebabCaseString="thisWasCamelCase"
}
