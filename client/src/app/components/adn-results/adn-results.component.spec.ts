import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnResultsComponent } from './adn-results.component';

describe('AdnResultsComponent', () => {
  let component: AdnResultsComponent;
  let fixture: ComponentFixture<AdnResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdnResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdnResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
