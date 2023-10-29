import { Spinner } from "@chakra-ui/react";

const CharactersLoader = () => {
  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner size="xl" />
    </div>
  );
};

export default CharactersLoader;