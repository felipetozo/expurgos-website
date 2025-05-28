import Image from 'next/image'
import styles from './InsetoZero.module.css';

function InsetoZero() {
    return (
        <>
            <section className={styles.InsetoZeroSection}>
                <div className={styles.InsetoZeroWrapper}>
                    <div className={styles.InsetoZeroContainer}>
                        <h2>
                            Programa de Monitoramento da Qualidade Inseto Zero
                        </h2>
                        <p>
                            Controle total em expurgos para silos. Reduza a
                            contaminação e perdas com nossos rigorosos padrões
                            de qualidade e segurança em cada fase.
                        </p>
                    </div>
                    <div className={styles.InsetoZeroGrid}>
                        <div className={styles.InsetoZeroHighlights}>
                            Profilaxias de Armazém
                        </div>
                        <div className={styles.InsetoZeroHighlights}>
                            Inspeções Sequenciais
                        </div>
                        <div className={styles.InsetoZeroHighlights}>
                            Verificação de Temperatura
                        </div>
                        <div className={styles.InsetoZeroHighlights}>
                            Amostragens em Profundidade
                        </div>
                        <div className={styles.InsetoZeroHighlights}>
                            Treinamentos
                        </div>
                        <div className={styles.InsetoZeroHighlights}>
                            Relatórios Técnicos
                        </div>
                    </div>
                    <div className={styles.InsetoZeroContainer}>
                        <p>
                            Otimizamos processos, reduzimos desperdícios e
                            padronizamos sistemas para impulsionar sua lucratividade.
                        </p>
                        <div className={styles.InsetoZeroTypes}>
                            <div className={styles.InsetoZeroType}>
                                <Image
                                    src="/UI/iconBug.svg"
                                    alt="Parceria e inovação no agro"
                                    width={48}
                                    height={48}
                                />
                                <h4>
                                    Controle de Insetos
                                </h4>
                            </div>
                            <div className={styles.InsetoZeroType}>
                                <Image
                                    src="/UI/iconMouse.svg"
                                    alt="Parceria e inovação no agro"
                                    width={48}
                                    height={48}
                                />
                                <h4>
                                    Controle de Roedores
                                </h4>
                            </div>
                            <div className={styles.InsetoZeroType}>
                                <Image
                                    src="/UI/iconBird.svg"
                                    alt="Parceria e inovação no agro"
                                    width={48}
                                    height={48}
                                />
                                <h4>
                                    Controle de Pombos
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InsetoZero;