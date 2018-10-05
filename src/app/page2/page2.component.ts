
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  loginMethod;
  showMob: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let loginType = this.route.snapshot.queryParamMap.get('loginBy');
    if(loginType === 'mobileNo'){
      this.showMob = true;
    }
    else if(loginType === 'customerId'){
      this.showMob = false;
    }
  }

}
