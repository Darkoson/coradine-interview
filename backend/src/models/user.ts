import mongoose, { model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface User  {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: number;
  photo?: number
}

export interface UserDocument extends User, Document {
  fullName: string;
  comparePassword(newPassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      required: true,
    },
    photo: String,
  },
  { timestamps: true }
);

userSchema.index({ email: 1 });

userSchema.virtual("fullName").get(function (this: UserDocument) {
  return `${this.firstName} ${this.lastName}`;
});

// When creating the user
userSchema.pre("save", async function (this: UserDocument, next: any) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hashSync(this.password, salt);

  this.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (
  newPassword: string
): Promise<boolean> {
  const user = this as UserDocument;

  return bcrypt.compare(newPassword, user.password).catch((e) => false);
};

export default model<UserDocument>("User", userSchema);
