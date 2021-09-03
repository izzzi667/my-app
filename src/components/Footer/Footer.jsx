import style from './Footer.module.css';

const Footer = () =>
{
    let cuurentYear = new Date().getFullYear();
    return(
        <footer className={style.footer}>Roust-{cuurentYear}</footer>
    );
}

export default Footer;
