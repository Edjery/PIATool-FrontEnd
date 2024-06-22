import { Page, View, Image } from "@react-pdf/renderer";
import { ReactNode } from "react";
import {
  urlUsepDocumentFooter,
  urlUsepDocumentHeader,
} from "../../../values/images";
import { paperSizeA4 } from "../../../values/values";
import documentStyle from "../styles/documentStyle";

const CommonPage = ({ children }: { children: ReactNode }) => (
  <Page size={paperSizeA4}>
    <Image
      src={urlUsepDocumentHeader}
      style={{ width: "100%", height: "15vh" }}
    />
    <View style={documentStyle.commonPageBody}>{children}</View>
    <Image
      src={urlUsepDocumentFooter}
      style={{ width: "100%", height: "10vh" }}
    />
  </Page>
);

export default CommonPage;
