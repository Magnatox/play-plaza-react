import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BiChevronDown} from "react-icons/bi";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: String;
}

const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
  const setOrders = [
    {value: "", label: "Relevance"},
    {value: "-added", label: "Date added"},
    {value: "name", label: "Name"},
    {value: "-released", label: "Release date"},
    {value: "-metacritic", label: "Popularity"},
    {value: "-rating", label: "Average rating"},
  ];
  const currentSortOrder = setOrders.find((order) => order.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {setOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
