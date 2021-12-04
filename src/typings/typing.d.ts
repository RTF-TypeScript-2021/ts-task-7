declare namespace Custom {
    class User {
        public age: number;
        public name: string;
        constructor(age: number, name: string);
        public upAgeByYear(): void;
    }
    export let user: User;
}