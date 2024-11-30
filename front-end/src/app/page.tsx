"use client";
import { Grid, Box, styled } from "@mui/material";
import PageContainer from "@/app/dashboard/components/container/PageContainer";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
  padding: "20px",
}));

const HomePage = () => {
  return (
    <MainWrapper className="mainwrapper">
      {/* <PageContainer title="Home" description="this is Home">
        
      </PageContainer> */}
    </MainWrapper>
  );
};

export default HomePage;
