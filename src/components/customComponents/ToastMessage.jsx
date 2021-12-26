import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
toast.configure()
  const ToastMessage =(type,message)=> {    
      toast[type](message, {
        position: toast.POSITION.TOP_RIGHT
      });
         
    };
export default ToastMessage;



    