// import React, {useEffect} from "react";
// import { useDispatch } from "react-redux";

// const FetchDrinkList = () => {

//     const dispatch = useDispatch();

//     useEffect(() => {
//         fetch("http://192.168.1.69:3000/drinks", {
//             method: "get",
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//         }).then((res) => res.json()).then((data) => dispatch({ type: 'FETCH_DRINKS', list: data }));
//     }, []);
// }

// export default FetchDrinkList;