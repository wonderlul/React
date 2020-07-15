import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
  background: white;
  margin: 1%;
  text-align: center;
  width: 23%;
`;

export const ProductImage = styled.img`
  display: block;
  width: 90%;
  height: 50%;
  margin: 0;
`;

export const ProductPrice = styled.p`
  height: 20%;
  margin: 0;
  font-size: 24px;
  line-height: 28px;
  color: #00a1b4;
  padding: 3px 0px;
`;

export const ProductName = styled.h3`
  height: 10%;
  margin: 0;
`;

export const AddCartButton = styled.button`
  margin: 5%;
  height: 10%;
  background-color: #00a1b4;
  color: #fff;
  border: 1px solid #fff;
`;

export const RemoveCartButton = styled.button`
  display: inline-block;
  margin: 5%;
  height: 10%;
  background-color: #00a1b4;
  color: #fff;
  border: 1px solid #fff;
`;
