import NavButton from "./NavButton";
import { dataConfig } from "./buttonsData";

export default () =>
  dataConfig.map((item) => <NavButton key={item.name} config={item} />);
