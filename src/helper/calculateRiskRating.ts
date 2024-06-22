const calculateRiskRating = (
  impactRating: number | string,
  probabilityRating: number | string
): number => {
  if (typeof impactRating === "string")
    impactRating = parseInt(impactRating, 10);
  if (typeof probabilityRating === "string")
    probabilityRating = parseInt(probabilityRating, 10);

  return impactRating * probabilityRating;
};

export default calculateRiskRating;
