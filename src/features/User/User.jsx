import { useDispatch, useSelector } from "react-redux";
import "./User.scss";
import { delateUser, fetchAllUsers } from "./UserApi";
import { useEffect } from "react";
import { getUserData } from "./UserSlice";

const User = () => {
  const dispatch = useDispatch();

  //useSelector
  const { users } = useSelector(getUserData);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
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
        </div>
      </div>
    </>
  );
};

export default User;
