import {
  IconDataScheme,
  IconHome,
  IconLogout,
  IconRecommendation,
  IconReport,
  IconSettings,
  IconWarning,
} from "./icons";
import INavigationList from "./interface/INavigationList";
import IProcessName from "./interface/IProcessName";
import { collectionMethodLabel, dataCollectionTitle, dataDisclosureQuestion1, dataDisclosureQuestion2, dataDisclosureQuestion3, dataDisclosureQuestion4, dataDisclosureQuestion5, dataDisclosureTitle, dataSourceLabel, dataStorageDisposalQuestion1, dataStorageDisposalQuestion2, dataStorageDisposalQuestion3, dataStorageDisposalTitle, timingOfCollectionLabel } from "./string";

export const userNavigationList: INavigationList[] = [
  { name: "Home", icon: IconHome, url: "/home" },
  { name: "Reports", icon: IconReport, url: "/reports" },
  { name: "Logout", icon: IconLogout, url: "/logout" },
];

export const adminNavigationList: INavigationList[] = [
  { name: "Home", icon: IconHome, url: "/home" },
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

export const dataProcessQuestions: IDataProcessQuestions[] = [
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