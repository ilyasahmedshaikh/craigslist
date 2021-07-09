import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { LocationService } from 'src/app/core/services/location/location.service';
import { environment } from 'src/environments/environment';
import { CheckLoginService } from 'src/app/core/services/check-login/check-login.service';

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
  replyMsg: string = '';
  comments: any = [];
  isOwner: boolean = false;
  flagged: boolean = false;
  flaggedCount: number = 0;

  constructor(
    private router: Router,
    private config: ConfigService,
    private api: ApiService,
    private locatioSrv: LocationService,
    private http: HttpClient,
    private checkLogin: CheckLoginService
  ) {
    this.data = this.router.getCurrentNavigation().extras.state.data;
    this.posting = this.router.getCurrentNavigation().extras.state.posting;
  }

  ngOnInit(): void {
    // this.getLocation();
    this.seeIfFlagged();
    this.getComments();

    if(this.checkLogin.getUserData().id == this.data.user.id) this.isOwner = true;
    else this.isOwner = false;
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

  getComments() {
    this.api.getWithQuery(this.config.collections.comments, 'postId', "==", this.data.id).subscribe(res => {
      this.comments = res;
    })
  }

  seeIfFlagged() {
    this.api.getWithQuery(this.config.collections.flagged, 'postId', "==", this.data.id).subscribe(res => {
      if(res['length'] > 0) {
        this.flagged = true;
        this.flaggedCount = res['length'];
      }
    })
  }

  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  emailClicked() {
    let email = prompt("Email:");
    let cooked = `mailto:${email}?subject=${this.data.postingTitle}&body=${this.data.description}`
    window.location.href = cooked;
  }

  setReply(event) {
    this.replyMsg = event.target.value;
  }

  reply() {
    let data = {
      msg: this.replyMsg,
      postId: this.data.id,
      user: this.checkLogin.getUserData().firstname +' '+this.checkLogin.getUserData().lastname,
      createdAt: new Date().toDateString()
    }
    
    let request = this.api.post(this.config.collections.comments, data);

    request.then(() => {
      this.getComments();
    })
    .catch((error) => {
      alert(error);
    });
  }

  delete() {
    this.api.delete(this.config.collections.posts, this.data.id).then(() => {
      this.router.navigateByUrl("/homepage");
    })
    .catch((error) => {
      alert(error);
    });
  }

  favouriteNflag(type) {
    let collection = type == 'flag' ? 'flagged' : 'favourites';

    let data = {
      postId: this.data.id,
      type: type,
      user: this.checkLogin.getUserData()
    }

    this.api.post(collection, data).then(() => {
      alert('Marked as ' + type);
      this.router.navigateByUrl('/homepage');
    })
    .catch((error) => {
      alert(error);
    });
  }

}
