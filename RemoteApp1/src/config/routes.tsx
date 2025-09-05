export const routes = {
  self: "/store",
  registers: {
    root: "registers",
    children: {
      list: "",
      detail: ":id",
    },
  },
};