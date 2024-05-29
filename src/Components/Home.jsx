import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Data";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Home() {
  const { MenProducts, WomenProducts, setCart, cart } = useContext(Context);
  //   console.log(MenProducts, "MEn PRODUCTS");

//Card Icon Btn , MIUI 
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  //Add To Cart Button Handler
  const handleCartItems = (item) => {
    // console.log(item, "Cart Item");
    setCart([...cart, item]);
    alert("Item added to the Cart");
  };
  return (
    <div>
      {/* Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 4,
          paddingInlineEnd: 3,
          height: 60,
          boxShadow: 5,
          marginBottom: 3,
        }}
      >
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/men">
          <Button>MensProduct</Button>
        </Link>
        <Link to="/women">
          <Button>WomensProduct</Button>
        </Link>
        <Link to="/cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Link>
      </Box>
      <h3>Mens Product</h3>
      <Divider />
      <Box
        sx={{
          display: "flex",
          gap: 5,
          //   border: "1px solid black",
          alignItems: "center",
          height: "50vh",
        }}
      >
        {MenProducts.map((val, index) => {
          return (
            <Box
              key={index}
              sx={{
                height: 150,
                width: "25%",
                border: "1px solid black",
                ":hover": {
                  boxShadow: 6,
                  padding: 3,
                  height: 200,
                  width: "38%",
                  margin: 5,
                  border: "none",
                  fontSize: 23,
                },
                padding: 2,
              }}
            >
                
              {val.name}
              <Divider />
              <List>
                <ListItem>Price : {val.price}</ListItem>
                <ListItem>Size : {val.size}</ListItem>
                <Button variant="outlined" onClick={() => handleCartItems(val)}>
                  Add to Card
                </Button>
              </List>
            </Box>
          );
        })}
      </Box>
      <h3>WomensProducts</h3>
      <Divider />
      <Box
        sx={{
          display: "flex",
          gap: 5,
          //   border: "1px solid black",
          alignItems: "center",
          height: "50vh",
        }}
      >
        {WomenProducts.map((val, index) => {
          return (
            <Box
              key={index}
              sx={{
                height: 150,
                width: "25%",
                border: "1px solid black",
                ":hover": {
                  boxShadow: 6,
                  padding: 3,
                  height: 200,
                  width: "38%",
                  margin: 5,
                  border: "none",
                  fontSize: 23,
                },
                padding: 2,
              }}
            >
              {val.name}
              <Divider />
              <List>
                <ListItem>Color : {val.color}</ListItem>
                <ListItem>Price : {val.price}</ListItem>
                <Button variant="outlined" onClick={() => handleCartItems(val)}>
                  Add to Card
                </Button>
              </List>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default Home;
