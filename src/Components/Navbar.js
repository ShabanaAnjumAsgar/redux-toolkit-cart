import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBBadge,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../Redux/cartSlice";

export default function Navbar() {
  const { cart, totalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">All Products</Link>
        </span>
        <Link to="/cart">
          <MDBBtn color="dark">
            Cart
            <MDBBadge className="ms-2" color="danger">
              {totalQuantity}
            </MDBBadge>
          </MDBBtn>
        </Link>
      </MDBContainer>
    </MDBNavbar>
  );
}
