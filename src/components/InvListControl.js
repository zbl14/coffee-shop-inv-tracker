import React from "react";
import InvList from "./InvList";
import CoffeeDetail from "./CoffeeDetail";
import NewPurchaseForm from "./NewPurchaseForm";
import EditCoffeeForm from "./EditCoffeeForm";

class InvListControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainInvList: [],
      selectedCoffee: null,
      editing: false,
    };
  }

  sellCoffee = (id) => {
    const temp = this.state.mainInvList.map((coffee) => {
      if (coffee.id === id) {
        if (coffee.stock > 0) {
          return {
            ...coffee,
            stock: coffee.stock - 1,
          };
        } else {
          return { ...coffee, stock: "Out of stock" };
        }
      }
    });
    this.setState({ mainInvList: temp });
  };

  handleClick = () => {
    if (this.state.selectedCoffee !== null) {
      this.setState({
        formVisible: false,
        selectedCoffee: null,
        editing: false,
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

  handleDeletingCoffee = (id) => {
    const newMainInvList = this.state.mainInvList.filter(
      (coffee) => coffee.id !== id
    );
    this.setState({
      mainInvList: newMainInvList,
      selectedCoffee: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainInvList = this.state.mainInvList
      .filter((coffee) => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainInvList: editedMainInvList,
      editing: false,
      selectedCoffee: null,
    });
  };

  render() {
    let curVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      curVisibleState = (
        <EditCoffeeForm
          coffee={this.state.selectedCoffee}
          onEditCoffee={this.handleEditingCoffeeInList}
        />
      );
      buttonText = "Return to Inventory";
    } else if (this.state.selectedCoffee !== null) {
      curVisibleState = (
        <CoffeeDetail
          coffee={this.state.selectedCoffee}
          onClickingDelete={this.handleDeletingCoffee}
          onClickingEdit={this.handleEditClick}
        />
      );
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
          sellCoffee={this.sellCoffee}
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
