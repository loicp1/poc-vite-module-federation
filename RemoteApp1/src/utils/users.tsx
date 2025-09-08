import { groups } from "config/mock";
import { User } from "models";

export const isCashier = (user: User): boolean => {
  return groups.find(g => g.id === user.group)?.label === 'Cashier';
};