import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasslistSearchComponent } from './classlist-search.component';

describe('ClasslistSearchComponent', () => {
  let component: ClasslistSearchComponent;
  let fixture: ComponentFixture<ClasslistSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasslistSearchComponent]
    });
    fixture = TestBed.createComponent(ClasslistSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
