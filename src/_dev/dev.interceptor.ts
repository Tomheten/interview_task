import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable, of } from 'rxjs'

const userInfo = {
  name: 'Pete',
  age: 100,
  licenses: [1230, 3213],
} as const

const licenses = [
  {
    id: userInfo.licenses[0],
    name: 'can_dig',
    description: 'This license confirms that the recipient of it can dig',
  },
  {
    id: userInfo.licenses[1],
    name: 'can_rest',
    description: 'This license confirms that the recipient of it can rest',
  },
] as const

export class DevInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({ url: '/proxy' + req.url })
    return next.handle(dupReq)

    //stackblitz
    if (req.method === 'GET' && req.url.includes('users')) {
      return of(new HttpResponse({ status: 200, body: structuredClone(userInfo) }))
    } else if (req.method === 'GET' && req.url.includes('licenses')) {
      return of(new HttpResponse({ status: 200, body: structuredClone(licenses) }))
    } else {
      throw new Error()
    }
  }
}
