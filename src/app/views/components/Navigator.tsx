import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/views/components/Navigator.module.css';
import Button from '@/app/views/UI/Button';

function Navigator() {
    return (
        <>
            <section className={styles.NavigatorSection}>
                <div className={styles.NavigatorWrapper}>
                    <Link href="/">
                        <Image
                            src="/expurgosLogotipo-White.svg"
                            alt="Expurgos.com: Parceria e inovação em busca da evolução constante do agro."
                            width={200}
                            height={35}
                        />
                    </Link>
                    <ul>
                        <li>
                            <Link href="#inicio">
                                INÍCIO
                            </Link>
                        </li>
                        <li>
                            <Link href="#sobre">
                                SOBRE
                            </Link>
                        </li>
                        <li>
                            <Link href="#contato">
                                CONTATO
                            </Link>
                        </li>
                    </ul>
                    <Button variant="primary" size="medium">
                        <span>Solicite um orçamento</span>
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Navigator;