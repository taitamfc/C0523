import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  DELETE_USER
} from "../redux/action";

const BaseURL = "https://6083df209b2bed00170404a0.mockapi.io/angular/users";


  function* getUser(action) {
    try {
      const response = yield axios.get(BaseURL);
      // Sau khi lấy được dữ liệu từ fake API
      // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
      yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("error - getUser : ", error);
    }
  }

  function* deleteUser(action) {
    try {
      const response = yield axios.delete(BaseURL + '/' + action.payload);
      // Sau khi lấy được dữ liệu từ fake API
      // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
      
      // Goi FETCH_USER
      yield put({ type: FETCH_USER, payload: '' });
      // getUser();

    } catch (error) {
      console.log("error - getUser : ", error);
    }
  }


  export default function* rootSaga() {
    yield takeLatest(FETCH_USER, getUser);
    yield takeLatest(DELETE_USER, deleteUser);
  }