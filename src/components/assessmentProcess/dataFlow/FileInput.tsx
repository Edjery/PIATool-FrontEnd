import { Box, Button, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import { btnFileUpload } from "../../../values/string";

interface Props {
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
  fileUrl: string | null;
}

const FileInput = ({ handleFileChange, file, fileUrl }: Props) => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Button variant="outlined" component="label">
          <Typography>{btnFileUpload}</Typography>
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </Button>
        <Typography sx={{ mx: "2vh" }}>{file && file.name}</Typography>
      </Box>
      {fileUrl && (
        <Box sx={{ mt: "2vh" }}>
          <Box
            component="img"
            src={fileUrl}
            alt="Uploaded file preview"
            style={{ maxWidth: "50vh" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default FileInput;
