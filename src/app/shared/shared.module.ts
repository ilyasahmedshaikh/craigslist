import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    ImageUploaderComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchBarComponent,
    ImageUploaderComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
