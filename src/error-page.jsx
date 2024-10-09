import { useRouteError } from "react-router-dom";
import Image from 'react-bootstrap/Image';

import NotFoundImage from '/assets/images/notfound.avif'
import './index.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{maxWidth: '100vw', maxHeight: '100%', width: '100vw', }}xstyle={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Image src={NotFoundImage}  fluid xstyle={{border: '2px solid green', maxWidth :'100vw', height: 'auto'}}/>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
