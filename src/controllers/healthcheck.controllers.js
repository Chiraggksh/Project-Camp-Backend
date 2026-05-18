import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

// const healthCheck= async (req,res,next)=>{
//     const user=await getUserFromDB();
//     try{
//         res
//         .status(200)
//         .json(new ApiResponse(200,{message: "Server is running"}))

//     }catch(err){
//         next(err);
//     }
// }

//there is another good way of writing this code using promises : check utils/async-handler.js
//work of next: it passes control to the next middleware in the chain -> globally error bhjdegaa yee

//avoid too many try catch -- express se better yeee h

const healthCheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is running" }));
});

export { healthCheck };
