import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = input('Default title');

  // navigateHome = ()=>{
  //   console.log("home")
  // }

  // navigatePage1 = ()=>{
  //   console.log("page1")
  // }

  // navigatePage2 = ()=> [
  //   console.log("page2")
  // ]
}
