import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  constructor(private router:Router) { 
    
  }

  ngOnInit() {
    this.router.events.subscribe((event)=>{
     /*  console.log(event) */
    })
  }

}
