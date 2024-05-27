import React, { FC, useEffect, useState } from "react";

import { Offcanvas, Tab, Tabs } from "react-bootstrap";
import SimpleBar from "simplebar-react";

import { DetailsModal } from "common/modal/collections/details";
import { Link, useNavigate } from "react-router-dom";
import icon from "assets/images/icon.svg";
import dropdown from "assets/images/dropdown.png";
import { useSelector } from "react-redux";

interface ICategory {
  slug: string;
  name: string;
  icon: {
    url: string;
  };
}
interface ICollection {
  slug: string;
  name: string;
  icon: {
    url: string;
  };
  sub_categories: ICategory[];
}

interface CollectionModalProps {
  show: boolean;
  handleClose: () => void;
  data: ICollection[];
}

export const CollectionModal: FC<CollectionModalProps> = ({
  show,
  handleClose,
  data,
}) => {
  const categories = useSelector((state: any) => state.categories.data);

  const [card, setCard] = useState(false);
  const [currentModule, setCurrentModule] = useState("collections");
  const handlecardClose = () => {
    setCard(false);
    handleClose();
  };
  const handleCardShow = () => setCard(true);

  const navigate = useNavigate();

  const [extended, setExtended] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (card) {
      setExtended("extended");
    } else {
      setExtended(undefined);
    }
  }, [card]);

  const [content, setContent] = useState<any>();
  const [header, setHeader] = useState<any>();

  function setNewContent(slug: string) {
    const contents = data.find((item) => {
      return item.slug === slug;
    })!;

    setContent(
      <div className={slug}>
        <div className="items">
          {contents.sub_categories.map((item) => {
            return (
              <div
                className="item"
                onClick={() => {
                  navigate(`/products/${item.slug}`);
                  handleClose();
                }}
              >
                <img
                  src={`${process.env.REACT_APP_API_URL}${item.icon?.url}`}
                  alt=""
                  style={{ height: "auto", maxWidth: "150px" }}
                />
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );

    setHeader([
      <img
        src={`${process.env.REACT_APP_API_URL}${contents.icon?.url}`}
        alt=""
      />,
      contents.name,
    ]);
  }

  return (
    <React.Fragment>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        className={`collections-modal`}
      >
        <Offcanvas.Header className="header">
          <Offcanvas.Title
            onClick={() => setCurrentModule("menu")}
            id="ecommerceCartLabel"
            as="h5"
            className={currentModule === "menu" ? "active mobile" : "mobile"}
          >
            <span>Menu</span>
          </Offcanvas.Title>
          <Offcanvas.Title
            onClick={() => setCurrentModule("collections")}
            id="ecommerceCartLabel"
            as="h5"
            className={currentModule === "collections" ? "active mobile" : " mobile"}
          >
            <span>Collections</span>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="p-0">
          <div className="body h-100">
            {currentModule === "collections" && (
              <>
                {[...data].sort((a, b) => {
                    if (a.name < b.name) return 1; 
                    if (a.name > b.name) return -1;
                    return 0;
                  })
                  .map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className="item"
                        onClick={() => {
                          if (item.slug !== "blockchain-boutique") {
                            setNewContent(item.slug);
                            handleCardShow();
                          } else {
                            handleClose();
                            navigate(
                              "/products/collection/blockchain-boutique"
                            );
                          }
                        }}
                      >
                        <img
                          src={`${process.env.REACT_APP_API_URL}${item.icon?.url}`}
                          alt=""
                        />
                        {item.name}
                        {item.slug !== "blockchain-boutique" ? (
                          <img
                            src={dropdown}
                            alt=""
                            className="dropdown ${animation}"
                          />
                        ) : undefined}
                      </div>
                    );
                  })}
              </>
            )}
            {currentModule === "menu" && (
              <div className="mobile">
                {categories?.map((item: any, index: number) => (
                  <div className="item" key={`category-${index + 1}`}>
                    <Link
                      className="nav-link"
                      to={`/products/${item.slug}`}
                      data-key="t-slug"
                    >
                      {/* <img src={`${process.env.REACT_APP_API_URL}/${item.icon.url}`} alt={item.name} width={20} height={20} />{' '} */}
                      {item.name}
                    </Link>
                  </div>
                ))}
                <div className="item">
                  <Link className="nav-link" to={`/earn`} data-key="t-slug">
                    EARN
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Offcanvas.Body>

        <DetailsModal
          show={card}
          handlecardClose={handlecardClose}
          content={content}
          header={header}
        ></DetailsModal>
      </Offcanvas>
    </React.Fragment>
  );
};
