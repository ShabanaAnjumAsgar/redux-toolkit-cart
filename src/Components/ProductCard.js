import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../Redux/cartSlice";

export default function ProductCard() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      <MDBContainer>
        <MDBRow className="m-lg-2">
          {items.map((item) => {
            return (
              <>
                <MDBCol key={item.id} size="md">
                  <MDBCard>
                    <MDBCardImage src={item.img} position="top" alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>{item.title}</MDBCardTitle>
                      <MDBCardText>&#8377;{item.price}</MDBCardText>
                      <MDBBtn
                        color="dark"
                        onClick={() => dispatch(addtoCart(item))}
                      >
                        Add To Cart
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </>
  );
}
