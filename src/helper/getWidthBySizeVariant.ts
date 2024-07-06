import { SizeVariant } from "../values/type";

const getWidthBySizeVariant = (variant: SizeVariant): string => {
    switch (variant) {
        case "100%":
            return "100%";
        case "xlg":
            return "200vh";
        case "lg":
            return "150vh";
        case "md":
            return "60vh";
    }
}

export default getWidthBySizeVariant