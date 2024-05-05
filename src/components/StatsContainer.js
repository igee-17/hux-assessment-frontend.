import { useEffect } from "react";
import StatItem from "./StatItem";
import {
  FaUserAlt,
} from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { BiTransfer } from "react-icons/bi";
import Wrapper from "../assets/wrappers/StatsContainer";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getUserContacts } from "../features/user/userSlice";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const StatsContainer = () => {
  // const { stats } = useSelector((store) => store.allJobs);
  const { user, contacts, count } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  // console.log(user);
  useEffect(() => {
    dispatch(getUserContacts(user));

  }, [user])

  const defaultStats = [
    {
      title: `user id - ${user.id}`,
      count: user.firstname || 0,
      icon: <FaUserAlt />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "Total contacts",
      // count: `$ ${balance ? balance : user.balance}`,
      count: contacts?.length || 0,
      icon: <GrMoney />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },

    {
      title: "Created today",
      count: count,
      icon: <BiTransfer />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];


  return (
    <Wrapper>
      <div className="stat-items">
        {defaultStats.map((item, index) => {
          return <StatItem key={index} {...item} />;
        })}
      </div>
      <div className="transactions">
        <h3>Contacts</h3>
        <hr />
        {contacts.length > 0 ? (
          <div className="center">
            <div className="header">
              <p></p>
              <p>contact id</p>
              <p>First Name</p>
              <p>Last Name</p>
              <p>Phone Number</p>
              <p>edit</p>
              <p>view</p>
              <p>delete</p>
            </div>
            {contacts.map((item, index) => {
              const {
                contact_id,
                first_name,
                last_name,
                phone_number,
              } = item;

              return (
                <div className="header item" key={index}>
                  <p>
                    <span className={"green"}>
                      {index + 1}
                    </span>
                  </p>
                  <p>{first_name}</p>
                  <p>{last_name}</p>
                  <p>{contact_id}</p>
                  <p>{phone_number}</p>
                  <p><Link to={`/edit-contact/${contact_id}`}><CiEdit /></Link></p>
                  <p><Link to={`/contact-details/${contact_id}`}><FaEye /></Link></p>
                  <p><button className="btn-danger" onClick={() => dispatch(deleteContact({ user, contact: item }))}><MdDelete /></button></p>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No contacts to display...</p>
        )}
      </div>
    </Wrapper>
  );
};

export default StatsContainer;
