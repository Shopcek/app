import React, { useEffect, useState } from "react";
import {
  Col,
  Modal,
  Row,
  Card,
  Offcanvas,
  Table,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
//img
import modalImg from "assets/images/subscribe.png";
import logodark from "assets/images/logo-dark.png";
import logolight from "assets/images/logo-light.png";

//component
import { productData } from "common/data";
import DeleteModal from "components/delete-modal";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store";

import { updateItemAsync, deleteCartItem } from "slices/thunk";
import {
  useLazyShopcekQuery,
  useShopcekQuery,
} from "graphql/apollo/query-wrapper";
import { SEARCH_QUERY } from "graphql/search/queries";

//go to one page to another page opne modal
export const MainModal = ({ location }: any) => {
  const [show, setShow] = useState(false);
  const modalhide = () => setShow(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [location]);

  return (
    <React.Fragment>
      <Modal
        show={show}
        onHide={modalhide}
        id="subscribeModal"
        contentClassName="border-0"
        size="lg"
        centered
      >
        <Modal.Body className="p-0 bg-info-subtle rounded">
          <Row className="g-0 align-items-center">
            <Col lg={6}>
              <div className="p-4 h-100">
                <span className="badge bg-info-subtle text-info fs-13">
                  GET 10% SALE OFF
                </span>
                <h2 className="display-6 mt-2 mb-3">
                  Subscribe & Get <b>50% Special</b> Discount On Email
                </h2>
                <p className="mb-4 pb-lg-2 fs-16">
                  Join our newsletter to receive the latest updates and
                  promotion
                </p>
                <Form action="#">
                  <div className="position-relative ecommerce-subscript">
                    <Form.Control
                      type="email"
                      className="rounded-pill border-0"
                      placeholder="Enter your email"
                    />
                    <Button
                      type="submit"
                      className="btn btn-info btn-hover rounded-pill"
                    >
                      Subscript
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col lg={6}>
              <div className="p-4 pb-0">
                <Image src={modalImg} alt="" fluid />
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

//===============================================

//invoice modal
export const InvoiceModal = ({ modal, handleClose }: any) => {
  const InvoicePrint = () => {
    window.print();
  };
  return (
    <React.Fragment>
      <Modal
        show={modal}
        onHide={handleClose}
        animation={true}
        dialogClassName="modal-custom-size"
        id="invoiceModal"
        aria-labelledby="invoiceModalLabel"
      >
        <Modal.Header closeButton>
          <h1 className="modal-title fs-5" id="invoiceModalLabel">
            Invoice #TTB30280001
          </h1>
        </Modal.Header>
        <Modal.Body>
          <Card className="mb-0" id="demo">
            <Row>
              <Col lg={12}>
                <Card.Header className="border-bottom-dashed p-4">
                  <div className="d-sm-flex">
                    <div className="flex-grow-1">
                      <Image
                        src={logodark}
                        className="card-logo card-logo-dark"
                        alt="logo dark"
                        height="26"
                      />
                      <Image
                        src={logolight}
                        className="card-logo card-logo-light"
                        alt="logo light"
                        height="26"
                      />
                      <div className="mt-sm-5 mt-4">
                        <h6 className="text-muted text-uppercase fw-semibold fs-14">
                          Address
                        </h6>
                        <p className="text-muted mb-1" id="address-details">
                          Phoenix, USA
                        </p>
                        <p className="text-muted mb-0" id="zip-code">
                          <span>Zip-code:</span> 90201
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-sm-0 mt-3">
                      <h6>
                        <span className="text-muted fw-normal">
                          Legal Registration No:
                        </span>{" "}
                        <span id="legal-register-no">987654</span>
                      </h6>
                      <h6>
                        <span className="text-muted fw-normal">Email:</span>{" "}
                        <span id="email">Shopcek@shopcek.com</span>
                      </h6>
                      <h6>
                        <span className="text-muted fw-normal">Website:</span>{" "}
                        <Link
                          to="https://shopcek.com/"
                          className="link-primary"
                          target="_blank"
                          id="website"
                        >
                          www.shopcek.com
                        </Link>
                      </h6>
                      <h6 className="mb-0">
                        <span className="text-muted fw-normal">
                          Contact No:{" "}
                        </span>
                        <span id="contact-no"> +(314) 234 6789</span>
                      </h6>
                    </div>
                  </div>
                </Card.Header>
                <Col lg={12}>
                  <Card.Body className="p-4">
                    <Row className="g-3">
                      <Col lg={3} xs={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">
                          Invoice No
                        </p>
                        <h5 className="fs-15 mb-0">
                          #TTB<span id="invoice-no">30280001</span>
                        </h5>
                      </Col>

                      <Col lg={3} xs={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">
                          Date
                        </p>
                        <h5 className="fs-15 mb-0">
                          <span id="invoice-date">14 Jan, 2023</span>{" "}
                          <small className="text-muted" id="invoice-time">
                            12:22PM
                          </small>
                        </h5>
                      </Col>

                      <Col lg={3} xs={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">
                          Payment Status
                        </p>
                        <span
                          className="badge bg-success-subtle"
                          id="payment-status"
                        >
                          Paid
                        </span>
                      </Col>

                      <Col lg={3} xs={6}>
                        <p className="text-muted mb-2 text-uppercase fw-semibold fs-14">
                          Total Amount
                        </p>
                        <h5 className="fs-15 mb-0">
                          $<span id="total-amount">1406.92</span>
                        </h5>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
                <Col lg={12}>
                  <Card.Body className="p-4 border-top border-top-dashed">
                    <Row className="g-3">
                      <Col xs={6}>
                        <h6 className="text-muted text-uppercase fw-semibold fs-14 mb-3">
                          Billing Address
                        </h6>
                        <p className="fw-medium mb-2 fs-16" id="billing-name">
                          Raquel Murillo
                        </p>
                        <p
                          className="text-muted mb-1"
                          id="billing-address-line-1"
                        >
                          4430 Holt Street, Miami, Florida-33169
                        </p>
                        <p className="text-muted mb-1">
                          <span>Phone: +</span>
                          <span id="billing-phone-no">(123) 561-238-1000</span>
                        </p>
                        <p className="text-muted mb-0">
                          <span>Tax: </span>
                          <span id="billing-tax-no">65-498700</span>{" "}
                        </p>
                      </Col>

                      <Col xs={6}>
                        <h6 className="text-muted text-uppercase fw-semibold fs-14 mb-3">
                          Shipping Address
                        </h6>
                        <p className="fw-medium mb-2 fs-16" id="shipping-name">
                          Raquel Murillo
                        </p>
                        <p
                          className="text-muted mb-1"
                          id="shipping-address-line-1"
                        >
                          4430 Holt Street, Miami, Florida-33169
                        </p>
                        <p className="text-muted mb-1">
                          <span>Phone: +</span>
                          <span id="shipping-phone-no">(123) 561-238-1000</span>
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
                <Col lg={12}>
                  <Card.Body className="p-4">
                    <div className="table-responsive">
                      <Table className="table-borderless text-center table-nowrap align-middle mb-0">
                        <thead>
                          <tr className="table-active">
                            <th scope="col" style={{ width: "50px" }}>
                              #
                            </th>
                            <th scope="col">Product Details</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Quantity</th>
                            <th scope="col" className="text-end">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody id="products-list">
                          <tr>
                            <th scope="row">01</th>
                            <td className="text-start">
                              <span className="fw-medium">
                                World's most expensive t shirt
                              </span>
                              <p className="text-muted mb-0">
                                Graphic Print Men &amp; Women Sweatshirt
                              </p>
                            </td>
                            <td>$266.24</td>
                            <td>03</td>
                            <td className="text-end">$798.72</td>
                          </tr>
                          <tr>
                            <th scope="row">02</th>
                            <td className="text-start">
                              <span className="fw-medium">
                                Ninja Pro Max Smartwatch
                              </span>
                              <p className="text-muted mb-0">
                                large display of 40mm (1.6″ inch), 27 sports
                                mode, SpO2 monitor
                              </p>
                            </td>
                            <td>$247.27</td>
                            <td>01</td>
                            <td className="text-end">$247.27</td>
                          </tr>
                          <tr>
                            <th scope="row">03</th>
                            <td className="text-start">
                              <span className="fw-medium">
                                Girls Mint Green &amp; Off-White Open Toe Flats
                              </span>
                              <p className="text-muted mb-0">
                                Fabric:Synthetic · Color:Green · Shoe
                                Type:Sandals
                              </p>
                            </td>
                            <td>$24.07</td>
                            <td>05</td>
                            <td className="text-end">$120.35</td>
                          </tr>
                          <tr>
                            <th scope="row">04</th>
                            <td className="text-start">
                              <span className="fw-medium">
                                Carven Lounge Chair Red
                              </span>
                              <p className="text-muted mb-0">
                                Carven Fabric Lounge Chair in Red Color
                              </p>
                            </td>
                            <td>$209.99</td>
                            <td>01</td>
                            <td className="text-end">$209.99</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="border-top border-top-dashed mt-2">
                      <Table
                        className="table-borderless table-nowrap align-middle mb-0 ms-auto"
                        style={{ width: "250px" }}
                      >
                        <tbody>
                          <tr>
                            <td>Sub Total</td>
                            <td className="text-end">$1376.33</td>
                          </tr>
                          <tr>
                            <td>Estimated Tax (12.5%)</td>
                            <td className="text-end">$172.04</td>
                          </tr>
                          <tr>
                            <td>
                              Discount{" "}
                              <small className="text-muted">(Shopcek50)</small>
                            </td>
                            <td className="text-end">- $206.45</td>
                          </tr>
                          <tr>
                            <td>Shipping Charge</td>
                            <td className="text-end">$65.00</td>
                          </tr>
                          <tr className="border-top border-top-dashed fs-15">
                            <th scope="row">Total Amount</th>
                            <th className="text-end">$1406.92</th>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="mt-3">
                      <h6 className="text-muted text-uppercase fw-semibold mb-3">
                        Payment Details:
                      </h6>
                      <p className="text-muted mb-1">
                        Payment Method:{" "}
                        <span className="fw-medium" id="payment-method">
                          Mastercard
                        </span>
                      </p>
                      <p className="text-muted mb-1">
                        Card Holder:{" "}
                        <span className="fw-medium" id="card-holder-name">
                          Raquel Murillo
                        </span>
                      </p>
                      <p className="text-muted mb-1">
                        Card Number:{" "}
                        <span className="fw-medium" id="card-number">
                          xxx xxxx xxxx 1234
                        </span>
                      </p>
                      <p className="text-muted">
                        Total Amount: <span className="fw-medium">$ </span>
                        <span id="card-total-amount">1406.92</span>
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="alert alert-info">
                        <p className="mb-0">
                          <span className="fw-semibold">NOTES:</span>
                          <span id="note">
                            All accounts are to be paid within 7 days from
                            receipt of invoice. To be paid by cheque or credit
                            card or direct payment online. If account is not
                            paid within 7 days the credits details supplied as
                            confirmation of work undertaken will be charged the
                            agreed quoted fee noted above.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                      <Link
                        to="print()"
                        className="btn btn-success"
                        onClick={InvoicePrint}
                      >
                        <i className="ri-printer-line align-bottom me-1"></i>{" "}
                        Print
                      </Link>
                      <Link to="#" className="btn btn-primary">
                        <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                        Download
                      </Link>
                    </div>
                  </Card.Body>
                </Col>
              </Col>
            </Row>
          </Card>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

//=======================================================

//search modal
export const SearchModal = ({ show, handleClose }: any) => {
  const [value, setValue] = useState("");
  // console.log(value);
  const handlesearch = (event: any) => {
    setValue(event.value);
  };

  const searchGQL = useShopcekQuery<any>(SEARCH_QUERY(value), {
    nextFetchPolicy: "no-cache",
    fetchPolicy: "no-cache",
  });

  // console.log(searchGQL.data);

  useEffect(() => {
    const searchOption = document.getElementById("search-close-options");
    const dropdown = document.getElementById("search-dropdown");
    const searchInput: any = document.getElementById("search-options");

    searchInput?.addEventListener("keyup", function () {
      if (searchInput?.value.length > 0) {
        dropdown?.classList.add("show");
        searchOption?.classList.remove("d-none");
      } else {
        dropdown?.classList.remove("show");
        searchOption?.classList.add("d-none");
      }
    });

    searchOption?.addEventListener("click", function () {
      searchInput.value = "";
      dropdown?.classList.remove("show");
      searchOption?.classList.add("d-none");
      setValue("");
    });
  }, [value]);
  return (
    <React.Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        contentClassName="rounded"
        id="searchModal"
      >
        <Modal.Header className="p-3">
          <div className="position-relative w-100">
            <Form.Control
              type="text"
              className="form-control-lg border-2"
              placeholder="Search for Products..."
              id="search-options"
              value={value}
              onChange={(e: any) => handlesearch(e.target)}
            />
            <span className="bi bi-search search-widget-icon fs-17"></span>
            <Link
              to="#"
              onClick={() => setValue("")}
              className="search-widget-icon fs-14 link-secondary text-decoration-underline search-widget-icon-close"
              id="search-close-options"
            >
              Clear
            </Link>
          </div>
        </Modal.Header>
        <div
          className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 overflow-hidden"
          id="search-dropdown"
        >
          <SimpleBar className="pe-2 ps-3 mt-3" style={{ maxHeight: "300px" }}>
            <div className="list-group list-group-flush border-dashed">
              <div className="notification-group-list">
                <h5 className="text-overflow text-muted fs-13 mb-2 mt-3 mx-2 text-uppercase notification-title d-flex justify-content-between align-items-center">
                  <span>Products</span>
                  <span>Price</span>
                </h5>
                {searchGQL.data &&
                  searchGQL.data.length > 0 &&
                  searchGQL.data.map((item: any, inx: number) => (
                    <Link
                      to={`/product-details/${item.slug}`}
                      className="list-group-item dropdown-item notify-item"
                      key={inx}
                      style={{ paddingInline: "0px" }}
                    >
                      <div className="d-flex justify-content-between align-items-center mx-2">
                        <div className="search-item">
                          <Image
                            src={item.image}
                            alt=""
                            className="avatar-sm"
                          />
                          <span className="px-2">{item.name}</span>
                        </div>
                        <div>
                          <span>${item.price}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </SimpleBar>
        </div>
      </Modal>
    </React.Fragment>
  );
};

//===================================================

//card modal
export const CardModal = ({ show, handleClose }: any) => {
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.data);

  const [productcount, setProductcount] = useState(productData);
  const [charge, setCharge] = useState(0);
  const [dis, setDis] = useState(0);
  const [tax, setTax] = useState(0);
  //delete id
  const [id, setId] = useState("");
  //modal
  const [removeModel, setRemovemodel] = useState(false);
  const RemoveModel = (id: any) => {
    setRemovemodel(true);
    setId(id);
  };

  const deleteData = () => {
    dispatch(deleteCartItem({ itemId: id }));
    // setProductcount(productData?.filter((delet: any) => delet.id !== id));
  };

  const CloseremoveModal = () => setRemovemodel(false);

  const assinged = productcount?.map((M) => M.Total);
  let subtotal = 0;
  for (let i = 0; i < assinged.length; i++) {
    subtotal += Math.round(assinged[i]);
  }

  useEffect(() => {
    const dis: any = (0.15 * cart.price).toFixed(2);
    const tax = 0.125 * cart.price;

    if (cart.price !== 0) {
      setCharge(65);
    } else {
      setCharge(0);
    }
    setDis(dis);
    setTax(tax);
  }, [cart]);

  const countUP = (itemId: number | string, count: number) => {
    dispatch(updateItemAsync({ count, itemId }));
  };

  const countDown = (itemId: number | string, count: number) => {
    dispatch(updateItemAsync({ count, itemId }));
  };
  return (
    <React.Fragment>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ maxWidth: "85%" }}
      >
        <Offcanvas.Header className="border-bottom">
          <Offcanvas.Title id="ecommerceCartLabel" as="h5">
            My Cart{" "}
            <span
              className="badge align-middle ms-1 cartitem-badge"
              style={{ background: "#FF57BA" }}
            >
              {cart.count}
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=" px-0">
          <SimpleBar className="h-100">
            <ul className="list-group list-group-flush cartlist">
              {(cart.items || [])?.map((item: any, inx: number) => {
                return (
                  <li key={inx} className="list-group-item product">
                    <div className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <div
                          className={`avatar-md ${item.bg}-subtle `}
                          style={{ height: "100%" }}
                        >
                          <div className={`cart-background rounded-3`}>
                            <Image
                              src={item?.variant?.image}
                              alt=""
                              className="avatar-lg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <Link to="#">
                          <h5 className="fs-15">
                            {item?.variant?.product?.name}
                          </h5>
                        </Link>
                        <div className="d-flex mb-3 gap-2">
                          <div className="text-muted fw-medium mb-0">
                            $
                            <span className="product-price">
                              {item?.variant?.price}
                            </span>
                          </div>
                          <div className="vr"></div>
                          <span className="text-success fw-medium">
                            In Stock
                          </span>
                        </div>
                        <div className="input-step">
                          <Button
                            className="minus"
                            onClick={() => countDown(item.id, item.count - 1)}
                          >
                            –
                          </Button>
                          <Form.Control
                            type="number"
                            className="product-quantity"
                            value={item.count}
                            min="0"
                            max="100"
                            readOnly
                          />
                          <Button
                            className="plus"
                            onClick={() => countUP(item.id, item.count + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="flex-shrink-0 d-flex flex-column justify-content-between align-items-end">
                        <Button
                          className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
                          onClick={() => RemoveModel(item.id)}
                        >
                          <i className="ri-close-fill fs-16"></i>
                        </Button>
                        <div className="fw-medium mb-0 fs-16">
                          $
                          <span className="product-line-price">
                            {item.totalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* <div className="table-responsive mx-2 border-top border-top-dashed">
              <Table className="table table-borderless mb-0 fs-14 fw-semibold">
                <tbody>
                  <tr>
                    <td>Sub Total :</td>
                    <td className="text-end cart-subtotal">${cart.price}</td>
                  </tr>
                  <tr>
                    <td>
                      Discount <span className="text-muted">(Shopcek15)</span>:
                    </td>
                    <td className="text-end cart-discount">
                      -${dis || "0.00"}
                    </td>
                  </tr>
                  <tr>
                    <td>Shipping Charge :</td>
                    <td className="text-end cart-shipping">
                      ${charge || "0.00"}
                    </td>
                  </tr>
                  <tr>
                    <td>Estimated Tax (12.5%) : </td>
                    <td className="text-end cart-tax">${tax || "0.00"}</td>
                  </tr>
                </tbody>
              </Table>
            </div> */}
          </SimpleBar>
        </Offcanvas.Body>
        <div className="offcanvas-footer border-top p-3 text-center">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="m-0 fs-16 text-muted">Total:</h6>
            <div className="px-2">
              <h6 className="m-0 fs-16 cart-total">${cart.price}</h6>
            </div>
          </div>
          <Row className="g-2">
            <Col xs={6}>
              <Button
                onClick={handleClose}
                variant="light"
                className="btn w-100"
                id="reset-layout"
              >
                Close Cart
              </Button>
            </Col>
            <Col xs={6}>
              <Link
                to="/checkout"
                // target="_blank"
                className="btn btn-info w-100"
              >
                Checkout
              </Link>
            </Col>
          </Row>
        </div>
      </Offcanvas>
      <DeleteModal
        hideModal={CloseremoveModal}
        removeModel={removeModel}
        deleteData={deleteData}
      />
    </React.Fragment>
  );
};
