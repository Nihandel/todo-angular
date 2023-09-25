export abstract class APersistency<T>{
    abstract readAll():Array<T>;
    abstract add(value:T):void;
    abstract remove(value:T):void;
    abstract update(value:T):T;
}