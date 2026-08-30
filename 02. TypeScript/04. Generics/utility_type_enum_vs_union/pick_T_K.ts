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

type PublicUser = Pick<User, "name" | "email">;
type ApiUser = Pick<User, "id" | "name" | "email">;

function getUser(user: User): ApiUser{
    return {
        id: user.id,
        name: user.name,
        email: user.email,
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
