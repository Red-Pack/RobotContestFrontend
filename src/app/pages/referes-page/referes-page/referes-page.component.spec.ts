import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferesPageComponent } from './referes-page.component';

describe('ReferesPageComponent', () => {
  let component: ReferesPageComponent;
  let fixture: ComponentFixture<ReferesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
