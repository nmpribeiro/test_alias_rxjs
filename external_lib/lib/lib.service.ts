import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class Item {
    constructor(public key: string, public id: number = Math.random()) {}
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
        if (this.items.has(key)) return;
        this.items.set(key, new Item(key));
        this.emit();
    }

    public deleteItem(key: string) {
        if (!this.items.has(key)) return;
        this.items.delete(key);
        this.emit();
    }

    private emit() {
        this.itemChanged.next(this.getItems());
    }

    getItems(): Item[] {
        return Array.from(this.items.values());
    }
}