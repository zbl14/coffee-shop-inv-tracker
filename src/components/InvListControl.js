import React from "react";
import InvList from "./InvList";
import CoffeeDetail from "./CoffeeDetail";
import NewPurchaseForm from "./NewPurchaseForm";
import EditCoffeeForm from "./EditCoffeeForm";

const buttonStyle = {
  backgroundColor: "royalblue",
  width: "20%",
  color: "white",
  padding: "14px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const curVisibleStateStyle = {
  width: "80%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

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
    let sellCoffee;
    if (selectedCoffee.stock > 1) {
      sellCoffee = { ...selectedCoffee, stock: selectedCoffee.stock - 1 };
    } else {
      sellCoffee = { ...selectedCoffee, stock: "Out of stock" };
    }
    const newSelectedCoffee = this.state.mainInvList
      .filter((coffee) => coffee.id !== this.state.selectedCoffee.id)
      .concat(sellCoffee);
    this.setState({
      mainInvList: newSelectedCoffee,
      selectedCoffee: sellCoffee,
    });
  };

  handleClickingRestock = () => {
    const selectedCoffee = this.state.selectedCoffee;
    const restock = { ...selectedCoffee, stock: 130 };
    const newSelectedCoffee = this.state.mainInvList
      .filter((coffee) => coffee.id !== this.state.selectedCoffee.id)
      .concat(restock);
    this.setState({
      mainInvList: newSelectedCoffee,
      selectedCoffee: restock,
    });
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
          OnClickingRestock={this.handleClickingRestock}
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
        <div style={curVisibleStateStyle}> {curVisibleState}</div>
        <button onClick={this.handleClick} style={buttonStyle}>
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}

export default InvListControl;
