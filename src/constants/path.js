const MOVIES_PATH = "/movies";

const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  LOGIN: "/login",
  REGISTER: "/register",
  FAQ: "/faq",
  PRICING: "/pricing",
  MOVIES: {
    INDEX: MOVIES_PATH,
    DETAIL: MOVIES_PATH + "/:movieSlug",
  },

  NOT_FOUND: "*",
};

export default PATHS;
