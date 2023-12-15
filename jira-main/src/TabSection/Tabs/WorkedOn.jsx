import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import TabPanel from "@mui/joy/TabPanel";
import {
  List,
  ListItem,
  ListItemDecorator,
  ListItemContent,
  Avatar,
  AvatarGroup,
} from "@mui/joy";

const uri = "http://localhost:3000/worked_on";
const WorkedOn = () => {
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    fetch(uri)
      .then((raw) => raw.json())
      .then((data) => setSectionData(data));
  }, []);

  return (
    <TabPanel value={0}>
      {sectionData.map((item) => (
        <React.Fragment key={item.title}>
          <Typography
            level="body-xs"
            textTransform="uppercase"
            sx={{
              color: "#6B778C",
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "16px",
            }}
          >
            {item.title}
          </Typography>
          <List
            aria-labelledby="ellipsis-list-demo"
            sx={{ "--ListItemDecorator-size": "56px" }}
          >
            {item.list.map((li) => (
              <ListItem key={li.title} style={{ padding: 8 }}>
                <ListItemDecorator>
                  <Avatar
                    style={{
                      borderRadius: 4,
                      width: 24,
                      height: 24,
                    }}
                    src={`https://picsum.photos/120?random=${li.title}`}
                  />
                </ListItemDecorator>
                <ListItemContent>
                  <Typography level="title-sm" color="#172b4d">
                    {li.title}
                  </Typography>
                  <Typography
                    level="body-sm"
                    noWrap
                    fontSize={13}
                    color="#626f86"
                  >
                    {li.story}&nbsp;&nbsp;{li.project}
                  </Typography>
                </ListItemContent>
                <AvatarGroup>
                  {li.authors.map((author) => (
                    <Avatar
                      key={author}
                      alt={author}
                      src={`https://picsum.photos/120?random=${author}`}
                    />
                  ))}
                  {li.authors.length > 2 && (
                    <Avatar>+2</Avatar>
                  )}
                </AvatarGroup>
              </ListItem>
            ))}
          </List>
        </React.Fragment>
      ))}
    </TabPanel>
  );
};
export default WorkedOn;
