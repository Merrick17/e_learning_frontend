import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { ActivateAccountApi } from "../redux/actions/auth.actions";
const ActivateAccount = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActivateAccountApi(token));
  }, []);

  return <Redirect to="/login" />;
};

export default ActivateAccount;
