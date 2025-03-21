'use strict';
import { format } from 'date-fns';

class Item {
    constructor(description) {
        this.description = description;
        this.complete = false;
    }
}

class List {
    constructor(icon, name) {
        this.icon = icon;
        this.name = name;
        this.date = format(new Date(), 'yyyy-MM-dd');
        this.items = [];
    }

    newItem(description) {
        const item = new Item(description);
        this.items.push(item);
    }
}

export { List, Item };
