import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {Pizza} from './pizza';
import {Address, Order} from './models';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaURL = 'api/pizzas'; // URL to web api
  private orderURL = 'api/orders'; // URL to web api
  private addressURL = 'api/addresses'; // URL to web api

  constructor(private http: HttpClient) {
  }

  /* GET pizzas based on search term */
  searchPizza(term): Observable<Pizza[]> {
    console.log('GET', term);

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
      {params: new HttpParams().set('name', term)} : {};
    return this.http.get<Pizza[]>(this.pizzaURL, options)
      .pipe(
        tap(_ => this.log(`fetched pizza based oon search term ${term}`)),
        catchError(this.handleError<Pizza[]>('searchPizzas', []))
      );
  }

  /** GET pizza by id. Will 404 if id not found */
  getPizza(id: number): Observable<Pizza> {
    const url = `${this.pizzaURL}/${id}`;
    return this.http.get<Pizza>(url).pipe(
      tap(_ => this.log(`fetched pizza id=${id}`)),
      catchError(this.handleError<Pizza>(`getPizza id=${id}`))
    );
  }

  /** Insert new Order */

  public createOrder(order: Order) {
    return this.http.post(`${this.orderURL}`, order);
  }

  /** Insert new address */

  public createAddress(address: Address) {
    return this.http.post(`${this.addressURL}`, address);
  }

  /** get All address */

  public getAllAddresses() {
    return this.http.get(`${this.addressURL}`);
  }

  async getAddress(id: number): Promise<any> {
    const url = `${this.addressURL}/${id}`;
    return await this.http.get<Address>(url).toPromise();
  }

  /** get All orders */

  public getAllOrders() {
    return this.http.get(`${this.orderURL}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.error('PizzaService: ' + message);
  }
}
