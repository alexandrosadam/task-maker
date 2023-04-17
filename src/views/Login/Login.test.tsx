import userEvent from "@testing-library/user-event";
import { render, waitFor, screen } from "@test-utils/render";
import { UserRes, signIn } from "@api/app";
import Login from "./Login";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockUserData: UserRes = {
  id: 12,
  username: "username",
  email: "alex@example.com",
  firstName: "Alex",
  lastName: "Adam",
  gender: "male",
  image: "",
  token: "1234567890",
};

describe("Login form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("correctly sign in", async () => {
    // mock post request
    mockedAxios.post.mockResolvedValue({
      data: mockUserData,
    });
    // Set up mock response data
    const formData = {
      username: "username",
      password: "1234",
    };

    render(<Login />);

    const username = screen.getByLabelText(/Username/i);
    const password = screen.getByLabelText(/Password/i);
    const signinBtn = screen.getByRole("button", { name: /sign in/i });

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(signinBtn).toBeInTheDocument();

    // user types username and password
    userEvent.type(username, formData.username);
    userEvent.type(password, formData.password);

    waitFor(() => expect(username).toHaveValue(formData.username));
    waitFor(() => expect(password).toHaveValue(formData.password));

    mockedAxios.post.mockResolvedValue({
      data: mockUserData,
    });

    userEvent.click(signinBtn);

    const response = await signIn(formData);

    waitFor(() => {
      expect(signIn).toHaveBeenCalledTimes(1);
      expect(signIn).toHaveBeenCalledWith(formData);
      expect(response.username).toBe(mockUserData.username);
    });
  });

  it("shows error on unsuccessful signin attempt", async () => {
    mockedAxios.post.mockRejectedValueOnce({});
    const formData = {
      username: "wrong_username",
      password: "wrong_password",
    };

    render(<Login />);

    const username = screen.getByLabelText(/Username/i);
    const password = screen.getByLabelText(/Password/i);
    const signinBtn = screen.getByRole("button", { name: /sign in/i });

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(signinBtn).toBeInTheDocument();

    // user types username and password
    userEvent.type(username, formData.username);
    userEvent.type(password, formData.password);

    userEvent.click(signinBtn);

    const errorMessage = screen.findByText(/Error on signing in!!/);

    waitFor(() => expect(errorMessage).toBeInTheDocument());
  });
});
