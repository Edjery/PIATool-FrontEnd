// url
export const urlNpcPia = "https://privacy.gov.ph/wp-content/uploads/2022/01/NPC_PIA_0618.pdf"
export const urlDiagram = "https://app.diagrams.net/?src=about"

// img
export const imgAcceptedFormat = ["image/png", "image/jpg", "image/jpeg"];
export const imgPreferredMbSize = 10;
export const imgMaxFileSize = imgPreferredMbSize * 1024 * 1024;
export const imgTypeError = "Invalid file format. Please upload a PNG or JPG image."
export const imgSizeError = `File size exceeds ${imgPreferredMbSize}MB. Please upload a smaller image.`
export const image404ErrorMsg = "No Image Found"

// document
export const paperSizeA4 = "A4";

// document stamp
export const stampHeader = "OLA-UDPO VALIDATED"
export const stampDateLabel = "Date Validated: "

// process
export const assessmentVersion = "1.0.0"
export const bypassAssessmentValidation = false;

// layout
export const headerHeightValue = 8;
export const footerHeightValue = 8;
export const headerHeight = `${headerHeightValue}vh`;
export const footerHeight = `${footerHeightValue}vh`;
export const mainBodyHeight = `${100 - (headerHeightValue + footerHeightValue)}vh`

// error messages
export const errorHeader = "Oops!"
export const errorSubHeader = "Sorry, an unexpected error has occurred."

// default values
export const sampleName = "Reyjet R. Sandoval"
export const stampSampleDate = "July 24, 2023"