// import fetch from 'node-fetch';

// export function post(data){
//     return function(dispatch){
//       return fetch(`http://localhost:3001/activity`)
//        .then(response=> response.json())
//        .then(json=>{
//           dispatch({
//             data
//           })
//        })
//        .then(res=>console.log(res))
//        .catch(error=> console.log(error))
//     } 
//   } 

import axios from 'axios';

// export const post = (data) =>{
//     console.log({data})
//     return  axios.post("http://localhost:3001/activity",{...data})
//             .then(res=> console.log(res))
//             .catch((err)=> console.error(err))
// }

export async function post(input){
    try{
      const response=await axios({
          url:'http://localhost:3001/activity',
          method: 'POST',
          data: input,
      })
      console.log(response)
      return response
    } catch(error){
     console.log(error)
    }
}

// export async function post(input){
//     return(dispatch)=>
//      fetch("http://localhost:3001/activity",{
//          method:"POST",
//          headers:{
//              Accept:"application/json",
//              "Content-Type":"application/json",
//          },
//          body: JSON.stringify(input),
//      })
//        .then(res =>res.json())
//        .then(json=>{
//            dispatch({
//                type:
//            })
//        })
// }