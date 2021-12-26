import {get} from "lodash"

export const usersInfoSelector=state=>get(state ,"users",{});