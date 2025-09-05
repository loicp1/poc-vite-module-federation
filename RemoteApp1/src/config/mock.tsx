export const groups = [
  { id: 1, label: "Cashiers", description: "Can open/close registers" },
  { id: 2, label: "Sellers", description: "Cannot open/close registers" },
];

export const registers = [
  { id: 1, label: "Register 1", status: "open" },
  { id: 2, label: "Register 2", status: "closed" },
  { id: 3, label: "Register 3", status: "closed" },
];

export const users = [
  { id: 1, name: "Alix", country: "France", group: 1 },
  { id: 2, name: "Bob", country: "United States", group: 2 },
  { id: 3, name: "Charlie", country: "United Kingdom", group: 2 },
  { id: 4, name: "Dino", country: "Italy", group: 2 },
];

export const userWhoIsLoggedIn = users[0];