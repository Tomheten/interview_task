import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DevInterceptor } from './dev.interceptor';

export const DEV_PROVIDERS: ReadonlyArray<Provider> = [
  { provide: HTTP_INTERCEPTORS, useClass: DevInterceptor, multi: true }
];
