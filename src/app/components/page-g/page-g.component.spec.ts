import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGComponent } from './page-g.component';

describe('PageGComponent', () => {
  let component: PageGComponent;
  let fixture: ComponentFixture<PageGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
