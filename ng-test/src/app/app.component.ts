import { Component } from '@angular/core';
import { LibService } from '@lib/lib/lib.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-test';

  items: Object[];
  observer: Observable<any[]>;

  constructor(lib: LibService) {
    this.items = lib.getItems();

    this.observer = lib.itemChanged.subscribe(
      (items: any[]) => this.items = items
    );
  }
}
