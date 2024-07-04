import GenericTable from "../../common/GenericTable";

const headers = [
  "Assessment Version",
  "Process Name",
  "Date Created",
  "Date Updated",
  "Status",
  "Action",
];

const rows = [
  [
    "1",
    "None Selected",
    "August 08, 2023",
    "August 08, 2023",
    "Pending",
    "Actions",
  ],
  [
    "1",
    "None Selected",
    "August 08, 2023",
    "August 08, 2023",
    "Pending",
    "Actions",
  ],
  [
    "1",
    "None Selected",
    "August 08, 2023",
    "August 08, 2023",
    "Pending",
    "Actions",
  ],
  [
    "1",
    "None Selected",
    "August 08, 2023",
    "August 08, 2023",
    "Pending",
    "Actions",
  ],
];

const List = () => {
  return <GenericTable columnHeaders={headers} rows={rows} title="Test" />;
};

export default List;
