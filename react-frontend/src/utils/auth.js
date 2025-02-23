import { redirect } from "react-router-dom";

// export function getTokenDuration(){
//     const storedExpirationDate = localStorage.getItem('expiration');
//     const expirationDate = new Date(storedExpirationDate);
//     const now = new Date();
//     return expirationDate.getTime() - now.getTime();
// }
export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  //   const tokenDuration = getTokenDuration();
  //   if (tokenDuration < 0) {
  //     return "EXPIRED!";
  //   }
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

// lay token tu storage va tao headers
export const tokenoptions = {
  headers: {
    Authorization: "Bearer " + getAuthToken(),
  },
};
//su dung nhu sau
// import defaultoptions from './defaultoptions';

// // with default options:
// fetch('/auth', defaultoptions);

// // with additional (non-default) options:
// fetch('/auth', { ...defaultoptions, body: json.stringify(additionaldata) });
//end su dung defaultoptions

// su dung de bao ve route
// export function checkAuthToken(){
//     const token = getAuthToken();

//     if (!token){
//         return redirect('/auth');
//     }

//     return null;
// }
