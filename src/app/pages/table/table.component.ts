import { Component, Input, OnInit } from '@angular/core';
import { Fixture } from 'src/app/models/fixture';
import { Observable } from 'rxjs';
import { FixturesService } from 'src/app/services/fixtures.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  searchResults$: Observable<Fixture[]>;
  displayedColumns: string[] = ['fixtureName', 'kickoff', 'venue'];
  loader:boolean =false;
  recordCheck:any =[];
  timeout: any = null;

  constructor(private fixturesService: FixturesService) { }

  ngOnInit() {
    // this.getSeachValue(null);
  }
  
  getSeachValue(val:any){
    console.log("val",val);
    
    clearTimeout(this.timeout);
    var $this = this;
    this.loader = true;
    this.timeout = setTimeout(function () {
      if (val.keyCode != 13) {
         $this.fixturesService.getFixtures(val).subscribe(res=>{
          if(res){
             $this.recordCheck=res;
             $this.loader = false;
          }
        })
      }
    }, 1000);
    
  }
}
