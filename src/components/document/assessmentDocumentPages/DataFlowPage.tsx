import { Image, Text, View } from "@react-pdf/renderer";
import { noImageFound, processDataFlowsTitle } from "../../../values/string";
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
          <Text style={[documentStyle.tableLabel]}>{noImageFound}</Text>
        )}
      </View>
    </CommonPage>
  );
};

export default DataFlowPage;
