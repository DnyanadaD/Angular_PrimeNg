import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Book {
  name: string;
  price: number;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any>('src\app\books.json')
      .toPromise()
      .then(res => <Book[]>res.data)
      .then(data => { return data; });
    }
}
//C:\Users\DNDHORE\OneDrive - Capgemini\Desktop\Daily_Bench_work\Basics\src\app\books.json