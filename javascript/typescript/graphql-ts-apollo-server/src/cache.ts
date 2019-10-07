import {DataSource }from "apollo-datasource";
import LRU from "lru-cache";

export class Cache extends DataSource{

    private cache:any = null;

    constructor(){
        super();
        this.cache = new LRU({ updateAgeOnGet:true, maxAge: 50 * 60 * 60 });// 30 min
    }    

    public getData(key:any):any{
        return this.cache.get(key);
    }

    public setData(key:any, value:any):boolean {
        return value ? this.cache.set(key, value) : new Error("cache: can not set value")
    }  
    
    public removeData(key:any):boolean {
        if (this.cache.has(key)) {
            return this.cache.del(key) ? true : false;
        }
        return false;
    }
}