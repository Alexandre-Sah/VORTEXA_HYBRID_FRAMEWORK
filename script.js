// script.js - Lógica Principal do VORTEXA HYBRID TECH FRAMEWORK

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const sidebarList = document.getElementById('sidebar-list');
    const langButtons = document.querySelectorAll('.lang-button');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const scrollOffset = 70; // Ajustado para a altura do cabeçalho fixo + um pequeno padding

    // Conteúdo dinâmico em diferentes idiomas
    const content = {
        'pt': {
            'sumario-executivo': {
                title: 'Sumário Executivo',
                sections: [
                    {
                        id: 'introducao',
                        subtitle: 'Introdução',
                        content: `
                            <p>O <strong>VORTEXA HYBRID</strong> redefine o conceito de mobilidade de alto desempenho, fusão perfeita entre tecnologia automotiva de ponta e sustentabilidade. Projetado para superar os desafios do World Rally-Raid Championship (W2RC), este veículo representa o ápice da engenharia adaptativa, combinando um powertrain híbrido inovador a hidrogênio com sistemas inteligentes e modulares.</p>
                            <p>Mais do que um veículo de corrida, o VORTEXA HYBRID é uma plataforma de pesquisa e desenvolvimento, um laboratório sobre rodas que avança as fronteiras da eletrificação, IA embarcada, segurança funcional e resiliência em ambientes extremos. Ele é a concretização da nossa visão de um futuro onde desempenho, segurança e responsabilidade ambiental coexistem em harmonia, impulsionando a próxima geração da mobilidade inteligente e sustentável.</p>
                            <p>Este documento serve como a "Bíblia VORTEXA", detalhando cada aspecto de sua arquitetura, sistemas e inovações proprietárias, bem como as rigorosas normas e conformidades que garantem sua excelência e confiabilidade global. Prepare-se para uma imersão completa no ecossistema VORTEXA.</p>
                        `
                    },
                    {
                        id: 'visao',
                        subtitle: 'Visão e Missão',
                        content: `
                            <p>Nossa visão é liderar a transição para uma mobilidade sustentável e inteligente, desenvolvendo soluções que não apenas atendam, mas superem as expectativas de desempenho e segurança em qualquer cenário.</p>
                            <p>Nossa missão é construir veículos e tecnologias que inspirem, inovem e protejam, utilizando a engenharia avançada para criar um legado de excelência e responsabilidade ambiental. O VORTEXA HYBRID é o testemunho dessa missão, provando que é possível atingir o pódio com consciência ecológica.</p>
                        `
                    },
                    {
                        id: 'arquitetura',
                        subtitle: 'Arquitetura Geral',
                        content: `
                            <p>A arquitetura do VORTEXA HYBRID é baseada em modularidade extrema e redundância neural. No seu coração, reside o <strong>Vortexa Brain™</strong>, uma unidade central de inferência cognitiva embarcada, alimentada por <strong>VORTEXCORE™</strong> ASIC SoCs. Isso permite um aprendizado profundo contínuo e um runtime adaptativo via <strong>VORTEXA SINAPSI™</strong>, garantindo adaptabilidade em tempo real a condições dinâmicas de corrida. O sistema operacional embarcado híbrido, <strong>NEVO OS™</strong>, com suporte a RTOS e aprendizado contínuo, gerencia todas as operações, enquanto <strong>SubCores™</strong> fornecem capacidade de inferência e fallback independente.</p>
                            <p>O chassi é um <strong>Modular Reconfigurable Chassis System (MRCS)</strong>, permitindo a adaptação rápida a diferentes terrenos e requisitos de missão, complementado pelo sistema <strong>QuickBay™</strong> para troca ágil de kits de missão.</p>
                            <p>A conectividade é assegurada pelo <strong>OptiCAN Matrix™</strong>, um barramento tolerante a falhas baseado em CAN XL e fibra POF, enquanto atualizações e diagnósticos podem ser realizados <strong>Over-The-Air (OTA)</strong>.</p>
                        `
                    },
                    {
                        id: 'principais-caracteristicas',
                        subtitle: 'Principais Características',
                        content: `
                            <ul>
                                <li><strong>Powertrain Híbrido a Hidrogênio:</strong> Combinação otimizada de motor a hidrogênio com recuperação de energia e motores elétricos.</li>
                                <li><strong>IA e Cognição Embarcada:</strong> Tomada de decisão autônoma e adaptativa para desempenho superior.</li>
                                <li><strong>Modularidade Extrema:</strong> Facilidade de configuração e manutenção em campo.</li>
                                <li><strong>Resiliência e Falha Segura:</strong> Sistemas redundantes e capacidade de fallback para operação contínua em condições críticas.</li>
                                <li><strong>Conformidade Regulatória:</strong> Desenvolvido sob as mais rigorosas normas internacionais de segurança e competição.</li>
                            </ul>
                        `
                    }
                ]
            },
            'tecnologia-inovacao': {
                title: 'Tecnologia e Inovação',
                sections: [
                    {
                        id: 'powertrain-hibrido',
                        subtitle: 'Powertrain Híbrido e Propulsão',
                        content: `
                            <p>O VORTEXA HYBRID utiliza um powertrain revolucionário focado em hidrogênio. O motor de combustão interna (<strong>ICE</strong>) é otimizado para hidrogênio, complementado por um <strong>Energy Recovery System (ERS)</strong> que captura e reutiliza energia. A propulsão elétrica é fornecida por unidades <strong>Quad Electric Vector (QEV)</strong>, permitindo tração direta vetorial com o sistema <strong>V-DVD™</strong>. Em caso de necessidade, uma <strong>PEM Turbine</strong> (Microturbina elétrica de célula a hidrogênio) atua como fallback energético, utilizando tecnologia de célula de hidrogênio (<strong>PEM</strong>).</p>
                            <p>O veículo pode ser abastecido de forma segura e eficiente, compatível com os protocolos <strong>SAE J2601</strong> para H₂ de 700 bar.</p>
                        `
                    },
                    {
                        id: 'eletronica-embarcada',
                        subtitle: 'Eletrônica Embarcada e Sensores',
                        content: `
                            <p>A inteligência do VORTEXA HYBRID é distribuída por uma rede robusta. O <strong>Vortexa Brain™</strong> é o núcleo cognitivo, executando em <strong>VORTEXCORE™</strong> SoCs e com o <strong>NEVO OS™</strong>. Sensores avançados incluem o <strong>LiDAR</strong> (Light Detection and Ranging), uma <strong>SensorGrid™</strong> embarcada para monitoramento estrutural, térmico, elétrico e cinemático, e o <strong>CTIS</strong> (Central Tire Intelligence System).</p>
                            <p>A comunicação interna é gerenciada pelo <strong>OptiCAN Matrix™</strong>, garantindo alta tolerância a falhas. O <strong>Event Data Recorder (EDR)</strong> registra dados cruciais para análise pós-evento. O capacete inteligente <strong>VRSH™</strong> integra HUD adaptativo, sensores BCI/EMG para interface cérebro-máquina e fallback auditivo.</p>
                        `
                    },
                    {
                        id: 'estruturas-inteligentes',
                        subtitle: 'Estruturas Inteligentes e Ativas',
                        content: `
                            <p>A <strong>Smart Skin™</strong> é uma carenagem ativa multicamadas com sensores, capacidade de autocura, e geração e armazenamento de energia. Ela incorpora a <strong>Kleist Layer™</strong>, uma camada estrutural energética regenerativa. O sistema de suspensão é o <strong>SISMO™</strong> (Sistema Inteligente de Suspensão Modular Otimizada), complementado por válvulas <strong>DSSV™</strong> (Dynamic Suspensions Spool Valve) e o sistema <strong>TAK-4i</strong> da Oshkosh Defense, conhecido por sua robustez e capacidade off-road.</p>
                        `
                    },
                    {
                        id: 'seguranca-resiliencia',
                        subtitle: 'Segurança e Resiliência',
                        content: `
                            <p>A segurança é primordial. O veículo conta com um <strong>Sistema de Freios Antitravamento (ABS)</strong>, e um <strong>Sequential Manual Failsafe Drive (SMFD™)</strong> para controle seguro mesmo em falhas. A <strong>VIRETTA™</strong> é um sistema integrado de direção, frenagem e bypass com inteligência embarcada, redundância neural e failback hidráulico, garantindo controle em situações extremas. A cápsula de sobrevivência modular e blindada <strong>VSC-RESIL™</strong> oferece proteção máxima ao ocupante.</p>
                            <p>O <strong>Environmental Control and Life Support System (ECLSS)</strong> garante condições ideais para o piloto, e a rede autônoma embarcada <strong>VULCANS™</strong> oferece suporte de vida e redundância térmica.</p>
                        `
                    }
                ]
            },
            'design-desempenho': {
                title: 'Design e Desempenho',
                sections: [
                    {
                        id: 'aerodinamica-termica',
                        subtitle: 'Aerodinâmica e Gestão Térmica',
                        content: `
                            <p>A <strong>Smart Skin™</strong> não é apenas estrutural, mas também ativa na gestão aerodinâmica e térmica, adaptando sua forma e propriedades para otimizar o fluxo de ar e a dissipação de calor. Sensores térmicos da <strong>SensorGrid™</strong> fornecem dados em tempo real para o <strong>Vortexa Brain™</strong>, que ajusta os sistemas de resfriamento e a performance aerodinâmica de forma dinâmica.</p>
                            <p>A <strong>VULCANS™</strong> auxilia na redundância térmica, garantindo que os componentes críticos operem dentro das temperaturas ideais, mesmo sob estresse extremo de corrida.</p>
                        `
                    },
                    {
                        id: 'suspensao-tracao',
                        subtitle: 'Suspensão e Tração',
                        content: `
                            <p>O <strong>SISMO™</strong> proporciona uma suspensão adaptativa, capaz de absorver os impactos mais severos e manter a tração ideal em qualquer superfície. As válvulas <strong>DSSV™</strong> controlam dinamicamente a força de amortecimento, enquanto o sistema <strong>TAK-4i</strong> da Oshkosh Defense, conhecido por sua robustez e desempenho off-road incomparáveis. A tração é otimizada pelo <strong>V-DVD™</strong> e pelas unidades <strong>QEV</strong>, permitindo um controle vetorial preciso da força em cada roda.</p>
                        `
                    },
                    {
                        id: 'cockpit-ergonomia',
                        subtitle: 'Cockpit e Ergonomia',
                        content: `
                            <p>O cockpit é projetado para máxima ergonomia e segurança. O <strong>Head-Up Display (HUD)</strong> do capacete <strong>VRSH™</strong> fornece informações críticas diretamente no campo de visão do piloto. Os sistemas de controle são intuitivos, minimizando a distração e otimizando a resposta do piloto. A cápsula de sobrevivência <strong>VSC-RESIL™</strong> é integrada ao design do cockpit, oferecendo um ambiente seguro e controlado.</p>
                        `
                    }
                ]
            },
            'glossario-tecnico': {
                title: 'Glossário Técnico',
                sections: [
                    {
                        id: 'termos-siglas',
                        subtitle: 'Termos e Siglas',
                        content: `
                            <p>Este glossário detalha os termos e siglas essenciais para a compreensão do ecossistema VORTEXA e suas tecnologias, com foco em termos proprietários (™) e industriais.</p>
                            <table class="glossary-table">
                                <thead>
                                    <tr>
                                        <th>Termo/Sigla</th>
                                        <th>Tipo</th>
                                        <th>Definição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>ABS</strong></td><td>-</td><td>Sistema de Freios Antitravamento</td></tr>
                                    <tr><td><strong>ANSYS</strong></td><td>Industrial</td><td>Software de simulação CAE</td></tr>
                                    <tr><td><strong>CAE</strong></td><td>-</td><td>Computer-Aided Engineering (Engenharia Assistida por Computador)</td></tr>
                                    <tr><td><strong>CTIS</strong></td><td>-</td><td>Central Tire Intelligence System (Sistema Inteligente Central de Pneus)</td></tr>
                                    <tr><td><strong>DENSO</strong></td><td>Industrial</td><td>Fabricante de componentes eletrônicos automotivos</td></tr>
                                    <tr><td><strong>DSSV</strong></td><td>-</td><td>Dynamic Suspensions Spool Valve (Válvula Spool de Suspensão Dinâmica)</td></tr>
                                    <tr><td><strong>ECLSS</strong></td><td>-</td><td>Environmental Control and Life Support System (Sistema de Controle Ambiental e Suporte à Vida)</td></tr>
                                    <tr><td><strong>EDR</strong></td><td>-</td><td>Event Data Recorder (Registrador de Dados de Evento)</td></tr>
                                    <tr><td><strong>ERS</strong></td><td>-</td><td>Energy Recovery System (Sistema de Recuperação de Energia)</td></tr>
                                    <tr><td><strong>FIA</strong></td><td>-</td><td>Fédération Internationale de l'Automobile</td></tr>
                                    <tr><td><strong>HUD</strong></td><td>-</td><td>Head-Up Display (Display de Cabeça Erguida)</td></tr>
                                    <tr><td><strong>HBR-1</strong></td><td>-</td><td>Motor de Corrida a Hidrogênio VORTEXA 1</td></tr>
                                    <tr><td><strong>ICE</strong></td><td>-</td><td>Internal Combustion Engine (Motor de Combustão Interna)</td></tr>
                                    <tr><td><strong>Kleist Layer™</strong></td><td>-</td><td>Camada estrutural energética regenerativa integrada à Smart Skin™</td></tr>
                                    <tr><td><strong>LiDAR</strong></td><td>-</td><td>Light Detection and Ranging (Sensor de distância baseado em laser)</td></tr>
                                    <tr><td><strong>MRCS</strong></td><td>-</td><td>Modular Reconfigurable Chassis System</td></tr>
                                    <tr><td><strong>NEVO OS™</strong></td><td>-</td><td>Sistema operacional embarcado híbrido com suporte a RTOS e aprendizado contínuo</td></tr>
                                    <tr><td><strong>OptiCAN Matrix™</strong></td><td>-</td><td>Barramento embarcado tolerante a falhas baseado em CAN XL e fibra POF</td></tr>
                                    <tr><td><strong>OTA</strong></td><td>-</td><td>Over-The-Air (Atualizações remotas)</td></tr>
                                    <tr><td><strong>PEM</strong></td><td>-</td><td>Proton Exchange Membrane (Tecnologia de célula de hidrogênio)</td></tr>
                                    <tr><td><strong>PEM Turbine</strong></td><td>-</td><td>Microturbina elétrica de célula a hidrogênio usada como fallback energético</td></tr>
                                    <tr><td><strong>QEV</strong></td><td>-</td><td>Quad Electric Vector (Unidade de propulsão vetorial elétrica)</td></tr>
                                    <tr><td><strong>QuickBay™</strong></td><td>-</td><td>Sistema modular de troca rápida de kits de missão em campo</td></tr>
                                    <tr><td><strong>SADEV</strong></td><td>Industrial</td><td>Fabricante de sistemas de transmissão de competição</td></tr>
                                    <tr><td><strong>SensorGrid™</strong></td><td>-</td><td>Rede embarcada de sensores estruturais, térmicos, elétricos e cinemáticos</td></tr>
                                    <tr><td><strong>SISMO™</strong></td><td>-</td><td>Sistema Inteligente de Suspensão Modular Otimizada</td></tr>
                                    <tr><td><strong>Smart Skin™</strong></td><td>-</td><td>Carenagem ativa multicamadas com sensores, autocura, geração e armazenamento de energia</td></tr>
                                    <tr><td><strong>SMFD™</strong></td><td>-</td><td>Sequential Manual Failsafe Drive</td></tr>
                                    <tr><td><strong>SubCore™</strong></td><td>-</td><td>Módulo computacional autônomo embarcado com capacidade de inferência e fallback independente</td></tr>
                                    <tr><td><strong>TAK-4i</strong></td><td>-</td><td>Sistema de suspensão independente da Oshkosh Defense</td></tr>
                                    <tr><td><strong>V-DVD™</strong></td><td>-</td><td>Tração Direta Vetorial VORTEXA</td></tr>
                                    <tr><td><strong>VAVi™</strong></td><td>-</td><td>Vortexa Active Valvetrain Intelligent (sistema de válvulas ativas adaptativas)</td></tr>
                                    <tr><td><strong>VIRETTA™</strong></td><td>-</td><td>Vortexa Intelligent Reactive Traction & Tactical Assistance – Sistema integrado de direção, frenagem e bypass com inteligência embarcada, redundância neural e failback hidráulico</td></tr>
                                    <tr><td><strong>Vortexa Brain™</strong></td><td>-</td><td>Unidade central de inferência cognitiva embarcada baseada em VORTEXCORE™</td></tr>
                                    <tr><td><strong>VORTEXCORE™</strong></td><td>-</td><td>Família de ASIC SoCs para inferência neural distribuída</td></tr>
                                    <tr><td><strong>VORTEXA SINAPSI™</strong></td><td>-</td><td>Arquitetura embarcada para aprendizado profundo contínuo e runtime adaptativo</td></tr>
                                    <tr><td><strong>VRSH™</strong></td><td>-</td><td>Capacete Inteligente com HUD adaptativo, sensores BCI/EMG e fallback auditivo</td></tr>
                                    <tr><td><strong>VSC-RESIL™</strong></td><td>-</td><td>Cápsula de sobrevivência modular e blindada VORTEXA</td></tr>
                                    <tr><td><strong>VULCANS™</strong></td><td>-</td><td>Rede autônoma embarcada para suporte de vida e redundância térmica</td></tr>
                                    <tr><td><strong>W2RC</strong></td><td>-</td><td>World Rally-Raid Championship</td></tr>
                                    <tr><td><strong>xAI</strong></td><td>-</td><td>Empresa de IA embarcada e criadora do Grok 6</td></tr>
                                    <tr><td><strong>xRT-VTXA™</strong></td><td>-</td><td>Runtime proprietário de tempo real estendido com fallback cognitivo</td></tr>
                                </tbody>
                            </table>
                            <p class="note"><em>Nota: termos marcados com ™ fazem parte do ecossistema proprietário VORTEXA. Clique sobre os termos no corpo do documento para acessar esta seção.</em></p>
                        `
                    }
                ]
            },
            'normas-conformidade': {
                title: 'Normas Técnicas e Conformidade',
                sections: [
                    {
                        id: 'introducao-normas',
                        subtitle: 'Introdução às Normas',
                        content: `
                            <p>O VORTEXA HYBRID foi desenvolvido em conformidade com as principais normas internacionais que regem a segurança funcional automotiva, robustez ambiental, sistemas críticos embarcados, compatibilidade regulatória para competição extrema, abastecimento de hidrogênio e cibersegurança. A adesão a esses marcos normativos assegura a interoperabilidade global, proteção do operador e confiabilidade operacional em múltiplos cenários táticos.</p>
                        `
                    },
                    {
                        id: 'seguranca-sistemas-criticos',
                        subtitle: 'Segurança Funcional e Sistemas Críticos',
                        content: `
                            <table>
                                <thead>
                                    <tr>
                                        <th>Norma</th>
                                        <th>Aplicação</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>ISO 26262 – ASIL-D</strong></td><td>Segurança automotiva</td><td>Define requisitos para sistemas embarcados críticos com falha segura. Aplicada ao Vortexa Brain™, NEVO OS™, SubCores™, ECU Resilient™ e modos de fallback cognitivo.</td></tr>
                                    <tr><td><strong>IEC 61508</strong></td><td>Sistemas elétricos/eletrônicos</td><td>Norma genérica de segurança funcional para todos os níveis do sistema eletrônico do VORTEXA.</td></tr>
                                    <tr><td><strong>AUTOSAR Adaptive</strong></td><td>Arquitetura embarcada</td><td>Padrão para sistemas automotivos adaptativos e software tolerante a falhas.</td></tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        id: 'robustez-ambiental',
                        subtitle: 'Robustez Ambiental e Operação Extrema',
                        content: `
                            <table>
                                <thead>
                                    <tr>
                                        <th>Norma</th>
                                        <th>Aplicação</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>MIL-STD-810H</strong></td><td>Condições extremas</td><td>Padroniza testes de resistência ambiental, como vibração, choque térmico, poeira, lama, submersão e altitude.</td></tr>
                                    <tr><td><strong>IP68/IP69K</strong></td><td>Proteção contra água e poeira</td><td>Certificações para selagem completa de componentes eletrônicos críticos contra intrusão de água sob pressão e partículas sólidas.</td></tr>
                                    <tr><td><strong>SAE J1455</strong></td><td>Veículos pesados</td><td>Testes de durabilidade e validação ambiental em veículos fora de estrada e militares.</td></tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        id: 'combustivel-h2',
                        subtitle: 'Normas Específicas de Combustível e H₂',
                        content: `
                            <table>
                                <thead>
                                    <tr>
                                        <th>Norma</th>
                                        <th>Aplicação</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>SAE J2601</strong></td><td>Tanques de hidrogênio</td><td>Protocolo de abastecimento seguro para veículos com H₂ de 700 bar. Compatível com os tanques modulares do VORTEXA HYBRID.</td></tr>
                                    <tr><td><strong>ISO 19880-1</strong></td><td>Infraestrutura H₂</td><td>Segurança de equipamentos para reabastecimento com hidrogênio gasoso.</td></tr>
                                    <tr><td><strong>UN ECE R134</strong></td><td>Sistemas de combustível H₂</td><td>Regulamenta requisitos técnicos para componentes de hidrogênio em veículos rodoviários.</td></tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        id: 'competicao-esportiva',
                        subtitle: 'Competição e Conformidade Esportiva',
                        content: `
                            <table>
                                <thead>
                                    <tr>
                                        <th>Norma</th>
                                        <th>Aplicação</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>FIA T1U</strong></td><td>Rally-Raid</td><td>Regulamento técnico e de segurança para a categoria Ultimate do World Rally-Raid Championship (W2RC).</td></tr>
                                    <tr><td><strong>A.S.O. Safety Guide</strong></td><td>Eventos Dakar</td><td>Normas específicas de segurança exigidas pela organização do Rally Dakar (capacetes, HUD, rádios, sistemas embarcados).</td></tr>
                                    <tr><td><strong>FIA Appendix J</strong></td><td>Equipamento de competição</td><td>Regulamenta estruturas de segurança, chassi, EDR, extintores, assentos e cintos.</td></tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        id: 'ciberseguranca-dados',
                        subtitle: 'Cibersegurança, Dados e Integridade Cognitiva',
                        content: `
                            <table>
                                <thead>
                                    <tr>
                                        <th>Norma</th>
                                        <th>Aplicação</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>ISO 27001</strong></td><td>Cibersegurança</td><td>Gestão de segurança da informação para ECUs, redes embarcadas, runtime NEVO OS™ e o ambiente cognitivo distribuído.</td></tr>
                                    <tr><td><strong>UNECE R155</strong></td><td>Segurança cibernética veicular</td><td>Requisitos obrigatórios para veículos inteligentes e conectados a partir de 2024.</td></tr>
                                    <tr><td><strong>UNECE R156</strong></td><td>Atualizações OTA</td><td>Norma internacional para gerenciamento seguro de atualizações remotas e firmware embarcado.</td></tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        id: 'simulacao-teste-qualidade',
                        subtitle: 'Padrões de Simulação, Teste e Qualidade CAE',
                        content: `
                            <table>
                                <thead>
                                    <tr>
                                        <th>Norma</th>
                                        <th>Aplicação</th>
                                        <th>Descrição</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>ISO 9001</strong></td><td>Qualidade</td><td>Gestão de qualidade aplicada à engenharia e manufatura de sistemas VORTEXA.</td></tr>
                                    <tr><td><strong>ISO 10303 (STEP)</strong></td><td>Troca de dados CAD/CAE</td><td>Interoperabilidade de modelos e gêmeos digitais com plataformas ANSYS/CAE.</td></tr>
                                    <tr><td><strong>DO-330</strong></td><td>Ferramentas de verificação</td><td>Qualificação de ferramentas de simulação, análise e certificação digital em projetos críticos.</td></tr>
                                </tbody>
                            </table>
                        `
                    }
                ]
            },
            'roadmap-futuro': {
                title: 'Roadmap e Futuro',
                sections: [
                    {
                        id: 'proximos-passos',
                        subtitle: 'Próximos Passos',
                        content: `
                            <p>O VORTEXA HYBRID está em constante evolução. Nossos próximos passos incluem a otimização contínua do powertrain para maior eficiência, a expansão das capacidades de IA com o <strong>VORTEXA SINAPSI™</strong> para cenários de direção autônoma em ambientes off-road, e a integração de novos materiais avançados na <strong>Smart Skin™</strong>.</p>
                            <p>Estamos também explorando a aplicação de nossa tecnologia em outros setores, como defesa e exploração espacial, onde a resiliência e a autonomia são cruciais.</p>
                        `
                    },
                    {
                        id: 'parceiros-estrategicos',
                        subtitle: 'Parceiros Estratégicos',
                        content: `
                            <p>O VORTEXA HYBRID é cocriado por uma rede global de parceiros tecnológicos e institucionais, combinando excelência validada em Fórmula 1, Extreme H, WEC, Rally Dakar, aviação militar e civil, neuroengenharia aplicada, simulação CAE, IA embarcada e tecnologias de mobilidade extrema. Abaixo, destacamos os principais parceiros estratégicos, seus domínios e tecnologias integradas ao projeto:</p>
                            <table class="glossary-table">
                                <thead>
                                    <tr>
                                        <th>Parceiro Estratégico</th>
                                        <th>Domínio de Atuação</th>
                                        <th>Função Técnica no Projeto</th>
                                        <th>Sistemas ou Tecnologias Associadas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>Akrapovič</strong></td><td>Sistemas de escape</td><td>Exaustão adaptativa de alta temperatura</td><td>Sistema de exaustão adaptativo</td></tr>
                                    <tr><td><strong>ANSYS</strong></td><td>Simulação CFD</td><td>Modelagem térmica e dinâmica de fluidos</td><td>CAE VORTEXA™, VULCANS™, Smart Skin™</td></tr>
                                    <tr><td><strong>Aramco</strong></td><td>Combustíveis sintéticos e H₂</td><td>e-fuels e hidrogênio verde</td><td>ICE híbrido VAVi™, H₂ técnico</td></tr>
                                    <tr><td><strong>Bosch Motorsport</strong></td><td>Eletrônica e sensores</td><td>Controle embarcado e ignição adaptativa</td><td>SensorGrid™, VECS™, ECU híbrida</td></tr>
                                    <tr><td><strong>Brembo</strong></td><td>Sistema de frenagem</td><td>Freios carbono-cerâmica</td><td>VULCANS-BRAKE™, discos flutuantes</td></tr>
                                    <tr><td><strong>CAE GmbH</strong></td><td>Simulação e engenharia virtual</td><td>Gêmeo digital e análise termoestrutural</td><td>CAE VORTEXA™, Smart Skin™, VULCANS™</td></tr>
                                    <tr><td><strong>Cobham Aerospace Communications</strong></td><td>Comunicações críticas</td><td>Fallback auditivo e integração ECLSS</td><td>VRSH™, comunicação redundante</td></tr>
                                    <tr><td><strong>Collins Aerospace</strong></td><td>Proteção avançada</td><td>Cápsula de sobrevivência (MRCS)</td><td>Survivor Capsule™, MRCS™</td></tr>
                                    <tr><td><strong>DENSO</strong></td><td>Gateways embarcados</td><td>Comunicação distribuída</td><td>OptiCAN™, barramentos tolerantes a falha</td></tr>
                                    <tr><td><strong>g.tec Medical Engineering</strong></td><td>Neuroengenharia</td><td>BCI embarcada e EEG/EMG</td><td>VRSH™, biofeedback, BCI</td></tr>
                                    <tr><td><strong>Gordon Murray Automotive</strong></td><td>Design funcional</td><td>Arquitetura Smart Skin™ e filosofia estrutural</td><td>MRCS™, modularidade térmica</td></tr>
                                    <tr><td><strong>MicroVision MEMS</strong></td><td>Projeção óptica</td><td>Microespelhos para HUD</td><td>HUD AR, MicroMirror MEMS</td></tr>
                                    <tr><td><strong>MIT – AeroAstro</strong></td><td>Estruturas avançadas</td><td>Modelagem CAE e sobrevivência modular</td><td>Kleist Layer™, Survivor Capsule™</td></tr>
                                    <tr><td><strong>MIT – CSAIL</strong></td><td>IA embarcada</td><td>Inferência adaptativa e runtime cognitivo</td><td>NEVO OS™, xRT-VTXA™, Vortexa Brain™</td></tr>
                                    <tr><td><strong>Multimatic</strong></td><td>Suspensão inteligente</td><td>DSSV-E adaptativo</td><td>SISMO™, DSSV Gen III</td></tr>
                                    <tr><td><strong>NVIDIA</strong></td><td>IA embarcada</td><td>Unidade de inferência cognitiva e sensores autônomos</td><td>VRSH™, HUD, NEVO OS™, Vortexa Brain™</td></tr>
                                    <tr><td><strong>Oshkosh Defense</strong></td><td>Mobilidade tática</td><td>Sistema TAK-4i para off-road severo</td><td>SISMO™, suspensão tática</td></tr>
                                    <tr><td><strong>PIPO Moteurs</strong></td><td>Motorização térmica</td><td>ICE HBR-1 com VAVi™</td><td>ICE HBR-1, fallback mecânico</td></tr>
                                    <tr><td><strong>PWR Advanced Cooling</strong></td><td>Termodinâmica</td><td>Arquitetura térmica integrada</td><td>VULCANS™, radiadores híbridos</td></tr>
                                    <tr><td><strong>QEV Technologies</strong></td><td>Propulsão elétrica</td><td>Motores vetoriais de 150kW</td><td>VECS™, motores elétricos, ECU dual-mode</td></tr>
                                    <tr><td><strong>QuantumScape</strong></td><td>Baterias sólidas</td><td>Células para fallback energético</td><td>Smart Skin™, Kleist Layer™</td></tr>
                                    <tr><td><strong>Repsol Tech Lab</strong></td><td>Fluidos técnicos</td><td>Fluidos dielétricos biodegradáveis</td><td>VULCANS™, anticongelantes bioativos</td></tr>
                                    <tr><td><strong>Rockwell Collins ESA Vision</strong></td><td>HUD militar</td><td>HUD multicamadas e NVG/IR</td><td>VRSH™, HUD tático</td></tr>
                                    <tr><td><strong>SADEV</strong></td><td>Transmissão</td><td>Solução de fallback mecânico</td><td>SMFD™, tração redundante</td></tr>
                                    <tr><td><strong>Schuberth GmbH</strong></td><td>Proteção pessoal</td><td>Capacete blindado compatível com IA</td><td>VRSH™, airflow tático</td></tr>
                                    <tr><td><strong>Sila Nanotechnologies</strong></td><td>Capacitores avançados</td><td>Ultracapacitores para Smart Skin™</td><td>Kleist Layer™, Smart Skin™</td></tr>
                                    <tr><td><strong>SpaceX</strong></td><td>Comunicações via satélite</td><td>Fallback e rastreamento remoto</td><td>Starlink™ _(uso restrito devido à latência)_</td></tr>
                                    <tr><td><strong>Spark Racing Technology</strong></td><td>Arquitetura elétrica</td><td>Infraestrutura de potência híbrida</td><td>Módulos de potência, ERS</td></tr>
                                    <tr><td><strong>Stanford DDL</strong></td><td>IA e neurociência</td><td>Modelagem cognitiva para HUD e BCI</td><td>Vortexa Brain™, simulações comportamentais</td></tr>
                                    <tr><td><strong>Teledyne FLIR</strong></td><td>Visão térmica</td><td>Captura IR para navegação e risco</td><td>Câmeras térmicas, VRSH™</td></tr>
                                    <tr><td><strong>UTFPR</strong></td><td>Pesquisa aplicada</td><td>Simulação CAE e testes críticos</td><td>Smart Skin™, SubCores™, fail-safe</td></tr>
                                    <tr><td><strong>Vuzix</strong></td><td>Display óptico</td><td>HUD embarcado de alta densidade</td><td>VRSH™, HUD AR</td></tr>
                                    <tr><td><strong>xAI</strong></td><td>IA generativa embarcada</td><td>Grok 6 para inferência distribuída</td><td>SubCores™, Vortexa Brain™, runtime xAI</td></tr>
                                </tbody>
                            </table>
                            <h3>Benefícios Sistêmicos da Colaboração</h3>
                            <ul>
                                <li>Redução de risco técnico por múltiplas validações cruzadas</li>
                                <li>Velocidade de desenvolvimento acelerada por compartilhamento de IPs</li>
                                <li>Acesso antecipado a tecnologias emergentes (VAVi™, PQC, CIGS, Supercapacitores, BCI)</li>
                                <li>Integração orgânica de IA desde a concepção até a manutenção preditiva</li>
                            </ul>
                        `
                    },
                    {
                        id: 'impacto-sustentabilidade',
                        subtitle: 'Impacto e Sustentabilidade',
                        content: `
                            <p>O VORTEXA HYBRID é um testemunho do nosso compromisso com a sustentabilidade. Ao utilizar hidrogênio como fonte de energia primária, minimizamos nossa pegada de carbono. Além disso, a modularidade e a durabilidade de nossos sistemas visam reduzir o desperdício e prolongar a vida útil do veículo. A pesquisa e desenvolvimento em novas energias e materiais sustentáveis são pilares da nossa filosofia, buscando sempre soluções que beneficiem o planeta e as gerações futuras.</p>
                        `
                    }
                ]
            }
        },
        'en': {
            'sumario-executivo': {
                title: 'Executive Summary',
                sections: [
                    {
                        id: 'introduction',
                        subtitle: 'Introduction',
                        content: `
                            <p>The <strong>VORTEXA HYBRID</strong> redefines the concept of high-performance mobility, a perfect fusion of cutting-edge automotive technology and sustainability. Designed to overcome the challenges of the World Rally-Raid Championship (W2RC), this vehicle represents the pinnacle of adaptive engineering, combining an innovative hydrogen hybrid powertrain with intelligent and modular systems.</p>
                            <p>More than a race vehicle, the VORTEXA HYBRID is a research and development platform, a laboratory on wheels that pushes the boundaries of electrification, embedded AI, functional safety, and resilience in extreme environments. It is the realization of our vision for a future where performance, safety, and environmental responsibility coexist in harmony, driving the next generation of intelligent and sustainable mobility.</p>
                            <p>This document serves as the "VORTEXA Bible," detailing every aspect of its architecture, systems, and proprietary innovations, as well as the rigorous standards and compliances that ensure its global excellence and reliability. Prepare for a complete immersion into the VORTEXA ecosystem.</p>
                        `
                    },
                    {
                        id: 'vision',
                        subtitle: 'Vision and Mission',
                        content: `
                            <p>Our vision is to lead the transition to sustainable and intelligent mobility, developing solutions that not only meet but exceed performance and safety expectations in any scenario.</p>
                            <p>Our mission is to build vehicles and technologies that inspire, innovate, and protect, using advanced engineering to create a legacy of excellence and environmental responsibility. The VORTEXA HYBRID is the testament to this mission, proving that it is possible to reach the podium with ecological consciousness.</p>
                        `
                    },
                    {
                        id: 'general-architecture',
                        subtitle: 'General Architecture',
                        content: `
                            <p>The VORTEXA HYBRID's architecture is based on extreme modularity and neural redundancy. At its heart lies the <strong>Vortexa Brain™</strong>, an embedded cognitive inference central unit, powered by <strong>VORTEXCORE™</strong> ASIC SoCs. This allows for continuous deep learning and adaptive runtime via <strong>VORTEXA SINAPSI™</strong>, ensuring real-time adaptability to dynamic race conditions. The hybrid embedded operating system, <strong>NEVO OS™</strong>, with RTOS support and continuous learning, manages all operations, while <strong>SubCores™</strong> provide inference capabilities and independent fallback.</p>
                            <p>The chassis is a <strong>Modular Reconfigurable Chassis System (MRCS)</strong>, allowing for rapid adaptation to different terrains and mission requirements, complemented by the <strong>QuickBay™</strong> system for agile field mission kit changes.</p>
                            <p>Connectivity is ensured by the <strong>OptiCAN Matrix™</strong>, a fault-tolerant embedded bus based on CAN XL and POF fiber, while updates and diagnostics can be performed <strong>Over-The-Air (OTA)</strong>.</p>
                        `
                    },
                    {
                        id: 'key-features',
                        subtitle: 'Key Features',
                        content: `
                            <ul>
                                <li><strong>Hydrogen Hybrid Powertrain:</strong> Optimized combination of hydrogen engine with energy recovery and electric motors.</li>
                                <li><strong>Embedded AI and Cognition:</strong> Autonomous and adaptive decision-making for superior performance.</li>
                                <li><strong>Extreme Modularity:</strong> Ease of configuration and maintenance in the field.</li>
                                <li><strong>Resilience and Fail-Safe:</strong> Redundant systems and fallback capability for continuous operation in critical conditions.</li>
                                <li><strong>Regulatory Compliance:</strong> Developed under the most rigorous international safety and competition standards.</li>
                            </ul>
                        `
                    }
                ]
            },
            'technology-innovation': {
                title: 'Technology & Innovation',
                sections: [
                    {
                        id: 'hybrid-powertrain',
                        subtitle: 'Hybrid Powertrain and Propulsion',
                        content: `
                            <p>The VORTEXA HYBRID utilizes a revolutionary hydrogen-focused powertrain. The internal combustion engine (<strong>ICE</strong>) is optimized for hydrogen, complemented by an <strong>Energy Recovery System (ERS)</strong> that captures and reuses energy. Electric propulsion is provided by <strong>Quad Electric Vector (QEV)</strong> units, enabling vectorial direct traction with the <strong>V-DVD™</strong> system. If needed, a <strong>PEM Turbine</strong> (hydrogen fuel cell electric microturbine) acts as an energy fallback, using hydrogen fuel cell technology (<strong>PEM</strong>).</p>
                            <p>The vehicle can be refueled safely and efficiently, compatible with <strong>SAE J2601</strong> protocols for 700 bar H₂.</p>
                        `
                    },
                    {
                        id: 'embedded-electronics',
                        subtitle: 'Embedded Electronics and Sensors',
                        content: `
                            <p>The VORTEXA HYBRID's intelligence is distributed across a robust network. The <strong>Vortexa Brain™</strong> is the cognitive core, running on <strong>VORTEXCORE™</strong> SoCs and with <strong>NEVO OS™</strong>. Advanced sensors include <strong>LiDAR</strong> (Light Detection and Ranging), an embedded <strong>SensorGrid™</strong> for structural, thermal, electrical, and kinematic monitoring, and the <strong>CTIS</strong> (Central Tire Intelligence System).</p>
                            <p>Internal communication is managed by the <strong>OptiCAN Matrix™</strong>, ensuring high fault tolerance. The <strong>Event Data Recorder (EDR)</strong> records crucial data for post-event analysis. The <strong>VRSH™</strong> smart helmet integrates an adaptive HUD, BCI/EMG sensors for brain-machine interface, and auditory fallback.</p>
                        `
                    },
                    {
                        id: 'smart-structures',
                        subtitle: 'Smart and Active Structures',
                        content: `
                            <p>The <strong>Smart Skin™</strong> is not only structural but also active in aerodynamic and thermal management, adapting its shape and properties to optimize airflow and heat dissipation. It incorporates the <strong>Kleist Layer™</strong>, a regenerative energetic structural layer. The suspension system is <strong>SISMO™</strong> (Optimized Modular Intelligent Suspension System), complemented by <strong>DSSV™</strong> (Dynamic Suspensions Spool Valve) and Oshkosh Defense's <strong>TAK-4i</strong> system, known for its robustness and off-road capability.</p>
                        `
                    },
                    {
                        id: 'safety-resilience',
                        subtitle: 'Safety and Resilience',
                        content: `
                            <p>Safety is paramount. The vehicle features an <strong>Anti-lock Braking System (ABS)</strong>, and a <strong>Sequential Manual Failsafe Drive (SMFD™)</strong> for safe control even in failures. <strong>VIRETTA™</strong> is an integrated steering, braking, and bypass system with embedded intelligence, neural redundancy, and hydraulic fallback, ensuring control in extreme situations. The <strong>VSC-RESIL™</strong> modular armored survival capsule offers maximum occupant protection.</p>
                            <p>The <strong>Environmental Control and Life Support System (ECLSS)</strong> ensures ideal conditions for the pilot, and the <strong>VULCANS™</strong> autonomous embedded network provides life support and thermal redundancy.</p>
                        `
                    }
                ]
            },
            'design-performance': {
                title: 'Design & Performance',
                sections: [
                    {
                        id: 'aerodynamics-thermal',
                        subtitle: 'Aerodynamics and Thermal Management',
                        content: `
                            <p>The <strong>Smart Skin™</strong> is not only structural but also active in aerodynamic and thermal management, adapting its shape and properties to optimize airflow and heat dissipation. Thermal sensors from the <strong>SensorGrid™</strong> provide real-time data to the <strong>Vortexa Brain™</strong>, which dynamically adjusts cooling systems and aerodynamic performance.</p>
                            <p><strong>VULCANS™</strong> aids in thermal redundancy, ensuring critical components operate within optimal temperatures, even under extreme race stress.</p>
                        `
                    },
                    {
                        id: 'suspension-traction',
                        subtitle: 'Suspension and Traction',
                        content: `
                            <p><strong>SISMO™</strong> provides adaptive suspension, capable of absorbing the most severe impacts and maintaining optimal traction on any surface. <strong>DSSV™</strong> valves dynamically control damping force, while the <strong>TAK-4i</strong> system ensures unparalleled robustness and off-road performance. Traction is optimized by <strong>V-DVD™</strong> and <strong>QEV</strong> units, allowing precise vectorial control of force at each wheel.</p>
                        `
                    },
                    {
                        id: 'cockpit-ergonomics',
                        subtitle: 'Cockpit and Ergonomics',
                        content: `
                            <p>The cockpit is designed for maximum ergonomics and safety. The <strong>Head-Up Display (HUD)</strong> of the <strong>VRSH™</strong> helmet provides critical information directly in the pilot's field of view. Control systems are intuitive, minimizing distraction and optimizing pilot response. The <strong>VSC-RESIL™</strong> survival capsule is integrated into the cockpit design, offering a safe and controlled environment.</p>
                        `
                    }
                ]
            },
            'technical-glossary': {
                title: 'Technical Glossary',
                sections: [
                    {
                        id: 'terms-acronyms',
                        subtitle: 'Terms and Acronyms',
                        content: `
                            <p>This glossary details essential terms and acronyms for understanding the VORTEXA ecosystem and its technologies, with a focus on proprietary (™) and industrial terms.</p>
                            <table class="glossary-table">
                                <thead>
                                    <tr>
                                        <th>Term/Acronym</th>
                                        <th>Type</th>
                                        <th>Definition</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>ABS</strong></td><td>-</td><td>Anti-lock Braking System</td></tr>
                                    <tr><td><strong>ANSYS</strong></td><td>Industrial</td><td>CAE simulation software</td></tr>
                                    <tr><td><strong>CAE</strong></td><td>-</td><td>Computer-Aided Engineering</td></tr>
                                    <tr><td><strong>CTIS</strong></td><td>-</td><td>Central Tire Intelligence System</td></tr>
                                    <tr><td><strong>DENSO</strong></td><td>Industrial</td><td>Automotive electronic components manufacturer</td></tr>
                                    <tr><td><strong>DSSV</strong></td><td>-</td><td>Dynamic Suspensions Spool Valve</td></tr>
                                    <tr><td><strong>ECLSS</strong></td><td>-</td><td>Environmental Control and Life Support System</td></tr>
                                    <tr><td><strong>EDR</strong></td><td>-</td><td>Event Data Recorder</td></tr>
                                    <tr><td><strong>ERS</strong></td><td>-</td><td>Energy Recovery System</td></tr>
                                    <tr><td><strong>FIA</strong></td><td>-</td><td>Fédération Internationale de l'Automobile</td></tr>
                                    <tr><td><strong>HUD</strong></td><td>-</td><td>Head-Up Display</td></tr>
                                    <tr><td><strong>HBR-1</strong></td><td>-</td><td>VORTEXA 1 Hydrogen Race Engine</td></tr>
                                    <tr><td><strong>ICE</strong></td><td>-</td><td>Internal Combustion Engine</td></tr>
                                    <tr><td><strong>Kleist Layer™</strong></td><td>-</td><td>Regenerative energetic structural layer integrated into Smart Skin™</td></tr>
                                    <tr><td><strong>LiDAR</strong></td><td>-</td><td>Light Detection and Ranging (Laser-based distance sensor)</td></tr>
                                    <tr><td><strong>MRCS</strong></td><td>-</td><td>Modular Reconfigurable Chassis System</td></tr>
                                    <tr><td><strong>NEVO OS™</strong></td><td>-</td><td>Hybrid embedded operating system with RTOS support and continuous learning</td></tr>
                                    <tr><td><strong>OptiCAN Matrix™</strong></td><td>-</td><td>Fault-tolerant embedded bus based on CAN XL and POF fiber</td></tr>
                                    <tr><td><strong>OTA</strong></td><td>-</td><td>Over-The-Air (Remote updates)</td></tr>
                                    <tr><td><strong>PEM</strong></td><td>-</td><td>Proton Exchange Membrane (Hydrogen fuel cell technology)</td></tr>
                                    <tr><td><strong>PEM Turbine</strong></td><td>-</td><td>Hydrogen fuel cell electric microturbine used as energy fallback</td></tr>
                                    <tr><td><strong>QEV</strong></td><td>-</td><td>Quad Electric Vector (Electric vectorial propulsion unit)</td></tr>
                                    <tr><td><strong>QuickBay™</strong></td><td>-</td><td>Modular system for rapid field mission kit changes</td></tr>
                                    <tr><td><strong>SADEV</strong></td><td>Industrial</td><td>Competition transmission systems manufacturer</td></tr>
                                    <tr><td><strong>SensorGrid™</strong></td><td>-</td><td>Embedded network of structural, thermal, electrical, and kinematic sensors</td></tr>
                                    <tr><td><strong>SISMO™</strong></td><td>-</td><td>Optimized Modular Intelligent Suspension System</td></tr>
                                    <tr><td><strong>Smart Skin™</strong></td><td>-</td><td>Multi-layered active fairing with sensors, self-healing, energy generation and storage</td></tr>
                                    <tr><td><strong>SMFD™</strong></td><td>-</td><td>Sequential Manual Failsafe Drive</td></tr>
                                    <tr><td><strong>SubCore™</strong></td><td>-</td><td>Autonomous embedded computational module with inference capability and independent fallback</td></tr>
                                    <tr><td><strong>TAK-4i</strong></td><td>-</td><td>Oshkosh Defense independent suspension system</td></tr>
                                    <tr><td><strong>V-DVD™</strong></td><td>-</td><td>VORTEXA Vectorial Direct Traction</td></tr>
                                    <tr><td><strong>VAVi™</strong></td><td>-</td><td>Vortexa Active Valvetrain Intelligent (adaptive active valve system)</td></tr>
                                    <tr><td><strong>VIRETTA™</strong></td><td>-</td><td>Vortexa Intelligent Reactive Traction & Tactical Assistance – Integrated steering, braking, and bypass system with embedded intelligence, neural redundancy, and hydraulic fallback</td></tr>
                                    <tr><td><strong>Vortexa Brain™</strong></td><td>-</td><td>Central embedded cognitive inference unit based on VORTEXCORE™</td></tr>
                                    <tr><td><strong>VORTEXCORE™</strong></td><td>-</td><td>Family of ASIC SoCs for distributed neural inference</td></tr>
                                    <tr><td><strong>VORTEXA SINAPSI™</strong></td><td>-</td><td>Embedded architecture for continuous deep learning and adaptive runtime</td></tr>
                                    <tr><td><strong>VRSH™</strong></td><td>-</td><td>Smart Helmet with adaptive HUD, BCI/EMG sensors, and auditory fallback</td></tr>
                                    <tr><td><strong>VSC-RESIL™</strong></td><td>-</td><td>VORTEXA modular armored survival capsule</td></tr>
                                    <tr><td><strong>VULCANS™</strong></td><td>-</td><td>Autonomous embedded network for life support and thermal redundancy</td></tr>
                                    <tr><td><strong>W2RC</strong></td><td>-</td><td>World Rally-Raid Championship</td></tr>
                                    <tr><td><strong>xAI</strong></td><td>-</td><td>Embedded AI company and creator of Grok 6</td></tr>
                                    <tr><td><strong>xRT-VTXA™</strong></td><td>-</td><td>Proprietary extended real-time runtime with cognitive fallback</td></tr>
                                </tbody>
                            </table>
                            <p class="note"><em>Note: terms marked with ™ are part of the proprietary VORTEXA ecosystem. Click on the terms in the document body to access this section.</em></p>
                        `
                    }
                ]
            },
            'standards-compliance': {
                title: 'Technical Standards and Compliance',
                sections: [
                    {
                        id: 'introduction-standards',
                        subtitle: 'Introduction to Standards',
                        content: `
                            <p>The VORTEXA HYBRID was developed in compliance with the main international standards governing automotive functional safety, environmental robustness, embedded critical systems, regulatory compatibility for extreme competition, hydrogen fueling, and cybersecurity. Adherence to these regulatory frameworks ensures global interoperability, operator protection, and operational reliability in multiple tactical scenarios.</p>
                        `
                    },
                    {
                        id: 'safety-critical-systems',
                        subtitle: 'Functional Safety and Critical Systems',
                        content: `
                            <table>
                                <thead>
                                    <tr>
                                        <th>Standard</th>
                                        <th>Application</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>ISO 26262 – ASIL-D</strong></td><td>Automotive safety</td><td>Defines requirements for critical embedded systems with fail-safe. Applied to Vortexa Brain™, NEVO OS™, SubCores™, ECU Resilient™ and cognitive fallback modes.</td></tr>
                                    <tr><td><strong>IEC 61508</strong></td><td>Electrical/electronic systems</td><td>Generic functional safety standard for all levels of the VORTEXA electronic system.</td></tr>
                                    <tr><td><strong>AUTOSAR Adaptive</strong></td><td>Embedded architecture</td><td>Standard for adaptive automotive systems and fault-tolerant software.</td></tr>
                                </tbody>
                            </table>
                        `
                    },
                    {
                        id: 'environmental-robustness',
                        subtitle: 'Environmental Robustness and Extreme Operation',