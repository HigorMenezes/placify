export interface Theme {
  backgroundColor: string;
  PrimaryColor: {
    backgroundColor: string;
    gradient: string;
    textContrast: string;
  };
}

const theme: Theme = {
  backgroundColor: "#ECECEC",
  PrimaryColor: {
    backgroundColor: "#9A6AC7",
    gradient:
      "linear-gradient(54.27deg, #ED81D5 -5%, #B785C4 49%, #765F93 121%)",
    textContrast: "#FFFFFF",
  },
};

export default theme;
