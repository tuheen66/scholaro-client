import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";

const GoogleSignIn = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-sm  font-semibold"
      >
        GOOGLE <FcGoogle></FcGoogle>
      </button>
    </div>
  );
};

export default GoogleSignIn;
