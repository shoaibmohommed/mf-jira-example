import { Card, Typography, Divider, Avatar } from "@mui/material";
import "./template.scss";
import Dropdown from "./Dropdown";

const Template = ({ item: { name, description, boardCount, uuid } }) => {
  return (
    <Card
      sx={{
        width: 240,
        height: 168,
        paddingLeft: 3,
        ":hover": { boxShadow: "-2px 2px 7px 1px lightgrey" },
      }}
    >
      <div className="template relative">
        <Avatar
          alt="Remy Sharp"
          style={{
            position: "absolute",
            borderRadius: 4,
            width: 24,
            height: 24,
            left: -12,
          }}
          src={`https://picsum.photos/120?random=${uuid}`}
        />
        <Typography fontSize={14} fontWeight={700} lineHeight={1} level="h2">
          {name}
        </Typography>
        <Typography fontSize={11} level="h2">
          {description}
        </Typography>
        <Typography fontSize={12} color={"grey"} paddingTop={1}>
          QUICK LINKS
        </Typography>
        <Typography fontSize={11} paddingTop={1}>
          My open issues
        </Typography>
        <Typography fontSize={11} paddingTop={1} paddingBottom={2}>
          Done issues
        </Typography>
        <Divider
          flexItem
          style={{ position: "relative", left: -12, width: 216 }}
        />
        <Dropdown count={boardCount} />
      </div>
    </Card>
  );
};

export default Template;
