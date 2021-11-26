import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnPostingComponent } from './adn-posting.component';

describe('AdnPostingComponent', () => {
  let component: AdnPostingComponent;
  let fixture: ComponentFixture<AdnPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdnPostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdnPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
