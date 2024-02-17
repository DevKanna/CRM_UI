import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxEditorModule, Editor, Toolbar } from 'ngx-editor';
import { ApiService } from '../Service/api.service';
import { SnackbarService } from '../Service/snackbar.service';
import { contentModel } from '../content/contentModel';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [NgxEditorModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent implements OnInit, OnDestroy {
  //@ts-ignore
  contentdata: contentModel = new contentModel();
  editor!: Editor;
  html = '';
  images: any;
  sanitizedHtml: SafeHtml = '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor(private sanitizer: DomSanitizer, private snackbar: SnackbarService, private router: Router, private api: ApiService) { }


  sent() {
    console.log("HTML value:", this.html);
    this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(this.html);
    console.log("sanitized :", this.sanitizedHtml)
    this.contentdata.content = this.html;
    this.api.createContent(this.contentdata).subscribe((res: any) => {
      console.log(res)
      if(res.STATUS == 'Updated Successfully'){
        this.snackbar.success(res.STATUS);
        this.router.navigate(['./parent/content'])
      }else{
        this.snackbar.success('Something wrong');
      }
    })




  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.api.viewContent().subscribe((res: any) => {
      console.log(res)
      this.html=res.LIST[0].content;
    })
    // this.images = [1, 2, 3].map(() => 'https://picsum.photos/900/500?random&t=${Math.random()');

  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
