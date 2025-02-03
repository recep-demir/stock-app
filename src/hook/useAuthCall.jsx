// Custom Hook'lar, tekrar kullanılabilir ve modüler mantık oluşturmamızı
// sağlar.
// ✅ İsmi "use" ile başlamalı ve içinde React Hook kullanmalı.
// ✅ JSX döndürmez, sadece veri veya fonksiyon döndürür.
// ✅ Eğer başka dosyada kullanacaksan, export etmelisin.

import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import axios from "axios";

const useAuthCall = () => {
  const dispatch = useDispatch();

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://10003.fullstack.clarusway.com/users/",
        userInfo
      );
      console.log(data);

     dispatch(registerSuccess(data))

    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { register };
};

export default useAuthCall;
