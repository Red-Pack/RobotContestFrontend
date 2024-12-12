import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJudgePageComponent } from './admin-judge-page.component';

describe('AdminJudgePageComponent', () => {
  let component: AdminJudgePageComponent;
  let fixture: ComponentFixture<AdminJudgePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminJudgePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminJudgePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
