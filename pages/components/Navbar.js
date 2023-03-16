import styles from '../../styles/scss/Component.module.scss';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
        <nav>
            <div className="navbar-menu">
                <div className='navbar-start'>
                    <h1 className='title is-1 has-text-primary  '>
                        moon.
                    </h1>
                </div>
                <div className='navbar-menu'>
                    {/* fill something good here... if dont, okay.. */}
                </div>
                <div className='navbar-end'>
                    <div className='subtitle is-6 mr-1'>
                        <Link className='has-text-primary' href="admin/">admin.</Link>
                    </div>
                    <div className='subtitle is-6 mr-2'>
                        <a target="_blank" href="https://www.instagram.com/ramonivandy/">
                            <span class="icon is-small has-text-info"><i class="fa-brands fa-instagram"></i></span>
                        </a>
                    </div>
                    <div className='subtitle is-6 mr-2'>
                        <span class="icon has-text-info"><i class="fab fa-twitter"></i></span>
                    </div>
                    <div className='subtitle is-6'>
                        <span class="icon is-small has-text-dark"><i class="fab fa-github"></i></span>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}