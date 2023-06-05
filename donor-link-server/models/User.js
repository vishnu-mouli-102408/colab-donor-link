import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 60,
        },
        email: {
            type: String,
            required: true,
            max: 30,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 3
        },
        city: String,
        state: String,
        country: String,
        occupation: String,
        phoneNumber: String,
        role: {
            type: String,
            enum: ["donor", "recipient"],
            default: 'recipient',
        },
    },
    {timestamps: true}
)

const User = mongoose.model("User", UserSchema);
export default User;