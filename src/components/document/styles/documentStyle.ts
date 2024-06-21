import { StyleSheet } from "@react-pdf/renderer";

const documentStyle = StyleSheet.create({
  viewer: {
    width: "100vh",
    height: "100vh",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default documentStyle