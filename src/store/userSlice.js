import { createSlice } from "@reduxjs/toolkit";

export let bookMark = createSlice({
  name: "bookMark",
  initialState: [
    { category: "redux", list: [{ title: "redux 정의", url: "url" }] },
    { category: "html", list: [{ title: "html 정의", url: "url" }] },
  ],
  reducers: {
    addBookMark(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addBookMark } = bookMark.actions;

export let isAdd = createSlice({
  name: "isAdd",
  initialState: true,
  reducers: {
    isAddChange(state, action) {
      return action.payload;
    },
  },
});

export let { isAddChange } = isAdd.actions;

export let category = createSlice({
  name: "category",
  initialState: "",
  reducers: {
    changeCategory(state, action) {
      return action.payload;
    },
  },
});

export let { changeCategory } = category.actions;

export let title = createSlice({
  name: "title",
  initialState: "",
  reducers: {
    changeTitle(state, action) {
      return action.payload;
    },
  },
});

export let { changeTitle } = title.actions;

export let textArea = createSlice({
  name: "textArea",
  initialState: "",
  reducers: {
    changeTextArea(state, action) {
      return action.payload;
    },
  },
});

export let { changeTextArea } = textArea.actions;
