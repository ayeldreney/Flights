/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { flightGet } from '../fn/flight/flight-get';
import { FlightGet$Params } from '../fn/flight/flight-get';
import { flightGet$Plain } from '../fn/flight/flight-get-plain';
import { FlightGet$Plain$Params } from '../fn/flight/flight-get-plain';
import { flightIdGet } from '../fn/flight/flight-id-get';
import { FlightIdGet$Params } from '../fn/flight/flight-id-get';
import { flightIdGet$Plain } from '../fn/flight/flight-id-get-plain';
import { FlightIdGet$Plain$Params } from '../fn/flight/flight-id-get-plain';
import { FlightRm } from '../models/flight-rm';

@Injectable({ providedIn: 'root' })
export class FlightService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `flightGet()` */
  static readonly FlightGetPath = '/Flight';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `flightGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightGet$Plain$Response(params?: FlightGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FlightRm>>> {
    return flightGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `flightGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightGet$Plain(params?: FlightGet$Plain$Params, context?: HttpContext): Observable<Array<FlightRm>> {
    return this.flightGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FlightRm>>): Array<FlightRm> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `flightGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightGet$Response(params?: FlightGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FlightRm>>> {
    return flightGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `flightGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightGet(params?: FlightGet$Params, context?: HttpContext): Observable<Array<FlightRm>> {
    return this.flightGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FlightRm>>): Array<FlightRm> => r.body)
    );
  }

  /** Path part for operation `flightIdGet()` */
  static readonly FlightIdGetPath = '/Flight/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `flightIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightIdGet$Plain$Response(params: FlightIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FlightRm>> {
    return flightIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `flightIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightIdGet$Plain(params: FlightIdGet$Plain$Params, context?: HttpContext): Observable<FlightRm> {
    return this.flightIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FlightRm>): FlightRm => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `flightIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightIdGet$Response(params: FlightIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<FlightRm>> {
    return flightIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `flightIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  flightIdGet(params: FlightIdGet$Params, context?: HttpContext): Observable<FlightRm> {
    return this.flightIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<FlightRm>): FlightRm => r.body)
    );
  }

}
