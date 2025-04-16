import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * ApiService
 * 
 * Base service for making HTTP requests to the backend API
 * This service will be used for future integration with the .NET backend
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * API base URL - will be configured for your .NET backend later
   * This is a placeholder - update it when implementing the actual backend
   */
  private apiUrl = 'https://api.example.com/api';

  /**
   * Default HTTP options for API requests
   */
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  /**
   * Make a GET request to the API
   * @param endpoint API endpoint path
   * @returns Observable with the response data
   */
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Make a POST request to the API
   * @param endpoint API endpoint path
   * @param data Request payload
   * @returns Observable with the response data
   */
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Make a PUT request to the API
   * @param endpoint API endpoint path
   * @param data Request payload
   * @returns Observable with the response data
   */
  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Make a DELETE request to the API
   * @param endpoint API endpoint path
   * @returns Observable with the response data
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Error handler for API requests
   * @param error The error object
   * @returns An observable that errors with the formatted error message
   */
  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
