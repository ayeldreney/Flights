/* tslint:disable */
/* eslint-disable */
import { TimePlace } from '../models/time-place';
export interface FlightRm {
  airline?: null | string;
  arrival?: TimePlace;
  departure?: TimePlace;
  id?: string;
  price?: null | string;
  remainingBumberOfSeats?: number;
}
