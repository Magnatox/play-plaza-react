import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import {Platform} from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformMenu = ({onSelectPlatform, selectedPlatform}: Props) => {
  const {data, error} = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button}>{selectedPlatform?.name || "Platforms"}</MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformMenu;
