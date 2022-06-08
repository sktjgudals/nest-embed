import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ToastContainer from '../common/ToastContainer'
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <ToastContainer/>
    </div>
  );
}
export default MyApp
