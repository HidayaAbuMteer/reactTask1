import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Parent() {
    const parentToast = () => {
        toast('this is a toast from the Parent!', {
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
           <h1>Parent Component</h1>
           <button onClick={parentToast}>Notify from Parent!</button>
        </div>
 

  );
}
