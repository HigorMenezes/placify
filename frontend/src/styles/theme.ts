export interface Theme {
  backgroundColor: string;
  PrimaryColor: {
    backgroundColor: string;
    gradient: string;
    contrastColor: string;
  };
  textColor: string;
  subTextColor: string;
  fontWeight: {
    light: number;
    regular: number;
    semiBold: number;
    bold: number;
  };
}

const theme: Theme = {
  backgroundColor: "#eeeeee",
  PrimaryColor: {
    backgroundColor: "#8d2ec9",
    gradient:
      "linear-gradient(54.27deg, #ED81D5 -5%, #B785C4 49%, #765F93 121%)",
    contrastColor: "#FFFFFF",
  },
  textColor: "#3f3f3f",
  subTextColor: "#6e6e6e",
  fontWeight: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
};

export default theme;
