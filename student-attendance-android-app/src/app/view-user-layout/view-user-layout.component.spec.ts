import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserLayoutComponent } from './view-user-layout.component';

describe('ViewUserLayoutComponent', () => {
  let component: ViewUserLayoutComponent;
  let fixture: ComponentFixture<ViewUserLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserLayoutComponent]
    });
    fixture = TestBed.createComponent(ViewUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
