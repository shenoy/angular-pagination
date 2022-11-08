export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: Address;
}

export interface Address {
  id: number;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PersonsRequest{
  page:number;
  size:number;
}
