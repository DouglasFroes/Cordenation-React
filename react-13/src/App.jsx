import React from "react";

import api from "./services/api";

import Topbar from "./components/Topbar";
import Filter from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      contacts: [],
      data: [],
      typeFilter: "",
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const loadProfile = async () => {
      const response = await api.get();

      this.setState({
        contacts: response.data,
        data: response.data,
        loading: false,
      });
    };

    loadProfile();
  }

  handleClick = (type) => {
    this.setState({ typeFilter: type });

    const data = this.state.contacts;
    if (type === "name") {
      data.sort(function (a, b) {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      });
    } else if (type === "country") {
      data.sort(function (a, b) {
        return a.country > b.country ? 1 : b.country > a.country ? -1 : 0;
      });
    } else if (type === "company") {
      data.sort(function (a, b) {
        return a.company > b.company ? 1 : b.company > a.company ? -1 : 0;
      });
    } else if (type === "department") {
      data.sort(function (a, b) {
        return a.department > b.department
          ? 1
          : b.department > a.department
          ? -1
          : 0;
      });
    } else if (type === "admissionDate") {
      data.sort(function (a, b) {
        return a.admissionDate > b.admissionDate
          ? 1
          : b.admissionDate > a.admissionDate
          ? -1
          : 0;
      });
    }
    this.setState({ contacts: data });
  };

  handleInput = (name) => {
    const list = this.state.data;

    const listFilte = list.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    this.setState({ contacts: listFilte });
  };

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filter
          onQuery={this.handleInput}
          handleButton={this.handleClick}
          typeFilter={this.state.typeFilter}
        />
        <Contacts contacts={this.state.contacts} />
      </React.Fragment>
    );
  }
}

export default App;
