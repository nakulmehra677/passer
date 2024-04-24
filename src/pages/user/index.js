import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FormUser from "../../components/molecules/form-user";
import Modal from "../../components/molecules/modal";
import { getUser, updateUser } from "../../redux/user/async-action";
import style from "./style.module.css";

export default function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  const state = useSelector((state) => state?.user?.details?.[id]);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    dispatch(getUser({ id }));
  }, []);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleSubmit = (data) => {
    dispatch(updateUser({ id, data }));
    closeDialog();
  };

  if (state?.data) {
    return (
      <div className={style["container"]}>
        <div>
          <div>
            <p>ID: {state.data.id}</p>
            <p>username: {state.data.username}</p>
            <p>email: {state.data.email}</p>
            <p>role: {state.data.role}</p>
          </div>
          <div className={style['container-button']}>
            <button onClick={openDialog}>Edit</button>
            <button onClick={(e) => navigate(-1)}>Go back</button>
          </div>
        </div>
        <Modal
          ui={<FormUser onSubmit={handleSubmit} defaultValues={state.data} />}
          isOpen={isOpen}
          closeDialog={closeDialog}
        />
      </div>
    );
  }

  if (state?.isLoading) {
    return <p>Loading...</p>;
  }

  if (state?.error) {
    return <p>Somthing went wrong</p>;
  }
  return null;
}
