import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentImgComponent } from './content-img.component';

describe('ContentImgComponent', () => {
  let component: ContentImgComponent;
  let fixture: ComponentFixture<ContentImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
