import { Button, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const Dropdown = ({ count }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="p-1 relative -left-3">
      <Button
        style={{ height: 26 }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Typography textTransform="capitalize" fontSize={11}>
          {count} boards
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Nemesis</MenuItem>
        <MenuItem onClick={handleClose}>Mavericks</MenuItem>
        <MenuItem onClick={handleClose}>IAM</MenuItem>
        <MenuItem onClick={handleClose}>Atlas</MenuItem>
        <MenuItem onClick={handleClose}>Wizard</MenuItem>
      </Menu>
    </div>
  );
};
export default Dropdown;
