import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor() { }

  public display_tags: boolean = false;
  public search_input = ""

  public slideOpts = {
    initialSlide: 1,
    speed: 200,
    slidesPerView: 2,
    autoplay:true
  };

  ngOnInit() {
  }

  onInput($event) {
    if(this.search_input != ""){
      this.display_tags = true;
    } else{
      this.display_tags = false;
    }
  }


}
