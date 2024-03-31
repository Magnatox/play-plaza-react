import {GameQuery} from "../App";
import {Heading} from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}

const GamesHeader = ({gameQuery}: Props) => {
  const header = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;
  return (
    <Heading marginLeft={2} paddingY={5}>
      {header}
    </Heading>
  );
};

export default GamesHeader;
