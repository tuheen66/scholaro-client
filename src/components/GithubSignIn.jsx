import  { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';

const GithubSignIn = () => {
    const { githubSignIn } = useContext (AuthContext);

  const handleGithubSignIn = () => {
    githubSignIn().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div>
      <button
        onClick={handleGithubSignIn}
        className="btn btn-sm  font-semibold"
      >
        Github <FaGithub className='text-blue-700'></FaGithub>
      </button>
    </div>
  );
};

export default GithubSignIn;