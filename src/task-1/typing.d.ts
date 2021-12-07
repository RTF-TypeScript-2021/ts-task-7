declare namespace Custom {
    class User {
        constructor(age: number, name: string);

        private _age: number;
        private _name: string;

        public upAgeByYear(): () => void

        public get age(): number;

        public get name(): string;

    }
    export const user:User;
}