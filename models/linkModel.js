import moongose from "mongoose"
import moongose from "./userModel"
import mongoose from "./profileModel"

const LinkSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : [true, "Title wajib di isi"],
        },
        icon : {
            type : String,
            required : [true, "Icon wajib di isi"],
        },
        url : {
            type : String,
            minLength : [10, "minimal 10 karakter"],
            maxLength : [150, "maximal 150 karakter"],
            required : [true, "Url wajib di isi"],
            trim : true
        },
         user : {
            type : moongose.Schema.Types.ObjectId,
            ref : "User",
            required : true
    }

},
{
   timestamps : true 
}
)

const LinkModel = moongose.model("link", LinkSchema)

export default LinkModel