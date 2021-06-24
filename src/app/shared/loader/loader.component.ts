import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../core/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading: boolean;
  loader: any = "assets/img/loading.gif";

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }

}