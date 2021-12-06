declare namespace Custom {
    class User {
        constructor(a: number, n: string);
        public age: number;
        public name: string;
        public upAgeByYear: () => void
    }

    export const user: User;
}