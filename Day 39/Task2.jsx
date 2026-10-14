function LoginStatus() {
  let isLoggedIn = true;

  return (
    <div>

      <h2> {isLoggedIn ? "Welcome To User!" : "Please Login"} </h2>

    </div>
  );
}

export default LoginStatus;
