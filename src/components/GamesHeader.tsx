import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
interface Props {
  gameQuery: GameQuery;
}

const GamesHeader = ({gameQuery}: Props) => {
  const {data: genres} = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const {data: platforms} = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === gameQuery.platformId);

  const header = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginLeft={2} paddingY={5}>
      {header}
    </Heading>
  );
};

export default GamesHeader;
