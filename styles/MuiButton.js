/* eslint-disable import/no-anonymous-default-export */
import colors from "./colors";

export default {
  styleOverrides: {
    root: {
      boxShadow: "none",
      borderRadius: "8px",
      textTransform: "capitalize",
      fontSize: "14px",
    },
  },
  variants: [
    {
      props: {
        variant: "blue",
      },
      style: {
        color: colors.mono1,
        border: "1px solid",
        backgroundColor: colors.blue,
        padding: "0.6rem 1.75rem",
        borderRadius: "0.3rem",
        textTransform: "none",
        "&:hover": {
          backgroundColor: colors.blue,
          borderColor: colors.blue,
        },
      },
    },
    {
      props: {
        variant: "thistle",
      },
      style: {
        color: colors.mono1,
        border: "1px solid",
        backgroundColor: colors.blue,
        padding: "0.6rem 1.75rem",
        borderRadius: "0.3rem",
        textTransform: "none",
        "&:hover": {
          backgroundColor: colors.thistle,
          borderColor: colors.blue,
        },
      },
    },
    {
      props: {
        variant: "teal",
      },
      style: {
        color: colors.mono1,
        border: "1px solid",
        backgroundColor: colors.teal,
        padding: "0.6rem 1.75rem",
        borderRadius: "0.3rem",
        textTransform: "none",
        "&:hover": {
          backgroundColor: colors.teal,
          borderColor: colors.blue,
        },
      },
    },
  ],
};
