import { Box } from "@mui/material";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  assessmentStatusList,
  departmentList,
  processNameList,
  questionSets,
  reportListRowsKeys,
  sampleReportListRows,
} from "../../../values/list";
import { Order } from "../../../values/type";
import ConfirmationDialog from "../../common/ConfirmationDialog";
import { getComparator } from "../helper/getComparator";
import { stableSort } from "../helper/stableSort";
import FilterHeader from "./FilterHeader";
import IDateFilterConfig from "./interface/IDateFilterConfig";
import IFilterConfig from "./interface/IFilterConfig";
import PaginationFooter from "./PaginationFooter";
import TableContent from "./TableContent";
import { sampleReportList } from "./values/sampleRowValues";

const defaultRowsPerPage = 10;
const rowsPerPageOptions = [1, 5, 10, 20, 50, 100, 1000];

const DataTable = () => {
  // Init
  const navigate = useNavigate();

  // State
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof IReportListRow>("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [anchorEls, setAnchorEls] = useState<(HTMLElement | null)[]>(Array(sampleReportListRows.length).fill(null));

  // Filter state
  const [selectedVersion, setSelectedVersion] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedProcessName, setSelectedProcessName] = useState("");
  const [createdAtFrom, setCreatedAtFrom] = useState("");
  const [createdAtTo, setCreatedAtTo] = useState("");
  const [updatedAtFrom, setUpdatedAtFrom] = useState("");
  const [updatedAtTo, setUpdatedAtTo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRows = useMemo(() => {
    return sampleReportList.filter((row) => {
      // Search term filter
      if (searchTerm !== "") {
        const normalizedSearch = searchTerm.toLowerCase();
        for (const key of reportListRowsKeys) {
          if (row[key as keyof IReportListRow].toString().toLowerCase().includes(normalizedSearch)) {
            return true;
          }
        }
        return false;
      }

      // Date range filters
      const isCreatedAtInRange =
        (!createdAtFrom || new Date(row.createdAt) >= new Date(createdAtFrom)) &&
        (!createdAtTo || new Date(row.createdAt) <= new Date(createdAtTo));
      const isUpdatedAtInRange =
        (!updatedAtFrom || new Date(row.updatedAt) >= new Date(updatedAtFrom)) &&
        (!updatedAtTo || new Date(row.updatedAt) <= new Date(updatedAtTo));

      // Other filters
      return (
        (selectedVersion === "" || row.version === selectedVersion) &&
        (selectedDepartment === "" || row.departmentName === selectedDepartment) &&
        (selectedStatus === "" || row.validationStatus === selectedStatus) &&
        (selectedProcessName === "" || row.processName === selectedProcessName) &&
        isCreatedAtInRange &&
        isUpdatedAtInRange
      );
    });
  }, [
    selectedVersion,
    selectedDepartment,
    selectedStatus,
    selectedProcessName,
    searchTerm,
    createdAtFrom,
    createdAtTo,
    updatedAtFrom,
    updatedAtTo,
  ]);
  const visibleRows = useMemo(
    () => stableSort(filteredRows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [filteredRows, order, orderBy, page, rowsPerPage]
  );

  // Handlers
  const handleOpenRowOptions = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = event.currentTarget;
    setAnchorEls(newAnchorEls);
  };
  const handleCloseRowOptions = (index: number) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = null;
    setAnchorEls(newAnchorEls);
  };
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);
  const handleConfirmDialog = () => {
    console.log("Deleting: ", selectedItem);
    handleCloseDialog();
  };
  const handleActionButton = (endpoint: string, value: string, rowIndex: number, id: number) => {
    if (value === "delete") {
      setSelectedItem(id);
      handleOpenDialog();
    } else {
      navigate(`${endpoint}${rowIndex}`);
    }
    handleCloseRowOptions(rowIndex);
  };
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof IReportListRow) => {
    if (event) {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    }
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    if (event) setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter handlers
  const handleCreatedAtFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedAtFrom(event.target.value);
  };
  const handleCreatedAtToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedAtTo(event.target.value);
    console.log(event.target.value);
  };
  const handleUpdatedAtFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedAtFrom(event.target.value);
  };
  const handleUpdatedAtToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedAtTo(event.target.value);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const createSortHandler = (property: keyof IReportListRow) => (event: React.MouseEvent<unknown>) => {
    handleRequestSort(event, property);
  };

  // Filters
  const filterList: IFilterConfig[] = [
    {
      label: "Assessment Version",
      value: selectedVersion,
      onChange: setSelectedVersion,
      options: questionSets,
      optionLabelKey: "version",
      optionValueKey: "version",
    },
    {
      label: "Process Name",
      value: selectedProcessName,
      onChange: setSelectedProcessName,
      options: processNameList,
      optionLabelKey: "name",
      optionValueKey: "name",
    },
    {
      label: "Department",
      value: selectedDepartment,
      onChange: setSelectedDepartment,
      options: departmentList,
      optionLabelKey: "name",
      optionValueKey: "name",
    },
    {
      label: "Status",
      value: selectedStatus,
      onChange: setSelectedStatus,
      options: assessmentStatusList,
      optionLabelKey: "name",
      optionValueKey: "name",
    },
  ];

  const dateFilterList: IDateFilterConfig[] = [
    {
      label: "Created From",
      type: "date",
      value: createdAtFrom,
      onChange: handleCreatedAtFromChange,
    },
    {
      label: "Created To",
      type: "date",
      value: createdAtTo,
      onChange: handleCreatedAtToChange,
    },
    {
      label: "Updated From",
      type: "date",
      value: updatedAtFrom,
      onChange: handleUpdatedAtFromChange,
    },
    {
      label: "Updated To",
      type: "date",
      value: updatedAtTo,
      onChange: handleUpdatedAtToChange,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <FilterHeader
        filterList={filterList}
        dateFilterList={dateFilterList}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />

      <TableContent
        orderBy={orderBy}
        order={order}
        visibleRows={visibleRows}
        anchorEls={anchorEls}
        createSortHandler={createSortHandler}
        handleActionButton={handleActionButton}
        handleOpen={handleOpenRowOptions}
        handleClose={handleCloseRowOptions}
      />

      <PaginationFooter
        rowsPerPageOptions={rowsPerPageOptions}
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <ConfirmationDialog
        title="Confirmation"
        message="Are you sure you want to delete this item?"
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDialog}
        open={dialogOpen}
      />
    </Box>
  );
};

export default DataTable;
