export const ERROR_MAP: Record<string, string> = {
  "invalid credentials": "Неверный email или пароль",
};

type GraphQLErrorLike = {
  graphQLErrors?: { message?: string }[];
};

export const getErrorMessage = (error: unknown): string => {
  const err = error as GraphQLErrorLike & { message?: string };

  const apiMessage = err?.graphQLErrors?.[0]?.message || err?.message;

  if (apiMessage) {
    return ERROR_MAP[apiMessage.toLowerCase()] ?? "Ошибка сервера";
  }

  return "Что-то пошло не так";
};
