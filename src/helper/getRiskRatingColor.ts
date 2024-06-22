import { riskRatingColors } from "../values/colors";

const getRiskRatingColor = (riskRating: number): string => {
    switch (true) {
        case (riskRating === 1):
            return riskRatingColors[0];
        case (riskRating >= 2 && riskRating <= 5):
            return riskRatingColors[1];
        case (riskRating >= 6 && riskRating <= 8):
            return riskRatingColors[2];
        case (riskRating === 9):
            return riskRatingColors[3];
        case (riskRating >= 10 && riskRating <= 15):
            return riskRatingColors[4];
        case (riskRating >= 16):
            return riskRatingColors[5];
        default:
            return riskRatingColors[0];
    }
};

export default getRiskRatingColor;
