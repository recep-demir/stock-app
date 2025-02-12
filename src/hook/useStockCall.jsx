import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getProCatBrandSuccess,
  stockSuccess,
} from "../features/stockSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import useAxios from "./useAxios";

const useStockCall = () => {
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();
  /* -------------------------------------------------------------------------- */
  // const getFirms=async()=>{
  //     dispatch(fetchStart())
  //     try {
  //         const {data} = await axios(`${BASE_URL}firms`,
  //             {
  //                 headers: {
  //                   Authorization:`Token ${token}`,
  //                 },
  //               }
  //         )
  //         console.log(data)
  //         dispatch(firmSuccess(data))
  //     } catch (error) {
  //     dispatch(fetchFail())
  //     }

  // }

  // AxioswithTken yardımıyla veri çekme

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken.get("firms")
  //       dispatch(firmSuccess(data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };
  // const getBrands= async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken.get("brands")
  //       dispatch(firmSuccess(data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  /* -------------------------------------------------------------------------- */
  /*                                  GET DATA                                  */
  /* -------------------------------------------------------------------------- */
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${url}`);
      dispatch(stockSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  /* -------------------------------------------------------------------------- */
  /*                                 DELETE DATA                                */
  /* -------------------------------------------------------------------------- */
  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.delete(`${url}/${id}`);

      console.log(data);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                                  CREATE DATA                                  */
  /* -------------------------------------------------------------------------- */
  const createStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(url, info);

      console.log(data);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                                 UPDATE DATA                                */
  /* -------------------------------------------------------------------------- */
  const updateStockData = async (url, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.put(`${url}/${info._id}`, info);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  /* -------------------------------------------------------------------------- */
  // PROMISE ALL YAPILARI
  //* eş zamanlı istek atma. aynı anda istek atılıyor aynı anda responselar gelmeye başlıyor. Zaman noktasında da avantajlı. En uzun hangi istek sürdüyse veriler ondan sonra valid olur. Birbirine bağımlı isteklerde en büyük avantajı hata durumu. İsteklerden biri bile hatalı olursa hepsi iptal olur.

  const getProCatBrand = async () => {
    dispatch(fetchStart());

    try {
      // const [a,b,c]=[2,4,6]  => Array destructure

      const [products, categories, brands] = await Promise.all([
        axiosWithToken("products"),
        axiosWithToken("categories"),
        axiosWithToken("brands"),
      ]);
      console.log(products,categories,brands);
      dispatch(getProCatBrandSuccess([products?.data?.data,categories?.data?.data,brands?.data?.data]))
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  /* -------------------------------------------------------------------------- */
  const getPurcBrandPro = async () => {
    dispatch(fetchStart());

    try {
      // const [a,b,c]=[2,4,6]  => Array destructure

      const [purchases, brands, products] = await Promise.all([
        axiosWithToken("purchases"),
        axiosWithToken("brands"),
        axiosWithToken("products"),
      ]);
 
      dispatch(getProCatBrandSuccess([purchases?.data?.data,brands?.data?.data,products?.data?.data]))
    } catch (error) {
      dispatch(fetchFail());
    }
  };
/* -------------------------------------------------------------------------- */
  const getSalesBrandPro = async () => {
    dispatch(fetchStart());

    try {
      // const [a,b,c]=[2,4,6]  => Array destructure

      const [sales, brands, products] = await Promise.all([
        axiosWithToken("sales"),
        axiosWithToken("brands"),
        axiosWithToken("products"),
      ]);
 
      dispatch(getProCatBrandSuccess([sales?.data?.data,brands?.data?.data,products?.data?.data]))
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getStockData,
    deleteStockData,
    createStockData,
    updateStockData,
    getProCatBrand,
    getPurcBrandPro,
    getSalesBrandPro
  };
};

export default useStockCall;
