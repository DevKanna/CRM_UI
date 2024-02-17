import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ApiService } from '../Service/api.service';
import { SnackbarService } from '../Service/snackbar.service';
import { DialogComponent } from '../dialog/dialog.component';
import { slideshowModel } from '../slide-show-img/slideshowmodel';
import { RouterModule } from '@angular/router';
interface RootObject {
  STATUS: string;
  Data: Datum[];
}
interface Datum {
  id: number;
  image: string;
}
@Component({
  selector: 'app-content-img',
  standalone: true,
  imports: [CommonModule, MatDialogModule,RouterModule],
  templateUrl: './content-img.component.html',
  styleUrl: './content-img.component.scss'
})
export class ContentImgComponent {
 
  isHovered = false;
  resultData: any;
  productData: any = [];
  msg: any;
 //@ts-ignore
  deleteddata: slideshowModel = new slideshowModel();


  // productData = [
  //   'https://picsum.photos/600/400/?image=0',
  //   'https://picsum.photos/600/400/?image=1',
  //   'https://picsum.photos/600/400/?image=2',
  // ];
  constructor(private api: ApiService, private dialog: MatDialog,private snackbar:SnackbarService) { }


  ngOnInit(): void {
    this.contentimageView();
  }

  contentimageView(){
    this.api.contentimageView().subscribe((res: RootObject) => {
      if (res.STATUS === 'DATA_AVAILABLE') {
        this.resultData = res.Data;
        console.log("res data  =", this.resultData)
        // this.productData=res.Data

        this.productData = res.Data.map(item => item.image);
        // console.log("Response", this.productData);
      } else {
        console.error("Error fetching data");
      }
    });
  }
  deleteItem(id: any) {

    this.deleteddata.id = id;
    console.log(id)
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: 'approval', message: 'Are you sure want to delete?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'true') {
        this.api.contentDeleteById(this.deleteddata).subscribe((data:any) => {
          console.log(data);
          if (data.STATUS == "Deleted Successfully") {
            this.contentimageView();
            this.snackbar.success(data.STATUS);
          } else {
            this.msg = result.STATUS;
            this.snackbar.success(this.msg);

          }
        },);
      }
    });

  }

}