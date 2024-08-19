export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Users extends Array<User> {}
export interface CreateUser extends Omit<User, "id"> {}
