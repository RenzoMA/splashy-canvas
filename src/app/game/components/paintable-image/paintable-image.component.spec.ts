import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintableImageComponent } from './paintable-image.component';

describe('PaintableImageComponent', () => {
  let component: PaintableImageComponent;
  let fixture: ComponentFixture<PaintableImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintableImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaintableImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
