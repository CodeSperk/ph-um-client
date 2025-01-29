import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";


const Login = () => {
  const dispatch = useAppDispatch();
  const {register, handleSubmit} = useForm();

  const [login, {data, error}] = useLoginMutation();
  console.log("data :", data);
  console.log("error :", error);

  const onFormSubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    }
    const res = await login(userInfo).unwrap();
    const token = res.data.accessToken;
    const user = verifyToken(token);
    console.log(user);
    dispatch(setUser({user: user, token: token}))
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="userId" {...register("userId")}/>
      </div>
      <div>
        <label htmlFor="password" >Password:</label>
        <input type="text" id="password" {...register("password")}/>
      </div>
      <input type="submit" placeholder="Login" />
    </form>
  );
};

export default Login;