import React from "react";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../features/posts";

export  const postStore = configureStore({reducer: rootReducer})
