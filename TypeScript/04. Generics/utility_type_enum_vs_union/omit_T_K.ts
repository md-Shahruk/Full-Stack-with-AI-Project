// omit remove properties that not need
// Pick<T,K> pick selects only the properties thats need

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  address: string;
  phone: string;
}

type PublicUser = Omit<User, "password" | "address">;


function getUser(user: User): PublicUser{
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age,
        phone: user.phone
    }
}

const user: User = {
  id: "u1",
  name: "Shahruk",
  email: "sha@gmail.com",
  password: "123",
  age: 26,
  address: "123 Main St",
  phone: "01921"
};

const response = getUser(user);
console.log(response);
