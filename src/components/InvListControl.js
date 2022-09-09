import React from "react";
import InvList from "./InvList";
import CoffeeDetail from "./CoffeeDetail";
import NewPurchaseForm from "./NewPurchaseForm";

class InvListControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainInvList: [],
      selectedCoffee: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee !== null) {
      this.setState({
        formVisible: false,
        selectedCoffee: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisible: !prevState.formVisible,
      }));
    }
  };

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainInvList = this.state.mainInvList.concat(newCoffee);
    this.setState({
      mainInvList: newMainInvList,
      formVisible: false,
    });
  };

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainInvList.filter(
      (coffee) => coffee.id === id
    )[0];
    this.setState({ selectedCoffee: selectedCoffee });
  };

  render() {
    let curVisibleState = null;
    let buttonText = null;

    if (this.state.selectedCoffee !== null) {
      curVisibleState = <CoffeeDetail coffee={this.state.selectedCoffee} />;
      buttonText = "Return to Inventory";
    } else if (this.state.formVisible) {
      curVisibleState = (
        <NewPurchaseForm onNewFormCreation={this.handleAddingNewCoffeeToList} />
      );
      buttonText = "Return to Inventory";
    } else {
      curVisibleState = (
        <InvList
          invList={this.state.mainInvList}
          onCoffeeSelection={this.handleChangingSelectedCoffee}
        />
      );
      buttonText = "Purchase";
    }

    return (
      <React.Fragment>
        {curVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default InvListControl;
