import React, { Component } from "react";

import "./Cards.styles.css";
import { Modalcontent } from "../ModalContent/ModalContent.component";

import favourite from "../../Assets/Icons/Icon-feather-heart.png";
import unFavourite from "../../Assets/Icons/Icon-feather-heart-color.png";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      modalData: [],
      iconFavourite: false
    };
  }

  modalOpen = (recipe) => {
    console.log(recipe);
    this.setState({
      modal: !this.state.modal,
      modalData: recipe,
    });
  };

  modalClose = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        {this.props.isLoading ? (
          <div className="text-center">
            <div
              className="spinner-border"
              role="status"
              style={{ width: "10rem", height: "10rem", color: "white" }}
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="card-columns">
            {this.props.recipeData.map((recipe) => (
              <div
                key={recipe.id}
                className="card card-inverse card-primary p-3 text-center zoom"
              >
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt="card image"
                />
                <div className="card-body">
                  <div className="row">
                    <div className="col-10">
                      <h5 className="card-title" style={{ textAlign: "left" }}>
                        {recipe.name}
                      </h5>
                    </div>
                    <div className="col-2">
                      <img src={favourite} style={{width:"20px"}} />
                    </div>
                  </div>

                  <p className="card-text" style={{ textAlign: "left" }}>
                    {recipe.description}
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ color: "white" }}
                    onClick={() => this.modalOpen(recipe)}
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
            {this.state.modal ? (
              <div className="modal">
                <div className="modal-content">
                  <Modalcontent modalData={this.state.modalData} />
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={this.modalClose}
                    >
                      close
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default Cards;
