import INavigationList from "../values/interface/INavigationList";
import { adminNavigationList, userNavigationList } from "../values/list";

const setNavigationListByRoleId = (roleId: number): INavigationList[] => {
  switch (roleId) {
    case 1:
      return adminNavigationList;
    case 2:
      return userNavigationList;
    default:
      return userNavigationList;
  }
};

export default setNavigationListByRoleId;
