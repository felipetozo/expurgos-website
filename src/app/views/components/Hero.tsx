import Image from 'next/image'
import Button from '../UI/Button'
import styles from './Hero.module.css';

function Hero() {
    return (
        <>
            <section className={styles.HeroSection} id="inicio">
                <div className={styles.HeroBackground}>

                    <Image
                        src="/mainSlider/bannerPrincipal.webp"
                        alt="Parceria e inovação no agro"
                        fill
                        priority
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/50 z-2"></div>
                </div>

                <div className={styles.HeroContainer}>

                    <h1>
                        Parceria e inovação
                        <br />
                        em busca da{' '}
                        <span className="font-semibold">evolução</span>
                        <br />
                        <span className="font-semibold">constante</span> do agro.
                    </h1>

                    <p>
                        Conte conosco para elevar o padrão
                        <br />
                        de excelência da sua safra!
                    </p>

                    <Button variant="primary" size="medium">
                        <span>Solicite um orçamento</span>
                    </Button>

                </div>
            </section>
        </>
    );
};

export default Hero;