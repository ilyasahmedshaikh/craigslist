import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../../core/services/loader/loader.service'

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  @Output() previewImage = new EventEmitter<any>();

  preview: any = "assets/img/img-upload-icon.png";
  percent: number = 0;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  imageUploaded: boolean = false;

  constructor(
    private storage: AngularFireStorage,
    public loader: LoaderService
  ) { }

  ngOnInit(): void {
  }

  uploadFile(event) {
    this.imageUploaded = !this.imageUploaded;
    this.loader.isLoading.next(true);

    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    this.uploadPercent.subscribe(res => this.percent = res );

    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(res => {
          this.preview = res;
          this.imageUploaded = !this.imageUploaded;

          // send status to parent
          this.previewImage.emit({
            preview: this.preview,
            imageUploaded: this.imageUploaded
          })

          // stop loading
          this.loader.isLoading.next(false);
        });
      })
    )
    .subscribe();
  }

  readURL(event: Event): void {
    if (event.target['files'] && event.target['files'][0]) {
      const file = event.target['files'][0];
      const reader = new FileReader();

      // check image size should be <= 100KB
      let imageSizeInKbs = file.size/1024;

      if(imageSizeInKbs <= 100){
        // render image preview in image viewer area
        reader.onload = e => this.preview = reader.result;
        reader.readAsDataURL(file);

        // store image in DB and get store URL
        this.uploadFile(event);
      } else {
        alert('Image should be less than 100KB, reduce your image size using https://tinypng.com/');
      }
    }
  }

  resetPreviewImage() {
    this.preview = "assets/img/img-upload-icon.png";
  }

}