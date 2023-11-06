import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserLayoutComponent } from './remove-user-layout.component';

describe('RemoveUserLayoutComponent', () => {
  let component: RemoveUserLayoutComponent;
  let fixture: ComponentFixture<RemoveUserLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveUserLayoutComponent]
    });
    fixture = TestBed.createComponent(RemoveUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
