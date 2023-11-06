import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeblockComponent } from './attributeblock.component';

describe('AttributeblockComponent', () => {
  let component: AttributeblockComponent;
  let fixture: ComponentFixture<AttributeblockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttributeblockComponent]
    });
    fixture = TestBed.createComponent(AttributeblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
