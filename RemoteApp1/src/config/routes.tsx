export const routes = {
  registers: {
    root: "registers",
    children: {
      list: "",
      detail: ":id",
    },
  },
};