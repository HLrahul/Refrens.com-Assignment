import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchResidents } from "../../api/api";

type Character = {
  name: string;
};

export const EpisodeCharacterButton = ({
  characters,
}: {
  characters: string[];
}) => {
  const charactersDisclosure = useDisclosure();
  const [fetchEnabled, setFetchEnabled] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["characters", characters],
    queryFn: () => fetchResidents(characters),
    enabled: fetchEnabled,
  });

  const handleOpen = () => {
    setFetchEnabled(true);
    charactersDisclosure.onOpen();
  };

  return (
    <>
      {error && <Text>Error Occured!</Text>}

      <Button onClick={handleOpen}>Characters</Button>
      <Modal
        isOpen={charactersDisclosure.isOpen}
        onClose={charactersDisclosure.onClose}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Characters</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading ? (
              <Spinner size="sm" />
            ) : (
              <Stack>
                {data?.length === 0 ? (
                  <Text>No Characters found</Text>
                ) : (
                  data?.map((character: Character, index: number) => (
                    <Text key={`${character.name}-${index}`}>
                      {character.name}
                    </Text>
                  ))
                )}
              </Stack>
            )}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};
