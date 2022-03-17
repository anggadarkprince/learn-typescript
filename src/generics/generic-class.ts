class DataStorage<T extends string | number | boolean> {
    private data: Array<T> = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Angga');
textStorage.addItem('Sport');
textStorage.addItem('Car');
//textStorage.addItem(34); // error because we set to store string

const anyStorage = new DataStorage<string | number>();