// Conteúdo em múltiplos idiomas com sumário aprimorado
const content = {
    pt: {
        title: "VORTEXA HYBRID TECH FRAMEWORK",
        sidebar: {
            title: "Sumário",
            sections: [
                {
                    id: "intro",
                    title: "Visão Geral",
                    subsections: [
                        { id: "intro-institucional", title: "Origem e Fundação" },
                        { id: "visao-geral", title: "Conceito do VORTEXA" },
                        { id: "diferenciais", title: "Diferenciais Competitivos" },
                        { id: "roadmap", title: "Cronograma de Desenvolvimento" }
                    ]
                },
                {
                    id: "dados-tecnicos",
                    title: "Especificações Técnicas",
                    subsections: [
                        { id: "estrutura-design", title: "Arquitetura e Materiais" },
                        { id: "filosofia-murray", title: "Design Funcional" },
                        { id: "survivor-capsule", title: "Sistema de Proteção" },
                        { id: "especificacoes", title: "Dados Técnicos Detalhados" }
                    ]
                },
                {
                    id: "press-release",
                    title: "Comunicação",
                    subsections: [
                        { id: "press-overview", title: "Visão Estratégica" },
                        { id: "press-tech", title: "Inovações Tecnológicas" },
                        { id: "press-market", title: "Posicionamento de Mercado" }
                    ]
                },
                {
                    id: "glossario",
                    title: "Glossário Técnico",
                    subsections: [
                        { id: "termos-principais", title: "Termos Principais" },
                        { id: "siglas", title: "Siglas e Abreviações" },
                        { id: "tecnologias", title: "Tecnologias Aplicadas" }
                    ]
                }
            ]
        },
        sections: {
            intro: {
                title: "VISÃO GERAL",
                content: `
                    <div class="back-to-top">
                        <button onclick="scrollToTop()" class="back-btn">↑ Voltar ao Topo</button>
                    </div>
                    
                    <section id="intro-institucional">
                        <h3>Origem e Fundação</h3>
                        <div class="section-nav">
                            <a href="#intro" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <p>Origem e Visão Estratégica: A <a href="#glossario" class="glossary-term" data-term="vortexa-motorsport" onclick="navigateToGlossary('vortexa-motorsport')">Vortexa Motorsport Inc.</a> foi fundada no ecossistema de inovação do <a href="#glossario" class="glossary-term" data-term="stanford-startx" onclick="navigateToGlossary('stanford-startx')">Stanford StartX</a>, como spin-off convergente de pesquisas avançadas em neuroengenharia, inteligência artificial e mobilidade autônoma, com sinergia direta com o <a href="#glossario" class="glossary-term" data-term="stanford-ddl" onclick="navigateToGlossary('stanford-ddl')">Stanford Driving Decision Lab (DDL)</a>. A empresa mantém vínculos ativos com centros de excelência globais para transformar disrupção em confiabilidade aplicada — do deserto ao espaço.</p>
                        
                        <p>Com sede em fase de instalação no <a href="#glossario" class="glossary-term" data-term="colorado-springs" onclick="navigateToGlossary('colorado-springs')">Colorado Springs Innovation Hub</a>, próximo a zonas de testes em altitude, baixa pressão e clima severo, a nova central técnico-científica da Vortexa Motorsport Inc. abrigará o complexo de validação <a href="#glossario" class="glossary-term" data-term="cae-vortexa" onclick="navigateToGlossary('cae-vortexa')">CAE VORTEXA™</a>, incluindo infraestrutura para simulação termomecânica, laboratório de runtime neural e um túnel de vento modular 60% para protótipos de carros off-road com aerodinâmica otimizada (Cx ≈ 0,38).</p>
                    </section>
                    
                    <section id="visao-geral">
                        <h3>Conceito do VORTEXA</h3>
                        <div class="section-nav">
                            <a href="#intro" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <p>O <a href="#glossario" class="glossary-term" data-term="vortexa-hybrid" onclick="navigateToGlossary('vortexa-hybrid')">VORTEXA HYBRID</a> é uma plataforma modular e resiliente baseada no <a href="#glossario" class="glossary-term" data-term="vortexa-framework" onclick="navigateToGlossary('vortexa-framework')">VORTEXA HYBRID TECH FRAMEWORK</a>, uma arquitetura integrada para mobilidade extrema. Composta por cinco blocos funcionais interdependentes — estrutura, propulsão, energia, cognição e escalabilidade —, a plataforma foi projetada para operar com confiabilidade em ambientes como <a href="#glossario" class="glossary-term" data-term="w2rc" onclick="navigateToGlossary('w2rc')">W2RC</a>, operações de defesa, mineração remota e resgate autônomo.</p>
                    </section>
                    
                    <section id="diferenciais">
                        <h3>Diferenciais Competitivos</h3>
                        <div class="section-nav">
                            <a href="#intro" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <ul>
                            <li><strong>Resiliência Sistêmica:</strong> Redundância física, digital e energética, com fallback manual e microECUs.</li>
                            <li><strong>Eficiência Energética:</strong> 85% em modo híbrido, com torque vetorial e recuperação térmica avançada.</li>
                            <li><strong>Autonomia Inteligente:</strong> 300–900 km (modo fallback); até 2.000 km com 20 kg de H₂ (modo estendido).</li>
                            <li><strong>IA em Tempo Real:</strong> Grok 6 com latência ≤10 ms, inferência embarcada (<a href="#glossario" class="glossary-term" data-term="tinyml" onclick="navigateToGlossary('tinyml')">TinyML</a>) e <a href="#glossario" class="glossary-term" data-term="xrt-vtxa" onclick="navigateToGlossary('xrt-vtxa')">xRT-VTXA</a> para blackout.</li>
                            <li><strong>Aplicações Multissetoriais:</strong> Rally-raid (W2RC), defesa tática, mineração profunda, operações <a href="#glossario" class="glossary-term" data-term="sar" onclick="navigateToGlossary('sar')">SAR</a>.</li>
                        </ul>
                    </section>
                    
                    <section id="roadmap">
                        <h3>Cronograma de Desenvolvimento</h3>
                        <div class="section-nav">
                            <a href="#intro" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Ano</th>
                                    <th>Marco</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2025</td>
                                    <td>Validação CAE</td>
                                    <td>Modelagem de torque, crash, IA e fluxo térmico (ANSYS/CAE GmbH)</td>
                                </tr>
                                <tr>
                                    <td>2026</td>
                                    <td>Protótipos Funcionais</td>
                                    <td>Teste de powertrain híbrido (ICE + 2 ERS traseiros) e CTIS inteligente</td>
                                </tr>
                                <tr>
                                    <td>2027</td>
                                    <td>Arquitetura Completa</td>
                                    <td>Implementação com 4 ERS independentes, CAE VORTEXA embarcado</td>
                                </tr>
                                <tr>
                                    <td>2028</td>
                                    <td>Validação de Interfaces</td>
                                    <td>Testes de VRSH™, HUD Vuzix, sensores térmicos e BCI (neurofeedback)</td>
                                </tr>
                                <tr>
                                    <td>2029</td>
                                    <td>Rally dos Sertões</td>
                                    <td>Teste em campo com arquitetura plena, fallback ativo e kits modulares</td>
                                </tr>
                                <tr>
                                    <td>2030</td>
                                    <td>Borneo Extreme / Validação Final</td>
                                    <td>Ambiente hostil: dunas, floresta, umidade, blackout elétrico controlado</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                `
            },
            "dados-tecnicos": {
                title: "ESPECIFICAÇÕES TÉCNICAS",
                content: `
                    <div class="back-to-top">
                        <button onclick="scrollToTop()" class="back-btn">↑ Voltar ao Topo</button>
                    </div>
                    
                    <section id="estrutura-design">
                        <h3>Arquitetura e Materiais</h3>
                        <div class="section-nav">
                            <a href="#dados-tecnicos" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <p>A estrutura do VORTEXA HYBRID foi concebida com um único princípio inegociável: sobreviver e continuar operando mesmo após falhas severas. Sua arquitetura modular e multicamadas, denominada <a href="#glossario" class="glossary-term" data-term="mrcs" onclick="navigateToGlossary('mrcs')">MRCS™ – Modular Reconfigurable Chassis System</a>, combina blindagem ativa, redes de controle redundantes e reconfiguração funcional em campo.</p>
                        
                        <h4>Módulos Estruturais:</h4>
                        <ul>
                            <li><strong><a href="#glossario" class="glossary-term" data-term="ifm" onclick="navigateToGlossary('ifm')">IFM – Módulo Frontal Integrado</a>:</strong> Estrutura de absorção programada com radar frontal, painéis solares <a href="#glossario" class="glossary-term" data-term="cigs" onclick="navigateToGlossary('cigs')">CIGS</a> integrados, chassi deformável e travessia de sensores <a href="#glossario" class="glossary-term" data-term="lidar" onclick="navigateToGlossary('lidar')">LIDAR</a>/SensorGrid™.</li>
                            <li><strong><a href="#glossario" class="glossary-term" data-term="ccm" onclick="navigateToGlossary('ccm')">CCM – Módulo Central Blindado</a>:</strong> Monocoque em multicamadas com <a href="#glossario" class="glossary-term" data-term="survivor-capsule" onclick="navigateToGlossary('survivor-capsule')">Survivor Capsule™ (VSC-RESIL™)</a> integrada, tanques laterais de H₂ encapsulados, blindagem balística, isolamento térmico e <a href="#glossario" class="glossary-term" data-term="vortexa-brain" onclick="navigateToGlossary('vortexa-brain')">Vortexa Brain™</a> em núcleo protegido.</li>
                            <li><strong><a href="#glossario" class="glossary-term" data-term="rtm" onclick="navigateToGlossary('rtm')">RTM – Módulo Traseiro Térmico</a>:</strong> Compartimento para o <a href="#glossario" class="glossary-term" data-term="ice-hbr1" onclick="navigateToGlossary('ice-hbr1')">ICE HBR-1</a> (PIPO Moteurs), motores QEV vetoriais, microturbina <a href="#glossario" class="glossary-term" data-term="pem" onclick="navigateToGlossary('pem')">PEM</a>, baterias de estado sólido (QuantumScape/Sila) e exaustão adaptativa Akrapovič, com circuito térmico redundante <a href="#glossario" class="glossary-term" data-term="vulcans" onclick="navigateToGlossary('vulcans')">VULCANS™</a>.</li>
                        </ul>
                    </section>
                    
                    <section id="filosofia-murray">
                        <h3>Design Funcional</h3>
                        <div class="section-nav">
                            <a href="#dados-tecnicos" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <p>A filosofia funcional de Gordon Murray — "<em>Design should follow the purest function</em>" — inspira profundamente o VORTEXA HYBRID. No lugar de excessos, encontra-se clareza estrutural. No lugar de ornamentos, propósito técnico absoluto.</p>
                        
                        <table>
                            <thead>
                                <tr>
                                    <th>Gordon Murray Automotive</th>
                                    <th>VORTEXA HYBRID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Leveza para performance de pista</td>
                                    <td>Resiliência para sobrevivência de missão</td>
                                </tr>
                                <tr>
                                    <td>Foco em simetria térmica e balanceamento dinâmico</td>
                                    <td>Foco em redundância tática e modularidade de campo</td>
                                </tr>
                                <tr>
                                    <td>Pureza estética como consequência da função</td>
                                    <td>Camuflagem funcional como extensão da missão</td>
                                </tr>
                                <tr>
                                    <td>Design voltado à experiência sensorial do condutor</td>
                                    <td>Design voltado à proteção e comando neurocognitivo</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    
                    <section id="survivor-capsule">
                        <h3>Sistema de Proteção</h3>
                        <div class="section-nav">
                            <a href="#dados-tecnicos" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <p>A <a href="#glossario" class="glossary-term" data-term="survivor-capsule" onclick="navigateToGlossary('survivor-capsule')">Survivor Capsule™ VSC-RESIL™</a> é o núcleo de proteção biomecânica, cognitiva e térmica do VORTEXA HYBRID. Desenvolvida com inspiração em cápsulas aeroespaciais, sistemas <a href="#glossario" class="glossary-term" data-term="mrap" onclick="navigateToGlossary('mrap')">MRAP</a> militares e cockpits de hipercarros de resistência, a VSC-RESIL™ integra blindagem leve, gerenciamento térmico adaptativo e compatibilidade total com o capacete inteligente <a href="#glossario" class="glossary-term" data-term="vrsh" onclick="navigateToGlossary('vrsh')">VRSH™</a>.</p>
                    </section>
                    
                    <section id="especificacoes">
                        <h3>Dados Técnicos Detalhados</h3>
                        <div class="section-nav">
                            <a href="#dados-tecnicos" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <ul>
                            <li><strong>Material:</strong> Compósito híbrido <a href="#glossario" class="glossary-term" data-term="cfrp-grafeno" onclick="navigateToGlossary('cfrp-grafeno')">CFRP-grafeno</a> com aramida balística</li>
                            <li><strong>Rigidez Torcional:</strong> 45 kNm/° (CAE Validated)</li>
                            <li><strong>Peso Estrutural Total:</strong> ~1.800 kg (configuração média)</li>
                            <li><strong>Tanques de H₂:</strong> 2×5 kg (Eaton 700 bar encapsulados)</li>
                            <li><strong>Resfriamento Estrutural:</strong> Rede VULCANS™ multicircuito (80 bar)</li>
                            <li><strong>Interoperabilidade:</strong> Compatível com <a href="#glossario" class="glossary-term" data-term="flute-kits" onclick="navigateToGlossary('flute-kits')">Flute Kits™</a> e <a href="#glossario" class="glossary-term" data-term="quickbay" onclick="navigateToGlossary('quickbay')">QuickBay™</a> para reconfiguração rápida em campo</li>
                        </ul>
                    </section>
                `
            },
            "press-release": {
                title: "COMUNICAÇÃO",
                content: `
                    <div class="back-to-top">
                        <button onclick="scrollToTop()" class="back-btn">↑ Voltar ao Topo</button>
                    </div>
                    
                    <section id="press-overview">
                        <h3>Visão Estratégica</h3>
                        <div class="section-nav">
                            <a href="#press-release" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <p>A Vortexa Motorsport, nascida do ecossistema de inovação da Stanford StartX, apresenta o VORTEXA HYBRID TECH FRAMEWORK, uma plataforma de mobilidade inteligente que redefine os limites da engenharia automotiva. Diferente de qualquer veículo convencional, o VORTEXA HYBRID é um ecossistema vivo, adaptativo e resiliente, projetado para operar nos ambientes mais desafiadores do planeta, desde os desertos escaldantes até as operações de resgate mais críticas.</p>
                    </section>
                    
                    <section id="press-tech">
                        <h3>Inovações Tecnológicas</h3>
                        <div class="section-nav">
                            <a href="#press-release" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <p>Com uma arquitetura modular e multicamadas, o VORTEXA HYBRID integra tecnologias de ponta em neuroengenharia, inteligência artificial e robótica autônoma. Seu design, inspirado na filosofia de Gordon Murray, prioriza a funcionalidade e a sobrevivência em vez de meros adornos. Cada componente é otimizado para resistir a falhas severas, reconfigurar-se dinamicamente e continuar operando mesmo sob as condições mais extremas.</p>
                        
                        <p>No coração do VORTEXA HYBRID está o VORTEXA BRAIN™, um núcleo de inteligência distribuída que, em conjunto com os SubCores™ e o sistema operacional NEVO OS™, garante uma capacidade de adaptação sem precedentes. A inovadora VORTEXA SMART SKIN™ atua como um escudo térmico e sistema energético auxiliar, enquanto a Survivor Capsule™ (VSC-RESIL™) oferece proteção biomecânica e cognitiva inigualável para a tripulação.</p>
                    </section>
                    
                    <section id="press-market">
                        <h3>Posicionamento de Mercado</h3>
                        <div class="section-nav">
                            <a href="#press-release" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <p>Com um powertrain híbrido de alta performance, o VORTEXA HYBRID promete eficiência energética superior e autonomia estendida, operando com hidrogênio e e-fuels. A capacidade de reconfiguração rápida em campo, através dos Flute Kits™ e da rede QuickBay™ FieldOps, assegura que o VORTEXA esteja sempre pronto para qualquer missão.</p>
                        
                        <p>A Vortexa Motorsport está validando o VORTEXA HYBRID através de gêmeos digitais e testes de campo rigorosos, com um roadmap estratégico que culmina em validações extremas até 2030. Convidamos parceiros da indústria, institutos de pesquisa e agências de missão crítica a se juntarem a nós nesta jornada para moldar o futuro da mobilidade extrema.</p>
                    </section>
                `
            },
            glossario: {
                title: "GLOSSÁRIO TÉCNICO",
                content: `
                    <div class="back-to-top">
                        <button onclick="scrollToTop()" class="back-btn">↑ Voltar ao Topo</button>
                    </div>
                    
                    <section id="termos-principais">
                        <h3>Termos Principais</h3>
                        <div class="section-nav">
                            <a href="#glossario" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <div class="glossary-grid">
                            <div class="glossary-item" id="vortexa-hybrid">
                                <h4>VORTEXA HYBRID</h4>
                                <p>Plataforma modular e resiliente baseada no VORTEXA HYBRID TECH FRAMEWORK para mobilidade extrema.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                            
                            <div class="glossary-item" id="vortexa-framework">
                                <h4>VORTEXA HYBRID TECH FRAMEWORK</h4>
                                <p>Arquitetura cognitiva, modular e resiliente para mobilidade inteligente.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                            
                            <div class="glossary-item" id="survivor-capsule">
                                <h4>Survivor Capsule™ (VSC-RESIL™)</h4>
                                <p>Núcleo de proteção biomecânica, cognitiva e térmica do VORTEXA HYBRID.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                            
                            <div class="glossary-item" id="vortexa-brain">
                                <h4>VORTEXA BRAIN™</h4>
                                <p>Núcleo de inteligência operacional do VORTEXA HYBRID.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                        </div>
                    </section>
                    
                    <section id="siglas">
                        <h3>Siglas e Abreviações</h3>
                        <div class="section-nav">
                            <a href="#glossario" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <div class="glossary-grid">
                            <div class="glossary-item" id="stanford-startx">
                                <h4>Stanford StartX</h4>
                                <p>Ecossistema de inovação onde a Vortexa Motorsport Inc. foi fundada.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                            
                            <div class="glossary-item" id="stanford-ddl">
                                <h4>Stanford Driving Decision Lab (DDL)</h4>
                                <p>Laboratório de decisão de condução de Stanford, com o qual a Vortexa Motorsport Inc. mantém sinergia.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                            
                            <div class="glossary-item" id="cae-vortexa">
                                <h4>CAE VORTEXA™</h4>
                                <p>Complexo de validação da Vortexa Motorsport Inc., incluindo infraestrutura para simulação termomecânica e laboratório de runtime neural.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                            
                            <div class="glossary-item" id="w2rc">
                                <h4>W2RC</h4>
                                <p>World Rally-Raid Championship.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                        </div>
                    </section>
                    
                    <section id="tecnologias">
                        <h3>Tecnologias Aplicadas</h3>
                        <div class="section-nav">
                            <a href="#glossario" class="nav-link">← Voltar à Seção</a>
                        </div>
                        <div class="glossary-grid">
                            <div class="glossary-item" id="mrcs">
                                <h4>MRCS™ – Modular Reconfigurable Chassis System</h4>
                                <p>Arquitetura modular e multicamadas do chassi do VORTEXA HYBRID.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                            
                            <div class="glossary-item" id="lidar">
                                <h4>LIDAR</h4>
                                <p>Light Detection and Ranging (Detecção e Alcance da Luz) - tecnologia de sensoriamento remoto.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                            
                            <div class="glossary-item" id="cigs">
                                <h4>CIGS</h4>
                                <p>Copper Indium Gallium Selenide (Cobre, Índio, Gálio, Seleneto) - tipo de célula solar.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                            
                            <div class="glossary-item" id="pem">
                                <h4>PEM</h4>
                                <p>Proton Exchange Membrane (Membrana de Troca Protônica) - tipo de célula a combustível.</p>
                                <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
                            </div>
                        </div>
                    </section>
                `
            }
        }
    },
    en: {
        title: "VORTEXA HYBRID TECH FRAMEWORK",
        sidebar: {
            title: "Summary",
            sections: [
                {
                    id: "intro",
                    title: "Overview",
                    subsections: [
                        { id: "intro-institucional", title: "Origin and Foundation" },
                        { id: "visao-geral", title: "VORTEXA Concept" },
                        { id: "diferenciais", title: "Competitive Advantages" },
                        { id: "roadmap", title: "Development Timeline" }
                    ]
                },
                {
                    id: "dados-tecnicos",
                    title: "Technical Specifications",
                    subsections: [
                        { id: "estrutura-design", title: "Architecture and Materials" },
                        { id: "filosofia-murray", title: "Functional Design" },
                        { id: "survivor-capsule", title: "Protection System" },
                        { id: "especificacoes", title: "Detailed Technical Data" }
                    ]
                },
                {
                    id: "press-release",
                    title: "Communication",
                    subsections: [
                        { id: "press-overview", title: "Strategic Vision" },
                        { id: "press-tech", title: "Technological Innovations" },
                        { id: "press-market", title: "Market Positioning" }
                    ]
                },
                {
                    id: "glossario",
                    title: "Technical Glossary",
                    subsections: [
                        { id: "termos-principais", title: "Main Terms" },
                        { id: "siglas", title: "Acronyms and Abbreviations" },
                        { id: "tecnologias", title: "Applied Technologies" }
                    ]
                }
            ]
        },
        // ... resto do conteúdo em inglês (similar structure)
    },
    it: {
        title: "VORTEXA HYBRID TECH FRAMEWORK",
        sidebar: {
            title: "Sommario",
            sections: [
                {
                    id: "intro",
                    title: "Panoramica",
                    subsections: [
                        { id: "intro-institucional", title: "Origine e Fondazione" },
                        { id: "visao-geral", title: "Concetto VORTEXA" },
                        { id: "diferenciais", title: "Vantaggi Competitivi" },
                        { id: "roadmap", title: "Cronologia di Sviluppo" }
                    ]
                },
                {
                    id: "dados-tecnicos",
                    title: "Specifiche Tecniche",
                    subsections: [
                        { id: "estrutura-design", title: "Architettura e Materiali" },
                        { id: "filosofia-murray", title: "Design Funzionale" },
                        { id: "survivor-capsule", title: "Sistema di Protezione" },
                        { id: "especificacoes", title: "Dati Tecnici Dettagliati" }
                    ]
                },
                {
                    id: "press-release",
                    title: "Comunicazione",
                    subsections: [
                        { id: "press-overview", title: "Visione Strategica" },
                        { id: "press-tech", title: "Innovazioni Tecnologiche" },
                        { id: "press-market", title: "Posizionamento di Mercato" }
                    ]
                },
                {
                    id: "glossario",
                    title: "Glossario Tecnico",
                    subsections: [
                        { id: "termos-principais", title: "Termini Principali" },
                        { id: "siglas", title: "Acronimi e Abbreviazioni" },
                        { id: "tecnologias", title: "Tecnologie Applicate" }
                    ]
                }
            ]
        },
        // ... resto do conteúdo em italiano (similar structure)
    }
};

// Estado da aplicação
let currentLang = 'pt';
let isDarkMode = true;
let lastScrollPosition = 0;

// Funções de navegação aprimoradas
function navigateToGlossary(term) {
    lastScrollPosition = window.pageYOffset;
    const glossarySection = document.getElementById('glossario');
    const termElement = document.getElementById(term);
    
    if (termElement) {
        termElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        termElement.classList.add('highlight-term');
        setTimeout(() => {
            termElement.classList.remove('highlight-term');
        }, 3000);
    } else if (glossarySection) {
        glossarySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function returnToOrigin() {
    window.scrollTo({ top: lastScrollPosition, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para carregar o sumário aprimorado
function loadSidebar() {
    const sidebar = document.querySelector('.sidebar ul');
    const currentContent = content[currentLang];
    
    sidebar.innerHTML = '';
    
    currentContent.sidebar.sections.forEach(section => {
        const li = document.createElement('li');
        li.className = 'section-item';
        
        const mainLink = document.createElement('a');
        mainLink.href = `#${section.id}`;
        mainLink.textContent = section.title;
        mainLink.className = 'main-section-link';
        
        li.appendChild(mainLink);
        
        if (section.subsections && section.subsections.length > 0) {
            const subList = document.createElement('ul');
            subList.className = 'subsection-list';
            
            section.subsections.forEach(subsection => {
                const subLi = document.createElement('li');
                const subLink = document.createElement('a');
                subLink.href = `#${subsection.id}`;
                subLink.textContent = subsection.title;
                subLink.className = 'subsection-link';
                
                subLi.appendChild(subLink);
                subList.appendChild(subLi);
            });
            
            li.appendChild(subList);
        }
        
        sidebar.appendChild(li);
    });
}

// Função para carregar conteúdo
function loadContent() {
    const contentDiv = document.getElementById('content');
    const currentContent = content[currentLang];
    
    document.title = currentContent.title;
    document.querySelector('h1').textContent = currentContent.title;
    
    let html = '';
    Object.keys(currentContent.sections).forEach(sectionKey => {
        const section = currentContent.sections[sectionKey];
        html += `
            <section id="${sectionKey}" class="content-section">
                <h2>${section.title}</h2>
                ${section.content}
            </section>
        `;
    });
    
    contentDiv.innerHTML = html;
    loadSidebar();
}

// Resto das funções existentes (changeLang, toggleTheme, etc.)
function changeLang(lang) {
    currentLang = lang;
    loadContent();
    
    // Atualizar botões
    document.querySelectorAll('.controls button[id^="lang-"]').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Atualizar texto do botão de tema
    const themeBtn = document.getElementById('theme-toggle');
    if (lang === 'pt') {
        themeBtn.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
    } else if (lang === 'en') {
        themeBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    } else if (lang === 'it') {
        themeBtn.textContent = isDarkMode ? 'Modalità Chiara' : 'Modalità Scura';
    }
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('light-mode');
    
    const themeBtn = document.getElementById('theme-toggle');
    if (currentLang === 'pt') {
        themeBtn.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
    } else if (currentLang === 'en') {
        themeBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    } else if (currentLang === 'it') {
        themeBtn.textContent = isDarkMode ? 'Modalità Chiara' : 'Modalità Scura';
    }
}

// Event listeners
function setupEventListeners() {
    document.getElementById('lang-pt').addEventListener('click', () => changeLang('pt'));
    document.getElementById('lang-en').addEventListener('click', () => changeLang('en'));
    document.getElementById('lang-it').addEventListener('click', () => changeLang('it'));
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}

// Scroll suave para links internos
function setupSmoothScrolling() {
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadContent();
    setupEventListeners();
    setupSmoothScrolling();
    
    // Aguardar um pouco para garantir que o conteúdo foi carregado
    setTimeout(() => {
        createReadingProgress();
        createSearchFunction();
        enhanceHoverEffects();
        addKeyboardShortcuts();
        
        // Event listeners
        window.addEventListener('scroll', () => {
            updateSidebarHighlight();
            updateReadingProgress();
        });
        
        // Configurar busca após o conteúdo ser carregado
        setupSearch();
        
        // Atualizar destaque inicial
        updateSidebarHighlight();
    }, 500);
});

// Resto das funções existentes (createReadingProgress, etc.) permanecem iguais...

