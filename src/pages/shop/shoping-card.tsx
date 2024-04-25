import React from "react";
import { Row, Col, Alert, Container } from "react-bootstrap";
import Cardshop from "./card-shop";

import { BrandedProduct, Shoptopbar } from "components/shop-top-bar";
import EmailClothe from "pages/catalog/email-clothe";
import { CommonService } from "components/common-service";

const Shopingcard = () => {
    document.title = "Shop Cart | Toner - React Frontend";
    return (
        <React.Fragment>
            <Shoptopbar title="Shopping Cart" page="Shopping Cart" />
            <section className="section">
                <Container>
                    <Row >
                        <Col lg={12}>
                            <Alert className="alert-danger text-center text-capitalize mb-4 fs-14">
                                save up to <b>30%</b> to <b>40%</b> off omg! just look at the <b>great deals</b>!
                            </Alert>
                        </Col>
                    </Row>
                    <Row className="product-list justify-content-center">
                        <Cardshop  />
                    </Row>
                </Container>
            </section>
            <BrandedProduct title="New Branded Products" />
            <EmailClothe />
           < CommonService />
        </React.Fragment>
    );
};

export default Shopingcard;
