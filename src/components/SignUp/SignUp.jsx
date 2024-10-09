import Form  from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import './SignUp.css'
import SignUpImg from '/assets/images/scorpion1.webp'
import Logo from '/assets/images/logo.png'
import GoogleIcon from '/assets/images/google.svg'
import countries from './countries.json'



function SignUp() {
    const baseUrl = "127.0.0.1:8000"
    return(
        <div className="signup-container">
            {/* <div className="top-bar">
                <img src={Logo} width={80} height={'auto'} style={{position: 'absolute', left: 30, top: 2,backgroundColor: 'green'}} />
                 <h1 style={{position: 'absolute', left: 100, top: 12}}>BATTLE GRID</h1>

            </div> */}
        <div className='signup-wrapper'>
            <div xstyle={{width: '50vw'}} className='left-img'>
                {/* <Image src={SignUpImg}  style={{width:'50vw'}}/> */}

            </div>
                <Form style={{xborder: '3px solid blue', xmarginRight: '50px', xheight: '100vh', width: '45vw'}}>
                <h2>Battle Grid</h2>
                <h2 style={{marginBottom: 80}}>Sign Up</h2>


                <Form.Group className="mb-1" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="FirstName" />

                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="LastName" />

                </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" />
                        {/* <Form.Text className="text-muted">  
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        {/* <Form.Label htmlFor="disabledSelect">Countries</Form.Label> */}
                        <Form.Select id="disabledSelect">
                            <option>Disabled select</option>
                            {
                                countries.map(country =>(
                                    <option key={country.name}><Image src={country.flags.png}/><Image src={GoogleIcon} width={30} height={30}/>{country.name}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept  the Terms and Conditions" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <div className="with-google"><Image src={GoogleIcon} width={30} height={30}/>Continue with Google</div>
                </Form>

        </div>
        </div>
    )
}

export default SignUp