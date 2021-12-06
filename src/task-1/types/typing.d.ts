declare namespace Custom {
    class User {
        age: number;
        name: string;
        constructor(a: number, n: string);
        upAgeByYear(): void;
    }
    export let user: User;
}