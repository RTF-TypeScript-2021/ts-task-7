declare namespace Custom {
    abstract class User{
        public name: string;
        public age: number;
        constructor(a: number,n: string);
        upAgeByYear(): void;
    }

    const user: User;
}