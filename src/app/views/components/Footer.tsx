import Image from 'next/image'
import Link from 'next/link';
import styles from './Footer.module.css';
import { BsWhatsapp } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

function Footer() {
    return (
        <>
            <section className={styles.FooterSection} id="contato">
                <div className={styles.FooterWrapper}>
                    <Link href="/">
                        <Image
                            src="/expurgosLogotipo-White.svg"
                            alt="Expurgos.com: Parceria e inovação em busca da evolução constante do agro."
                            width={200}
                            height={35}
                        />
                    </Link>
                    <div className={styles.FooterContacts}>
                        <div className={styles.FooterContact}>
                            <p>
                                Tatiana Thomaz
                            </p>
                            <span>
                                <Link href="https://wa.me/5545998451463">
                                    <BsWhatsapp size={20} />
                                    (41) 99845 1463
                                </Link>
                            </span>
                            <span>
                                <Link href="mailto:tatiana.thomaz@expurgos.com">
                                    <IoMailOutline size={20} />
                                    tatiana.thomaz@expurgos.com
                                </Link>
                            </span>
                        </div>
                        <div className={styles.FooterContact}>
                            <p>
                                Rafael Reis
                            </p>
                            <span>
                                <Link href="https://wa.me/5545998492180">
                                    <BsWhatsapp size={20} />
                                    (45) 99849 2180
                                </Link>
                            </span>
                            <span>
                                <Link href="mailto:rafael.reis@expurgos.com">
                                    <IoMailOutline size={20} />
                                    rafael.reis@expurgos.com
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.FooterCNPJ}>
                    <p>
                        Copyright ® 2025 - Expurgos.com
                    </p>
                </div>
            </section>
        </>
    );
};

export default Footer;