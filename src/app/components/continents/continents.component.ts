import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  ngOnInit() {
  }

  routeTo(continent: string) {
    this.router.navigate([`${continent}`], { relativeTo: this.route });
  }

}
