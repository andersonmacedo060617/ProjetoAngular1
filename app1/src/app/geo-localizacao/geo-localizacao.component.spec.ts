import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocalizacaoComponent } from './geo-localizacao.component';

describe('GeoLocalizacaoComponent', () => {
  let component: GeoLocalizacaoComponent;
  let fixture: ComponentFixture<GeoLocalizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLocalizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
