import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTestingComponent } from './page-testing.component';

describe('PageTestingComponent', () => {
  let component: PageTestingComponent;
  let fixture: ComponentFixture<PageTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial tests', () => {
    expect(component.tests.length).toBe(3);
    expect(component.tests).toEqual(['Испытание 1', 'Испытание 2', 'Испытание 3']);
  });

  it('should add a new test when addTest is called', () => {
    component.addTest();
    expect(component.tests.length).toBe(4);
    expect(component.tests[3]).toBe('Испытание 4');
  });
});