import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import FormUser from "../../components/molecules/form-user";
import Loading from "../../components/molecules/loading";
import Modal from "../../components/molecules/modal";
import {
  addUser,
  deleteUser,
  getUserList,
} from "../../redux/user/async-action";
import style from "./style.module.css";

export default function Home() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const state = useSelector((state) => state?.user?.list);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUserList({ page: currentPage }));
  }, [currentPage]);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleSubmit = (data) => {
    dispatch(addUser({ data }));
    closeDialog();
  };

  const handleDelete = (id) => {
    dispatch(deleteUser({ id, page: currentPage }));
  };

  const ui = () => (
    <div>
      <div className={style["container-add-user"]}>
        <button onClick={openDialog}>Add User</button>
        <Modal
          ui={<FormUser onSubmit={handleSubmit} defaultValues={state.data} />}
          isOpen={isOpen}
          closeDialog={closeDialog}
        />
      </div>

      {state?.[currentPage]?.data && (
        <div className={style["container-table"]}>
          <table>
            <tr>
              <th style={{ width: "10%" }}>ID</th>
              <th style={{ width: "20%" }}>username</th>
              <th style={{ width: "30%" }}>email</th>
              <th style={{ width: "20%" }}>role</th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>

            {state?.[currentPage].data.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row?.id}</td>
                  <td>{row?.username}</td>
                  <td>{row?.email}</td>
                  <td>{row?.role}</td>
                  <td style={{ display: "flex", gap: 8 }}>
                    <button
                      onClick={(e) => handleDelete(row.id)}
                      style={{ zIndex: 9999 }}
                    >
                      Delete
                    </button>
                    <button onClick={(e) => navigate(`/user/${row.id}`)}>
                      Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      )}

      <div className={style["container-pagination"]}>
        <button
          disabled={currentPage === 0}
          onClick={(e) => setCurrentPage((p) => p - 1)}
        >
          Prev Page
        </button>
        <button
          disabled={state?.[currentPage]?.data?.length < 10}
          onClick={(e) => setCurrentPage((p) => p + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );

  return (
    <div className={style["container"]}>
      {state?.[currentPage]?.isLoading ? (
        <Loading />
      ) : state?.[currentPage]?.error ? (
        <div>Error</div>
      ) : state?.[currentPage]?.data ? (
        ui()
      ) : null}
    </div>
  );
}
