import {Box} from "@chakra-ui/react";
import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({children}: Props) => {
  return (
    <Box paddingBottom="1px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
