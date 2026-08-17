import "dotenv/config"
import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT =process.env.PORT || 3000
connectDB()
.then(
    app.listen(PORT,()=>{
        console.log(`Server is Running ${PORT}`);
    })
)
.catch((err)=>{
    console.log('error in connection',err);
    process.exit(1);
})