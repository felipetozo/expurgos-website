import Image from 'next/image'
import Link from 'next/link';
import styles from './Footer.module.css';

function Footer() {
    return (
        <>
            <section className={styles.FooterSection} id="contato">
                <div className={styles.FooterWrapper}>
                    <Link href="/">
                        <Image
                            src="/expurgosLogotipo-white.svg"
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
                                <Link href="tel:5545998451463">
                                    <Image
                                        src="/globe.svg"
                                        alt="Expurgos.com: Parceria e inovação em busca da evolução constante do agro."
                                        width={16}
                                        height={16}
                                    />
                                    (41) 99845 1463
                                </Link>
                            </span>
                            <span>
                                <Link href="mailto:tatiana.thomaz@expurgos.com">
                                    <Image
                                        src="/globe.svg"
                                        alt="Expurgos.com: Parceria e inovação em busca da evolução constante do agro."
                                        width={16}
                                        height={16}
                                    />
                                    tatiana.thomaz@expurgos.com
                                </Link>
                            </span>
                        </div>
                        <div className={styles.FooterContact}>
                            <p>
                                Rafael Reis
                            </p>
                            <span>
                                <Link href="tel:5545998451463">
                                    <Image
                                        src="/globe.svg"
                                        alt="Expurgos.com: Parceria e inovação em busca da evolução constante do agro."
                                        width={16}
                                        height={16}
                                    />
                                    (41) 99845 1463
                                </Link>
                            </span>
                            <span>
                                <Link href="mailto:rafael.reis@expurgos.com">
                                    <Image
                                        src="/globe.svg"
                                        alt="Expurgos.com: Parceria e inovação em busca da evolução constante do agro."
                                        width={16}
                                        height={16}
                                    />
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