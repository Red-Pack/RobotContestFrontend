import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTestingComponent } from './page-testing.component';

describe('PageTestingComponent', () => {
  let component: PageTestingComponent;
  let fixture: ComponentFixture<PageTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
