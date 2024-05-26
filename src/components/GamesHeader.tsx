import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GamesHeader = ({gameQuery}: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const header = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginLeft={2} paddingY={5}>
      {header}
    </Heading>
  );
};

export default GamesHeader;
