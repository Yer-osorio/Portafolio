import React from 'react'
import { Typography, Container } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';


function Contact() {
    return (
        <div>
            <footer className='footer'>
                <Container maxWidth="sm">
                <Typography variant="body1">
                        CONTACTOS:
                    </Typography>
                    <div className='footerButton' >

                        <button className='contactButton'>
                            <a href='https://www.facebook.com/yersonosoriog' target='_blank' rel='noopener noreferrer' >
                                <Facebook />
                            </a>
                        </button>

                        <button className='contactButton'>
                            <a href='mailto:yersonosoriog1@gmail.com' target='blank' rel='noopener noreferrer'>
                                <EmailIcon />
                            </a>
                        </button>

                        <button className='contactButton'>
                            <a href='https://www.instagram.com/yer______/' target='_blank' rel='noopener noreferrer'>
                                <Instagram />
                            </a>
                        </button>

                        <button className='contactButton'>
                            <a href='https://wa.me/573135535174' target='_blank' rel='noopener noreferrer'>
                                <WhatsApp />
                            </a>
                        </button>

                        <Typography variant="body1">
                        © {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
                    </Typography>

                    </div>
                </Container>
            </footer>
        </div>
    )
}

export default Contact