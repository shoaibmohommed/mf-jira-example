import { useState, useEffect } from "react";
import Template from "./Template";
import { Stack, Box, Typography, Divider } from "@mui/material";

const uri = "http://localhost:3000/projects"; // "https://retoolapi.dev/owNi11/recent-projects"; // "https://mocki.io/v1/d4d65e23-e19d-4dfe-a93b-2e8cb711be9e";
export default () => {
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    fetch(uri)
      .then((raw) => raw.json())
      .then((data) => setSectionData(data));
  }, []);

  return (
    <Box paddingTop={2}>
      <Typography fontSize={24} level="h1" paddingTop={2} paddingBottom={2}>
        Your work
      </Typography>
      <Divider flexItem />
      <Typography fontSize={18} level="h1" paddingTop={2} paddingBottom={2}>
        Recent projects
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        {sectionData.map((item) => (
          <Template key={item.uuid} item={item} />
        ))}
      </Stack>
    </Box>
  );
};
