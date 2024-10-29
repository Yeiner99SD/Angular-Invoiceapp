import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientViewComponent } from './cient-view.component';

describe('CientViewComponent', () => {
  let component: CientViewComponent;
  let fixture: ComponentFixture<CientViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CientViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
