import { TestBed, inject } from "@angular/core/testing";

import { LoginService } from "./login.service";

describe("LoginService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });
  });

  xit("should be created", inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
