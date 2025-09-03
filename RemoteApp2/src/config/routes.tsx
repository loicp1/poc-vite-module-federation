export const routes = {
  self: "/identity",
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