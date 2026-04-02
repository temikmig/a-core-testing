export type LoginResponse = {
  login: {
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
    };
  };
};

export type LoginVars = {
  email: string;
  password: string;
};
