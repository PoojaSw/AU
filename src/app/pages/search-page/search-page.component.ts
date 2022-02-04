import { Component, OnInit, AfterContentInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  
  @Output() onChange = new EventEmitter<any>();
  search:any;
  displayedColumns: string[] = ['fixtureName', 'kickoff', 'venue'];
  loader:boolean =false;
  constructor() { }

  ngOnInit() {
    
  }

  searchChange(event:Event){
    const target = event.target as HTMLTextAreaElement;
    this.search=target.value;
    this.onChange.emit(this.search); // this will pass the $event object to the parent component.
}
}
