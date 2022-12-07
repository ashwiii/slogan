import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url = "https://i.postimg.cc/yYgGHxjX/image.png"

  onselect(e: any) {
    if (e.target.files) {
var reader = new FileReader();
reader.readAsDataURL(e.target.files[0]);
reader.onload = (event:any)=>{
  this.url=event.target.result;
}
    }
  }

}
