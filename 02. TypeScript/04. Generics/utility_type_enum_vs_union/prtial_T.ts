
interface User{
    name: string;
    id: number;
}

// if want update any user property then we shoud re write and make user property optional
interface UserUpdate{
    name?:string;
    id?:number;
}

// but if use Partial<T>  that acutally make all property optional

function updateUser(id: string, update: Partial<User> ){
    
}