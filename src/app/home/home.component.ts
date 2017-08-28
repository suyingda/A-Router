import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';  // 接收router =参数的配置项
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      console.log(params)
    });
  }
  public manualNav(): void {
    this.router.navigateByUrl("/jokes");
  }


}
