const AddressForm = () => {
  return (
    <>
      <label>Street</label>
      <input autoFocus required type="text" />
      <label>Ciry</label>
      <input required type="text" />
      <label>Zip</label>
      <input required type="text" />
    </>
  );
};

export default AddressForm;
