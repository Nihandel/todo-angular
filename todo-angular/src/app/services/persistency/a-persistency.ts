export abstract class APersistency<T>{
    abstract readAll():Promise<Array<T>>;
    abstract add(value:T):Promise<void>;
    abstract remove(value:T):Promise<void>;
    abstract update(value:T):Promise<T>;
}