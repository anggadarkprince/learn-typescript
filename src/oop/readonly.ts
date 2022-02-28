class Payment {
    methods: string[] = ['cash', 'cc', 'crypto'];

    constructor(private readonly id: string) {

    }

    public getId() {
        return this.id;
    }

    // readonly is typescript feature
    public setId() {
        //this.id = 'A1'; // error because id is read-only
    }
}