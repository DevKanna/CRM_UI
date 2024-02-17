import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContentImgComponent } from './create-content-img.component';

describe('CreateContentImgComponent', () => {
  let component: CreateContentImgComponent;
  let fixture: ComponentFixture<CreateContentImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateContentImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateContentImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
