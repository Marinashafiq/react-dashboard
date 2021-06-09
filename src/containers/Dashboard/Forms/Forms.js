import React from "react";
import { SelectComponent } from "../../../components/Controls/Select/Select";
import InputField from "../../../components/Controls/Input/Input";
import { CheckboxComponent } from "../../../components/Controls/Checkbox/Checkbox";
import { DateField } from "../../../components/Controls/DateField/DateField";
import { injectIntl } from "react-intl";
import AutoComplete from "../../../components/Controls/AutoComplete/AutoComplete";
import { moviesArr } from "../../../utils/Constants";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      course_name: "",
      description: "",
      movies_single: { title_en: "", title_ar: "", year: "" },
      movies_multi: [],
      isSponsered: false,
      date: null,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value || e.target.checked,
    });
  };

  handleDropdownChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleDateChange = (date, name) => {
    this.setState({
      ...this.state,
      [name]: date,
    });
  };

  render() {
    const {
      category,
      course_name,
      description,
      isSponsered,
      date,
      movies_single,
      movies_multi,
    } = this.state;
    const {
      intl: { messages },
    } = this.props;
    const list = [
      {
        id: 1,
        value: 10,
        content: "Ten",
      },
      {
        id: 1,
        value: 20,
        content: "Twenty",
      },
      {
        id: 1,
        value: 30,
        content: "Thirty",
      },
    ];
    return (
      <>
        <div className="row mx-auto">
          <div className="col-12">
            <h4>Select</h4>
          </div>
          <div className="col-md-6">
            <SelectComponent
              list={list}
              value={category}
              label={messages.formControl.select}
              isMultiple={false}
              handleChange={this.handleChange}
              name="category"
            />
          </div>
          <div className="col-md-6 align-self-center">
            <AutoComplete
              name="movies_single"
              value={movies_single}
              handleChange={this.handleDropdownChange}
              label={messages.formControl.autoCompelete}
              data={moviesArr}
              key_en = 'title_en'
              key_ar = 'title_ar'
            />
          </div>
          <div className="col-md-6 align-self-center my-3">
            <AutoComplete
              name="movies_multi"
              value={movies_multi}
              isMultiple={true}
              handleChange={this.handleDropdownChange}
              label={messages.formControl.autoCompeleteMulti}
              data={moviesArr}
              key_en = 'title_en'
              key_ar = 'title_ar'
            />
          </div>
          <div className="col-12">
            <h4>Input</h4>
          </div>
          <div className="col-md-6">
            <InputField
              name="course_name"
              id="course_name"
              label={messages.formControl.input}
              value={course_name}
              changeHandler={this.handleChange}
              isRequired={true}
            />
          </div>
          <div className="col-md-12">
            <InputField
              name="description"
              id="description"
              label={messages.formControl.input}
              value={description}
              changeHandler={this.handleChange}
              isRequired={true}
              isMultiline={true}
            />
          </div>
          <div className="col-12">
            <h4>Date picker</h4>
          </div>
          <div className="col-md-6">
            <DateField
              value={date}
              label={messages.formControl.select}
              name="date"
              handleChange={this.handleDateChange}
              isRequired={true}
            />
          </div>
          <div className="col-12">
            <h4>Checkbox</h4>
          </div>
          <div className="col-md-6">
            <CheckboxComponent
              isChecked={isSponsered}
              handleChange={this.handleChange}
              name="isSponsered"
              content={messages.formControl.select}
            />
          </div>
        </div>
      </>
    );
  }
}

export default injectIntl(Forms);
