import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerRank } from '../../common';
import { HttpService } from '../../http/http.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit {
  driver: PlayerRank;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router,
  ) {
    this.driver = {
      name: '',
      gain: 0,
      points: 0,
      team: '-',
      penaltyPoints: 0,
      nextRacePenalty: '',
      country: '',
      tier: 'gold',
      raceInvolvement: 0,
      isCleanDriver: false,
      hasCleanRace: false,
      consecutiveCleanRaces: 0,
      isPotentialCleanDriver: true,
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.httpService.getDriver(params['id']).subscribe((driver) => this.driver = driver)
      }
    })
  }

  save(): void {
    this.httpService.addDriver(this.driver).subscribe(() => {
      this.router.navigate(['adm/drivers']);
    });
  }

  delete(): void {
    this.httpService.deleteDriver(this.driver['_id']).subscribe(() => {
      this.router.navigate(['adm/drivers']);
    });
  }

}
