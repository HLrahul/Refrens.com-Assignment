interface Props {
  error?: {
    message?: string;
  };
}

const CharactersError = ({ error }: Props) => {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        padding: "10px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Error: {error?.message}
    </div>
  );
};

export default CharactersError;
