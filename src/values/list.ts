import {
  IconDataScheme,
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
import { assessmentVersion, collectionMethodLabel, dataCollectionTitle, dataDisclosureQuestion1, dataDisclosureQuestion2, dataDisclosureQuestion3, dataDisclosureQuestion4, dataDisclosureQuestion5, dataDisclosureTitle, dataSourceLabel, dataStorageDisposalQuestion1, dataStorageDisposalQuestion2, dataStorageDisposalQuestion3, dataStorageDisposalTitle, recommendedSolColumnA, recommendedSolColumnB, riskAssessmentColumn1, riskAssessmentColumn2, riskAssessmentColumn3, riskAssessmentColumn4, timingOfCollectionLabel } from "./string";

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
];

export const dataProcessingQuestions: IDataProcessingQuestions[] = [
  {
    title: dataCollectionTitle,
    questions: [
      dataSourceLabel,
      collectionMethodLabel,
      timingOfCollectionLabel,
    ],
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
    questions: [
      dataStorageDisposalQuestion1,
      dataStorageDisposalQuestion2,
      dataStorageDisposalQuestion3,
    ],
  },
];

export const questionSetA: IDataQuestionSet = {
  name: "Default question set",
  description: "This is the default question set from the NPC Privacy ToolKit",
  version: assessmentVersion,
  questionSections: dataProcessingQuestions,
}

export const questionSets: IDataQuestionSet[] = [questionSetA]

export const riskRatingMapList: IRiskRatingMap[] = [
  { rating: "1", description: "Negligible", color: "#fafdff" },
  { rating: "2 - 4", description: "Low Risk", color: "#ffffcc" },
  { rating: "6 - 9", description: "Medium Risk", color: "#ffff99" },
  { rating: "10 - 16", description: "High Risk", color: "#ff9999" },
]

export const riskAssessmentOptions: ISelectOption[] = [
  { text: "1", value: "1" },
  { text: "2", value: "2" },
  { text: "3", value: "3" },
  { text: "4", value: "4" },
]

export const riskAssessmentTerms: ITable = {
  title: "The following definitions are used in this section.",
  columnHeaders: ["Term", "Definition"],
  rows: [
    ["Risk", "The potential for loss, damage or destruction as a result of a threat exploiting a vulnerability."],
    ["Threat", "A potential cause of an unwanted incident, which may result in harm to a system or organization."],
    ["Vulnerability", "A weakness of an asset or group of assets that can be exploited by one or more threats."],
    ["Impact", "Everity of the injuries that might arise if the event does occur (can be ranked from trivial injuries to major injuries)."],
    ["Probability", "Chance or probability of something happening;"],
  ]

}

export const impactGuideTable: ITable = {
  title: "Impact",
  columnHeaders: ["Rating", "Types", "Description"],
  rows: [
    ["1", "Negligible", "The data subjects will either not be affected or may encounter a few inconveniences, which they will overcome without any problem."],
    ["2", "Limited", "The data subject may encounter significant inconveniences, which they will be able to overcome despite a few difficulties."],
    ["3", "Significant", "The data subjects may encounter significant inconveniences, which they should be able to overcome but with serious difficulties."],
    ["4", "Maximum", "The data subjects may encounter significant inconveniences, or even irreversible, consequences, which they may not overcome."],
  ]
}

export const probabilityGuideTable: ITable = {
  title: "Probability",
  columnHeaders: ["Rating", "Types", "Description"],
  rows: [
    ["1", "Unlikely", "Not expected, but there is a slight possibility it may occur at some time."],
    ["2", "Possible", "Casual occurrence. It might happen at some time."],
    ["3", "Likely", "Frequent occurrence. There is a strong possibility that it might occur."],
    ["4", "Almost", "Very likely. It is expected to occur in most circumstances."],
  ]
}

export const riskAssessmentColumnHeaders = [
  riskAssessmentColumn1,
  riskAssessmentColumn2,
  riskAssessmentColumn3,
  riskAssessmentColumn4,
];

export const recommendedSolutionColumnHeaders = [recommendedSolColumnA, recommendedSolColumnB];
