import styled from "@emotion/styled";

export const Input = styled.input`
    width: "100%",
    height: "3rem",
    padding: "1rem",
    color: "white",
    backgroundColor: "rgba(78, 100, 131, 0.50)",
    border: "0.5px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",

    ":focus-visible": {
        outline: "1px solid rgba(255, 255, 255, 0.5)",
    },
`;
