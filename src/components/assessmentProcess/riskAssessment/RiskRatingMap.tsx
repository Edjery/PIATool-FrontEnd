import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  riskRatingColumn1,
  riskRatingColumn2,
  riskRatingMapTitle,
} from "../../../values/string";
import { riskRatingMapList } from "../../../values/list";

const RiskRatingMap = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Box sx={{ width: "50%" }}>
        <Card>
          <CardHeader
            title={
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {riskRatingMapTitle}
              </Typography>
            }
          />
          <CardContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {riskRatingColumn1}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {riskRatingColumn2}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {riskRatingMapList.map((riskRating, index) => (
                    <TableRow
                      style={{ backgroundColor: riskRating.color }}
                      key={index}
                    >
                      <TableCell>{riskRating.rating}</TableCell>
                      <TableCell>{riskRating.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default RiskRatingMap;
