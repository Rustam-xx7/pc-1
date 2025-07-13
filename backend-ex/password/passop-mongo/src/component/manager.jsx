import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const manager = () => {
  // const hideRef = useRef();
  const showRef = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  const getPassword = async () => {
    let req = await fetch("http://localhost:3000/");
    let passwords = await req.json();
    console.log(passwords);
    setpasswordArray(passwords);
  };

  useEffect(() => {
    getPassword();
  }, []);

  const savePassword = async () => {
    if (
      form.site.length > 0 &&
      form.username.length > 2 &&
      form.password.length > 3
    ) {

      let id = form.id || uuidv4();

    // Only delete if editing (form.id exists)
    if (form.id) {
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    }



      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);

       await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, id: uuidv4() }),
      });

      // localStorage.setItem(
      //   "passwords",
      //   JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      // );

      setform({ site: "", username: "", password: "" });
      toast("Successfully Saved !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast("password dosen't save !");
    }
  };

  const deletePassword = async (id) => {
    console.log("Delteting password of id", id);
    let c = confirm("DO you want to Delete ?");
    if (c) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      // localStorage.setItem(
      //   "passwords",
      //   JSON.stringify(passwordArray.filter((item) => item.id !== id))
      // );

      let res = await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      toast("Successfully deleted !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const editPassword = async (id) => {
    console.log("Editing password of id", id);
    const item = passwordArray.find((item) => item.id === id);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));

    setform({
      site: item.site,
      username: item.username,
      password: item.password,
      id: id,
    });
    toast("Edit and don't forget to Save !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const showPassword = () => {
    // alert("Show password ...");
    // toggle password visibility logic here

    if (showRef.current.state === "hover-look-around") {
      showRef.current.state = "hover-cross";
      passwordRef.current.type = "password";
    } else {
      showRef.current.state = "hover-look-around";
      passwordRef.current.type = "text";
    }
  };

  const copyText = (text) => {
    toast("Text Copied !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-[90vh]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className=" background absolute inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] "></div>

      <div className="px-4 mx-4 md:px-0 md:container md:mx-auto md:max-w-4xl  bg-gray-800/50 h-fit text-white rounded-lg shadow-2xl shadow-green-500/30 my-4 mt-[7vh]">
        <h1 className="text-2xl font-bold text-center">
          <span className="text-green-400">&lt;</span>
          Pass
          <span className="text-green-400">Op/&gt;</span>
        </h1>
        <p className="text-xl text-center text-green-400">
          Your Own Password Manager
        </p>

        <div className="text-white flex flex-col items-center justify-center px-4 py-2 my-4 gap-2">
          <input
            className=" w-full border bg-white/5 border-green-300 px-3 rounded-full"
            type="text"
            name="site"
            id="site"
            value={form.site}
            onChange={handleChange}
            placeholder="Enter URL"
          />
          <div className="flex flex-col md:flex-row justify-between w-full items-center md:gap-6">
            <input
              type="text"
              name="username"
              id="username"
              value={form.username}
              onChange={handleChange}
              className="px-5 bg-white/5 border-green-300 border rounded-full my-2 w-full"
              placeholder="Enter username"
            />
            <div className="relative w-full items-center">
              <input
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                className="px-5 bg-white/5 border-green-300 border rounded-full my-2 w-full "
                placeholder="Enter password"
                ref={passwordRef}
              />
              <span
                className="absolute right-1.5 top-1.5 cursor-pointer "
                onClick={showPassword}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/dicvhxpz.json"
                  trigger="hover"
                  stroke="bold"
                  state="hover-cross"
                  colors="primary:#ffffff,secondary:#16c72e"
                  className="icon w-6 font-bold"
                  id="show"
                  ref={showRef}
                ></lord-icon>
              </span>
            </div>
          </div>
          <button
            className=" bg-green-400 hover:bg-green-300 text-black  rounded-full px-4 py-2 flex items-center justify-center gap-2 font-bold shadow-xl shadow-black/30 "
            onClick={savePassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>
      </div>
      <div className=" password md:container mx-4 md:mx-auto md:max-w-4xl  bg-gray-800/50 max-h-[40vh] overflow-y-auto text-white rounded-lg my-6 py-2 text-center custom-scrollbar">
        <h2 className="font-bold text-xl">Your Passwords</h2>

        {passwordArray.length === 0 && <div> No passwords to show .</div>}

        {passwordArray.length > 0 && (
          <table className="table-auto w-full overflow-hidden rounded-sm my-2">
            <thead className="bg-[#19113B] text-center ">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {passwordArray.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2   text-center w-[25%] h-5">
                      <a href="{item.site}" target="blank">
                        {item.site}
                      </a>
                      <button
                        className="bg-green-400 rounded-full px-2 text-black font-bold mx-3 text-sm "
                        onClick={() => {
                          copyText(item.site);
                        }}
                      >
                        c
                      </button>
                      
                    </td>
                    <td className="py-2   text-center w-[25%] h-5">
                      {item.username}
                      <button
                        className="bg-green-400 rounded-full px-2 text-black font-bold mx-3 text-sm "
                        onClick={() => {
                          copyText(item.username);
                        }}
                      >
                        c
                      </button>
                    </td>
                    <td className="py-2   text-center w-[25%] h-5">
                      {"*".repeat(item.password.length)}
                      <button
                        className="bg-green-400 rounded-full px-2 text-black font-bold mx-3 text-sm "
                        onClick={() => {
                          copyText(item.password);
                        }}
                      >
                        c
                      </button>
                    </td>
                    <td className="py-2 text-center w-[25%] h-5">
                      <span
                        className="mx-3"
                        onClick={() => {
                          editPassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/vysppwvq.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#6c16c7,secondary:#66ee78"
                          style={{ width: "30px", height: "30px" }}
                        ></lord-icon>
                      </span>
                      <span
                        onClick={() => {
                          deletePassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/tftntjtg.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#6c16c7,secondary:#66ee78"
                          style={{ width: "30px", height: "30px" }}
                        ></lord-icon>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default manager;
