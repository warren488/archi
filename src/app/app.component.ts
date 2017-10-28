import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app wizzle!';
}

@Component({
  selector: 'test',
  templateUrl: './test.html',
  styleUrls: ['./test.scss']
})
export class TestComponent {
  constructor(){
    
  }

  check(){
    var answer1 = document.getElementsByName('answer1')[0].nodeValue
    var answer2 = document.getElementsByName('answer2')[0].innerHTML

    document.getElementById('test').innerHTML = answer1+"  "+answer2;
    
  }
  
}
