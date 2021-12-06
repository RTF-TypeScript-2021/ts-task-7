declare namespace Custom {
    abstract class User {
        age: number;
        name: string;

        protected constructor(a: number, n: string);

        upAgeByYear(): void;
    }

    const user: User;
}