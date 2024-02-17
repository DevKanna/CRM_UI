import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSideshowImgComponent } from './create-sideshow-img.component';

describe('CreateSideshowImgComponent', () => {
  let component: CreateSideshowImgComponent;
  let fixture: ComponentFixture<CreateSideshowImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSideshowImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSideshowImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
