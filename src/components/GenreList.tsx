import {HStack, Heading, Image} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const {data} = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>
          <HStack margin={2}>
            <Image boxSize={10} src={genre.image_background} />
            <Heading fontSize={15}>{genre.name}</Heading>
          </HStack>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
