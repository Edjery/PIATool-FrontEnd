import { ChangeEvent, useState } from "react";
import {
  imgAcceptedFormat,
  imgMaxFileSize,
  imgSizeError,
  imgTypeError,
} from "../../values/values";
import CardContainer from "../common/CardContainer";
import FileInput from "./dataFlow/FileInput";
import Guide from "./dataFlow/Guide";
import Header from "./dataFlow/Header";

const ProcessDataFlow = () => {
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
    <CardContainer variant="lg">
      <Header />
      <FileInput
        file={file}
        fileUrl={fileURL}
        handleFileChange={handleFileChange}
      />
      <Guide />
    </CardContainer>
  );
};
export default ProcessDataFlow;
