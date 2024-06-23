"use server";

import User from "../models/user.model";
import { connect } from "../db";

export const createUser = async (user: any) => {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
};
