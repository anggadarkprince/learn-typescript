class Database {
    private static instance: Database | null = null;

    private constructor() {
        // instantiate from getConnection()
    }

    public static getConnection() {
        if (this.instance === null) {
            this.instance = new Database();
            return this.instance;
        }
        return this.instance;
    }

    get(id: number) {
        console.log(`Get data ${id}`);
    }

    insert(data: object) {
        console.log(`Insert data ${data}`);
    }

    update(id: number, data: object) {
        console.log(`Update ${id} with data ${data}`);
    }

    delete(id: number) {
        console.log(`Delete ${id}`)
    }
}

const db = Database.getConnection();
db.get(1);
db.insert({
    name: "Angga",
    gender: 'Male'
});