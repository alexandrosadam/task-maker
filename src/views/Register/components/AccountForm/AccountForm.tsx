const AccountForm = () => {
  return (
    <>
      <label>Email</label>
      <input autoFocus required type="email" />
      <label>Password</label>
      <input required type="password" />
    </>
  );
};

export default AccountForm;
