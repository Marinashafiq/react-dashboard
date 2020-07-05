import React from "react";
import { SelectComponent } from "../../../components/Controls/Select/Select";
import { InputField } from "../../../components/Controls/Input/Input";
import { CheckboxComponent } from "../../../components/Controls/Checkbox/Checkbox";
import { DateField } from "../../../components/Controls/DateField/DateField";
import { injectIntl } from "react-intl";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 10,
      course_name: "",
      description: "",
      isSponsered: false,
      date: null,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value || e.target.checked,
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
          <div className="col-md-6">
            <CheckboxComponent
              isChecked={isSponsered}
              handleChange={this.handleChange}
              name="isSponsered"
              content={messages.formControl.select}
            />
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
        </div>
      </>
    );
  }
}

export default injectIntl(Forms);
