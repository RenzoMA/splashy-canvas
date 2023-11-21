import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingInstructionsComponent } from './landing-instructions.component';

describe('LandingInstructionsComponent', () => {
  let component: LandingInstructionsComponent;
  let fixture: ComponentFixture<LandingInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingInstructionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
