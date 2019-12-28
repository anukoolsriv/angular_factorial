import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'factorial';
  fact:number;
  factorialNikalo():void{
    let factorial:number = 1; 
    
    this.fact = document.getElementById("num").value;

    for(let i = 1;i<=this.fact;i++)
    {
      factorial *=i;
    }
    this.fact = factorial;
  }
}
