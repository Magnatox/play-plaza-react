import {Box, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {useRef} from "react";
import {BsSearch} from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box width="40%">
      <form
        onSubmit={(event) => {
          event.preventDefault;
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            onChange={() => {
              if (ref.current) onSearch(ref.current.value);
            }}
            ref={ref}
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
          ></Input>
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
