import React, { Component, lazy, Suspense } from "react";
import { SearchBox } from "../Components/SearchBox/SearchBox.component";

const Cards = lazy(() => import("../Components/Cards/Cards.component"));

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      recipeData: [],
      isLoading: true,
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("http://starlord.hackerearth.com/recipe")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          recipeData: result,
          isLoading: false,
        });
      });
  }

  render() {
    const { recipeData, isLoading, searchField } = this.state;
    const filteredRecipe = recipeData.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredRecipe);
    return (
      <div>
        <h1>RECIPE</h1>
        <div>
          <SearchBox
            placeholder="search recipe"
            handleChange={(e) => this.setState({ searchField: e.target.value })}
          />
        </div>
        <div className="container">
          <Suspense
            fallback={
              <div className="text-center">
                <div
                  className="spinner-border"
                  role="status"
                  style={{ width: "10rem", height: "10rem", color: "white" }}
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            }
          >
            <Cards isLoading={isLoading} recipeData={filteredRecipe} />
          </Suspense>
        </div>
      </div>
    );
  }
}

export default Homepage;
