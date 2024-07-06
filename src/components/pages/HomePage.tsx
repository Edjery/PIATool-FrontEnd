import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import UserHomePage from "../pageComponents/homePage/UserHomePage";
import AdminDashboard from "../pageComponents/homePage/AdminDashboard";

type UserType = "ADMIN" | "USER";

const HomePage = () => {
  const [currentUserType, setCurrentUserType] = useState<UserType>("USER");
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const data = "ADMIN";
    if (data) handleRoleRestriction(data);
    setLoading(false);
  }, []);

  const handleRoleRestriction = (data: UserType) => {
    setCurrentUserType(data);
  };

  if (!isLoading) {
    switch (currentUserType) {
      case "ADMIN":
        return <AdminDashboard />;
      case "USER":
        return <UserHomePage />;
    }
  } else return <Box>Loading...</Box>;
};

export default HomePage;
