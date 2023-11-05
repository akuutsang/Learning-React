import { useEffect, useState } from "react";

function Log() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    console.log("APP COMPNENT RENDERED");
  });

  const handleChange = (name) => (event) => {
    setFormData({ ...formData, [name]: event.target.value });
  };
  const handleSubmit = (event) => {
    console.log("result", formData);
  };
  return (
    <div className="p-10">
      <div className="p-2 flex flex-col">
        <label htmlFor="email">Enter your Email</label>
        <input
          type="email"
          className="w-40"
          placeholder="Enter your Email"
          id="email"
          onChange={handleChange("email")}
        />
      </div>
      <div className="p-2 flex flex-col">
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          className="w-40 "
          placeholder="Enter your Password"
          id="password"
          onChange={handleChange("password")}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="border-black w-20 bg-blue-600 p-1"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}
export default Log;
