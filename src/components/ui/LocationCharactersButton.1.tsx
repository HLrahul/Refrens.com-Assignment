import {
  Button,
  Modal,
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
import { Resident } from "./LocationCharactersButton";

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

  return (
    <>
      {isLoading && (
        <Button>
          <Spinner size="sm" />
        </Button>
      )}
      {error && <Text>Error Occured!</Text>}

      <Button onClick={charactersDiscolore.onOpen}>Characters</Button>
      <Modal
        isOpen={charactersDiscolore.isOpen}
        onClose={charactersDiscolore.onClose}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalHeader>Residents</ModalHeader>
        <ModalCloseButton />
        <ModalContent>
          <Stack>
            {data?.map((resident: Resident) => (
              <Text key={resident.name}>{resident.name}</Text>
            ))}
          </Stack>
        </ModalContent>
        <ModalFooter />
      </Modal>
    </>
  );
};
