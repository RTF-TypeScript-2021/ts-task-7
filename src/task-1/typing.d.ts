declare namespace Custom{
    export class User{
        constructor(age: number, name: string);
        public age: number;
        public name: string;
        public upAgeByYear: () => void;
    }
    export const user: User;
}