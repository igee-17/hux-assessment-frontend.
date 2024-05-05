import { useState } from "react";
import Wrapper from "../../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";
import { createContact, updateContact } from "../../features/user/userSlice";
import { FormRow } from "../../components";
import { useParams } from "react-router-dom";




const EditContact = () => {
    const { id } = useParams()

    const { isLoading, contacts, user } = useSelector((store) => store.user);

    const { first_name, last_name, phone_number } = contacts.find((item) => item.contact_id === parseInt(id))


    const initialState = {
        firstName: first_name,
        lastName: last_name,
        phoneNumber: phone_number,
    };

    const [values, setValues] = useState(initialState);
    const dispatch = useDispatch()


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, phoneNumber } = values;
        const contact = { contactId: id, firstName, lastName, phoneNumber }
        const data = { user, contact }
        dispatch(updateContact(data))
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
                        max={true}
                        handleChange={handleChange}
                        value={values.firstName}
                    />
                    <FormRow
                        labelText="Last Name"
                        type="text"
                        name="lastName"
                        max={true}
                        handleChange={handleChange}
                        value={values.lastName}
                    />
                    <FormRow
                        labelText="Phone number"
                        type="phone"
                        name="phoneNumber"
                        handleChange={handleChange}
                        value={values.phoneNumber}
                    />

                    {/* CLEAR BUTTON */}
                    <button
                        className="btn btn-block btn-success"
                        disabled={isLoading}
                        type='submit'
                    >
                        Edit
                    </button>
                </div>
                <hr />
                <h4 className="balance">
                    <span>Total contacts</span> - {contacts.length}
                </h4>
            </form>
        </Wrapper>
    );
}

export default EditContact