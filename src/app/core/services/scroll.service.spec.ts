import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ScrollService } from './scroll.service';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit event', () => {
    service.detectScrollOnBotton.subscribe((value: boolean) => {
      expect(value).toBe(true);
    });
    service.touchBotton();
  });
});
