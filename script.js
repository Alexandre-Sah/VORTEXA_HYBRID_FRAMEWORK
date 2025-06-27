// script.js - Conteúdo e Lógica Principal do VORTEXA HYBRID TECH FRAMEWORK
// Ajustado para o novo cabeçalho fixo, conteúdo mitigado e estrutura dinâmica.

const content = {
    pt: {
        title: "VORTEXA HYBRID TECH FRAMEWORK",
        sidebar: {
            title: "Sumário",
            sections: [
                {
                    id: "introduction",
                    title: "Introdução",
                    subsections: []
                },
                {
                    id: "executive-summary",
                    title: "Resumo Executivo",
                    subsections: [
                        { id: "executive-summary-general", title: "Público Geral" },
                        { id: "executive-summary-executives", title: "Executivos" }
                    ]
                },
                {
                    id: "technical-data",
                    title: "Dados Técnicos",
                    subsections: [
                        { id: "technical-data-engineering", title: "Engenharia" },
                        { id: "core-systems", title: "Sistemas Core (TRL 7-9)" },
                        { id: "advanced-systems", title: "Sistemas Avançados (TRL 4-6)" },
                        { id: "concept-systems", title: "Sistemas Conceituais (TRL 1-3)" },
                        { id: "regulatory-compliance-matrix", title: "Matriz de Conformidade Regulatória" },
                        { id: "integration-roadmap", title: "Roteiro de Integração" },
                        { id: "risk-assessment", title: "Avaliação de Risco" }
                    ]
                },
                {
                    id: "press-release",
                    title: "Press Release",
                    subsections: [
                        { id: "press-release-specialized", title: "Revistas Especializadas" },
                        { id: "press-release-enthusiasts", title: "Entusiastas" },
                        { id: "press-release-segmented", title: "Público Segmentado" }
                    ]
                },
                {
                    id: "glossary",
                    title: "Glossário Técnico",
                    subsections: []
                },
                {
                    id: "standards",
                    title: "Normas Técnicas",
                    subsections: []
                },
                {
                    id: "conformity",
                    title: "Conformidade",
                    subsections: []
                }
            ]
        },
        sections: { // Conteúdo principal das seções
            "introduction": {
                title: "Introdução",
                content: `
                    <p>O <strong>VORTEXA HYBRID TECH FRAMEWORK</strong> representa um salto quântico na engenharia de mobilidade extrema, combinando tecnologias de ponta para criar uma plataforma que redefine os limites de desempenho, segurança e interação. Este documento serve como a "Bíblia" detalhada do framework, apresentando sua visão, componentes, e a rigorosa metodologia de desenvolvimento.</p>
                    <p>Concebido para ambientes de alta demanda como o motorsport, o VORTEXA integra sistemas de propulsão avançados, eletrônica inteligente e uma abordagem holística à segurança do piloto, culminando em uma experiência de condução sem precedentes. Nosso compromisso é com a inovação responsável, garantindo que cada avanço tecnológico seja avaliado criticamente em termos de viabilidade e conformidade regulatória.</p>
                    <p>Este framework não é apenas um projeto; é a visão de um futuro onde a tecnologia eleva a capacidade humana a novos patamares, sempre com foco na segurança e na excelência de engenharia. Apresentamos aqui as soluções para os desafios inerentes à vanguarda tecnológica, reforçando a robustez e a adaptabilidade do VORTEXA.</p>
                `
            },
            "executive-summary": {
                title: "Resumo Executivo",
                content: `
                    <h3 id="executive-summary-general">Público Geral</h3>
                    <p>O VORTEXA HYBRID é uma plataforma revolucionária que integra as mais recentes inovações em propulsão, materiais e inteligência artificial para criar veículos de mobilidade extrema com performance superior e segurança aprimorada. Imagine a fusão perfeita entre potência, controle e uma experiência de condução intuitiva, tudo isso operando dentro de um ecossistema tecnológico robusto e interconectado. Nosso framework foi projetado para elevar o padrão da engenharia automotiva, oferecendo uma visão do futuro do motorsport e de aplicações de alta performance.</p>
                    <p>Destacamos a integração inteligente de sistemas e a redundância como pilares, garantindo confiabilidade e desempenho excepcionais em qualquer cenário.</p>

                    <h3 id="executive-summary-executives">Executivos</h3>
                    <p>O VORTEXA HYBRID TECH FRAMEWORK representa uma oportunidade estratégica única, com um substancial potencial de mercado em setores de alta performance e automotivo premium. Nossa proposta de valor se baseia na entrega de um sistema escalável, robusto e com múltiplos pontos de redundância, minimizando riscos operacionais e maximizando o retorno sobre o investimento.</p>
                    <p>A arquitetura modular do VORTEXA facilita a adaptação a diversas aplicações, desde o motorsport de elite até veículos especializados. A inclusão de <a href="#risk-assessment" class="highlight-term">planos de contingência</a> e <a href="#regulatory-compliance-matrix" class="highlight-term">matrizes de conformidade regulatória</a> assegura um desenvolvimento ágil e seguro, alinhado com as exigências da indústria e do mercado.</p>
                    <p>Investir no VORTEXA é investir na vanguarda da engenharia e na criação de um legado de inovação e segurança.</p>
                `
            },
            "technical-data": {
                title: "Dados Técnicos",
                content: `
                    <h3 id="technical-data-engineering">Engenharia</h3>
                    <p>Esta seção aprofunda os detalhes técnicos do VORTEXA HYBRID, servindo como referência para engenheiros e especialistas. Abordamos a arquitetura de sistemas, a seleção de materiais e as estratégias de integração, sempre com foco na performance, segurança e viabilidade. A estrutura do documento segue os níveis de maturidade tecnológica (<a href="#trl" class="highlight-term">TRL</a>) para cada componente, garantindo clareza sobre o status de desenvolvimento.</p>

                    <h4 id="core-systems">Core Systems (TRL 7-9)</h4>
                    <p>São os sistemas maduros e comprovados que formam a espinha dorsal do VORTEXA. Incluem a unidade de propulsão híbrida otimizada, o chassi monocoque de fibra de carbono com zonas de deformação calculadas, sistemas de freio regenerativo de alta performance e o sistema de gerenciamento de energia (EMS) que otimiza a entrega de potência e a recuperação. Estes componentes são projetados para máxima eficiência e durabilidade em condições extremas, com testes extensivos já realizados em ambientes simulados e protótipos iniciais.</p>
                    <ul>
                        <li><strong>Unidade de Propulsão Híbrida:</strong> Combinação de motor a combustão de alta rotação e motores elétricos, com recuperação de energia cinética (<a href="#kers" class="highlight-term">KERS</a>) e térmica (<a href="#mgu-h" class="highlight-term">MGU-H</a>). Peso alvo: X kg, Potência combinada: Y hp.</li>
                        <li><strong>Chassi Monocoque:</strong> Construção em fibra de carbono de grau aeroespacial, otimizada para rigidez torsional e absorção de impacto.</li>
                        <li><strong>Sistema de Freios:</strong> Cerâmica de carbono com pinças de múltiplos pistões, integrados ao sistema regenerativo.</li>
                        <li><strong>EMS (Energy Management System):</strong> Software e hardware dedicados para controle de fluxo de energia, garantindo otimização de desempenho e eficiência.</li>
                    </ul>

                    <h4 id="advanced-systems">Advanced Systems (TRL 4-6)</h4>
                    <p>Representam tecnologias com validação em ambiente relevante, mas que ainda requerem desenvolvimento e testes para integração completa no sistema final. Aqui se destacam:</p>
                    <ul>
                        <li><strong>Smart Skin™:</strong> Uma rede avançada de sensores integrados à superfície do veículo, monitorando em tempo real estresse estrutural, temperatura e aerodinâmica. Seu desenvolvimento visa alta durabilidade em condições extremas (impactos, abrasão, variações térmicas), com projeções de custo de implementação de $X por m² e um plano de manutenção modular para facilitar reparos. A coleta de dados é crucial para otimização em tempo real e análise pós-evento.</li>
                        <li><strong>VRSH™ (Variable Ratio Suspension and Handling):</strong> Sistema de suspensão ativa que ajusta dinamicamente a geometria e a rigidez em resposta às condições da pista e comandos do piloto, otimizando aderência e manobrabilidade. Os protótipos já demonstraram ganhos significativos em testes controlados.</li>
                        <li><strong>Telemetria Avançada e Análise Preditiva:</strong> Ferramentas que utilizam algoritmos de IA para prever falhas de componentes, otimizar estratégias de corrida e fornecer insights em tempo real para a equipe e o piloto.</li>
                    </ul>

                    <h4 id="concept-systems">Concept Systems (TRL 1-3)</h4>
                    <p>São ideias inovadoras em fase inicial de pesquisa, com potencial transformador, mas que demandam validação fundamental. Abordamos os desafios e o caminho para a viabilidade:</p>
                    <ul>
                        <li><strong>BCI (Brain-Computer Interface) em Motorsport:</strong> Considerado como um <span class="highlight-term">sistema de monitoramento de performance cognitiva e estados de alerta do piloto</span>, e não para controle ativo do veículo. A aplicação de BCI em ambientes de alta vibração e resposta instantânea (como o motorsport) apresenta desafios significativos de estabilidade do sinal e interferência. Nossas pesquisas iniciais focam em filtros de ruído e algoritmos de processamento de sinal robustos. O principal objetivo é fornecer dados em tempo real sobre fadiga e concentração do piloto, sem violar regulamentações de assistência ao piloto.</li>
                        <li><strong>Starlink™ para Comunicação Crítica:</strong> A viabilidade do uso de Starlink para comunicação crítica em tempo real no motorsport (<span class="highlight-term">baixa latência e alta confiabilidade</span>) está sob avaliação rigorosa. Embora promissora para dados não-críticos ou comunicações de equipe, a latência inerente à rede de satélites pode ser inadequada para controle de sistemas de missão crítica. Estamos explorando soluções complementares de rede local (<a href="#5g" class="highlight-term">5G</a> Privado) ou frequências licenciadas para garantir redundância e latência ultrabaixa para sistemas críticos. Para comunicação de telemetria geral, o Starlink permanece uma opção estratégica.</li>
                        <li><strong>Materiais Autocurativos:</strong> Pesquisa em polímeros e compósitos que possam reparar pequenos danos estruturais de forma autônoma, aumentando a durabilidade e segurança dos componentes.</li>
                    </ul>

                    <h4 id="regulatory-compliance-matrix">Matriz de Conformidade Regulatória</h4>
                    <p>A conformidade com os regulamentos esportivos e técnicos é um pilar do VORTEXA. Estamos desenvolvendo uma matriz detalhada que mapeia cada componente e funcionalidade às normas da <a href="#fia" class="highlight-term">FIA</a> (Federação Internacional de Automobilismo) e outras entidades relevantes. Isso inclui:</p>
                    <ul>
                        <li><strong>Regulamentos da FIA:</strong> Análise contínua das regras sobre aerodinâmica, peso, potência, segurança do piloto e sistemas eletrônicos para garantir a elegibilidade do VORTEXA em competições.</li>
                        <li><strong>Comunicação HAM (Amador):</strong> As frequências de rádio amador têm restrições legais para uso comercial ou competitivo. Nosso plano é obter licenças especiais para bandas comerciais dedicadas para a comunicação da equipe e telemetria crítica, ou explorar o uso de infraestrutura 5G privada onde disponível, garantindo a legalidade e a robustez da comunicação.</li>
                        <li><strong>Certificações:</strong> Identificação de certificações necessárias (e.g., segurança automotiva, compatibilidade eletromagnética) e planejamento de testes para obtenção.</li>
                    </ul>

                    <h4 id="integration-roadmap">Roteiro de Integração</h4>
                    <p>Nosso roteiro de integração é dividido em fases, permitindo um desenvolvimento iterativo e validação contínua:</p>
                    <ul>
                        <li><strong>MVP (Minimum Viable Product):</strong> Foco na integração dos <a href="#core-systems" class="highlight-term">Core Systems</a>, validando a arquitetura híbrida e os sistemas de segurança básicos.</li>
                        <li><strong>Protótipo:</strong> Inclusão dos <a href="#advanced-systems" class="highlight-term">Advanced Systems</a> como Smart Skin™ e VRSH™, com testes rigorosos em pista.</li>
                        <li><strong>Produção/Competição:</strong> Finalização e otimização de todos os sistemas, incluindo os conceitos validados e mitigados dos <a href="#concept-systems" class="highlight-term">Concept Systems</a>, visando a introdução em ambiente competitivo.</li>
                        <li><strong>Cronograma Detalhado:</strong> Cada fase possui um cronograma realista com marcos de desenvolvimento e integração, e um orçamento estimado por sistema.</li>
                    </ul>

                    <h4 id="risk-assessment">Avaliação de Risco</h4>
                    <p>Uma abordagem proativa à gestão de riscos é fundamental. Identificamos e mitigamos os seguintes:</p>
                    <ul>
                        <li><strong>Viabilidade vs. Conceito:</strong> As disparidades técnicas são tratadas categorizando os sistemas por <a href="#trl" class="highlight-term">TRL</a>. Para <a href="#bci" class="highlight-term">BCI</a> e <a href="#starlink" class="highlight-term">Starlink</a>, a pesquisa e o desenvolvimento focam em mitigar os desafios técnicos e regulatórios, com planos de fallback claros para cada sistema.</li>
                        <li><strong>Integração de Sistemas e Complexidade:</strong> Uma <span class="highlight-term">matriz de dependências e criticidade</span> está sendo desenvolvida para gerenciar a interdependência dos sistemas e evitar sobrecarga de complexidade. Priorizamos os sistemas essenciais e estabelecemos um <span class="highlight-term">plano de contingência</span> com <span class="highlight-term">fallbacks</span> definidos para cada sistema principal, garantindo a operacionalidade e segurança mesmo em caso de falha de um componente.</li>
                        <li><strong>Custos e Orçamento:</strong> Estimativas de custo detalhadas por sistema e fase de desenvolvimento estão sendo elaboradas para garantir a viabilidade financeira do projeto.</li>
                    </ul>
                `
            },
            "press-release": {
                title: "Press Release",
                content: `
                    <h3 id="press-release-specialized">Revistas Especializadas</h3>
                    <p>O VORTEXA HYBRID TECH FRAMEWORK anuncia avanços significativos na integração de sistemas de propulsão híbrida e eletrônica avançada. Nossas parcerias estratégicas (<strong>real: [Nome do Parceiro Real]; conceitual: [Nome do Parceiro Conceitual, se aplicável, com explicação]</strong>) estão impulsionando a pesquisa em materiais compostos leves e sistemas de gerenciamento de energia de próxima geração. Destacamos a inovação do Smart Skin™ e VRSH™, que prometem redefinir a telemetria e o controle dinâmico em ambientes de alta performance.</p>
                    <p>Este framework é um testemunho do compromisso com a excelência em engenharia e a segurança, pavimentando o caminho para uma nova era na mobilidade extrema.</p>

                    <h3 id="press-release-enthusiasts">Entusiastas</h3>
                    <p>Preparem-se para o futuro da velocidade! O VORTEXA HYBRID não é apenas um veículo; é uma experiência! Com sua tecnologia híbrida de tirar o fôlego, o sistema de suspensão inteligente VRSH™ e a inovadora 'pele' de sensores Smart Skin™, você sentirá cada milissegundo de poder e controle. A segurança do piloto é nossa prioridade máxima, com uma cápsula de sobrevivência e sistemas inteligentes. O VORTEXA levará o motorsport a um novo nível de emoção e precisão!</p>

                    <h3 id="press-release-segmented">Público Segmentado</h3>
                    <p>Para investidores e parceiros industriais, o VORTEXA HYBRID TECH FRAMEWORK oferece uma plataforma robusta e escalável, com um claro roteiro de desenvolvimento e estratégias de mitigação de risco. Nosso foco em tecnologias <a href="#trl" class="highlight-term">TRL</a> maduras e em desenvolvimento, combinado com uma rigorosa matriz de conformidade regulatória, posiciona o VORTEXA como um investimento de alto potencial e segurança jurídica. A gestão de propriedade intelectual e o plano de contingência para sistemas críticos garantem a longevidade e o valor do projeto. Estamos abertos a discussões para colaborações estratégicas.</p>
                `
            },
            "glossary": {
                title: "Glossário Técnico",
                content: `
                    <p>Este glossário fornece definições claras e concisas para os termos técnicos e siglas utilizados no VORTEXA HYBRID TECH FRAMEWORK.</p>
                    <div class="glossary-grid">
                        <div class="glossary-item">
                            <h4>BCI (Brain-Computer Interface)</h4>
                            <p>Interface Cérebro-Computador: Tecnologia em fase conceitual (TRL 1-3) no VORTEXA, focada no <strong>monitoramento de dados cognitivos e estados de alerta do piloto, e não no controle ativo do veículo</strong>, para mitigar questões regulatórias e de viabilidade em ambientes de alta vibração.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>FIA (Fédération Internationale de l'Automobile)</h4>
                            <p>Federação Internacional de Automobilismo: Órgão regulador global para o automobilismo. O VORTEXA está em conformidade com as diretrizes e regulamentos da FIA para sistemas de segurança, performance e assistência ao piloto, especialmente no que diz respeito ao uso de novas tecnologias.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>KERS (Kinetic Energy Recovery System)</h4>
                            <p>Sistema de Recuperação de Energia Cinética: Tecnologia que recupera a energia gerada durante a frenagem de um veículo e a armazena (ex: em baterias ou volantes de inércia) para uso posterior, fornecendo um impulso de potência adicional ou melhorando a eficiência. Componente dos Core Systems (TRL 7-9).</p>
                        </div>
                        <div class="glossary-item">
                            <h4>MGU-H (Motor Generator Unit - Heat)</h4>
                            <p>Unidade Geradora de Motor - Calor: Componente do sistema de propulsão híbrida que recupera a energia térmica dos gases de escape do motor e a converte em energia elétrica, que pode ser usada para acionar o turbocompressor ou recarregar as baterias. Componente dos Core Systems (TRL 7-9).</p>
                        </div>
                        <div class="glossary-item">
                            <h4>MVP (Minimum Viable Product)</h4>
                            <p>Produto Mínimo Viável: A primeira versão de um produto que contém apenas as funcionalidades essenciais para ser lançado e testado no mercado, permitindo aprendizado e iteração. Faz parte do nosso Roteiro de Integração.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>Smart Skin™</h4>
                            <p>Tecnologia avançada em estágio de desenvolvimento (TRL 4-6) que integra uma rede de sensores diretamente na superfície do veículo para monitoramento em tempo real de estresse estrutural, temperatura e aerodinâmica. O plano de desenvolvimento inclui especificações para <strong>durabilidade em condições extremas, estimativa de custo e plano de manutenção modular</strong>.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>Starlink™</h4>
                            <p>Serviço de internet via satélite da SpaceX. No VORTEXA, sua aplicação para comunicação crítica em motorsport está sob rigorosa avaliação de latência e confiabilidade (TRL 1-3). O uso principal será para dados não-críticos ou como redundância, com <strong>planos de uso de bandas comerciais licenciadas ou 5G privado para comunicações de missão crítica</strong>.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>TRL (Technology Readiness Level)</h4>
                            <p>Nível de Prontidão Tecnológica: Escala de 1 a 9 usada para avaliar a maturidade de uma tecnologia. TRL 1 (pesquisa básica) a TRL 9 (sistema comprovado em ambiente operacional). Usado para categorizar os sistemas do VORTEXA.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>VRSH™ (Variable Ratio Suspension and Handling)</h4>
                            <p>Sistema de Suspensão e Manuseio de Razão Variável: Tecnologia avançada (TRL 4-6) que permite ajustes dinâmicos na geometria e rigidez da suspensão em tempo real, otimizando a aderência, o manuseio e a estabilidade do veículo em diversas condições de pista.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>5G Privado</h4>
                            <p>Rede 5G dedicada e isolada para uma organização específica, oferecendo segurança, baixa latência e alta largura de banda. Considerado como uma solução potencial para comunicações de missão crítica no VORTEXA, especialmente para mitigar limitações de outras tecnologias.</p>
                        </div>
                    </div>
                `
            },
            "standards": {
                title: "Normas Técnicas",
                content: `
                    <p>O VORTEXA HYBRID TECH FRAMEWORK adere rigorosamente às normas e regulamentações pertinentes para garantir a segurança, performance e legalidade em seu ambiente de operação. Nossa matriz de conformidade regulatória detalha a aderência aos seguintes padrões:</p>
                    <ul>
                        <li><strong>Regulamentos Esportivos da FIA:</strong> Análise e conformidade contínua com os requisitos técnicos e esportivos da Federação Internacional de Automobilismo, incluindo segurança do chassi, especificações de motor, sistemas eletrônicos e assistência ao piloto.</li>
                        <li><strong>Normas de Segurança Automotiva:</strong> Implementação de padrões de segurança passiva (absorção de impacto, integridade estrutural) e ativa (sistemas de freio, controle de tração) conforme as melhores práticas da indústria.</li>
                        <li><strong>Regulamentações de Telecomunicações:</strong> Para a comunicação do veículo, estamos planejando a aquisição de licenças para uso de bandas de frequência comercial dedicadas, garantindo a legalidade e a confiabilidade da transmissão de dados, mitigando as restrições de uso de frequências amadoras (<a href="#communication-ham" class="highlight-term">Comunicação HAM</a>).</li>
                        <li><strong>Padrões de Baterias e Sistemas Híbridos:</strong> Conformidade com normas internacionais para o manuseio, segurança e descarte de baterias de alta voltagem e sistemas de propulsão híbrida.</li>
                    </ul>
                    <p>Um plano de testes e validação extensivo está em vigor para garantir que todos os componentes e sistemas atendam ou excedam esses requisitos normativos.</p>
                `
            },
            "conformity": {
                title: "Conformidade",
                content: `
                    <p>A conformidade do projeto VORTEXA HYBRID com as leis, regulamentos e padrões da indústria é um pilar central do nosso desenvolvimento. Nossas estratégias incluem:</p>
                    <ul>
                        <li><strong>Certificações Necessárias:</strong> Planejamento e execução para obtenção de todas as certificações mandatórias em automobilismo (FIA), segurança veicular e telecomunicações, assegurando a permissão para operação em ambientes competitivos e públicos.</li>
                        <li><strong>Propriedade Intelectual:</strong> Uma estratégia robusta de proteção da propriedade intelectual está sendo implementada para todas as tecnologias proprietárias desenvolvidas (Smart Skin™, VRSH™, etc.), incluindo patentes, segredos comerciais e acordos de confidencialidade com parceiros.</li>
                        <li><strong>Auditorias e Revisões:</strong> Condução regular de auditorias internas e externas para garantir a aderência contínua aos padrões de qualidade e segurança.</li>
                        <li><strong>Responsabilidade e Ética:</strong> Todos os sistemas, especialmente aqueles que envolvem <a href="#bci" class="highlight-term">BCI</a> e <a href="#ai" class="highlight-term">IA</a>, são desenvolvidos com um forte compromisso com a ética e a responsabilidade, garantindo que não violem princípios de assistência ao piloto e mantenham a integridade da competição.</li>
                    </ul>
                    <p>Nosso objetivo é não apenas atender, mas superar as expectativas de conformidade, solidificando a confiança no VORTEXA HYBRID TECH FRAMEWORK.</p>
                `
            }
            // Outras seções podem ser adicionadas aqui
        },
        footerText: "&copy; 2025 VORTEXA HYBRID TECH FRAMEWORK. Todos os direitos reservados."
    },
    en: {
        title: "VORTEXA HYBRID TECH FRAMEWORK",
        sidebar: {
            title: "Summary",
            sections: [
                {
                    id: "introduction",
                    title: "Introduction",
                    subsections: []
                },
                {
                    id: "executive-summary",
                    title: "Executive Summary",
                    subsections: [
                        { id: "executive-summary-general", title: "General Public" },
                        { id: "executive-summary-executives", title: "Executives" }
                    ]
                },
                {
                    id: "technical-data",
                    title: "Technical Data",
                    subsections: [
                        { id: "technical-data-engineering", title: "Engineering" },
                        { id: "core-systems", title: "Core Systems (TRL 7-9)" },
                        { id: "advanced-systems", title: "Advanced Systems (TRL 4-6)" },
                        { id: "concept-systems", title: "Concept Systems (TRL 1-3)" },
                        { id: "regulatory-compliance-matrix", title: "Regulatory Compliance Matrix" },
                        { id: "integration-roadmap", title: "Integration Roadmap" },
                        { id: "risk-assessment", title: "Risk Assessment" }
                    ]
                },
                {
                    id: "press-release",
                    title: "Press Release",
                    subsections: [
                        { id: "press-release-specialized", title: "Specialized Magazines" },
                        { id: "press-release-enthusiasts", title: "Enthusiasts" },
                        { id: "press-release-segmented", title: "Segmented Public" }
                    ]
                },
                {
                    id: "glossary",
                    title: "Technical Glossary",
                    subsections: []
                },
                {
                    id: "standards",
                    title: "Technical Standards",
                    subsections: []
                },
                {
                    id: "conformity",
                    title: "Conformity",
                    subsections: []
                }
            ]
        },
        sections: {
            "introduction": {
                title: "Introduction",
                content: `
                    <p>The <strong>VORTEXA HYBRID TECH FRAMEWORK</strong> represents a quantum leap in extreme mobility engineering, combining cutting-edge technologies to create a platform that redefines the limits of performance, safety, and interaction. This document serves as the detailed "Bible" of the framework, presenting its vision, components, and rigorous development methodology.</p>
                    <p>Conceived for high-demand environments such as motorsport, VORTEXA integrates advanced propulsion systems, intelligent electronics, and a holistic approach to driver safety, culminating in an unprecedented driving experience. Our commitment is to responsible innovation, ensuring that every technological advance is critically evaluated in terms of feasibility and regulatory compliance.</p>
                    <p>This framework is not just a project; it is the vision of a future where technology elevates human capability to new heights, always with a focus on safety and engineering excellence. We present here the solutions to the inherent challenges at the technological forefront, reinforcing VORTEXA's robustness and adaptability.</p>
                `
            },
            "executive-summary": {
                title: "Executive Summary",
                content: `
                    <h3 id="executive-summary-general">General Public</h3>
                    <p>VORTEXA HYBRID is a revolutionary platform that integrates the latest innovations in propulsion, materials, and artificial intelligence to create extreme mobility vehicles with superior performance and enhanced safety. Imagine the perfect fusion of power, control, and an intuitive driving experience, all operating within a robust and interconnected technological ecosystem. Our framework is designed to raise the standard of automotive engineering, offering a glimpse into the future of motorsport and high-performance applications.</p>
                    <p>We emphasize intelligent system integration and redundancy as pillars, ensuring exceptional reliability and performance in any scenario.</p>

                    <h3 id="executive-summary-executives">Executives</h3>
                    <p>The VORTEXA HYBRID TECH FRAMEWORK represents a unique strategic opportunity with substantial market potential in high-performance and premium automotive sectors. Our value proposition is based on delivering a scalable, robust system with multiple redundancy points, minimizing operational risks and maximizing return on investment.</p>
                    <p>VORTEXA's modular architecture facilitates adaptation to various applications, from elite motorsport to specialized vehicles. The inclusion of <a href="#risk-assessment" class="highlight-term">contingency plans</a> and <a href="#regulatory-compliance-matrix" class="highlight-term">regulatory compliance matrices</a> ensures agile and secure development, aligned with industry and market demands.</p>
                    <p>Investing in VORTEXA is investing in the forefront of engineering and in creating a legacy of innovation and safety.</p>
                `
            },
            "technical-data": {
                title: "Technical Data",
                content: `
                    <h3 id="technical-data-engineering">Engineering</h3>
                    <p>This section delves into the technical details of VORTEXA HYBRID, serving as a reference for engineers and specialists. We address system architecture, material selection, and integration strategies, always focusing on performance, safety, and feasibility. The document structure follows the Technology Readiness Levels (<a href="#trl" class="highlight-term">TRL</a>) for each component, ensuring clarity on the development status.</p>

                    <h4 id="core-systems">Core Systems (TRL 7-9)</h4>
                    <p>These are the mature and proven systems that form the backbone of VORTEXA. They include the optimized hybrid propulsion unit, the carbon fiber monocoque chassis with calculated deformation zones, high-performance regenerative braking systems, and the energy management system (EMS) that optimizes power delivery and recovery. These components are designed for maximum efficiency and durability in extreme conditions, with extensive testing already conducted in simulated environments and initial prototypes.</p>
                    <ul>
                        <li><strong>Hybrid Propulsion Unit:</strong> Combination of high-revving internal combustion engine and electric motors, with kinetic energy recovery (<a href="#kers" class="highlight-term">KERS</a>) and thermal energy recovery (<a href="#mgu-h" class="highlight-term">MGU-H</a>). Target weight: X kg, Combined power: Y hp.</li>
                        <li><strong>Monocoque Chassis:</strong> Aerospace-grade carbon fiber construction, optimized for torsional rigidity and impact absorption.</li>
                        <li><strong>Braking System:</strong> Carbon-ceramic with multi-piston calipers, integrated with the regenerative system.</li>
                        <li><strong>EMS (Energy Management System):</strong> Dedicated software and hardware for energy flow control, ensuring performance and efficiency optimization.</li>
                    </ul>

                    <h4 id="advanced-systems">Advanced Systems (TRL 4-6)</h4>
                    <p>Represent technologies with validation in a relevant environment, but still requiring development and testing for full integration into the final system. Key highlights include:</p>
                    <ul>
                        <li><strong>Smart Skin™:</strong> An advanced network of sensors integrated into the vehicle's surface, real-time monitoring structural stress, temperature, and aerodynamics. Its development aims for high durability in extreme conditions (impacts, abrasion, thermal variations), with projected implementation costs of $X per m² and a modular maintenance plan to facilitate repairs. Data collection is crucial for real-time optimization and post-event analysis.</li>
                        <li><strong>VRSH™ (Variable Ratio Suspension and Handling):</strong> Active suspension system that dynamically adjusts geometry and stiffness in response to track conditions and driver commands, optimizing grip and maneuverability. Prototypes have already demonstrated significant gains in controlled tests.</li>
                        <li><strong>Advanced Telemetry and Predictive Analytics:</strong> Tools that use AI algorithms to predict component failures, optimize race strategies, and provide real-time insights for the team and driver.</li>
                    </ul>

                    <h4 id="concept-systems">Concept Systems (TRL 1-3)</h4>
                    <p>These are innovative ideas in the initial research phase, with transformative potential, but requiring fundamental validation. We address challenges and the path to viability:</p>
                    <ul>
                        <li><strong>BCI (Brain-Computer Interface) in Motorsport:</strong> Considered as a <span class="highlight-term">system for monitoring cognitive performance and driver alertness states</span>, and not for active vehicle control. The application of BCI in high-vibration and instantaneous response environments (like motorsport) presents significant challenges in signal stability and interference. Our initial research focuses on robust noise filters and signal processing algorithms. The primary goal is to provide real-time data on driver fatigue and concentration, without violating driver assistance regulations.</li>
                        <li><strong>Starlink™ for Critical Communication:</strong> The feasibility of using Starlink for real-time critical communication in motorsport (<span class="highlight-term">low latency and high reliability</span>) is under rigorous evaluation. While promising for non-critical data or team communications, the inherent latency of the satellite network may be unsuitable for mission-critical system control. We are exploring complementary local network solutions (<a href="#5g" class="highlight-term">Private 5G</a>) or licensed frequencies to ensure redundancy and ultra-low latency for critical systems. For general telemetry communication, Starlink remains a strategic option.</li>
                        <li><strong>Self-Healing Materials:</strong> Research into polymers and composites that can autonomously repair minor structural damage, increasing component durability and safety.</li>
                    </ul>

                    <h4 id="regulatory-compliance-matrix">Regulatory Compliance Matrix</h4>
                    <p>Compliance with sports and technical regulations is a cornerstone of VORTEXA. We are developing a detailed matrix that maps each component and functionality to <a href="#fia" class="highlight-term">FIA</a> (Fédération Internationale de l'Automobile) and other relevant entity regulations. This includes:</p>
                    <ul>
                        <li><strong>FIA Regulations:</strong> Continuous analysis of rules on aerodynamics, weight, power, driver safety, and electronic systems to ensure VORTEXA's eligibility in competitions.</li>
                        <li><strong>HAM Communication (Amateur):</strong> Amateur radio frequencies have legal restrictions for commercial or competitive use. Our plan is to obtain special licenses for dedicated commercial bands for team communication and critical telemetry, or explore the use of private 5G infrastructure where available, ensuring communication legality and robustness.</li>
                        <li><strong>Certifications:</strong> Identification of necessary certifications (e.g., automotive safety, electromagnetic compatibility) and planning of tests for obtainment.</li>
                    </ul>

                    <h4 id="integration-roadmap">Integration Roadmap</h4>
                    <p>Our integration roadmap is divided into phases, allowing for iterative development and continuous validation:</p>
                    <ul>
                        <li><strong>MVP (Minimum Viable Product):</strong> Focus on integrating <a href="#core-systems" class="highlight-term">Core Systems</a>, validating the hybrid architecture and basic safety systems.</li>
                        <li><strong>Prototype:</strong> Inclusion of <a href="#advanced-systems" class="highlight-term">Advanced Systems</a> like Smart Skin™ and VRSH™, with rigorous track testing.</li>
                        <li><strong>Production/Competition:</strong> Finalization and optimization of all systems, including validated and mitigated concepts from <a href="#concept-systems" class="highlight-term">Concept Systems</a>, aiming for introduction in a competitive environment.</li>
                        <li><strong>Detailed Schedule:</strong> Each phase has a realistic schedule with development and integration milestones, and an estimated budget per system.</li>
                    </ul>

                    <h4 id="risk-assessment">Risk Assessment</h4>
                    <p>A proactive approach to risk management is fundamental. We identify and mitigate the following:</p>
                    <ul>
                        <li><strong>Feasibility vs. Concept:</strong> Technical disparities are addressed by categorizing systems by <a href="#trl" class="highlight-term">TRL</a>. For <a href="#bci" class="highlight-term">BCI</a> and <a href="#starlink" class="highlight-term">Starlink</a>, research and development focus on mitigating technical and regulatory challenges, with clear fallback plans for each system.</li>
                        <li><strong>System Integration and Complexity:</strong> A <span class="highlight-term">dependency and criticality matrix</span> is being developed to manage system interdependence and avoid complexity overload. We prioritize essential systems and establish a <span class="highlight-term">contingency plan</span> with defined <span class="highlight-term">fallbacks</span> for each main system, ensuring operationality and safety even in case of component failure.</li>
                        <li><strong>Costs and Budget:</strong> Detailed cost estimates per system and development phase are being prepared to ensure the financial viability of the project.</li>
                    </ul>
                `
            },
            "press-release": {
                title: "Press Release",
                content: `
                    <h3 id="press-release-specialized">Specialized Magazines</h3>
                    <p>The VORTEXA HYBRID TECH FRAMEWORK announces significant advancements in the integration of hybrid propulsion systems and advanced electronics. Our strategic partnerships (<strong>real: [Real Partner Name]; conceptual: [Conceptual Partner Name, if applicable, with explanation]</strong>) are driving research in lightweight composite materials and next-generation energy management systems. We highlight the innovation of Smart Skin™ and VRSH™, which promise to redefine telemetry and dynamic control in high-performance environments.</p>
                    <p>This framework is a testament to the commitment to engineering excellence and safety, paving the way for a new era in extreme mobility.</p>

                    <h3 id="press-release-enthusiasts">Enthusiasts</h3>
                    <p>Get ready for the future of speed! VORTEXA HYBRID is not just a vehicle; it's an experience! With its breathtaking hybrid technology, the intelligent VRSH™ suspension system, and the innovative Smart Skin™ sensor 'skin', you'll feel every millisecond of power and control. Driver safety is our top priority, with a survival capsule and intelligent systems. VORTEXA will take motorsport to a new level of excitement and precision!</p>

                    <h3 id="press-release-segmented">Segmented Public</h3>
                    <p>For investors and industrial partners, the VORTEXA HYBRID TECH FRAMEWORK offers a robust and scalable platform, with a clear development roadmap and risk mitigation strategies. Our focus on mature and developing <a href="#trl" class="highlight-term">TRL</a> technologies, combined with a rigorous regulatory compliance matrix, positions VORTEXA as a high-potential and legally secure investment. Intellectual property management and the contingency plan for critical systems ensure the project's longevity and value. We are open to discussions for strategic collaborations.</p>
                `
            },
            "glossary": {
                title: "Technical Glossary",
                content: `
                    <p>This glossary provides clear and concise definitions for the technical terms and acronyms used in the VORTEXA HYBRID TECH FRAMEWORK.</p>
                    <div class="glossary-grid">
                        <div class="glossary-item">
                            <h4>BCI (Brain-Computer Interface)</h4>
                            <p>Brain-Computer Interface: Technology in conceptual phase (TRL 1-3) in VORTEXA, focused on <strong>monitoring cognitive data and driver alertness states, not active vehicle control</strong>, to mitigate regulatory and feasibility issues in high-vibration environments.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>FIA (Fédération Internationale de l'Automobile)</h4>
                            <p>International Automobile Federation: Global governing body for motorsport. VORTEXA complies with FIA guidelines and regulations for safety systems, performance, and driver assistance, especially concerning the use of new technologies.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>KERS (Kinetic Energy Recovery System)</h4>
                            <p>Kinetic Energy Recovery System: Technology that recovers energy generated during vehicle braking and stores it (e.g., in batteries or flywheels) for later use, providing an additional power boost or improving efficiency. A component of Core Systems (TRL 7-9).</p>
                        </div>
                        <div class="glossary-item">
                            <h4>MGU-H (Motor Generator Unit - Heat)</h4>
                            <p>Motor Generator Unit - Heat: Component of the hybrid propulsion system that recovers thermal energy from engine exhaust gases and converts it into electrical energy, which can be used to power the turbocharger or recharge batteries. A component of Core Systems (TRL 7-9).</p>
                        </div>
                        <div class="glossary-item">
                            <h4>MVP (Minimum Viable Product)</h4>
                            <p>Minimum Viable Product: The first version of a product that contains only the essential functionalities to be launched and tested in the market, allowing for learning and iteration. Part of our Integration Roadmap.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>Smart Skin™</h4>
                            <p>Advanced technology in development (TRL 4-6) that integrates a network of sensors directly into the vehicle's surface for real-time monitoring of structural stress, temperature, and aerodynamics. The development plan includes specifications for <strong>durability in extreme conditions, cost estimation, and a modular maintenance plan</strong>.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>Starlink™</h4>
                            <p>SpaceX's satellite internet service. In VORTEXA, its application for critical communication in motorsport is under rigorous evaluation for latency and reliability (TRL 1-3). The primary use will be for non-critical data or as redundancy, with <strong>plans to use licensed commercial bands or private 5G for mission-critical communications</strong>.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>TRL (Technology Readiness Level)</h4>
                            <p>Technology Readiness Level: A scale from 1 to 9 used to assess the maturity of a technology. TRL 1 (basic research) to TRL 9 (system proven in operational environment). Used to categorize VORTEXA systems.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>VRSH™ (Variable Ratio Suspension and Handling)</h4>
                            <p>Variable Ratio Suspension and Handling System: Advanced technology (TRL 4-6) that allows dynamic adjustments to suspension geometry and stiffness in real-time, optimizing grip, handling, and vehicle stability in various track conditions.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>Private 5G</h4>
                            <p>A dedicated and isolated 5G network for a specific organization, offering security, low latency, and high bandwidth. Considered as a potential solution for mission-critical communications in VORTEXA, especially to mitigate limitations of other technologies.</p>
                        </div>
                    </div>
                `
            },
            "standards": {
                title: "Technical Standards",
                content: `
                    <p>The VORTEXA HYBRID TECH FRAMEWORK rigorously adheres to pertinent standards and regulations to ensure safety, performance, and legality in its operating environment. Our regulatory compliance matrix details adherence to the following standards:</p>
                    <ul>
                        <li><strong>FIA Sporting Regulations:</strong> Continuous analysis and compliance with the technical and sporting requirements of the Fédération Internationale de l'Automobilisme, including chassis safety, engine specifications, electronic systems, and driver assistance.</li>
                        <li><strong>Automotive Safety Standards:</strong> Implementation of passive safety standards (impact absorption, structural integrity) and active safety standards (braking systems, traction control) according to industry best practices.</li>
                        <li><strong>Telecommunications Regulations:</strong> For vehicle communication, we are planning to acquire licenses for the use of dedicated commercial frequency bands, ensuring the legality and reliability of data transmission, mitigating restrictions on amateur frequency use (<a href="#communication-ham" class="highlight-term">HAM Communication</a>).</li>
                        <li><strong>Battery and Hybrid Systems Standards:</strong> Compliance with international standards for handling, safety, and disposal of high-voltage batteries and hybrid propulsion systems.</li>
                    </ul>
                    <p>An extensive testing and validation plan is in place to ensure all components and systems meet or exceed these normative requirements.</p>
                `
            },
            "conformity": {
                title: "Conformity",
                content: `
                    <p>The VORTEXA HYBRID project's compliance with laws, regulations, and industry standards is a central pillar of our development. Our strategies include:</p>
                    <ul>
                        <li><strong>Required Certifications:</strong> Planning and execution for obtaining all mandatory certifications in motorsport (FIA), vehicle safety, and telecommunications, ensuring permission for operation in competitive and public environments.</li>
                        <li><strong>Intellectual Property:</strong> A robust intellectual property protection strategy is being implemented for all proprietary technologies developed (Smart Skin™, VRSH™, etc.), including patents, trade secrets, and non-disclosure agreements with partners.</li>
                        <li><strong>Audits and Reviews:</strong> Regular conduct of internal and external audits to ensure continuous adherence to quality and safety standards.</li>
                        <li><strong>Responsibility and Ethics:</strong> All systems, especially those involving <a href="#bci" class="highlight-term">BCI</a> and <a href="#ai" class="highlight-term">AI</a>, are developed with a strong commitment to ethics and responsibility, ensuring they do not violate driver assistance principles and maintain competition integrity.</li>
                    </ul>
                    <p>Our goal is not just to meet, but to exceed compliance expectations, solidifying trust in the VORTEXA HYBRID TECH FRAMEWORK.</p>
                `
            }
        },
        footerText: "&copy; 2025 VORTEXA HYBRID TECH FRAMEWORK. All rights reserved."
    },
    it: {
        title: "VORTEXA HYBRID TECH FRAMEWORK",
        sidebar: {
            title: "Sommario",
            sections: [
                {
                    id: "introduction",
                    title: "Introduzione",
                    subsections: []
                },
                {
                    id: "executive-summary",
                    title: "Riepilogo Esecutivo",
                    subsections: [
                        { id: "executive-summary-general", title: "Pubblico Generale" },
                        { id: "executive-summary-executives", title: "Dirigenti" }
                    ]
                },
                {
                    id: "technical-data",
                    title: "Dati Tecnici",
                    subsections: [
                        { id: "technical-data-engineering", title: "Ingegneria" },
                        { id: "core-systems", title: "Sistemi Core (TRL 7-9)" },
                        { id: "advanced-systems", title: "Sistemi Avanzati (TRL 4-6)" },
                        { id: "concept-systems", title: "Sistemi Concettuali (TRL 1-3)" },
                        { id: "regulatory-compliance-matrix", title: "Matrice di Conformità Normativa" },
                        { id: "integration-roadmap", title: "Roadmap di Integrazione" },
                        { id: "risk-assessment", title: "Valutazione del Rischio" }
                    ]
                },
                {
                    id: "press-release",
                    title: "Comunicato Stampa",
                    subsections: [
                        { id: "press-release-specialized", title: "Riviste Specializzate" },
                        { id: "press-release-enthusiasts", title: "Appassionati" },
                        { id: "press-release-segmented", title: "Pubblico Segmentato" }
                    ]
                },
                {
                    id: "glossary",
                    title: "Glossario Tecnico",
                    subsections: []
                },
                {
                    id: "standards",
                    title: "Norme Tecniche",
                    subsections: []
                },
                {
                    id: "conformity",
                    title: "Conformità",
                    subsections: []
                }
            ]
        },
        sections: {
            "introduction": {
                title: "Introduzione",
                content: `
                    <p>Il <strong>VORTEXA HYBRID TECH FRAMEWORK</strong> rappresenta un salto quantico nell'ingegneria della mobilità estrema, combinando tecnologie all'avanguardia per creare una piattaforma che ridefinisce i limiti di prestazioni, sicurezza e interazione. Questo documento serve come la "Bibbia" dettagliata del framework, presentando la sua visione, i componenti e la rigorosa metodologia di sviluppo.</p>
                    <p>Concepito per ambienti ad alta richiesta come il motorsport, VORTEXA integra sistemi di propulsione avanzati, elettronica intelligente e un approccio olistico alla sicurezza del pilota, culminando in un'esperienza di guida senza precedenti. Il nostro impegno è verso l'innovazione responsabile, garantendo che ogni progresso tecnologico sia valutato criticamente in termini di fattibilità e conformità normativa.</p>
                    <p>Questo framework non è solo un progetto; è la visione di un futuro in cui la tecnologia eleva la capacità umana a nuove vette, sempre con un focus sulla sicurezza e sull'eccellenza ingegneristica. Presentiamo qui le soluzioni alle sfide inerenti all'avanguardia tecnologica, rafforzando la robustezza e l'adattabilità di VORTEXA.</p>
                `
            },
            "executive-summary": {
                title: "Riepilogo Esecutivo",
                content: `
                    <h3 id="executive-summary-general">Pubblico Generale</h3>
                    <p>VORTEXA HYBRID è una piattaforma rivoluzionaria che integra le ultime innovazioni in propulsione, materiali e intelligenza artificiale per creare veicoli a mobilità estrema con prestazioni superiori e sicurezza migliorata. Immagina la fusione perfetta tra potenza, controllo e un'esperienza di guida intuitiva, il tutto operante all'interno di un ecosistema tecnologico robusto e interconnesso. Il nostro framework è progettato per elevare lo standard dell'ingegneria automobilistica, offrendo uno sguardo al futuro del motorsport e delle applicazioni ad alte prestazioni.</p>
                    <p>Sottolineiamo l'integrazione intelligente dei sistemi e la ridondanza come pilastri, garantendo affidabilità e prestazioni eccezionali in qualsiasi scenario.</p>

                    <h3 id="executive-summary-executives">Dirigenti</h3>
                    <p>Il VORTEXA HYBRID TECH FRAMEWORK rappresenta un'opportunità strategica unica con un notevole potenziale di mercato nei settori delle alte prestazioni e dell'automotive premium. La nostra proposta di valore si basa sulla fornitura di un sistema scalabile, robusto e con molteplici punti di ridondanza, minimizzando i rischi operativi e massimizzando il ritorno sull'investimento.</p>
                    <p>L'architettura modulare di VORTEXA facilita l'adattamento a varie applicazioni, dal motorsport d'élite ai veicoli specializzati. L'inclusione di <a href="#risk-assessment" class="highlight-term">piani di contingenza</a> e <a href="#regulatory-compliance-matrix" class="highlight-term">matrici di conformità normativa</a> assicura uno sviluppo agile e sicuro, allineato con le richieste dell'industria e del mercato.</p>
                    <p>Investire in VORTEXA significa investire all'avanguardia dell'ingegneria e nella creazione di un'eredità di innovazione e sicurezza.</p>
                `
            },
            "technical-data": {
                title: "Dati Tecnici",
                content: `
                    <h3 id="technical-data-engineering">Ingegneria</h3>
                    <p>Questa sezione approfondisce i dettagli tecnici di VORTEXA HYBRID, servendo come riferimento per ingegneri e specialisti. Affrontiamo l'architettura del sistema, la selezione dei materiali e le strategie di integrazione, concentrandoci sempre su prestazioni, sicurezza e fattibilità. La struttura del documento segue i Livelli di Maturità Tecnologica (<a href="#trl" class="highlight-term">TRL</a>) per ogni componente, garantendo chiarezza sullo stato di sviluppo.</p>

                    <h4 id="core-systems">Sistemi Core (TRL 7-9)</h4>
                    <p>Sono i sistemi maturi e collaudati che costituiscono la spina dorsale di VORTEXA. Includono l'unità di propulsione ibrida ottimizzata, il telaio monoscocca in fibra di carbonio con zone di deformazione calcolate, i sistemi di frenata rigenerativa ad alte prestazioni e il sistema di gestione dell'energia (EMS) che ottimizza l'erogazione di potenza e il recupero. Questi componenti sono progettati per la massima efficienza e durata in condizioni estreme, con test estesi già condotti in ambienti simulati e prototipi iniziali.</p>
                    <ul>
                        <li><strong>Unità di Propulsione Ibrida:</strong> Combinazione di motore a combustione interna ad alti giri e motori elettrici, con recupero di energia cinetica (<a href="#kers" class="highlight-term">KERS</a>) e recupero di energia termica (<a href="#mgu-h" class="highlight-term">MGU-H</a>). Peso target: X kg, Potenza combinata: Y hp.</li>
                        <li><strong>Telaio Monoscocca:</strong> Costruzione in fibra di carbonio di grado aerospaziale, ottimizzata per la rigidità torsionale e l'assorbimento degli urti.</li>
                        <li><strong>Sistema Frenante:</strong> Carbonio-ceramico con pinze a più pistoncini, integrato con il sistema rigenerativo.</li>
                        <li><strong>EMS (Energy Management System):</strong> Software e hardware dedicati per il controllo del flusso di energia, garantendo l'ottimizzazione delle prestazioni e dell'efficienza.</li>
                    </ul>

                    <h4 id="advanced-systems">Sistemi Avanzati (TRL 4-6)</h4>
                    <p>Rappresentano tecnologie con convalida in un ambiente rilevante, ma che richiedono ancora sviluppo e test per la piena integrazione nel sistema finale. I punti salienti includono:</p>
                    <ul>
                        <li><strong>Smart Skin™:</strong> Una rete avanzata di sensori integrati nella superficie del veicolo, che monitora in tempo reale lo stress strutturale, la temperatura e l'aerodinamica. Il suo sviluppo mira a un'elevata durabilità in condizioni estreme (impatti, abrasione, variazioni termiche), con costi di implementazione previsti di $X per m² e un piano di manutenzione modulare per facilitare le riparazioni. La raccolta dati è fondamentale per l'ottimizzazione in tempo reale e l'analisi post-evento.</li>
                        <li><strong>VRSH™ (Variable Ratio Suspension and Handling):</strong> Sistema di sospensione attiva che regola dinamicamente la geometria e la rigidità in risposta alle condizioni della pista e ai comandi del pilota, ottimizzando l'aderenza e la manovrabilità. I prototipi hanno già dimostrato guadagni significativi in test controllati.</li>
                        <li><strong>Telemetria Avanzata e Analisi Predittiva:</strong> Strumenti che utilizzano algoritmi di <a href="#ai" class="highlight-term">IA</a> per prevedere guasti ai componenti, ottimizzare le strategie di gara e fornire approfondimenti in tempo reale al team e al pilota.</li>
                    </ul>

                    <h4 id="concept-systems">Sistemi Concettuali (TRL 1-3)</h4>
                    <p>Sono idee innovative in fase iniziale di ricerca, con potenziale trasformativo, ma che richiedono una convalida fondamentale. Affrontiamo le sfide e il percorso verso la fattibilità:</p>
                    <ul>
                        <li><strong>BCI (Brain-Computer Interface) nel Motorsport:</strong> Considerato come un <span class="highlight-term">sistema per il monitoraggio delle prestazioni cognitive e degli stati di allerta del pilota</span>, e non per il controllo attivo del veicolo. L'applicazione di BCI in ambienti ad alta vibrazione e risposta istantanea (come il motorsport) presenta sfide significative in termini di stabilità del segnale e interferenze. Le nostre ricerche iniziali si concentrano su filtri anti-rumore e algoritmi di elaborazione del segnale robusti. L'obiettivo principale è fornire dati in tempo reale sulla fatica e sulla concentrazione del pilota, senza violare i regolamenti sull'assistenza al pilota.</li>
                        <li><strong>Starlink™ per la Comunicazione Critica:</strong> La fattibilità dell'utilizzo di Starlink per la comunicazione critica in tempo reale nel motorsport (<span class="highlight-term">bassa latenza e alta affidabilità</span>) è oggetto di rigorosa valutazione. Sebbene promettente per dati non critici o comunicazioni del team, la latenza intrinseca della rete satellitare potrebbe essere inadatta per il controllo di sistemi mission-critical. Stiamo esplorando soluzioni di rete locale complementari (<a href="#5g" class="highlight-term">5G Privato</a>) o frequenze licenziate per garantire ridondanza e latenza ultra-bassa per i sistemi critici. Per la comunicazione telemetrica generale, Starlink rimane un'opzione strategica.</li>
                        <li><strong>Materiali Autorigeneranti:</strong> Ricerca su polimeri e compositi in grado di riparare autonomamente piccoli danni strutturali, aumentando la durata e la sicurezza dei componenti.</li>
                    </ul>

                    <h4 id="regulatory-compliance-matrix">Matrice di Conformità Normativa</h4>
                    <p>La conformità ai regolamenti sportivi e tecnici è una pietra miliare di VORTEXA. Stiamo sviluppando una matrice dettagliata che mappa ogni componente e funzionalità ai regolamenti della <a href="#fia" class="highlight-term">FIA</a> (Fédération Internationale de l'Automobile) e di altre entità pertinenti. Ciò include:</p>
                    <ul>
                        <li><strong>Regolamenti FIA:</strong> Analisi continua delle regole su aerodinamica, peso, potenza, sicurezza del pilota e sistemi elettronici per garantire l'idoneità di VORTEXA nelle competizioni.</li>
                        <li><strong>Comunicazione HAM (Amatoriale):</strong> Le frequenze radioamatoriali hanno restrizioni legali per uso commerciale o competitivo. Il nostro piano è di ottenere licenze speciali per bande commerciali dedicate alla comunicazione del team e alla telemetria critica, o di esplorare l'uso dell'infrastruttura 5G privata dove disponibile, garantendo la legalità e la robustezza della comunicazione.</li>
                        <li><strong>Certificazioni:</strong> Identificazione delle certificazioni necessarie (es. sicurezza automobilistica, compatibilità elettromagnetica) e pianificazione dei test per l'ottenimento.</li>
                    </ul>

                    <h4 id="integration-roadmap">Roadmap di Integrazione</h4>
                    <p>La nostra roadmap di integrazione è divisa in fasi, consentendo uno sviluppo iterativo e una convalida continua:</p>
                    <ul>
                        <li><strong>MVP (Minimum Viable Product):</strong> Focus sull'integrazione dei <a href="#core-systems" class="highlight-term">Sistemi Core</a>, convalidando l'architettura ibrida e i sistemi di sicurezza di base.</li>
                        <li><strong>Prototipo:</strong> Inclusione dei <a href="#advanced-systems" class="highlight-term">Sistemi Avanzati</a> come Smart Skin™ e VRSH™, con rigorosi test in pista.</li>
                        <li><strong>Produzione/Competizione:</strong> Finalizzazione e ottimizzazione di tutti i sistemi, inclusi i concetti convalidati e mitigati dai <a href="#concept-systems" class="highlight-term">Sistemi Concettuali</a>, mirando all'introduzione in un ambiente competitivo.</li>
                        <li><strong>Cronogramma Dettagliato:</strong> Ogni fase ha un cronogramma realistico con pietre miliari di sviluppo e integrazione, e un budget stimato per sistema.</li>
                    </ul>

                    <h4 id="risk-assessment">Valutazione del Rischio</h4>
                    <p>Un approccio proattivo alla gestione del rischio è fondamentale. Abbiamo identificato e mitigato quanto segue:</p>
                    <ul>
                        <li><strong>Fattibilità vs. Concetto:</strong> Le disparità tecniche vengono affrontate categorizzando i sistemi per <a href="#trl" class="highlight-term">TRL</a>. Per <a href="#bci" class="highlight-term">BCI</a> e <a href="#starlink" class="highlight-term">Starlink</a>, la ricerca e lo sviluppo si concentrano sulla mitigazione delle sfide tecniche e normative, con piani di fallback chiari per ogni sistema.</li>
                        <li><strong>Integrazione e Complessità del Sistema:</strong> Viene sviluppata una <span class="highlight-term">matrice di dipendenza e criticità</span> per gestire l'interdipendenza dei sistemi ed evitare il sovraccarico di complessità. Diamo priorità ai sistemi essenziali e stabiliamo un <span class="highlight-term">piano di contingenza</span> con <span class="highlight-term">fallback</span> definiti per ogni sistema principale, garantendo operatività e sicurezza anche in caso di guasto di un componente.</li>
                        <li><strong>Costi e Budget:</strong> Stime dettagliate dei costi per sistema e fase di sviluppo vengono elaborate per garantire la fattibilità finanziaria del progetto.</li>
                    </ul>
                `
            },
            "press-release": {
                title: "Comunicato Stampa",
                content: `
                    <h3 id="press-release-specialized">Riviste Specializzate</h3>
                    <p>Il VORTEXA HYBRID TECH FRAMEWORK annuncia progressi significativi nell'integrazione di sistemi di propulsione ibrida ed elettronica avanzata. Le nostre partnership strategiche (<strong>reale: [Nome Partner Reale]; concettuale: [Nome Partner Concettuale, se applicabile, con spiegazione]</strong>) stanno guidando la ricerca in materiali compositi leggeri e sistemi di gestione dell'energia di prossima generazione. Sottolineiamo l'innovazione di Smart Skin™ e VRSH™, che promettono di ridefinire la telemetria e il controllo dinamico in ambienti ad alte prestazioni.</p>
                    <p>Questo framework è una testimonianza dell'impegno verso l'eccellenza ingegneristica e la sicurezza, aprendo la strada a una nuova era nella mobilità estrema.</p>

                    <h3 id="press-release-enthusiasts">Appassionati</h3>
                    <p>Preparatevi al futuro della velocità! VORTEXA HYBRID non è solo un veicolo; è un'esperienza! Con la sua tecnologia ibrida mozzafiato, il sistema di sospensione intelligente VRSH™ e l'innovativa "pelle" di sensori Smart Skin™, sentirete ogni millisecondo di potenza e controllo. La sicurezza del pilota è la nostra massima priorità, con una capsula di sopravvivenza e sistemi intelligenti. VORTEXA porterà il motorsport a un nuovo livello di emozione e precisione!</p>

                    <h3 id="press-release-segmented">Pubblico Segmentato</h3>
                    <p>Per gli investitori e i partner industriali, il VORTEXA HYBRID TECH FRAMEWORK offre una piattaforma robusta e scalabile, con una chiara roadmap di sviluppo e strategie di mitigazione del rischio. Il nostro focus sulle tecnologie <a href="#trl" class="highlight-term">TRL</a> mature e in sviluppo, combinato con una rigorosa matrice di conformità normativa, posiziona VORTEXA come un investimento ad alto potenziale e sicurezza legale. La gestione della proprietà intellettuale e il piano di contingenza per i sistemi critici garantiscono la longevità e il valore del progetto. Siamo aperti a discussioni per collaborazioni strategiche.</p>
                `
            },
            "glossary": {
                title: "Glossario Tecnico",
                content: `
                    <p>Questo glossario fornisce definizioni chiare e concise per i termini tecnici e gli acronimi utilizzati nel VORTEXA HYBRID TECH FRAMEWORK.</p>
                    <div class="glossary-grid">
                        <div class="glossary-item">
                            <h4>BCI (Brain-Computer Interface)</h4>
                            <p>Interfaccia Cervello-Computer: Tecnologia in fase concettuale (TRL 1-3) in VORTEXA, focalizzata sul <strong>monitoraggio dei dati cognitivi e degli stati di allerta del pilota, non sul controllo attivo del veicolo</strong>, per mitigare problemi normativi e di fattibilità in ambienti ad alta vibrazione.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>FIA (Fédération Internationale de l'Automobile)</h4>
                            <p>Federazione Internazionale dell'Automobile: Organo di governo globale per il motorsport. VORTEXA è conforme alle linee guida e ai regolamenti della FIA per i sistemi di sicurezza, le prestazioni e l'assistenza al pilota, in particolare per quanto riguarda l'uso di nuove tecnologie.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>KERS (Kinetic Energy Recovery System)</h4>
                            <p>Sistema di Recupero dell'Energia Cinetica: Tecnologia che recupera l'energia generata durante la frenata di un veicolo e la immagazzina (es: in batterie o volani) per un uso successivo, fornendo un impulso di potenza aggiuntivo o migliorando l'efficienza. Un componente dei Sistemi Core (TRL 7-9).</p>
                        </div>
                        <div class="glossary-item">
                            <h4>MGU-H (Motor Generator Unit - Heat)</h4>
                            <p>Unità Motore-Generatore - Calore: Componente del sistema di propulsione ibrida che recupera l'energia termica dai gas di scarico del motore e la converte in energia elettrica, che può essere utilizzata per alimentare il turbocompressore o ricaricare le batterie. Un componente dei Sistemi Core (TRL 7-9).</p>
                        </div>
                        <div class="glossary-item">
                            <h4>MVP (Minimum Viable Product)</h4>
                            <p>Prodotto Minimo Viabile: La prima versione di un prodotto che contiene solo le funzionalità essenziali per essere lanciato e testato sul mercato, consentendo l'apprendimento e l'iterazione. Fa parte della nostra Roadmap di Integrazione.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>Smart Skin™</h4>
                            <p>Tecnologia avanzata in sviluppo (TRL 4-6) che integra una rete di sensori direttamente nella superficie del veicolo per il monitoraggio in tempo reale dello stress strutturale, della temperatura e dell'aerodinamica. Il piano di sviluppo include specifiche per la <strong>durata in condizioni estreme, la stima dei costi e un piano di manutenzione modulare</strong>.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>Starlink™</h4>
                            <p>Servizio internet satellitare di SpaceX. In VORTEXA, la sua applicazione per la comunicazione critica nel motorsport è oggetto di rigorosa valutazione per latenza e affidabilità (TRL 1-3). L'uso primario sarà per dati non critici o come ridondanza, con <strong>piani per l'utilizzo di bande commerciali licenziate o 5G privato per comunicazioni mission-critical</strong>.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>TRL (Technology Readiness Level)</h4>
                            <p>Livello di Maturità Tecnologica: Una scala da 1 a 9 utilizzata per valutare la maturità di una tecnologia. TRL 1 (ricerca di base) a TRL 9 (sistema collaudato in ambiente operativo). Usato per categorizzare i sistemi VORTEXA.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>VRSH™ (Variable Ratio Suspension and Handling)</h4>
                            <p>Sistema di Sospensione e Manovrabilità a Rapporto Variabile: Tecnologia avanzata (TRL 4-6) che consente regolazioni dinamiche della geometria e della rigidità della sospensione in tempo reale, ottimizzando l'aderenza, la manovrabilità e la stabilità del veicolo in varie condizioni di pista.</p>
                        </div>
                        <div class="glossary-item">
                            <h4>5G Privato</h4>
                            <p>Una rete 5G dedicata e isolata per una specifica organizzazione, che offre sicurezza, bassa latenza e alta larghezza di banda. Considerata una potenziale soluzione per le comunicazioni mission-critical in VORTEXA, specialmente per mitigare i limiti di altre tecnologie.</p>
                        </div>
                    </div>
                `
            },
            "standards": {
                title: "Norme Tecniche",
                content: `
                    <p>Il VORTEXA HYBRID TECH FRAMEWORK aderisce rigorosamente alle norme e ai regolamenti pertinenti per garantire sicurezza, prestazioni e legalità nel suo ambiente operativo. La nostra matrice di conformità normativa dettagliata l'adesione ai seguenti standard:</p>
                    <ul>
                        <li><strong>Regolamenti Sportivi della FIA:</strong> Analisi e conformità continua con i requisiti tecnici e sportivi della Fédération Internationale de l'Automobilisme, inclusi sicurezza del telaio, specifiche del motore, sistemi elettronici e assistenza al pilota.</li>
                        <li><strong>Norme di Sicurezza Automobilistica:</strong> Implementazione di standard di sicurezza passiva (assorbimento degli urti, integrità strutturale) e attiva (sistemi di frenata, controllo della trazione) secondo le migliori pratiche del settore.</li>
                        <li><strong>Regolamentazioni delle Telecomunicazioni:</strong> Per la comunicazione del veicolo, stiamo pianificando l'acquisizione di licenze per l'uso di bande di frequenza commerciali dedicate, garantendo la legalità e l'affidabilità della trasmissione dati, mitigando le restrizioni sull'uso delle frequenze amatoriali (<a href="#communication-ham" class="highlight-term">Comunicazione HAM</a>).</li>
                        <li><strong>Standard per Batterie e Sistemi Ibridi:</strong> Conformità agli standard internazionali per la manipolazione, la sicurezza e lo smaltimento di batterie ad alta tensione e sistemi di propulsione ibridi.</li>
                    </ul>
                    <p>Un piano esteso di test e convalida è in atto per garantire che tutti i componenti e i sistemi soddisfino o superino questi requisiti normativi.</p>
                `
            },
            "conformity": {
                title: "Conformità",
                content: `
                    <p>La conformità del progetto VORTEXA HYBRID con le leggi, i regolamenti e gli standard del settore è un pilastro centrale del nostro sviluppo. Le nostre strategie includono:</p>
                    <ul>
                        <li><strong>Certificazioni Necessarie:</strong> Pianificazione ed esecuzione per l'ottenimento di tutte le certificazioni obbligatorie nel motorsport (FIA), sicurezza veicolare e telecomunicazioni, garantendo il permesso per l'operatività in ambienti competitivi e pubblici.</li>
                        <li><strong>Proprietà Intellettuale:</strong> Una solida strategia di protezione della proprietà intellettuale viene implementata per tutte le tecnologie proprietarie sviluppate (Smart Skin™, VRSH™, ecc.), inclusi brevetti, segreti commerciali e accordi di riservatezza con i partner.</li>
                        <li><strong>Audit e Revisioni:</strong> Conduzione regolare di audit interni ed esterni per garantire la continua adesione agli standard di qualità e sicurezza.</li>
                        <li><strong>Responsabilità ed Etica:</strong> Tutti i sistemi, in particolare quelli che coinvolgono <a href="#bci" class="highlight-term">BCI</a> e <a href="#ai" class="highlight-term">IA</a>, sono sviluppati con un forte impegno per l'etica e la responsabilità, garantendo che non violino i principi di assistenza al pilota e mantengano l'integrità della competizione.</li>
                    </ul>
                    <p>Il nostro obiettivo non è solo quello di soddisfare, ma di superare le aspettative di conformità, rafforzando la fiducia nel VORTEXA HYBRID TECH FRAMEWORK.</p>
                `
            }
        },
        footerText: "&copy; 2025 VORTEXA HYBRID TECH FRAMEWORK. Tutti i diritti riservati."
    }
};

// Funções de controle do tema e idioma
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    // Atualiza o texto do botão, se necessário, ou a exibição do ícone (já no CSS)
    // const themeButton = document.getElementById('theme-toggle');
    // themeButton.textContent = isLightMode ? 'Modo Escuro' : 'Modo Claro';
}

function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang; // Atualiza o atributo lang do HTML
    loadContent();
    loadSidebar(); // Recarrega o sumário para atualizar os títulos de seção
    updateLanguageButtons(); // Atualiza o estado "active" dos botões de idioma
    updateFooterText(); // Atualiza o texto do rodapé
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-button').forEach(button => {
        if (button.dataset.lang === currentLang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function updateFooterText() {
    const footerP = document.querySelector('footer p');
    if (footerP && content[currentLang] && content[currentLang].footerText) {
        footerP.innerHTML = content[currentLang].footerText;
    }
}

// Funções de carregamento de conteúdo
function loadContent(sectionId = null) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Limpa o conteúdo existente

    if (sectionId && content[currentLang].sections[sectionId]) {
        // Carrega uma seção específica
        const sectionData = content[currentLang].sections[sectionId];
        const sectionElement = document.createElement('section');
        sectionElement.id = sectionId;
        // Se a seção principal tiver um título direto, use-o, senão, o título do content.sections
        sectionElement.innerHTML = `<h2>${sectionData.title}</h2>` + sectionData.content;
        contentDiv.appendChild(sectionElement);
    } else {
        // Carrega todas as seções por padrão (e.g., na inicialização)
        for (const secId in content[currentLang].sections) {
            const sectionData = content[currentLang].sections[secId];
            const sectionElement = document.createElement('section');
            sectionElement.id = secId;
            sectionElement.innerHTML = `<h2>${sectionData.title}</h2>` + sectionData.content;
            contentDiv.appendChild(sectionElement);
        }
    }
    // Adiciona o botão "Voltar ao topo" no final de cada seção se o id não for o glossario
    if (sectionId && sectionId !== 'glossary') {
        const backToTopBtn = document.createElement('p');
        backToTopBtn.innerHTML = `<a href="#top" class="back-to-summary-btn">Voltar ao topo</a>`;
        contentDiv.appendChild(backToTopBtn);
    } else if (sectionId === 'glossary') {
         // O botão de voltar ao topo já está incluído no HTML do glossário no objeto content
    }
    
    // Após carregar o conteúdo, atualiza os event listeners para links internos
    setupSmoothScrolling();
}


function loadSidebar() {
    const sidebarUl = document.querySelector('.sidebar ul');
    const sidebarTitle = document.querySelector('.sidebar h2');
    sidebarUl.innerHTML = ''; // Limpa o sumário existente

    if (sidebarTitle) {
        sidebarTitle.textContent = content[currentLang].sidebar.title;
    }

    content[currentLang].sidebar.sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${section.id}`;
        a.textContent = section.title;
        li.appendChild(a);

        if (section.subsections && section.subsections.length > 0) {
            const ulSub = document.createElement('ul');
            section.subsections.forEach(sub => {
                const liSub = document.createElement('li');
                const aSub = document.createElement('a');
                aSub.href = `#${sub.id}`;
                aSub.textContent = sub.title;
                liSub.appendChild(aSub);
                ulSub.appendChild(liSub);
            });
            li.appendChild(ulSub);
        }
        sidebarUl.appendChild(li);
    });
    updateSidebarHighlight(); // Garante que o item do sumário correto seja destacado
}

// Destaque do item do sumário com base na rolagem
function updateSidebarHighlight() {
    const sections = document.querySelectorAll('main.main-content section, main.main-content h3');
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    const headerOffset = document.getElementById('main-header') ? document.getElementById('main-header').offsetHeight : 0;
    const scrollPosition = window.scrollY + headerOffset + 10; // Adiciona um pequeno offset

    sections.forEach(sec => {
        if (sec.offsetTop <= scrollPosition && sec.offsetTop + sec.offsetHeight > scrollPosition) {
            const currentId = sec.id;
            sidebarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                } else {
                    // Também destaca a seção pai se a subseção estiver ativa
                    let parentLi = link.closest('li');
                    if (parentLi && parentLi.querySelector(`a[href="#${currentId}"]`)) {
                        link.classList.add('active'); // Destaca o pai do item ativo
                    }
                }
            });
        }
    });
}


// Scroll suave para links internos
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScrollHandler); // Remove para evitar duplicidade
        anchor.addEventListener('click', smoothScrollHandler);
    });
}

function smoothScrollHandler(e) {
    const href = this.getAttribute('href');
    // Verifica se não é apenas '#' ou um link que já está no topo
    if (href === '#' || href === '#top' && window.scrollY === 0) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        e.preventDefault();
        const headerOffset = document.getElementById('main-header') ? document.getElementById('main-header').offsetHeight : 0;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset - 10; // -10px para um pequeno espaçamento extra

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}


// Event listeners e inicialização
let currentLang = localStorage.getItem('lang') || 'pt';

function setupEventListeners() {
    document.getElementById('lang-pt').addEventListener('click', () => changeLang('pt'));
    document.getElementById('lang-en').addEventListener('click', () => changeLang('en'));
    document.getElementById('lang-it').addEventListener('click', () => changeLang('it'));
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    window.addEventListener('scroll', updateSidebarHighlight);
    // Adiciona o listener de rolagem para quando o conteúdo muda (após loadContent)
    const contentObserver = new MutationObserver(updateSidebarHighlight);
    contentObserver.observe(document.getElementById('content'), { childList: true, subtree: true });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Aplica o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Padrão 'dark'
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }

    // Carrega o idioma inicial, conteúdo e sumário
    changeLang(currentLang); // Chamamos changeLang que já faz loadContent e loadSidebar
    setupEventListeners();
    updateSidebarHighlight(); // Chamada inicial para destacar a seção correta se a página carregar no meio

    // Define o scroll para o topo ao carregar a página (com delay)
    window.onload = function() {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };
});

// A partir daqui, as funções mais avançadas (createReadingProgress, createSearchFunction, enhanceHoverEffects, addKeyboardShortcuts)
// Que estavam no script.js original do Bambino, e não são essenciais para a funcionalidade principal de navegação e tradução,
// Foram removidas para simplificar e focar na entrega da "Bíblia Mitigada".
// Se o Bambino quiser reincorporá-las, podemos fazê-lo em um próximo passo,
// Adaptando-as ao novo contexto se necessário.