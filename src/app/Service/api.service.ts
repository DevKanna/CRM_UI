import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  BASE_URL = this.appConfigService.getConfig()["BASE_URL"];
  ADMIN_URL: string= '/admin';


  constructor(private http: HttpClient,private appConfigService: AppConfigService){}
  
  

  // view slideshow image
  slideshow(): Observable<any> {
    let url = this.BASE_URL + this.ADMIN_URL + "/viewSlideShow";
    console.log("url :", url);
    return this.http.get(url);
  }

  createslideshow(formdata:any): Observable<any> {
    let url = this.BASE_URL + this.ADMIN_URL + "/saveSlideShow";
    console.log("url :", url);
    return this.http.post(url,formdata,{responseType: 'json'});
  }

  slideshowDeleteById(deleteddata: any) {
    let url = this.BASE_URL + this.ADMIN_URL + "/deleteSlideShow";
    console.log("url :", url);
    return this.http.post(url,deleteddata,{responseType: 'json'});
  }

  contentimageView(): Observable<any> {
    let url = this.BASE_URL + this.ADMIN_URL + "/viewContentImg";
    console.log("url :", url);
    return this.http.get(url);
  }

  contentDeleteById(deleteddata: any) {
    let url = this.BASE_URL + this.ADMIN_URL + "/deleteContentImg";
    console.log("url :", url);
    return this.http.post(url,deleteddata,{responseType: 'json'});
  }

  createcontentimage(formdata:any): Observable<any> {
    let url = this.BASE_URL + this.ADMIN_URL + "/saveContentImg";
    console.log("url :", url);
    return this.http.post(url,formdata,{responseType: 'json'});
  }

  createContent(content:any): Observable<any> {
    let url = this.BASE_URL + this.ADMIN_URL + "/createContent";
    console.log("url :", url);
    return this.http.post(url,content,{responseType: 'json'});
  }
  
  viewContent(): Observable<any> {
    let url = this.BASE_URL + this.ADMIN_URL + "/viewContent";
    console.log("url :", url);
    return this.http.post(url,{responseType: 'json'});
  }
}
