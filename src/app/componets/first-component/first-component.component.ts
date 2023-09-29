import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
variable = 1;

  ngOnInit(): void {
  console.log('ngOnInit')
}

varChange(){
  this.variable++;
}
}
