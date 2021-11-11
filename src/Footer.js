import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div style={{ marginTop: '10px', width: '15%' }}>
                    <h3>Branding stuff</h3>
                    <p>Learning to read and write are critically important goals for all children. Some children </p>
                </div>
                <div>
                    <img src='https://www.pngall.com/wp-content/uploads/2016/03/Book-PNG-7.png' width="60px" height='60px' />
                </div>
                <div className='icons'>
                    <FaFacebook style={{ color: 'darkblue', fontSize: "25px", marginRight: '10px' }} />
                    <FaTwitter style={{ color: 'blue', fontSize: '25px', marginRight: '10px' }} />
                    <FaLinkedin style={{ color: 'lightblue', fontSize: '25px', marginRight: '10px' }} />
                    <FaGoogle style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} />
                </div>
            </div>
            <hr style={{ width: '80%', marginLeft: '10%' }} />
            <div>
                <p style={{ textAlign: 'center', margin: '30px 0px' }}>
                    2021 &copy; Copyrights all rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer
