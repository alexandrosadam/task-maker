import { TextField, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginForm } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { URLS } from "@constants/urls";
import { LoginPostData, signIn } from "@api/app";
import authService from "@utils/services/AuthService";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

const signInFormSchema = yup.object().shape({
  username: yup.string().required("Username is a required field"),
  password: yup.string().required("Password is a required field"),
});

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSubmit, register } = useForm<LoginPostData>({
    mode: "onChange",
    resolver: yupResolver(signInFormSchema),
  });

  const { mutate: loginMutation, isLoading } = useMutation(
    ({ username, password }: LoginPostData) => signIn({ username, password }),
    {
      onSuccess: (response) => {
        authService.setTokens(response);
        navigate(location.state?.from ?? URLS.dashboard);
      },
      onError: () => {
        toast("Error on signing in!", {
          type: "error",
        });
      },
    },
  );

  const onSubmitSuccess = ({ username, password }: LoginPostData) => {
    loginMutation({ username, password });
  };

  return (
    <form css={loginForm} onSubmit={handleSubmit(onSubmitSuccess)}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <div> "email": "john@mail.com", "password": "changeme"</div>
      <section>
        <div>
          <TextField
            {...register("username")}
            id="username"
            label="Username"
            autoComplete="username"
            margin="normal"
            fullWidth
            autoFocus
          />
        </div>
        <div>
          <TextField
            {...register("password")}
            id="password"
            label="Password"
            autoComplete="current-password"
            margin="normal"
            type="password"
            fullWidth
          />
        </div>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <LoadingButton
          loading={isLoading}
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          fullWidth
        >
          Sign In
        </LoadingButton>
      </section>
    </form>
  );
};

export default Login;
