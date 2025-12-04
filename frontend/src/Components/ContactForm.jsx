export default function ContactForm({
  formData,
  postResponse,
  handleOnChange,
  handleOnSubmit,
  currentPage,
  isEditing,
  name,
  email,
  address,
  phone,
  image,
}) {
  const isLoginPage = currentPage === "";
  const isRegisterPage = currentPage === "register";
  
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        {isLoginPage || isRegisterPage ? (
          <>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData?.username || ""}
              onChange={handleOnChange}
              placeholder="Enter username"
              required
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData?.password || ""}
              onChange={handleOnChange}
              placeholder="Enter password"
              required
            />
            <br />
            <button type="submit">
              {isLoginPage ? "Login" : "Register"}
            </button>
            {postResponse && <p style={{ color: "green" }}>{postResponse}</p>}
          </>
        ) : (
          <>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleOnChange}
              placeholder="Enter name"
              required
            />
            <br />
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email"
              required
            />
            <br />
            <label htmlFor="phone">Phone: </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              value={phone}
              onChange={handleOnChange}
              placeholder="Enter phone"
              required
            />
            <br />
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={handleOnChange}
              placeholder="Enter address"
              required
            />
            <br />
            <label htmlFor="image">Image: </label>
            <input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={handleOnChange}
              placeholder="Enter image URL"
            />
            <br />
            <button>{isEditing ? "Editing" : "Submit"}</button>
          </>
        )}
      </form>
    </div>
  );
}