import { Box } from "@mui/material";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import WorkedOn from "./Tabs/WorkedOn";

const TabSection = () => {
  return (
    <Box paddingTop={8}>
      <Tabs aria-label="Basic tabs" defaultValue={0}>
        <TabList
          sx={{
            [`& .${tabClasses.root}`]: {
              fontSize: "sm",
              fontWeight: "lg",
              [`&[aria-selected="true"]`]: {
                color: "primary.500",
              },
              [`&.${tabClasses.focusVisible}`]: {
                outlineOffset: "-4px",
              },
            },
          }}
        >
          <Tab color="blue">Worked on</Tab>
          <Tab color="blue">Viewed</Tab>
          <Tab color="blue">Assigned to me </Tab>
          <Tab color="blue">Starred</Tab>
        </TabList>
        <WorkedOn />
        <TabPanel value={1}>Viewed tab panel</TabPanel>
        <TabPanel value={2}>
          <b>Assigned to me</b> tab panel
        </TabPanel>
        <TabPanel value={3}>Starred tab panel</TabPanel>
      </Tabs>
    </Box>
  );
};

export default TabSection;
