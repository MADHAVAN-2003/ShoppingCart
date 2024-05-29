import React, { useContext } from "react";
import { Context } from "../Data";
import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Cart() {
  const { cart, setCart } = useContext(Context);
  console.log(cart, "cartITEMS");

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const handleRemoveCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    alert("Item Removed From Card ☹");
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
      <h3>Cart</h3>
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
        {cart.map((val, index) => {
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
                <ListItem>
                  {val.size ? `Size : ${val.size}` : ` Color : ${val.color}`}
                </ListItem>
                <Button
                  variant="outlined"
                  onClick={() => handleRemoveCart(index)}
                >
                  Remove From Cart
                </Button>
              </List>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default Cart;
