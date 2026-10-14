function AgeCheck() {
  let age = 20;
  let message;

  if (age >= 18) {
    message = "Eligible to Vote";
  } else {
    message = "Not Eligible to Vote";
  }

  return (
    <div>

      <h2>{message}</h2>

    </div>
  );
}

export default AgeCheck;
