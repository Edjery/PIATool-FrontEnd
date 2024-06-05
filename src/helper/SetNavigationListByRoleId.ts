import NavigationList from "../values/interface/NavigationList";
import { adminNavigationList, userNavigationList } from "../values/list";

const SetNavigationListByRoleId = (roleId: number): NavigationList[] => {
  switch (roleId) {
    case 1:
      return adminNavigationList;
    case 2:
      return userNavigationList;
    default:
      return userNavigationList;
  }
};

export default SetNavigationListByRoleId;
