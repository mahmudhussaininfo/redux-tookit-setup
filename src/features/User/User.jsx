import { useDispatch, useSelector } from "react-redux";
import "./User.scss";
import { createUser, delateUser, fetchAllUsers } from "./UserApi";
import { useEffect, useState } from "react";
import { getUserData } from "./UserSlice";

const User = () => {
  const dispatch = useDispatch();

  //useSelector
  const { users } = useSelector(getUserData);

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(input));
  };

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Data input from Api with redux toolkit</h1>
        <br /> <br />
        <div className="row">
          <div className="col-md-7">
            <h1>User</h1>
            <hr />
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0
                  ? users.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>
                            <button
                              onClick={() => dispatch(delateUser(item._id))}
                              className="btn btn-danger"
                            >
                              Delate
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : "Not Founddddddddd"}
              </tbody>
            </table>
          </div>
          <div className="col-md-5">
            <h1>Input Data</h1>
            <form action="" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                value={input.name}
                onChange={handleInputChange}
              />
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                value={input.email}
                onChange={handleInputChange}
              />{" "}
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Password"
                name="password"
                value={input.password}
                onChange={handleInputChange}
              />
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Role"
                name="role"
                value={input.role}
                onChange={handleInputChange}
              />
              <br />
              <button type="submit" className="form-control">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
