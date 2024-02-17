import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { RouterModule } from '@angular/router';
export interface Root {
  STATUS: string
  LIST: List[]
}

export interface List {
  id: number
  content: string
}
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit{

  list:any;
  @ViewChild('someVar') el!:ElementRef;
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    
    this.viewContent();
  }
viewContent(){
  this.api.viewContent().subscribe((res: Root) => {
    console.log(res)
    if(res.STATUS == 'AVAILABLE'){
      this.list=res.LIST[0].content;
      this.list=this.el.nativeElement.innerHTML =this.list;
    }
  })

}
}
