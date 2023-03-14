import { configureStore } from "@reduxjs/toolkit";
import { bookMark, category, isAdd, textArea, title } from "./store/userSlice";

export default configureStore({
  reducer: {
    bookMark: bookMark.reducer,
    isAdd: isAdd.reducer,
    category: category.reducer,
    title: title.reducer,
    textArea: textArea.reducer,
  },
});
