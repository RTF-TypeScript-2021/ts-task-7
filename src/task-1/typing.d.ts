declare class Custom{
    public user: User;
}
declare class User{
    constructor(age: number, name: string);
    public age: number;
    public name: string;
    public upAgeByYear: () => void;
}