import { useRef, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { FilterProps } from "../types";

type CharacterFiltersProps = {
  filter: FilterProps;
  onFilterChange: (newFilter: FilterProps) => void;
};

const CharacterFilters = ({
  filter,
  onFilterChange,
}: CharacterFiltersProps) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filter, status: event.target.value });
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filter, location: event.target.value });
  };

  const handleEpisodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filter, episode: event.target.value });
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filter, gender: event.target.value });
  };

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filter, species: event.target.value });
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filter, type: event.target.value });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterReset = () => {
    onFilterChange({
      status: "",
      location: "",
      episode: "",
      gender: "",
      species: "",
      type: "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
    setIsModalOpen(false); // Close the modal
  };

  const initialRef = useRef<HTMLButtonElement>(null);
  const finalRef = useRef<HTMLButtonElement>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Filter</Button>

      <Modal
        isOpen={isOpen || isModalOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent maxH="100%" alignItems="center" justifyContent="center">
          <ModalHeader>Filter Characters</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection="column" mt={4}>
              <form onSubmit={handleSubmit}>
                <Flex flexDirection="row" justifyContent="space-between">
                  <Flex flexDirection="column" mr={4} flex={1}>
                    <FormControl mb={2} maxW="100%">
                      <FormLabel fontSize="sm" textAlign="center">
                        Status
                      </FormLabel>
                      <Select
                        name="status"
                        value={filter.status}
                        onChange={handleStatusChange}
                        size="sm"
                      >
                        <option value="">All</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">Unknown</option>
                      </Select>
                    </FormControl>

                    <FormControl mb={2} maxW="100%">
                      <FormLabel fontSize="sm" textAlign="center">
                        Location
                      </FormLabel>
                      <Input
                        name="location"
                        value={filter.location}
                        onChange={handleLocationChange}
                        size="sm"
                      />
                    </FormControl>

                    <FormControl mb={2} maxW="100%">
                      <FormLabel fontSize="sm" textAlign="center">
                        Episode
                      </FormLabel>
                      <Input
                        name="episode"
                        value={filter.episode}
                        onChange={handleEpisodeChange}
                        size="sm"
                      />
                    </FormControl>
                  </Flex>

                  <Flex flexDirection="column" ml={4} flex={1}>
                    <FormControl mb={2} maxW="100%">
                      <FormLabel fontSize="sm" textAlign="center">
                        Gender
                      </FormLabel>
                      <Select
                        name="gender"
                        value={filter.gender}
                        onChange={handleGenderChange}
                        size="sm"
                      >
                        <option value="">All</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                      </Select>
                    </FormControl>

                    <FormControl mb={2} maxW="100%">
                      <FormLabel fontSize="sm" textAlign="center">
                        Species
                      </FormLabel>
                      <Input
                        name="species"
                        value={filter.species}
                        onChange={handleSpeciesChange}
                        size="sm"
                      />
                    </FormControl>

                    <FormControl mb={2} maxW="100%">
                      <FormLabel fontSize="sm" textAlign="center">
                        Type
                      </FormLabel>
                      <Input
                        name="type"
                        value={filter.type}
                        onChange={handleTypeChange}
                        size="sm"
                      />
                    </FormControl>
                  </Flex>
                </Flex>

                <Flex flexDirection="row" justifyContent="space-between">
                  <Button
                    type="reset"
                    colorScheme="gray"
                    mt={4}
                    width="100%"
                    style={{ marginBottom: "1rem" }}
                    onClick={handleFilterReset}
                  >
                    Reset
                  </Button>

                  <Button
                    type="submit"
                    colorScheme="teal"
                    mt={4}
                    width="100%"
                    style={{ marginBottom: "1rem" }}
                  >
                    Apply
                  </Button>
                </Flex>
              </form>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CharacterFilters;
