import moongose from "mongoose"
import moongose from "./userModel"

const ProfileSchema = new mongoose.Schema(
    {
        displayName : {
            type : String,
            required : [true, "Display Name wajib di isi"],
        },
        profilePicture : {
            type : String,
            required : [true, "Profile Picture wajib di isi"],
        },
        bio : {
            type : String,
            minLength : [10, "minimal 10 karakter"],
            maxLength : [150, "maximal 150 karakter"],
            required : [true, "Bio wajib di isi"],
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

const ProfileModel = moongose.model("profile", ProfileSchema)

export default ProfileModel