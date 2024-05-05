import React, { useRef, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { changeTheme, toggle } from "../utils/appSlice";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Tooltip,
} from "@mui/material";
import {
  AccountCircle,
  DarkMode,
  DarkModeOutlined,
  Email,
  LightModeOutlined,
  LoginOutlined,
  Man,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import { validateEmailPassword } from "../utils/helper";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
        console.log(credential);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleClickButton = () => {
    let message = validateEmailPassword(email, password);

    setTimeout(() => {
      if (message === "true") {
        if (!isSignIn) {
          //sign in logic

          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              toast.success("Signed in successfully !");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
              toast.error(errorCode.substring(5));
            });
        } else {
          if (name.length == 0) message = "Name can't be Empty !";
          if (message === "true") {
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user);
                toast.success("Signed Up successfully !");
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                toast.error(errorCode.substring(5));
                // ..
              });
          } else toast.error(message);
        }
      } else {
        toast.error(message);
      }
      setIsLoading(false);
    }, 3000);
  };

  // const dispatch=useDispatch
  const dispatch = useDispatch();

  const handleDarkLight = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    dispatch(changeTheme());
  };

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="">
      <div className="fixed top-0 w-full h-full">
        <img
          className="h-full w-full   object-cover"
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksLjpceirTmG5LzF-oZbcMGIyv-C6_gX3zw&s"
          alt="bgimage"
          src="https://i.pinimg.com/originals/e7/11/a4/e711a431523cd34eab2fcbb7cea661d3.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute dark:bg-neutral-800 border-2 bg-slate-100 p-2 md:p-12  shadow-lg  w-[90%]  md:w-[450px] mx-auto left-0 right-0 my-10 rounded-lg"
      >
        {/* <div className=" float-right">
          {theme === "dark" ? (
            <Tooltip title="Light mode">
              <LightModeOutlined
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust the background color as needed
                    borderRadius: "50%", // Set the border-radius to create a circular background
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                  },
                }}
                onClick={handleDarkLight}
              />
            </Tooltip>
          ) : (
            <Tooltip title="Dark mode">
              <DarkModeOutlined
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust the background color as needed
                    borderRadius: "50%", // Set the border-radius to create a circular background
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                  },
                }}
                onClick={handleDarkLight}
              />
            </Tooltip>
          )}
        </div> */}
        <h1 className=" font-bold text-2xl md:text-3xl text-red-600 text-center pt-0 pb-4 ">
          {isSignIn ? "Sign Up" : "Sign In"}
        </h1>

        {isSignIn && (
          <div>
            <TextField
              className="w-full"
              placeholder="Shaik Abrar"
              variant="outlined"
              label="Full Name"
              // type="e"
              // onChange={()=>{setEmail(value)}}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <br />
            <br />
          </div>
          // <br/>
        )}

        <TextField
          className="w-full"
          placeholder="abrar@gmail.com"
          variant="outlined"
          label="Email"
          type="email"
          // onChange={()=>{setEmail(value)}}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <Email />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>

        <br />
        <br />
        <TextField
          variant="outlined"
          className="w-full"
          placeholder="Password@123"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <br />
        <br />
        <LoadingButton
          loading={isLoading}
          // disabled={}

          loadingPosition="center"
          startIcon={<LoginOutlined />}
          variant="contained"
          color="error"
          sx={{ padding: "8px", cursor: isLoading ? "wait" : "pointer" }}
          className="w-full p-2 rounded-sm bg-red-600 hover:bg-red-700 text-white  mx-1 my-4"
          onClick={async () => {
            await setIsLoading(!isLoading);
            handleClickButton();
          }}
        >
          {!isSignIn ? "Sign-In" : "Sign-Up"}
        </LoadingButton>
        <p
          className="my-4 mx-1 text-sm "
          onClick={() => {
            setIsSignIn(!isSignIn);
          }}
        >
          {!isSignIn ? (
            <div className=" flex  justify-between">
              <span>
                New User ?
                <span className="cursor-pointer ml-1 text-red-500 hover:underline font-bold ">
                  Sign-Up
                </span>
              </span>
              <span className="cursor-pointer text-red-500 hover:underline font-bold ">
                forgot Password ?
              </span>
            </div>
          ) : (
            <div>
              <h4>
                Already a registered User ? &nbsp;{" "}
                <span className="cursor-pointer text-red-500 hover:underline font-bold ">
                  Sign-In
                </span>
              </h4>
            </div>
          )}
        </p>
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-400"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="flex-1 border-t border-gray-400"></div>
        </div>
        {/* <br /> */}

        <div className="flex justify-center">
          <button
            className="flex    bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-3 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={handleGoogleLogin}
          >
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="800px"
              height="800px"
              viewBox="-0.5 0 48 48"
              version="1.1"
            >
              <title>Google-color</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Icons"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    />
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    />
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
