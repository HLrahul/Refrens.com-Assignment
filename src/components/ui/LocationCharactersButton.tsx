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

type Resident = {
  name: string;
};

export const LocationCharactersButton = ({
  residents,
}: {
  residents: string[];
}) => {
  const charactersDiscolore = useDisclosure();
  const [fetchEnabled, setFetchEnabled] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["residents", residents],
    queryFn: () => fetchResidents(residents),
    enabled: fetchEnabled,
  });

  const handleOpen = () => {
    setFetchEnabled(true);
    charactersDiscolore.onOpen();
    
  };

  return (
    <>
      {error && <Text>Error Occured!</Text>}

      <Button onClick={handleOpen}>Characters</Button>
      <Modal
        isOpen={charactersDiscolore.isOpen}
        onClose={charactersDiscolore.onClose}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Residents</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading ? (
              <Button>
                <Spinner size="sm" />
              </Button>
            ) : (
              <Stack>
                {data?.length === 0 ? (
                  <Text>No Residents found</Text>
                ) : (
                  data?.map((resident: Resident, index: number) => (
                    <Text key={`${resident.name}-${index}`}>
                      {resident.name}
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
