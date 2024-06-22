import { Image, Text, View } from "@react-pdf/renderer";
import { urlSampleFlowChart } from "../../../values/images";
import { processDataFlowsTitle } from "../../../values/string";
import CommonPage from "../common/CommonPage";
import documentStyle from "../styles/documentStyle";

interface Props {
  DataFlow: File | null;
}

const DataFlowPage = ({ DataFlow }: Props) => {
  return (
    <CommonPage>
      <View style={[documentStyle.formTitle, documentStyle.centeredView]}>
        <Text>{processDataFlowsTitle}</Text>
        {DataFlow != null ? (
          <Image
            src={URL.createObjectURL(DataFlow)}
            style={documentStyle.image}
          />
        ) : (
          <Image src={urlSampleFlowChart} style={documentStyle.image} />
        )}
      </View>
    </CommonPage>
  );
};

export default DataFlowPage;
