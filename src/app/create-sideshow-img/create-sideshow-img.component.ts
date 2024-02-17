import { Component, ViewChild } from '@angular/core';
import { DomSanitizer, HammerModule } from '@angular/platform-browser';
import { ImageCroppedEvent, ImageCropperModule, LoadedImage } from 'ngx-image-cropper';
import { ApiService } from '../Service/api.service';
import { SnackbarService } from '../Service/snackbar.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sideshow-img',
  standalone: true,
  imports: [ImageCropperModule, HammerModule],
  templateUrl: './create-sideshow-img.component.html',
  styleUrl: './create-sideshow-img.component.scss'
})
export class CreateSideshowImgComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  Image: any = '';
  @ViewChild('slideshowForm', { static: false }) slideshowForm!: NgForm;


  constructor(private snackbar: SnackbarService, private router: Router, private api: ApiService) { }


  submit() {
    if (this.croppedImage == '') {
      this.snackbar.success("Please Select Image")
      return
    }

    const formData = new FormData();
    console.log(this.croppedImage)
    formData.append('image', this.croppedImage);
    this.api.createslideshow(formData).subscribe((res: any) => {
      console.log(res);
      if (res.STATUS == 'Image Uploaded Successfully') {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
        });
        this.snackbar.success(res.STATUS)
      } else {
        this.snackbar.error(res.STATUS)
      }
    });
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log(event)
    this.croppedImage = event.blob;


  }
  imageLoaded(image: LoadedImage) {

    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    alert('while selecting error')
    // show message
  }



}
