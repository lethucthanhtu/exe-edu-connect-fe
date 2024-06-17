type authorities = {
  authority: string;
};

export type TUser = {
  id: number;
  username: string;
  fullname: string;
  dateofbirth: string;
  avatarurl: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  status: string;
  balance: number;
  resetPasswordToken: string;
  provider: string;
  transactions: [];
  enabled: true;
  authorities: authorities[];
  accountNonExpired: true;
  accountNonLocked: true;
  credentialsNonExpired: true;
};
