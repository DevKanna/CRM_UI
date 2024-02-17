import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowImgComponent } from './slide-show-img.component';

describe('SlideShowImgComponent', () => {
  let component: SlideShowImgComponent;
  let fixture: ComponentFixture<SlideShowImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideShowImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideShowImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
