import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-[#FFFFFF]">
      <div className="mx-auto flex justify-between items-center py-4 px-8 rounded">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <img className="max-w-[50px]" src={logo} alt="" />
          <p>SignIn & SignUp</p>
        </div>
        <div className="text-lg gap-x-2 hidden lg:flex">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#1D9BF0] px-4 py-2"
                : "px-4 py-2"
            }
          >
            Home
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/order"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#1D9BF0] px-4 py-2"
                    : "px-4 py-2"
                }
              >
                Order
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#1D9BF0] px-4 py-2"
                    : "px-4 py-2"
                }
              >
                Profile
              </NavLink>
            </>
          )}
          <NavLink
            to="/aboutUs"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#1D9BF0] px-4 py-2"
                : "px-4 py-2"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#1D9BF0] px-4 py-2"
                : "px-4 py-2"
            }
          >
            Contact
          </NavLink>
          {user ? (
            <NavLink to="/signIn">
              <button
                onClick={handleSignOut}
                className="px-4 py-2 text-white bg-[#1D9BF0] rounded-md"
              >
                Sign Out
              </button>
            </NavLink>
          ) : (
            <div className="flex gap-x-6">
              <NavLink
                to="/signIn"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-[#1D9BF0] rounded-md"
                    : "text-black bg-[#e0e3e7] rounded-md"
                }
              >
                <button className="px-4 py-2">SignIn</button>
              </NavLink>
              <NavLink
                to="/signUp"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-[#1D9BF0] rounded-md"
                    : "text-black bg-[#e0e3e7] rounded-md"
                }
              >
                <button className="px-4 py-2">SignUp</button>
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile design navbar */}
        <div className="block lg:hidden">
          <button onClick={() => setMenu(!menu)} className="relative">
            {menu ? (
              <RxCross1 className="text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-2xl" />
            )}
          </button>
          {menu && (
            <div className="absolute flex flex-col justify-center items-center right-10 top-16 bg-[#1D9BF0] text-[#FFF] px-6 py-4 rounded-lg">
              <div className="flex flex-col justify-center items-center mb-2 w-[150px]">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#1D9BF0] px-4 py-2"
                      : "px-4 py-2"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/aboutUs"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#1D9BF0] px-4 py-2"
                      : "px-4 py-2"
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#1D9BF0] px-4 py-2"
                      : "px-4 py-2"
                  }
                >
                  Contact
                </NavLink>
              </div>
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/signIn"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-[#000000] rounded-md px-4 py-3"
                      : "text-black bg-[#e0e3e7] rounded-md px-4 py-3"
                  }
                >
                  <button className="px-1">SignIn</button>
                </NavLink>
                <NavLink
                  to="/signUp"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white bg-[#000000] rounded-md px-4 py-3"
                      : "text-black bg-[#e0e3e7] rounded-md px-4 py-3"
                  }
                >
                  <button className="">SignUp</button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
