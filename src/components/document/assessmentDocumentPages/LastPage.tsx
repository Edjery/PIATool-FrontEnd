import { View, Text } from "@react-pdf/renderer";
import { assessmentVersionLabel } from "../../../values/string";
import CommonPage from "../common/CommonPage";
import documentStyle from "../styles/documentStyle";

const LastPage = ({ currentVersion }: { currentVersion: string }) => {
  return (
    <CommonPage>
      <View style={[documentStyle.formTitle, documentStyle.centeredView]}>
        <View style={documentStyle.formContainer}>
          <View style={documentStyle.formLabel}>
            <Text>{assessmentVersionLabel}</Text>
          </View>
          <View style={documentStyle.formValue}>
            <Text>{currentVersion}</Text>
          </View>
        </View>
      </View>
    </CommonPage>
  );
};

export default LastPage;
