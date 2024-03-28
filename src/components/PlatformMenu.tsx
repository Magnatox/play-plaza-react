import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformMenu = () => {
  const {data, error} = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button}>Platforms</MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
