export interface UserResponseInterface {
  success: boolean;
  message: string;
  user: UserInterface;
}

export interface UserInterface {
  stake_name: string;
  password: string;
}
