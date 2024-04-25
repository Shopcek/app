import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CommonService } from 'components/common-service';
import { ProductGrid, ProductSelector, ProductSide, Selectores } from 'components/product-silde';
import Deals from 'pages/catalog/deals';
import EmailClothe from 'pages/catalog/email-clothe';
import { product } from 'common/data';

const Nosider = () => {
    const [select, setSelect] = useState(product);
    //select product
    const setCategories = (event: any) => {
        setSelect(product?.filter((Sort: any) => Sort.sortBy === event.value || event.value === 'all'));
    };
    //rating
    const handleRatting = (event: any) => {
        setSelect(product?.filter((rat: any) => rat.ratting.toString().startsWith(event.value)));
    };
    //diccount
    const handleDicount = (event: any) => {
        setSelect(product?.filter((dicCount: any) => dicCount.dic === event.value));
    };
    //category
    const handleCategory = (event: any) => {
        setSelect(product?.filter((category: any) => category.products === event.value));
    };
    //search product
    const searchProducts = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search.toLowerCase();
            setSelect(product.filter((data: any) => (data.title.toLowerCase().includes(search))));
        } else {
            setSelect(product);
        }
    };
    return (
        <React.Fragment>
            <ProductGrid title="Product Grid No Sidebar" />
            <section className='position-relative section'>
                <Container>
                    <div className='col-3-layout'>
                        <Row>
                            <ProductSelector
                                handleratting={(e: any) => handleRatting(e)}
                                handledicount={(e: any) => handleDicount(e)}
                                handlecategory={(e: any) => handleCategory(e)}
                            />
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <Selectores setSelect={(event: any) => setCategories(event)} searchProducts={(ele: any) => searchProducts(ele)} />
                                <ProductSide
                                    cxxl="3"
                                    fileter={select}
                                />
                            </Col>
                        </Row>

                    </div>
                </Container>
            </section>
            <Deals />
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    );
};

export default Nosider;