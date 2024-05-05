import { useEffect } from "react";
import StatItem from "../../components/StatItem";
import { GrMoney } from "react-icons/gr";
import { BiTransfer } from "react-icons/bi";
import Wrapper from "../../assets/wrappers/StatsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getUserContacts } from "../../features/user/userSlice";
import {
    FaUserAlt,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
    const { id } = useParams()

    const { contacts, user } = useSelector((store) => store.user);

    const { first_name, last_name, phone_number } = contacts.find((item) => item.contact_id === parseInt(id))

    const dispatch = useDispatch();



    // console.log(user);
    useEffect(() => {
        dispatch(getUserContacts(user));

    }, [user])


    const data = [
        {
            count: `First Name`,

            title: first_name,
            color: "#647acb",
            bcg: "#e0e8f9",
        },
        {
            count: "Last Name",
            title: last_name,

            color: "#e9b949",
            bcg: "#fcefc7",
        },

        {
            count: "Phone",

            title: phone_number,
            color: "#d66a6a",
            bcg: "#ffeeee",
        },
    ];

    return (
        <Wrapper>
            <div className="stat-items">
                {data.map((item, index) => {
                    return <StatItem key={index} {...item} />;
                })}
            </div>

        </Wrapper>
    );
};

export default ContactDetails;
