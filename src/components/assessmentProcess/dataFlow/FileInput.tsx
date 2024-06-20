import { Box, Button, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { btnFileUpload } from "../../../values/string";
import {
  imgAcceptedFormat,
  imgMaxFileSize,
  imgSizeError,
  imgTypeError,
} from "../../../values/values";

const FileInput = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileURL, setFileURL] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      if (!imgAcceptedFormat.includes(selectedFile.type)) {
        alert(imgTypeError);
        setFile(null);
        return;
      }

      if (selectedFile.size > imgMaxFileSize) {
        alert(imgSizeError);
        setFile(null);
        return;
      }

      setFile(selectedFile);
      setFileURL(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Button variant="contained" component="label" color="inherit">
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
      {fileURL && (
        <Box sx={{ mt: "2vh" }}>
          <Box
            component="img"
            src={fileURL}
            alt="Uploaded file preview"
            style={{ maxWidth: "50vh" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default FileInput;
