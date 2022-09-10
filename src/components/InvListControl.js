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

  handleClickingSellCoffee = () => {
    const selectedCoffee = this.state.selectedCoffee;
    if (selectedCoffee.stock > 1) {
      const sellCoffee = { ...selectedCoffee, stock: selectedCoffee.stock - 1 };
      const newSelectedCoffee = this.state.mainInvList
        .filter((coffee) => coffee.id !== this.state.selectedCoffee.id)
        .concat(sellCoffee);
      this.setState({
        mainInvList: newSelectedCoffee,
        selectedCoffee: sellCoffee,
      });
    } else {
      const sellCoffee = { ...selectedCoffee, stock: "Out of stock" };
      const newSelectedCoffee = this.state.mainInvList
        .filter((coffee) => coffee.id !== this.state.selectedCoffee.id)
        .concat(sellCoffee);
      this.setState({
        mainInvList: newSelectedCoffee,
        selectedCoffee: sellCoffee,
      });
    }
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
          OnClickingSellCoffee={this.handleClickingSellCoffee}
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
