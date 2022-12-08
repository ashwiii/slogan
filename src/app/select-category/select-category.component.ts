import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css']
})
export class SelectCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countDownDate= new Date("december 30,2022 15:37:27").getTime();
demo:any
  x = setInterval(()=>{
    var now = new Date().getTime();
    var distance = this.countDownDate - now
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds= Math.floor((distance % (1000*60)) / 1000);
    this.demo = days + "d "+hours + "h " + minutes + "m "+seconds + "s";
    if(distance<0){
      clearInterval(this.x)
      this.demo="Expired"
    }
  })

}
