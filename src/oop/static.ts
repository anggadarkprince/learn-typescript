class Role {
    public static ADMIN = 'admin';
    public static EDITOR = 'editor';

    constructor(public name: string) {
    }

    isAdmin() {
        return this.name == Role.ADMIN;
    }

    public static isEditor() {
        // error because static method cannot access non static property
        //return this.name = Role.EDITOR;
    }
}

class UserEditor {
    constructor(public role: Role) {
    }
}

const user123 = new UserEditor(new Role("admin"));
console.log("is admin " + user123.role == Role.ADMIN); // access directly static property without create new object
