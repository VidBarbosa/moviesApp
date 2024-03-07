export interface User {

  id: string;
  email: string;
  name: string;
  password: string;
  isAvaible?: boolean;
  role: string[];
  avatar: string;
  
}