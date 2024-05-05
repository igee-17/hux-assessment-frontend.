import { useState } from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRow } from ".";
import { useSelector, useDispatch } from "react-redux";
import { createContact } from "../features/user/userSlice";


const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
};


const SearchContainer = () => {
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch()


  const { isLoading, contacts, user } = useSelector((store) => store.user);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber } = values;
    const contact = { firstName, lastName, phoneNumber }
    const data = { user, contact }
    dispatch(createContact(data))
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h4>search</h4>
        <div className="form-center">
          {/* SEARCH INPUT */}
          <FormRow
            labelText="First Name"
            type="text"
            name="firstName"
            handleChange={handleChange}

          />
          <FormRow
            labelText="Last Name"
            type="text"
            name="lastName"
            handleChange={handleChange}
          />
          <FormRow
            labelText="Phone number"
            type="phone"
            name="phoneNumber"
            handleChange={handleChange}
          />

          {/* CLEAR BUTTON */}
          <button
            className="btn btn-block btn-success"
            disabled={isLoading}
            type='submit'
          >
            Create
          </button>
        </div>
        <hr />
        <h4 className="balance">
          <span>Total contacts</span> - {contacts.length}
        </h4>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
