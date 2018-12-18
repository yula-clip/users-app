export class User {
    constructor(
        public id?: number,
        public first_name?: string,
        public last_name?: string,
    ) {}

    public static fromObject(user: User) {
        return new User(
            user.id,
            user.first_name,
            user.last_name,
        );
    }
}
