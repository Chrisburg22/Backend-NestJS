//Define un conjunto de opciones.

enum ROLES {
  ADMIN    = "admin",
  SELLER   = "seler",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES,
}

const chrisUser: User = {
  username: "Christian",
  role: ROLES.ADMIN
}

