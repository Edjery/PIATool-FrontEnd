import { Image, Page } from "@react-pdf/renderer";
import { urlDataPrivacyClearance } from "../../../values/images";
import { paperSizeA4 } from "../../../values/values";

const DataPrivacyClearancePage = () => {
  return (
    <Page size={paperSizeA4}>
      <Image
        src={urlDataPrivacyClearance}
        style={{ width: "100%", height: "100%" }}
      />
    </Page>
  );
};

export default DataPrivacyClearancePage;
