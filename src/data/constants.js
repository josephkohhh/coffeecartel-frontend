/**
 * File: constants.js
 * Author: Joseph Koh
 * Description: To store fixed data
 */

export const color = {
  white: "#FFF",
  dull: "#FAFAFA",
  black: "#000",
  green: "#04A96D",
  darkgreen: "#07784f",
  red: "#DC143C",
  grey: "#555555",
  lightGrey: "#DDDDDD",
  cheese: "#FBF8F5",
  lightChocolate: "#634832",
  chocolate: "#38220F",
};
export const navLinks = [
  { label: "Home", path: "/home" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
];
export const footerLinks = [
  {
    label: "Code",
    path: "https://github.com/josephkohhh/coffeecartel-fullstack.git",
  },
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
];
export const categoryLinks = [
  "Hot Coffees",
  "Iced Coffees",
  "Tea Lattes",
  "Espresso",
  "Frappuccinos",
  "Cold Brews",
  "Refreshers",
  "Coffee Beans",
  "Seasonal Specialty",
];

// Data stored in app features table
export const tableData = [
  {
    feature: "Search",
    description: "Search for products",
  },
  {
    feature: "Side Menu",
    description: "Filter products categorically",
  },
  {
    feature: "Pagination",
    description: "Limit up to 12 products per page",
  },

  {
    feature: "Register",
    description: "Create an account",
  },
  {
    feature: "Login",
    description: "Login to an account",
  },
  {
    feature: "View/Edit Profile",
    description: "Fetch profile information",
  },
  {
    feature: "Cart",
    description: "Add, update, delete, clear products from cart",
  },
  {
    feature: "Local Storage",
    description: "Products saved is updated to local storage",
  },
  {
    feature: "View Orders",
    description: "Fetch order information",
  },
  {
    feature: "Role Based Access Control System ",
    description: "Defines admin, user and visitor role",
  },
  {
    feature: "Responsiveness",
    description: "App is responsive which supports mobile devices",
  },
];

// Code snippets stored in variables
export const routerCodeSnippet = `<Router>
  <Routes>
    {/* Forbidden route */}
    <Route path="/forbidden" element={<Forbidden />} />

    {/* Public and user route */}
    <Route element={<UserRoute />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Route>

    {/* Admin Route */}
    <Route element={<AdminRoute />}>
      <Route path="/admin" element={<Admin />} />
    </Route>
  </Routes>
</Router>`;
export const useStateCodeSnippet = `const [anchorEl, setAnchorEl] = useState(null);
const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
const handleCloseMenu = () => setAnchorEl(null);`;
export const useEffectCodeSnippet = `export const UseWindowResize = (...callbacks) => {
 useEffect(() => {
  const handleResize = () => callbacks.forEach((callback) => callback());
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize); 
 }, []);
};`;
export const useCustomHookCodeSnippet = `const {
  cartList,
  setCartList,
  AddToCartList,
  ClearCart,
  DeleteCartItem,
  UpdateCartItemQuantity,
} = useCartState();
`;
export const useLocalStorageCodeSnippet = `// Get
export const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

// Set
export const saveToLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

// Delete
export const clearFromLocalStorage = (key) => localStorage.removeItem(key);`;
export const reactHookFormCodeSnippet = `// React Hook Form
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

<form onSubmit={handleSubmit(submitLogin)}>
  <Stack>
    <TextField
      type="text"
      label="Username"
      {...register("username", {
        required: "Username is required",
      })}
      error={!!errors.username}
      helperText={errors.username?.message}
    />

    <TextField
      type="password"
      label="Password"
      {...register("password", {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters long",
        },
      })}
      error={!!errors.password}
      helperText={errors.password?.message}
    />

    <AccessButton type="submit" loading={loading}>
      Login
    </AccessButton>
  </Stack>  
</form>
`;
export const contextAPICodeSnippet = `export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  
  // State and functions code logic here...
  ...

  return (
    <CartContext.Provider
      value={{
        ...
      }}
    >
      {children}
    </CartContext.Provider>
  );
};`;
export const axiosCodeSnippet = `// Login API call
export const Login = async (data) => {
  try {
    return await axios.post("url", data);
  } catch (error) {
    throw error;
  }
};`;
export const envVarCodeSnippet = `// Database credentials
const databaseName = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;`;
export const arrayMapCodeSnippet = `currentProducts.map((product) => (
  <Grid item key={product.id}>
    <Product product={product} />
  </Grid>`;
export const arrayFilterSliceSortCodeSnippet = `// Function to filter product by category
export const FilterProductCategory = (list, category) => {
  return list.filter((i) => i.category === category);
};

// Function to sort product by price
export const SortProductPrice = (list, sortBy) => {
  if (sortBy === "Low to High") {
    // Sort by asc order
    return list.slice().sort((a, b) => a.price - b.price);
  }
  // Sort by desc order
  else return list.slice().sort((a, b) => b.price - a.price);
};`;
export const arraySomeCodeSnippet = `const existingItem = prev.some((i) => i.id === cartItem.id);`;
export const arrayReduceCodeSnippet = `list.reduce((acc, i) => {
  const productCost = i.price * i.qty;
  return acc + productCost;
}, 0);`;
export const viteCodeSnippet = `npx create-vite project_name --template react`;
export const viteDevCodeSnippet = `npm run dev`;
export const viteProdCodeSnippet = `npm run build`;
export const muiCodeSnippet = `npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material`;
export const expressAPICodeSnippet = `import express from "express";
import cors from "cors";
import routes from "./routes/root.mjs";

const app = express(); 

const port = process.env.PORT || 3000;

app.use(express.json()); 

app.use(routes); 

app.listen(port, () =>
  console.log("Server started up listening on port", port)
);
`;
export const hashingCodeSnippet = `export const hashPassword = async (password) => {
  try {
    const saltRounds = 15;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (error) {
    console.error("Error encrypting password: ", error);
    throw new Error("Error encrypting password");
  }
};`;
export const corsCodeSnippet = `const whiteListUrl = process.env.WHITELIST_URL;

app.use(
  cors({
    origin: whiteListUrl,
  })
);`;

export const jwtCodeSnippet = `import jwt from "jsonwebtoken";

export const secretKey = process.env.SECRET_KEY;

const token = jwt.sign(userData, secretKey);

return res.json({
  status: 200,
  token,
});`;
export const sequelizeCodeSnippet = `export const UserModel = sequelize.define("users", user);
`;
export const mysqlCodeSnippet = `export const sequelize = new Sequelize(databaseName, username, password, {
  host: host, 
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },`;
