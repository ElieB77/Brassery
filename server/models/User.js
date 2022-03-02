const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const GravitySchema = mongoose.Schema({
    name: { type: String },
    value: { type: Number },
    createdAt: { type: Date },
});

const CommentSchema = mongoose.Schema({
    title: { type: String },
    content: { type: String },
    createdAt: { type: Date },
});

const BatchSchema = mongoose.Schema({
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    name: { type: String },
    gravities: [GravitySchema],
    comments: [CommentSchema],
    createdAt: { type: Date },
});

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add a username"],
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
        ],
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: [6, "The password must to have atleast 6 caracters"],
        select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    avatar: {
        type: String,
    },
    localisation: {
        lat: { 
            type: Number,
            default: 0 
        },
        long: { type: Number, default: 0 },
    },
    materials: [{ type: mongoose.Schema.Types.ObjectId, ref: "materials" }],
    likedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipes" }],
    batches: [BatchSchema],
});

// Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash token and set to resetPasswordToken field
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    // Set expire
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

module.exports = mongoose.model("users", UserSchema);
