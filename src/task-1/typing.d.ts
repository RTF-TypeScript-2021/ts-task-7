declare namespace Custom {
    class User {
        public age: number;
        public name: string;

        private constructor(age: number, name: string); // Класс внутри js не экспортится

        public upAgeByYear: () => void;
    }

    const user: User;
}