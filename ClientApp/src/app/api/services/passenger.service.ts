/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { passengerEmailGet } from '../fn/passenger/passenger-email-get';
import { PassengerEmailGet$Params } from '../fn/passenger/passenger-email-get';
import { passengerEmailGet$Plain } from '../fn/passenger/passenger-email-get-plain';
import { PassengerEmailGet$Plain$Params } from '../fn/passenger/passenger-email-get-plain';
import { passengerPost } from '../fn/passenger/passenger-post';
import { PassengerPost$Params } from '../fn/passenger/passenger-post';
import { PassengerRm } from '../models/passenger-rm';

@Injectable({ providedIn: 'root' })
export class PassengerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `passengerPost()` */
  static readonly PassengerPostPath = '/Passenger';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `passengerPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  passengerPost$Response(params?: PassengerPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return passengerPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `passengerPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  passengerPost(params?: PassengerPost$Params, context?: HttpContext): Observable<void> {
    return this.passengerPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `passengerEmailGet()` */
  static readonly PassengerEmailGetPath = '/Passenger/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `passengerEmailGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  passengerEmailGet$Plain$Response(params: PassengerEmailGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PassengerRm>> {
    return passengerEmailGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `passengerEmailGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  passengerEmailGet$Plain(params: PassengerEmailGet$Plain$Params, context?: HttpContext): Observable<PassengerRm> {
    return this.passengerEmailGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PassengerRm>): PassengerRm => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `passengerEmailGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  passengerEmailGet$Response(params: PassengerEmailGet$Params, context?: HttpContext): Observable<StrictHttpResponse<PassengerRm>> {
    return passengerEmailGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `passengerEmailGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  passengerEmailGet(params: PassengerEmailGet$Params, context?: HttpContext): Observable<PassengerRm> {
    return this.passengerEmailGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<PassengerRm>): PassengerRm => r.body)
    );
  }

}
