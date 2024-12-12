import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChallengePageComponent } from './admin-challenge-page.component';

describe('AdminChallengePageComponent', () => {
  let component: AdminChallengePageComponent;
  let fixture: ComponentFixture<AdminChallengePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminChallengePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChallengePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
