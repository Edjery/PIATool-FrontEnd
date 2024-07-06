import {
  IconDataScheme,
  IconDelete,
  IconDownload,
  IconEdit,
  IconFolder,
  IconHome,
  IconLogout,
  IconRecommendation,
  IconReport,
  IconSettings,
  IconWarning,
} from "./icons";
import IDataProcessingQuestions from "./interface/IDataProcessingQuestions";
import IDataQuestionSet from "./interface/IDataQuestionSets";
import INavigationList from "./interface/INavigationList";
import IProcessName from "./interface/IProcessName";
import IRiskRatingMap from "./interface/IRiskRatingMap";
import ISelectOption from "./interface/ISelectOption";
import ITable from "./interface/ITable";
import {
  collectionMethodLabel,
  dataCollectionTitle,
  dataDisclosureQuestion1,
  dataDisclosureQuestion2,
  dataDisclosureQuestion3,
  dataDisclosureQuestion4,
  dataDisclosureQuestion5,
  dataDisclosureTitle,
  dataSourceLabel,
  dataStorageDisposalQuestion1,
  dataStorageDisposalQuestion2,
  dataStorageDisposalQuestion3,
  dataStorageDisposalTitle,
  recommendedSolColumnA,
  recommendedSolColumnB,
  riskAssessmentColumn1,
  riskAssessmentColumn2,
  riskAssessmentColumn3,
  riskAssessmentColumn4,
  timingOfCollectionLabel,
} from "./string";
import { assessmentVersion } from "./values";

export const userNavigationList: INavigationList[] = [
  { name: "Home", icon: IconHome, url: "/" },
  { name: "Reports", icon: IconReport, url: "/reports" },
  { name: "Logout", icon: IconLogout, url: "/logout" },
];

export const adminNavigationList: INavigationList[] = [
  { name: "Dashboard", icon: IconHome, url: "/" },
  { name: "Reports", icon: IconReport, url: "/reports" },
  { name: "Threats", icon: IconWarning, url: "/threats" },
  { name: "Data Flow", icon: IconDataScheme, url: "/dataflow" },
  {
    name: "Recommendations",
    icon: IconRecommendation,
    url: "/recommendations",
  },
  { name: "Maintenance", icon: IconSettings, url: "/maintenance" },
  { name: "Logout", icon: IconLogout, url: "/logout" },
];

export const processNameList: IProcessName[] = [
  {
    id: 1,
    name: "Guidance and Counseling Service",
  },
  {
    id: 2,
    name: "Group Guidance Sessions",
  },
  {
    id: 3,
    name: "Seminars/Workshops/Symposia",
  },
  {
    id: 4,
    name: "Telecounseling Services",
  },
  {
    id: 5,
    name: "Testing Services",
  },
  {
    id: 6,
    name: "Student Peer Facilitator (SPF) Membership",
  },
  {
    id: 7,
    name: "New Process",
  },
];

export const dataProcessingQuestions: IDataProcessingQuestions[] = [
  {
    title: dataCollectionTitle,
    questions: [dataSourceLabel, collectionMethodLabel, timingOfCollectionLabel],
  },
  {
    title: dataDisclosureTitle,
    questions: [
      dataDisclosureQuestion1,
      dataDisclosureQuestion2,
      dataDisclosureQuestion3,
      dataDisclosureQuestion4,
      dataDisclosureQuestion5,
    ],
  },
  {
    title: dataStorageDisposalTitle,
    questions: [dataStorageDisposalQuestion1, dataStorageDisposalQuestion2, dataStorageDisposalQuestion3],
  },
];

export const questionSetA: IDataQuestionSet = {
  name: "Default question set",
  description: "This is the default question set from the NPC Privacy ToolKit",
  version: assessmentVersion,
  questionSections: dataProcessingQuestions,
};

export const questionSets: IDataQuestionSet[] = [questionSetA];

export const riskRatingMapList: IRiskRatingMap[] = [
  { rating: "1", description: "Negligible", color: "#fafdff" },
  { rating: "2 - 4", description: "Low Risk", color: "#ffffcc" },
  { rating: "6 - 9", description: "Medium Risk", color: "#ffff99" },
  { rating: "10 - 16", description: "High Risk", color: "#ff9999" },
];

export const riskAssessmentOptions: ISelectOption[] = [
  { text: "1", value: "1" },
  { text: "2", value: "2" },
  { text: "3", value: "3" },
  { text: "4", value: "4" },
];

export const riskAssessmentTerms: ITable = {
  title: "The following definitions are used in this section.",
  columnHeaders: ["Term", "Definition"],
  rows: [
    ["Risk", "The potential for loss, damage or destruction as a result of a threat exploiting a vulnerability."],
    ["Threat", "A potential cause of an unwanted incident, which may result in harm to a system or organization."],
    ["Vulnerability", "A weakness of an asset or group of assets that can be exploited by one or more threats."],
    [
      "Impact",
      "Everity of the injuries that might arise if the event does occur (can be ranked from trivial injuries to major injuries).",
    ],
    ["Probability", "Chance or probability of something happening;"],
  ],
};

export const impactGuideTable: ITable = {
  title: "Impact",
  columnHeaders: ["Rating", "Types", "Description"],
  rows: [
    [
      "1",
      "Negligible",
      "The data subjects will either not be affected or may encounter a few inconveniences, which they will overcome without any problem.",
    ],
    [
      "2",
      "Limited",
      "The data subject may encounter significant inconveniences, which they will be able to overcome despite a few difficulties.",
    ],
    [
      "3",
      "Significant",
      "The data subjects may encounter significant inconveniences, which they should be able to overcome but with serious difficulties.",
    ],
    [
      "4",
      "Maximum",
      "The data subjects may encounter significant inconveniences, or even irreversible, consequences, which they may not overcome.",
    ],
  ],
};

export const probabilityGuideTable: ITable = {
  title: "Probability",
  columnHeaders: ["Rating", "Types", "Description"],
  rows: [
    ["1", "Unlikely", "Not expected, but there is a slight possibility it may occur at some time."],
    ["2", "Possible", "Casual occurrence. It might happen at some time."],
    ["3", "Likely", "Frequent occurrence. There is a strong possibility that it might occur."],
    ["4", "Almost", "Very likely. It is expected to occur in most circumstances."],
  ],
};

export const riskAssessmentColumnHeaders = [
  riskAssessmentColumn1,
  riskAssessmentColumn2,
  riskAssessmentColumn3,
  riskAssessmentColumn4,
];

export const recommendedSolutionColumnHeaders = [recommendedSolColumnA, recommendedSolColumnB];

export const assessmentListActionButtons: IActionButton[] = [
  {
    label: "Download",
    value: "download",
    icon: <IconDownload />,
    link: "/download/",
  },
  {
    label: "View",
    value: "view",
    icon: <IconFolder />,
    link: "/view/",
  },
  {
    label: "Edit",
    value: "edit",
    icon: <IconEdit />,
    link: "/edit/",
  },
  {
    label: "Delete",
    value: "delete",
    icon: <IconDelete />,
    link: "/delete/",
  },
];

export const assessmentStatusList: IItem[] = [
  { name: "UNFINISHED" },
  { name: "PENDING" },
  { name: "VALIDATED" },
  { name: "INVALID" },
  { name: "REVISED" },
];

export const departmentList: IDepartment[] = [
  { name: "Board of Regents", code: "BOR", description: "" },
  { name: "Office of the President", code: "OTP", description: "" },
  {
    name: "Office of the Vice President for Academic Affairs",
    code: "OVPAA",
    description: "",
  },
  {
    name: "Office of the Vice President for Administration",
    code: "OVPA",
    description: "",
  },
  {
    name: "Office of the Vice President for Planning and Quality Assurance",
    code: "OVPPQA",
    description: "",
  },
  {
    name: "Office of the Vice President for Research, Development and Extension",
    code: "OVPRDE",
    description: "",
  },
  {
    name: "Office of the Secretary of the University and the University Records Office",
    code: "OSYUURO",
    description: "",
  },
  { name: "Office of Legal Affairs", code: "OLA", description: "" },
  { name: "International Affairs Division", code: "IAD", description: "" },
  { name: "Public Affairs Division", code: "PAD", description: "" },
  { name: "Office of Advance Studies", code: "OAS", description: "" },
  { name: "Human Resource Management Division", code: "HRMD", description: "" },
  { name: "Administrative Services Division", code: "ASD", description: "" },
  { name: "Physical Development Division", code: "PDD", description: "" },
  { name: "Gender and Development Office", code: "GDO", description: "" },
  { name: "Bids and Awards Committee", code: "BAC", description: "" },
  {
    name: "Office of Student Affairs and Services",
    code: "OSAS",
    description: "",
  },
  { name: "Office of the University Registrar", code: "OUR", description: "" },
  {
    name: "University Assessment and Guidance Center",
    code: "UAGC",
    description: "",
  },
  {
    name: "University Learning Resource Center",
    code: "ULRC",
    description: "",
  },
  { name: "Resource Management Division", code: "RMD", description: "" },
  { name: "Health Services Division", code: "HSD", description: "" },
  { name: "University Finance Division", code: "UFD", description: "" },
  { name: "Research, Development and Extension", code: "RDE", description: "" },
  {
    name: "College of Agriculture and Related Sciences",
    code: "CARS",
    description: "",
  },
  { name: "College of Arts and Sciences", code: "CAS", description: "" },
  { name: "College of Business Administration", code: "CBA", description: "" },
  { name: "College of Development Management", code: "CDM", description: "" },
  { name: "College of Education", code: "CoE", description: "" },
  { name: "College of Engineering", code: "CE", description: "" },
  {
    name: "College of Teacher Education and Technology",
    code: "CTET",
    description: "",
  },
  { name: "College of Technology", code: "CT", description: "" },
  {
    name: "College of Information and Computing",
    code: "CIC",
    description: "",
  },
  { name: "College of Applied Economics", code: "CAE", description: "" },
  { name: "School of Law", code: "SoL", description: "" },
  { name: "School of Medicine", code: "SoM", description: "" },
];

export const reportListHeaders: IReportListHeader[] = [
  {
    id: "version",
    label: "Assessment Version",
  },
  {
    id: "processName",
    label: "Process Name",
  },
  {
    id: "departmentName",
    label: "Department",
  },
  {
    id: "createdAt",
    label: "Date Created",
  },
  {
    id: "updatedAt",
    label: "Date Updated",
  },
  {
    id: "validationStatus",
    label: "Status",
  },
];

export const sampleReportListRows: IReportListRow[] = [
  {
    id: 0,
    version: assessmentVersion,
    processName: processNameList[5].name,
    departmentName: departmentList[25].name,
    createdAt: "08/01/2024",
    updatedAt: "August 08, 2023",
    validationStatus: assessmentStatusList[0].name,
  },
  {
    id: 2,
    version: assessmentVersion,
    processName: processNameList[3].name,
    departmentName: departmentList[8].name,
    createdAt: "August 08, 2023",
    updatedAt: "August 08, 2023",
    validationStatus: assessmentStatusList[2].name,
  },
  {
    id: 7,
    version: assessmentVersion,
    processName: processNameList[4].name,
    departmentName: departmentList[14].name,
    createdAt: "August 09, 2023",
    updatedAt: "August 10, 2023",
    validationStatus: assessmentStatusList[3].name,
  },
  {
    id: 8,
    version: assessmentVersion,
    processName: processNameList[2].name,
    departmentName: departmentList[7].name,
    createdAt: "August 12, 2023",
    updatedAt: "August 12, 2023",
    validationStatus: assessmentStatusList[1].name,
  },
];

export const hideReportListRowsKeys = ["id"];

export const reportListRowsKeys =
  sampleReportListRows.length > 0
    ? Object.keys(sampleReportListRows[0]).filter((key) => !hideReportListRowsKeys.includes(key))
    : [];
