import { Component } from '@angular/core';
import { BookService ,Book} from '../book.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.scss']
})
export class BookDataComponent {
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  books: Book[]=[
       {"name": "The Godfather", "price": 10, "author": "Mario Puzo"},
        {"name": "The Fellowship of the Ring", "price": 15, "author": "J.R.R. Tolkien"},
        {"name": "Harry Potter and the Deathly Hallows", "price": 20, "author": "J.K. Rowling  "} 
  ];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.fetchPosts();
      this.bookService.getBooks().
      then(books => this.books = books);
  }
  fetchPosts(): void {
    // this.postService.getAllPosts().subscribe(
    //   (response) => {
    //     this.POSTS = response;
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
