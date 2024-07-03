import { Font, StyleSheet } from "@react-pdf/renderer";
import { urlArial, urlArialBold } from "../../../values/fonts";


// Register Arial font
Font.register({
  family: 'Arial',
  fonts: [
    { src: urlArial },
    { src: urlArialBold, fontWeight: 'bold' },
  ],
});

const documentStyle = StyleSheet.create({
  // main
  viewer: {
    width: "100vh",
    height: "100vh",
  },

  // special
  validationStamp: {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    border: "1px solid #ccc",
    position: "absolute",
    top: "3vh",
    left: "3vh",
    fontSize: "1.5vh"
  },
  logo: { width: "30vh", padding: "2vh" },

  // homepage 
  homePage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15vh",
    fontWeight: "bold",
  },
  homePageHeader: {
    marginVertical: "1vh",
    fontWeight: "bold",
  },
  homePageTitle: {
    marginVertical: "1vh",
    fontWeight: "bold",
    fontSize: "24px",
  },
  homePageSubHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10vh"
  },
  homePageSubHeaderText: {
    marginVertical: "1vh",
    fontSize: "12px"
  },

  // table
  tableRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tableLabel: {
    fontWeight: 'bold',
    marginRight: "1vh",
    padding: "1vh"
  },
  tableValue: {
    padding: "1vh"
  },
  gridItem: {
    paddingVertical: '1vh',
    paddingHorizontal: '0.5vh',
    alignItems: 'center',
  },

  // form
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formTitle: {
    fontWeight: 'bold',
    padding: "0.5vh",
    marginVertical: "1vh",
  },
  formLabel: {
    fontWeight: 'bold',
    padding: "0.5vh",
  },
  formValue: {
    padding: "0.5vh"
  },

  // common pages
  commonPageBody: {
    paddingHorizontal: "5vh",
    paddingVertical: "2vh",
    fontSize: "12px",
    height: "75vh"
  },

  // image
  image: {
    width: "70vw",
    padding: "2vh"
  },

  // common
  centeredView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spacing: { marginVertical: "1vh" },
  bold: { fontWeight: "bold" },
  regular: { fontWeight: "normal" },
  section: {
    marginHorizontal: "5vh",
    marginVertical: "3vh",
    fontSize: "12px"
  }
});

export default documentStyle