import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserLayoutComponent } from './add-user-layout.component';

describe('AddUserLayoutComponent', () => {
  let component: AddUserLayoutComponent;
  let fixture: ComponentFixture<AddUserLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserLayoutComponent]
    });
    fixture = TestBed.createComponent(AddUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
