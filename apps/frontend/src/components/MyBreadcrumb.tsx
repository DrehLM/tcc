import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type TBeadcrumbNameMap = {
  [key: string]: string;
};

const breadcrumbNameMap: TBeadcrumbNameMap = {
  "/": "Home",
  "/eventos": "Eventos",
  "/eventos/edicoes": "Edições",
  "/eventos/edicoes/publicacoes": "Publicações",
};

const MyBreadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {pathnames.length > 0 ? (
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          Home
        </Link>
      ) : (
        <Typography color="text.primary">Home</Typography>
      )}

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <Link
            underline="hover"
            color="inherit"
            key={to}
            onClick={() => navigate(to)}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            {breadcrumbNameMap[to]}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default MyBreadcrumb;
