namespace MEAN{
    export function UIFunc():string{
        return "Angular as UI for MEAN Stack"
    }

    export function ServerFunc():string{
        return "NODE js as server for MEAN Stack"
    }

    export function DbFunc(dbname:string):string{
        return "Database for MEAN Stack is..." + dbname;
    }
}
