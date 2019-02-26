import { Component } from '@angular/core';
import { LibService } from '@lib/lib/lib.service';
import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs'; // => Works with this one

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-test';

  items: Object[];
  observer: Observable<any[]>;

  constructor(private _lib: LibService) {
    this.observer = _lib.itemChanged.subscribe( (items: any[]) => this.items = items );
    this.items = this._lib.getItems();
  }

  private addItem(key: string): void {
    this._lib.addItem(key);
  }

  private removeItem(key: string): void {
    this._lib.deleteItem(key);
  }

  public onAddBtnClick( val: string): void {
    this.addItem(val);
  }
  public onRemoveBtnClick( val: string ): void {
    this.removeItem(val);
  }
}
