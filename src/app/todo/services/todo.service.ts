import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';

import { Todo, TodoCreateDto, TodoUpdateDto } from '../models';

/**
 * Service
 */
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    private _cookieService: CookieService,
    private http: HttpClient,
    @Inject('API_URL') private baseUrl: string
  ) {}

  /**
   * Find all
   *
   * @param offset Offset
   * @param limit Limit
   */
  findAll(offset?: number, limit?: number): Observable<Todo[]> {
    const url = `${this.baseUrl}`;
    let params = new HttpParams();
    params = offset ? params.set('offset', `${offset}`) : params;
    params = limit ? params.set('limit', `${limit}`) : params;
    return this.http.get<Todo[]>(url, { params });
  }

  /**
   * Find
   *
   * @param id ID
   */
  find(id: string): Observable<Todo> {
    const url = `${this.baseUrl}?userid=${id}`;
    return this.http.get<Todo>(url);
  }

  /**
   * Create
   *
   * @param todo Todo
   */
  create(userId: string, todo: TodoCreateDto): Observable<Todo> {
    userId = this._cookieService.get('auth0');
    console.log('userId', userId);
    const url = `${this.baseUrl}?userId=${userId}`;
    return this.http.post<Todo>(url, todo);
  }

  /**
   * Update
   *
   * @param todo Todo
   */
  update(userId: string, todo: TodoUpdateDto): Observable<Todo> {
    const url = `${this.baseUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  /**
   * Remove
   *
   * @param id ID
   */
  remove(id: string): Observable<string> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url).pipe(map(() => id));
  }
}
