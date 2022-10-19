import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
let internalToken = null;

export function getToken() {
  return internalToken;
}

export async function getTokenInternal() {
  const url = `${process.env.REACT_APP_API_HOST}/user/token/`;
  try {
    const response = await fetch(url, {
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      internalToken = data.access_token;
      return internalToken;
    }
  } catch (e) {}
  return false;
}

function handleErrorMessage(error) {
  if ("error" in error) {
    error = error.error;
    try {
      error = JSON.parse(error);
      if ("__all__" in error) {
        error = error.__all__;
      }
    } catch {}
  }
  if (Array.isArray(error)) {
    error = error.join("<br>");
  } else if (typeof error === "object") {
    error = Object.entries(error).reduce(
      (acc, x) => `${acc}<br>${x[0]}: ${x[1]}`,
      ""
    );
  }
  return error;
}

export const AuthContext = createContext({
  token: null,
  setToken: () => null,
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export function useToken() {
  const { token, setToken } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchToken() {
      const token = await getTokenInternal();
      setToken(token);
    }
    if (!token) {
      fetchToken();
    }
  }, [setToken, token]);

  async function logout() {
    console.log("777");
    if (token) {
      const url = `${process.env.REACT_APP_API_HOST}/user/token`;
      await fetch(url, { method: "delete", credentials: "include" });
      internalToken = null;
      setToken(null);
      navigate("/");
    }
  }

  async function login(username, password) {
    const url = `${process.env.REACT_APP_API_HOST}/user/token/`;
    const form = new FormData();
    form.append("username", username);
    form.append("password", password);
    const response = await fetch(url, {
      method: "post",
      credentials: "include",
      body: form,
    });
    if (response.ok) {
      const token = await getTokenInternal();
      setToken(token);
      return;
    }
    let error = await response.json();
    return handleErrorMessage(error);
  }

  async function signup(user_name, password) {
    const url = `${process.env.REACT_APP_API_HOST}/user`; // TODO: change url to user/sign-up
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        user_name,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await login(user_name, password);
    }
    return false;
  }

  async function logout_guru() {
    console.log("888");
    if (token) {
      //   const url = `${process.env.REACT_APP_API_HOST}/gurus/token`;
      const url = `http://localhost:8000/gurus/token/`; // TODO: change url to user/sign-up

      await fetch(url, { method: "delete", credentials: "include" });
      internalToken = null;
      setToken(null);
      navigate("/");
    }
  }

  async function login_guru(username, password) {
    const url = `${process.env.REACT_APP_API_HOST}/guru/token/`;
    // const url = `http://localhost:8000/gurus/token/`; // TODO: change url to user/sign-up
    const form = new FormData();
    form.append("username", username);
    form.append("password", password);
    const response = await fetch(url, {
      method: "post",
      credentials: "include",
      body: form,
    });
    if (response.ok) {
      const token = await getTokenInternal();
      setToken(token);
      return;
    }
    let error = await response.json();
    return handleErrorMessage(error);
  }

  async function signup_guru(user_name, password, description, price) {
    console.log("signup guru");
    const url = `${process.env.REACT_APP_API_HOST}/gurus`; // TODO: change url to user/sign-up
    // const url = `http://localhost:8000/gurus`; // TODO: change url to user/sign-up

    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        user_name,
        password,
        description,
        price,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await login_guru(user_name, password);
    }
    return false;
  }

  async function update(username, password, email, firstName, lastName) {
    const url = `${process.env.REACT_APP_API_HOST}/api/accounts/`;
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        username,
        password,
        email,
        first_name: firstName,
        last_name: lastName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await login(username, password);
    }
    return false;
  }

  return [
    token,
    login,
    logout,
    signup,
    update,
    login_guru,
    logout_guru,
    signup_guru,
  ];
}
