import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const userInfo = {
  name: 'Pete',
  age: 100,
  licenses: [1230, 3213]
}

const licenses = [
  {
    id: userInfo.licenses[0],
    name: 'can_dig',
    description: 'This license confirms that the recipient of it can dig'
  },
  {
    id: userInfo.licenses[1],
    name: 'can_rest',
    description: 'This license confirms that the recipient of it can rest'
  }
]

export class DevInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({ url: '/proxy' + req.url });

    //stackblitz
    // if(req.method === 'GET' && req.url.includes('users')) {
    //   return of(new HttpResponse({ status: 200, body: userInfo }));
    // }
    // if(req.method === 'GET' && req.url.includes('licenses')) {
    //   return of(new HttpResponse({ status: 200, body: licenses }));
    // }

    return next.handle(dupReq);
  }
}
