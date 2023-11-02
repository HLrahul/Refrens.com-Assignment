import { Spinner } from "@chakra-ui/react";

export default function FetchLoader() {
  return (
    <div
      style={{
        position: "relative",
        height: "10vh",
        width: "100%",
        padding: "10px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner role="status" aria-label="Loading" aria-busy size="sm" />
    </div>
  );
}
