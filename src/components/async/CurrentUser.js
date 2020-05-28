import React from "react";
import {atom, useRecoilValue, selector} from "recoil";
import {queryDB} from "../utils/utils";
import Avatar from "./Avatar";

const currentUserIDState = atom({
  key: "CurrentUserID",
  default: "12345"
});

// standard async selector
const userQueryAsync = selector({
  key: "User",
  get: async ({get}) => {
    const response = await queryDB(get(currentUserIDState));

    console.log(response);

    if (response.error) {
      throw new Error("Error loading current user!");
    }

    return response;
  }
});

// async selector with params
// selectorFamily is currently not exported
// const userQueryAsyncWithParams = selectorFamily({
//   key: "UserWithParams",
//   get: id => async () => {
//     const response = await queryDB(id);

//     console.log(response);

//     if (response.error) {
//       throw new Error("Error loading user!");
//     }

//     return response;
//   }
// });

const User = ({user}) => (
  <>
    <Avatar img={user.img} />
    <div
      style={{"align-self": "center", "margin-left": "15px"}}
    >{`${user.firstname} ${user.lastname}`}</div>
  </>
);

// const KnownAssociate = ({id}) => {
//   const user = useRecoilValue(userQueryAsyncWithParams(id));

//   return <User user={user} />;
// };

const CurrentUserInfo = () => {
  const current = useRecoilValue(userQueryAsync);

  console.log(current);

  return (
    <div style={{display: "flex", margin: "30px 0"}}>
      <User user={current} />
      {/* <span>Known Associates</span> */}
      {/* <Suspense fallback={<div>Loading associates...</div>}>
        {current.associates.map(id => (
          <KnownAssociate id={id} />
        ))}
      </Suspense> */}
    </div>
  );
};

export default CurrentUserInfo;
