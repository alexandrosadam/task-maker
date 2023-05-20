import { TextField, FormControlLabel, Checkbox, Typography, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginContainer } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { URLS } from "@constants/urls";
import { LoginPostData, signIn } from "@api/app";
import authService from "@utils/services/AuthService";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

const signInFormSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSubmit, register, formState } = useForm<LoginPostData>({
    mode: "onChange",
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const { mutate: loginMutation, isLoading } = useMutation(
    ({ username, password }: LoginPostData) => signIn({ username, password }),
    {
      onSuccess: (response) => {
        authService.setTokens(response);
        navigate(location.state?.from ?? URLS.dashboard);
      },
      onError: () => {
        toast("User has wrong credentials!", {
          type: "error",
        });
      },
    },
  );

  const onSubmitSuccess = ({ username, password }: LoginPostData) =>
    loginMutation({ username, password });

  return (
    <section css={loginContainer}>
      <form className="loginForm" onSubmit={handleSubmit(onSubmitSuccess)}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <TextField
          {...register("username")}
          id="username"
          label="Username"
          autoComplete="username"
          margin="normal"
          error={Boolean(errors.username)}
          helperText={Boolean(errors.username) ? "Username is a required field" : ""}
          fullWidth
          autoFocus
        />

        <TextField
          {...register("password")}
          id="password"
          label="Password"
          autoComplete="current-password"
          margin="normal"
          type="password"
          error={Boolean(errors.password)}
          helperText={Boolean(errors.password) ? "Password is a required field" : ""}
          fullWidth
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Typography>
          Don't have an account? <Link to={URLS.register}> Sign Up</Link>
        </Typography>

        <LoadingButton
          loading={isLoading}
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          fullWidth
        >
          Sign In
        </LoadingButton>
      </form>
    </section>
  );
};

export default Login;
