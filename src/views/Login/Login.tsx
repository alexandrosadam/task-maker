import { Button, TextField, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginForm } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { URLS } from "@constants/urls";
import { LoginPostData, signIn } from "@api/app";
import authService from "@utils/services/AuthService";

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

  const onSubmitSuccess = async ({ username, password }: LoginPostData): Promise<void> => {
    try {
      const authData = await signIn({ username, password });

      authService.setTokens({ token: authData.token });

      if (authData.token) navigate(location.state?.from ?? URLS.dashboard);
    } catch (error) {
      console.log("Eroor on sign in!");
    }
  };

  return (
    <form css={loginForm} onSubmit={handleSubmit(onSubmitSuccess)}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <section>
        <div>
          <TextField
            {...register("username")}
            id="username"
            label="Username"
            autoComplete="username"
            margin="normal"
            required
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
            required
            fullWidth
          />
        </div>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} fullWidth>
          Sign In
        </Button>
      </section>
    </form>
  );
};

export default Login;
