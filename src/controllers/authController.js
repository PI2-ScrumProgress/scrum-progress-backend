import { login, refreshTokens, logout } from "../services/authService.js";

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const tokens = await login(email, password);
    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.json(tokens);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const refreshHandler = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.sendStatus(401);
  }

  try {
    const tokens = await refreshTokens(refreshToken);

    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.json(tokens);
  } catch (error) {
    res.sendStatus(403);
  }
};

const logoutHandler = (req, res) => {
  res.clearCookie("refreshToken");
  logout();
  res.sendStatus(204);
};

export { loginHandler, refreshHandler, logoutHandler };
