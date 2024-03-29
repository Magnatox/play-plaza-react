import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order by: Releveance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Realease date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
