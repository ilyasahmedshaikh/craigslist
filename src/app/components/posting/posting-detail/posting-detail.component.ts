import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { LocationService } from 'src/app/core/services/location/location.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posting-detail',
  templateUrl: './posting-detail.component.html',
  styleUrls: ['./posting-detail.component.scss']
})
export class PostingDetailComponent implements OnInit {

  data: any = {};
  posting: any = {};
  lat: number = 0;
  lng: number = 0;

  constructor(
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
    private locatioSrv: LocationService,
    private http: HttpClient
  ) {
    this.data = this.router.getCurrentNavigation().extras.state.data;
    this.posting = this.router.getCurrentNavigation().extras.state.posting;
  }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    this.locatioSrv.getPosition().then(pos => {
      this.lat = pos.lat;
      this.lng = pos.lng;

      this.http.get(`${environment.google_geocode_base_url}?latlng=${this.lat},${this.lng}&key=${environment.google_maps_api}`).subscribe(res => {
        console.log(res);
      })
    });
  }

  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

}
