import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class Item {
    constructor(public id: number = Math.random()) {}
}

/**
 *  LibService Class
 */
@Injectable()
export class LibService {
    // Items cache
    private items: Map<string, Item> = new Map<string, Item>();

    // Server Subject to be hooked from outside
    public itemChanged = new Subject<Item[]>();

    public addItem(key: string) {
        this.items.set(key, new Item());
        this.emit();
    }

    public deleteItem(key: string) {
        this.items.delete(key);
        this.emit();
    }

    private emit() {
        this.itemChanged.next(this.items);
    }

    getItems(): Item[] {
        return Array.from(this.items.values());
    }
}