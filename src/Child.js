import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Child() {
    const childToast = () => {
        toast('this is a toast from the Child!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }
  return (
        <div >
           <h5>Child Component</h5>
           <button onClick={childToast}>Notify from Child!</button>
        </div>
 

  );
}
