import { Order } from "../../../values/type";
import { descendingComparator } from "./descendingComparator";

export const getComparator = <Key extends keyof any>(order: Order, orderBy: Key)
    : (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number => {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}