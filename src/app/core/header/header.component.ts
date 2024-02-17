import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubheaderComponent } from '../subheader/subheader.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,SubheaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('offcanvas') offcanvas!: ElementRef;

  closeOffcanvas() {
    this.offcanvas.nativeElement.dispatchEvent(new Event('hide.bs.offcanvas'));
  }
}
