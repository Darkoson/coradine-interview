import React, { FC, useState } from "react";
import {
    useDispatch,
    // useSelector
} from "react-redux";
// import { AppState } from "../../store/app-state";
import { UserAction } from "../../store/user/action";
import * as types from "../../store/user/type";

const SettingsPage: FC = () => {
    const [userid, setUserid] = useState(0);
    //const user = useSelector((state: AppState) => state.user);
    
    const dispatch = useDispatch();

   

    const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
      
      console.log("userid", e.target.value);
      
        setUserid(e.target.value ? Number(e.target.value) : 0);
        // api result 
        const usr = {
          _id: "",
          firstName: "usr.username",
          email: "usr.email",
          lastName: "usr.address.city",
        };
        console.log("usr", usr);

         dispatch<UserAction>({
           type: types.USER_TYPE,
           payload: usr,
         });
  };

  return (
    <div>
      <div>
        <label>user id</label>
        <input value={userid} onChange={onChangeUserId} />
      </div>
          {/* <div>user id: {user?._id }</div> */}
    </div>
  );
};

export default SettingsPage;
