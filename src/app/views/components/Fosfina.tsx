import Image from 'next/image'
import styles from './Fosfina.module.css';

function Fosfina() {
    return (
        <>
            <section className={styles.FosfinaSection} id="sobre">
                <div className={styles.FosfinaWrapper}>
                    <div className={styles.FosfinaContainer}>
                        <div className={styles.FosfinaItem}>
                            <h1>
                                Exclusivo sistema de expurgo
                                com recirculação, sem resíduo e
                                monitoramento do gás fosfina.
                            </h1>
                            <p>
                                Ajudamos produtores rurais a obterem
                                os melhores resultados através dos
                                controles de pragas em unidades de
                                armazenamento, com garantia de qualidade
                                e satisfação total.
                            </p>
                            <div className={styles.FosfinaItems}>
                                <div className={styles.FosfinaItem}>
                                    <Image
                                        src="/UI/iconSatisfaction.svg"
                                        alt="Parceria e inovação no agro"
                                        width={60}
                                        height={60}
                                    />
                                    <h3>
                                        Garantia de Qualidade
                                    </h3>
                                </div>
                                <div className={styles.FosfinaItem}>
                                    <Image
                                        src="/UI/iconNoInsect.svg"
                                        alt="Parceria e inovação no agro"
                                        width={60}
                                        height={60}
                                    />
                                    <h3>
                                        Política de Inseto Zero
                                    </h3>
                                </div>
                                <div className={styles.FosfinaItem}>
                                    <Image
                                        src="/UI/iconHandShake.svg"
                                        alt="Parceria e inovação no agro"
                                        width={60}
                                        height={60}
                                    />
                                    <h3>
                                        Mais de 15 Anos de Experiência
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.FosfinaItem}>
                            <Image
                                src="/bancoImagens/silos001.webp"
                                alt="Parceria e inovação no agro"
                                width={650}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Fosfina;