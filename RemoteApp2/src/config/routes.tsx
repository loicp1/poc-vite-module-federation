export const routes = {
  groups: {
    root: "groups",
    children: {
      list: "",
      detail: ":id",
    },
  },
  users: {
    root: "users",
    children: {
      list: "",
      detail: ":id",
    },
  },
};