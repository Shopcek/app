import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Shoptopbar } from "components/shop-top-bar";
import { wishlishProduct } from "common/data";
import EmailClothe from "pages/catalog/email-clothe";
import { CommonService } from "components/common-service";
import HotDeals from "components/hot-deals";

const WishList = () => {
  document.title = "Wishlist | Shopcek";
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="table-responsive">
                <Table className="fs-15 table-nowrap align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Stock Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(wishlishProduct || [])?.map((item, inx) => {
                      return (
                        <tr key={inx}>
                          <td>
                            <div className="d-flex gap-3">
                              <div className="avatar-sm flex-shrink-0">
                                <div
                                  className={`avatar-title bg-${item.bg}-subtle rounded`}
                                >
                                  <Image
                                    src={item.img}
                                    alt=""
                                    className="avatar-xs"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <Link to="/product-details">
                                  <h6 className="fs-16">{item.title}</h6>
                                </Link>
                                <p className="mb-0 text-muted fs-13">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>${item.price}</td>
                          <td>
                            <span
                              className={`badge bg-${item.color}-subtle text-${item.color}`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td>
                            <ul className="list-unstyled d-flex gap-3 mb-0">
                              <li>
                                <Link
                                  to="/shop/shopingcard"
                                  className="btn btn-soft-info btn-icon btn-sm"
                                >
                                  <i className="ri-shopping-cart-2-line fs-13"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="btn btn-soft-danger btn-icon btn-sm"
                                >
                                  <i className="ri-close-line fs-13"></i>
                                </Link>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <div className="hstack gap-2 justify-content-end mt-2">
                <Link to="product-list" className="btn btn-hover btn-secondary">
                  Continue Shopping{" "}
                  <i className="ri-arrow-right-line align-bottom"></i>
                </Link>
                <Link to="/shop/checkout" className="btn btn-hover btn-primary">
                  Check Out <i className="ri-arrow-right-line align-bottom"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <HotDeals />
    </React.Fragment>
  );
};
export default WishList;
