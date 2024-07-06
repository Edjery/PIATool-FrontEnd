import { SxProps } from "@mui/material";

export type Order = "asc" | "desc";
export type SizeVariant = "100%" | "xlg" | "lg" | "md";
export type CustomIconType = ({ sx }: { sx?: SxProps; }) => JSX.Element;