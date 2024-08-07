import { Image, Page, Text, View } from "@react-pdf/renderer";
import { urlUsepLogo } from "../../../values/images";
import { preparedBy, schoolName, websiteHeader } from "../../../values/string";
import {
  paperSizeA4,
  stampDateLabel,
  stampHeader,
  stampSampleDate,
} from "../../../values/values";
import IReportDetails from "../../pageComponents/assessmentProcess/interface/IReportDetails";
import documentStyle from "../styles/documentStyle";

interface Props {
  ReportDetails: IReportDetails;
}

const HomePage = ({ ReportDetails }: Props) => {
  const homePageSubHeaderTexts = [
    ReportDetails.department,
    preparedBy,
    ReportDetails.author,
  ];
  return (
    <Page size={paperSizeA4}>
      {ReportDetails.validated && (
        <View style={documentStyle.validationStamp}>
          <Text style={documentStyle.bold}>{stampHeader}</Text>
          <Text style={documentStyle.regular}>
            {stampDateLabel}
            {stampSampleDate}
          </Text>
        </View>
      )}
      <View style={documentStyle.homePage}>
        <Image src={urlUsepLogo} style={documentStyle.logo} />

        <View style={documentStyle.centeredView}>
          <Text style={documentStyle.homePageHeader}>{schoolName}</Text>
          <Text style={documentStyle.homePageTitle}>{websiteHeader}</Text>
        </View>

        <View style={documentStyle.homePageSubHeader}>
          {homePageSubHeaderTexts.map((text, index) => (
            <Text key={index} style={documentStyle.homePageSubHeaderText}>
              {text}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  );
};

export default HomePage;
