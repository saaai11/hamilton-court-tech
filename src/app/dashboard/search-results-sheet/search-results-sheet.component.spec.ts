import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsSheetComponent } from './search-results-sheet.component';

describe('SearchResultsSheetComponent', () => {
  let component: SearchResultsSheetComponent;
  let fixture: ComponentFixture<SearchResultsSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
