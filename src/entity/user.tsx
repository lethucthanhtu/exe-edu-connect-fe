type authorities = {
  authority: string;
};
type role = {
  rolename: string;
  id: number;
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
  role: role[];
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
