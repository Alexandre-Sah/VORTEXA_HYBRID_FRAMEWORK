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
                        
                        <h4>O Que é o VORTEXA HYBRID?</h4>
                        <h5>VORTEXA HYBRID: Quando a Inteligência Entra na Luta Pela Sobrevivência</h5>
                        
                        <p><em>Imagine uma máquina que une o DNA da Fórmula 1, a resistência de um blindado e a mente de um supercomputador — e a solta nos desertos mais letais do planeta. Essa é a proposta do VORTEXA HYBRID: um veículo projetado para pensar, reagir e sobreviver onde a falha não é uma opção.</em></p>
                        
                        <p>Fruto de uma aliança global entre engenheiros, neurocientistas, militares e especialistas em mobilidade extrema, o VORTEXA é mais do que um protótipo disruptivo — é a consolidação de uma nova categoria: <strong>inteligência embarcada para sobrevivência funcional</strong>. Capaz de operar sob blackout, reagir a falhas estruturais e aprender com o próprio terreno, ele une propulsão híbrida de alta performance, arquitetura cognitiva distribuída e sistemas de missão modulares.</p>
                        
                        <p>No coração do VORTEXA está o <strong>Vortexa Brain™</strong>, uma unidade de inferência baseada em ASICs personalizados (xAI VortexCore), capaz de tomar decisões em milissegundos com suporte de <strong>SubCores™</strong> autônomos espalhados por suspensão, propulsão, energia e sobrevivência. Tudo isso operando sob o sistema embarcado <strong>NEVO OS™</strong>, com runtime de latência ultrabaixa (&lt;5 ms).</p>
                        
                        <p>Mas o que o torna verdadeiramente inédito é sua filosofia: <strong>falhar não é o fim, é o gatilho do aprendizado</strong>. Cada anomalia gera dados. Cada missão reforça os algoritmos. Cada falha alimenta o <strong>VORTEXA SINAPSI™</strong>, o núcleo de aprendizado profundo que conecta simulação, experiência real e autocorreção dinâmica.</p>
                        
                        <blockquote>
                            <p><strong>"O VORTEXA é o único veículo que não apenas sobrevive ao caos — ele aprende com ele."</strong><br/>
                            – Equipe VORTEXA</p>
                        </blockquote>
                        
                        <h4>Características Essenciais:</h4>
                        <ul>
                            <li><strong>Arquitetura Híbrida Modular:</strong> ICE HBR-1 + Motores Vetoriais Elétricos (QEV)</li>
                            <li><strong>Fallback Cognitivo:</strong> Decisão em tempo real via SubCores™ e xRT-VTXA™</li>
                            <li><strong>Casco Inteligente:</strong> Smart Skin™ com sensores integrados, ultracapacitores e autocura</li>
                            <li><strong>Capacete VRSH™:</strong> HUD AR, visão térmica, comando não-verbal (BCI/EMG)</li>
                            <li><strong>Kits de Missão:</strong> Configurações adaptáveis para Rally-Raid, Defesa, Resgate, Mineração</li>
                        </ul>
                        
                        <p><strong>Pronto para o impossível:</strong> Se existe um lugar onde a engenharia se transforma em sobrevivência inteligente, ele tem nome — VORTEXA HYBRID.</p>
                    </section>
                    
                    <section id="press-tech">
                        <h3>Inovações Tecnológicas</h3>
                        <div class="section-nav">
                            <a href="#press-release" class="nav-link">← Voltar à Seção</a>
                        </div>
                        
                        <h4>Impacto em Rally, Defesa, Mineração e Resgate</h4>
                        <h5>Do Deserto ao Campo de Batalha: Uma Plataforma Para Missões que Não Podem Falhar</h5>
                        
                        <p><em>O VORTEXA HYBRID não foi feito para avenidas. Ele foi concebido para sobreviver onde a maioria quebra. Em ambientes onde a decisão entre continuar ou parar pode custar vidas, ele responde com resiliência cognitiva e inteligência embarcada.</em></p>
                        
                        <p>Seja em um rally-raid como o Dakar, uma operação de evacuação médica em zona de conflito, um resgate autônomo em área de deslizamento ou uma missão em campo de mineração remoto — o VORTEXA adapta-se, reconfigura-se e continua avançando.</p>
                        
                        <h4>Aplicações Extremas:</h4>
                        <ul>
                            <li><strong>Rally-Raid (T1U – FIA / A.S.O.):</strong> Tração híbrida, suspensão SISMO™, fallback mecânico SADEV™, cockpit VRSH™ com BCI ativa. Otimizado para ambientes como o Empty Quarter, Jalapão e Atacama.</li>
                            <li><strong>Defesa Tática:</strong> Modo Stealth embarcado, redundância de rádio auditivo via Cobham™, cápsula MRCS™ com blindagem leve e SubCore tático para blackout. Operação com IA embarcada sem rede externa.</li>
                            <li><strong>Resgate Autônomo:</strong> Reconhecimento cognitivo, HUD AR integrado ao capacete VRSH™, fallback de energia via PEM + Kleist Layer™. Capaz de operar em locais de difícil acesso com autonomia parcial.</li>
                            <li><strong>Mineração Inteligente:</strong> Monitoramento térmico adaptativo via SensorGrid™, isolamento EMI, kits de missão com configuração redundante, CAE VORTEXA™ ajustando parâmetros de forma preditiva.</li>
                        </ul>
                        
                        <p>Todos os modos são configuráveis via runtime xRT-VTXA™ e gerenciados em tempo real por SubCores™ especializados, garantindo autonomia operacional mesmo sem conectividade externa. A arquitetura de missão permite upgrades rápidos (QuickBay™), mantendo o veículo pronto para novos contextos com apenas 1 operador.</p>
                        
                        <p><strong>O VORTEXA se adapta ao terreno, ao perigo e ao tempo. Cada missão reforça sua inteligência. Cada desafio o torna mais preparado. Esse não é um veículo. É um aliado operacional.</strong></p>
                    </section>
                    
                    <section id="press-market">
                        <h3>Posicionamento de Mercado</h3>
                        <div class="section-nav">
                            <a href="#press-release" class="nav-link">← Voltar à Seção</a>
                        </div>
                        
                        <h4>Por Que o VORTEXA é Diferente?</h4>
                        <h5>Não é Apenas um Veículo. É um Organismo Inteligente em Movimento.</h5>
                        
                        <p><em>Enquanto outros protótipos disputam torque, velocidade e eficiência, o VORTEXA joga outro jogo: o da sobrevivência autônoma e inteligência extrema. Ele não é só mais forte. É mais consciente. Não responde por comando — responde por antecipação.</em></p>
                        
                        <p>Projetado sob uma filosofia que une o funcionalismo de Gordon Murray ao pragmatismo de campo militar, o VORTEXA HYBRID nasce da ideia de que a <strong>tecnologia deve resistir, adaptar-se e aprender — tudo ao mesmo tempo.</strong></p>
                        
                        <h4>O Que o Torna Único:</h4>
                        <ul>
                            <li><strong>Inteligência Distribuída:</strong> SubCores™ locais com inferência embarcada (TinyML), atuando mesmo sob perda do núcleo central (Vortexa Brain™)</li>
                            <li><strong>Resiliência Energética Trifásica:</strong> ICE híbrido, fallback PEM e camada ultracapacitiva Kleist Layer™ com ativação de emergência</li>
                            <li><strong>Estrutura Modular Ativa:</strong> Smart Skin™ com autocura preditiva, sensores integrados e armazenamento de energia solar</li>
                            <li><strong>Aprendizado Sináptico:</strong> Sistema VORTEXA SINAPSI™ registra falhas, acertos, ajustes e adaptações — e os transforma em simulação com o CAE VORTEXA™</li>
                            <li><strong>Propósito Real:</strong> Criado não para pista, mas para ambientes onde a falha pode custar tudo: desertos, zonas hostis, altitudes, missões solitárias</li>
                        </ul>
                        
                        <p>O VORTEXA não se compara à geração atual de veículos elétricos, off-roaders ou protótipos de rally. Ele pertence a uma nova categoria: <strong>sistemas cognitivos de missão veicular</strong>. E dentro dessa categoria, ele está sozinho. Por enquanto.</p>
                        
                        <p><strong>Disruptivo não é o que brilha. É o que muda as regras.</strong> O VORTEXA não compete com o mercado — ele desafia o conceito de mobilidade extrema como o conhecemos.</p>
                        
                        <h4>Futuro, Expansão e Missão Sistêmica</h4>
                        <h5>Mais que Um Protótipo. Uma Plataforma Viva com Missão em Evolução.</h5>
                        
                        <p><em>O VORTEXA HYBRID não foi criado como fim — mas como fundação. Ele é o primeiro passo de uma plataforma modular, cognitiva e escalável para múltiplos domínios onde mobilidade, inteligência e sobrevivência precisam coexistir.</em></p>
                        
                        <p>Ao invés de versões estáticas, o VORTEXA segue um roteiro vivo de validação, aprendizado e replicação. A cada missão, ele coleta dados. A cada versão, ele evolui. A cada falha, ele fica mais preparado. E isso não se limita ao protótipo atual: estamos falando de uma <strong>família de plataformas integradas</strong>, que poderá alimentar veículos autônomos de resgate, operações defensivas, exploração industrial e soluções de engenharia extrema.</p>
                        
                        <h4>Etapas em Curso:</h4>
                        <ul>
                            <li><strong>2025–2026:</strong> Finalização de integração modular e roadmap de testes técnicos com SubCores™, PEM e Smart Skin™</li>
                            <li><strong>2026–2028:</strong> Testes em ambientes reais (deserto, clima severo, blackout), integração BCI e modos de missão QuickBay™</li>
                            <li><strong>2029+:</strong> Expansão para missões automatizadas, híbridas ou autônomas em contextos táticos, ambientais ou operacionais extremos</li>
                        </ul>
                        
                        <h4>Missão Sistêmica:</h4>
                        <p>O VORTEXA não é um produto. É uma iniciativa sistêmica que une engenheiros, designers, neurocientistas, pilotos, socorristas e pesquisadores. É sobre criar uma resposta tecnológica onde hoje há risco absoluto. É sobre dar à máquina não só força e velocidade — mas <strong>inteligência funcional</strong>.</p>
                        
                        <blockquote>
                            <p><strong>"Projetamos o VORTEXA para sobreviver onde o impossível começa — e inspirar onde o futuro precisa de coragem."</strong><br/>
                            – Equipe VORTEXA</p>
                        </blockquote>
                        
                        <p><strong>Próximo destino:</strong> O futuro não será colonizado por máquinas mais potentes — mas por máquinas mais lúcidas.</p>
                        
                        <h4>Declaração Oficial de Projeto</h4>
                        <h5>Uma Engenharia de Sobrevivência com Propósito</h5>
                        
                        <p>O VORTEXA HYBRID representa mais do que uma convergência de tecnologias — ele é a materialização de uma ideia: <strong>a inteligência precisa ser funcional, resistente e adaptável para fazer sentido em campo real</strong>. Projetamos uma arquitetura que aprende, uma carcaça que sente, um cérebro que sobrevive.</p>
                        
                        <p>Tudo foi pensado com propósito: cada sensor, cada fallback, cada algoritmo. Não buscamos apenas vencer provas, quebrar recordes ou gerar headlines. Buscamos criar algo que possa atravessar o impossível e voltar com dados para melhorar a próxima missão.</p>
                        
                        <p>Esta não é uma máquina final. É uma primeira iteração de um projeto sistêmico, colaborativo e em constante refinamento. Desenvolvido com especialistas de classe mundial, parceiros institucionais e acadêmicos de ponta, o VORTEXA é um chamado à engenharia com alma e ao design que responde ao caos com inteligência.</p>
                        
                        <blockquote>
                            <p><strong>"Projetamos o VORTEXA como quem projeta um astronauta terrestre. Ele deve sobreviver. Ele deve pensar. Ele deve voltar."</strong><br/>
                            – Comitê VORTEXA</p>
                        </blockquote>
                        
                        <h4>Princípios Fundadores:</h4>
                        <ul>
                            <li><strong>Resiliência ativa:</strong> A falha é prevista. A adaptação é automática.</li>
                            <li><strong>Aprendizado contínuo:</strong> Cada missão deixa o sistema mais consciente.</li>
                            <li><strong>Design funcional:</strong> Nada é decorativo. Tudo é estruturante.</li>
                            <li><strong>Missão coletiva:</strong> Desenvolvido por e para especialistas, pilotos, resgatistas, engenheiros e visionários.</li>
                        </ul>
                        
                        <p><strong>O VORTEXA HYBRID não é o fim de uma linha de montagem. É o início de uma nova engenharia. Viva, consciente e em missão.</strong></p>
                    </section>
                `
            },
            glossario: {                title: "Glossário Técnico",
                content: `<p><strong>Glossário Técnico</strong></p>
<table>
<thead>
<tr>
<th><strong>Termo/Sigla</strong></th>
<th><strong>Tipo</strong></th>
<th><strong>Definição</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ABS</strong></td>
<td>-</td>
<td>Sistema de Freios Antitravamento</td>
</tr>
<tr>
<td><strong>ANSYS</strong></td>
<td>Industrial</td>
<td>Software de simulação CAE</td>
</tr>
<tr>
<td><strong>CAE</strong></td>
<td>-</td>
<td>Computer-Aided Engineering (Engenharia Assistida por Computador)</td>
</tr>
<tr>
<td><strong>CTIS</strong></td>
<td>-</td>
<td>Central Tire Intelligence System (Sistema Inteligente Central de Pneus)</td>
</tr>
<tr>
<td><strong>DENSO</strong></td>
<td>Industrial</td>
<td>Fabricante de componentes eletrônicos automotivos</td>
</tr>
<tr>
<td><strong>DSSV</strong></td>
<td>-</td>
<td>Dynamic Suspensions Spool Valve (Válvula Spool de Suspensão Dinâmica)</td>
</tr>
<tr>
<td><strong>ECLSS</strong></td>
<td>-</td>
<td>Environmental Control and Life Support System (Sistema de Controle Ambiental e Suporte à Vida)</td>
</tr>
<tr>
<td><strong>EDR</strong></td>
<td>-</td>
<td>Event Data Recorder (Registrador de Dados de Evento)</td>
</tr>
<tr>
<td><strong>ERS</strong></td>
<td>-</td>
<td>Energy Recovery System (Sistema de Recuperação de Energia)</td>
</tr>
<tr>
<td><strong>FIA</strong></td>
<td>-</td>
<td>Fédération Internationale de l\\'Automobile</td>
</tr>
<tr>
<td><strong>HUD</strong></td>
<td>-</td>
<td>Head-Up Display (Display de Cabeça Erguida)</td>
</tr>
<tr>
<td><strong>HBR-1</strong></td>
<td>-</td>
<td>Motor de Corrida a Hidrogênio VORTEXA 1</td>
</tr>
<tr>
<td><strong>ICE</strong></td>
<td>-</td>
<td>Internal Combustion Engine (Motor de Combustão Interna)</td>
</tr>
<tr>
<td><strong>Kleist Layer™</strong></td>
<td>-</td>
<td>Camada estrutural energética regenerativa integrada à Smart Skin™</td>
</tr>
<tr>
<td><strong>LiDAR</strong></td>
<td>-</td>
<td>Light Detection and Ranging (Sensor de distância baseado em laser)</td>
</tr>
<tr>
<td><strong>MRCS</strong></td>
<td>-</td>
<td>Modular Reconfigurable Chassis System</td>
</tr>
<tr>
<td><strong>NEVO OS™</strong></td>
<td>-</td>
<td>Sistema operacional embarcado híbrido com suporte a RTOS e aprendizado contínuo</td>
</tr>
<tr>
<td><strong>OptiCAN Matrix™</strong></td>
<td>-</td>
<td>Barramento embarcado tolerante a falhas baseado em CAN XL e fibra POF</td>
</tr>
<tr>
<td><strong>OTA</strong></td>
<td>-</td>
<td>Over-The-Air (Atualizações remotas)</td>
</tr>
<tr>
<td><strong>PEM</strong></td>
<td>-</td>
<td>Proton Exchange Membrane (Tecnologia de célula de hidrogênio)</td>
</tr>
<tr>
<td><strong>PEM Turbine</strong></td>
<td>-</td>
<td>Microturbina elétrica de célula a hidrogênio usada como fallback energético</td>
</tr>
<tr>
<td><strong>QEV</strong></td>
<td>-</td>
<td>Quad Electric Vector (Unidade de propulsão vetorial elétrica)</td>
</tr>
<tr>
<td><strong>QuickBay™</strong></td>
<td>-</td>
<td>Sistema modular de troca rápida de kits de missão em campo</td>
</tr>
<tr>
<td><strong>SADEV</strong></td>
<td>Industrial</td>
<td>Fabricante de sistemas de transmissão de competição</td>
</tr>
<tr>
<td><strong>SensorGrid™</strong></td>
<td>-</td>
<td>Rede embarcada de sensores estruturais, térmicos, elétricos e cinemáticos</td>
</tr>
<tr>
<td><strong>SISMO™</strong></td>
<td>-</td>
<td>Sistema Inteligente de Suspensão Modular Otimizada</td>
</tr>
<tr>
<td><strong>Smart Skin™</strong></td>
<td>-</td>
<td>Carenagem ativa multicamadas com sensores, autocura, geração e armazenamento de energia</td>
</tr>
<tr>
<td><strong>SMFD™</strong></td>
<td>-</td>
<td>Sequential Manual Failsafe Drive</td>
</tr>
<tr>
<td><strong>SubCore™</strong></td>
<td>-</td>
<td>Módulo computacional autônomo embarcado com capacidade de inferência e fallback independente</td>
</tr>
<tr>
<td><strong>TAK-4i</strong></td>
<td>-</td>
<td>Sistema de suspensão independente da Oshkosh Defense</td>
</tr>
<tr>
<td><strong>V-DVD™</strong></td>
<td>-</td>
<td>Tração Direta Vetorial VORTEXA</td>
</tr>
<tr>
<td><strong>VAVi™</strong></td>
<td>-</td>
<td>Vortexa Active Valvetrain Intelligent (sistema de válvulas ativas adaptativas)</td>
</tr>
<tr>
<td><strong>VIRETTA™</strong></td>
<td>-</td>
<td>Vortexa Intelligent Reactive Traction &amp; Tactical Assistance – Sistema integrado de direção, frenagem e bypass com inteligência embarcada, redundância neural e failback hidráulico.</td>
</tr>
<tr>
<td><strong>Vortexa Brain™</strong></td>
<td>-</td>
<td>Unidade central de inferência cognitiva embarcada baseada em VORTEXCORE™</td>
</tr>
<tr>
<td><strong>VORTEXCORE™</strong></td>
<td>-</td>
<td>Família de ASIC SoCs para inferência neural distribuída</td>
</tr>
<tr>
<td><strong>VORTEXA SINAPSI™</strong></td>
<td>-</td>
<td>Arquitetura embarcada para aprendizado profundo contínuo e runtime adaptativo</td>
</tr>
<tr>
<td><strong>VRSH™</strong></td>
<td>-</td>
<td>Capacete Inteligente com HUD adaptativo, sensores BCI/EMG e fallback auditivo</td>
</tr>
<tr>
<td><strong>VSC-RESIL™</strong></td>
<td>-</td>
<td>Cápsula de sobrevivência modular e blindada VORTEXA</td>
</tr>
<tr>
<td><strong>VULCANS™</strong></td>
<td>-</td>
<td>Rede autônoma embarcada para suporte de vida e redundância térmica</td>
</tr>
<tr>
<td><strong>W2RC</strong></td>
<td>-</td>
<td>World Rally-Raid Championship</td>
</tr>
<tr>
<td><strong>xAI</strong></td>
<td>-</td>
<td>Empresa de IA embarcada e criadora do Grok 6</td>
</tr>
<tr>
<td><strong>xRT-VTXA™</strong></td>
<td>-</td>
<td>Runtime proprietário de tempo real estendido com fallback cognitivo</td>
</tr>
</tbody>
</table>
<p><em>Nota: termos marcados com ™ fazem parte do ecossistema proprietário VORTEXA. Clique sobre os termos no corpo do documento para acessar esta seção.</em></p>
<p><strong>Normas Técnicas e Conformidade</strong></p>
<p>O VORTEXA HYBRID foi desenvolvido em conformidade com as principais normas internacionais que regem a segurança funcional automotiva, robustez ambiental, sistemas críticos embarcados, compatibilidade regulatória para competição extrema, abastecimento de hidrogênio e cibersegurança. A adesão a esses marcos normativos assegura a interoperabilidade global, proteção do operador e confiabilidade operacional em múltiplos cenários táticos.</p>
<p><strong>1. Segurança Funcional e Sistemas Críticos</strong></p>
<table>
<thead>
<tr>
<th><strong>Norma</strong></th>
<th><strong>Aplicação</strong></th>
<th><strong>Descrição</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ISO 26262 – ASIL-D</strong></td>
<td>Segurança automotiva</td>
<td>Define requisitos para sistemas embarcados críticos com falha segura. Aplicada ao Vortexa Brain™, NEVO OS™, SubCores™, ECU Resilient™ e modos de fallback cognitivo.</td>
</tr>
<tr>
<td><strong>IEC 61508</strong></td>
<td>Sistemas elétricos/eletrônicos</td>
<td>Norma genérica de segurança funcional para todos os níveis do sistema eletrônico do VORTEXA.</td>
</tr>
<tr>
<td><strong>AUTOSAR Adaptive</strong></td>
<td>Arquitetura embarcada</td>
<td>Padrão para sistemas automotivos adaptativos e software tolerante a falhas.</td>
</tr>
</tbody>
</table>
<p><strong>2. Robustez Ambiental e Operação Extrema</strong></p>
<table>
<thead>
<tr>
<th><strong>Norma</strong></th>
<th><strong>Aplicação</strong></th>
<th><strong>Descrição</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>MIL-STD-810H</strong></td>
<td>Condições extremas</td>
<td>Padroniza testes de resistência ambiental, como vibração, choque térmico, poeira, lama, submersão e altitude.</td>
</tr>
<tr>
<td><strong>IP68/IP69K</strong></td>
<td>Proteção contra água e poeira</td>
<td>Certificações para selagem completa de componentes eletrônicos críticos contra intrusão de água sob pressão e partículas sólidas.</td>
</tr>
<tr>
<td><strong>SAE J1455</strong></td>
<td>Veículos pesados</td>
<td>Testes de durabilidade e validação ambiental em veículos fora de estrada e militares.</td>
</tr>
</tbody>
</table>
<p><strong>3. Normas Específicas de Combustível e H₂</strong></p>
<table>
<thead>
<tr>
<th><strong>Norma</strong></th>
<th><strong>Aplicação</strong></th>
<th><strong>Descrição</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>SAE J2601</strong></td>
<td>Tanques de hidrogênio</td>
<td>Protocolo de abastecimento seguro para veículos com H₂ de 700 bar. Compatível com os tanques modulares do VORTEXA HYBRID.</td>
</tr>
<tr>
<td><strong>ISO 19880-1</strong></td>
<td>Infraestrutura H₂</td>
<td>Segurança de equipamentos para reabastecimento com hidrogênio gasoso.</td>
</tr>
<tr>
<td><strong>UN ECE R134</strong></td>
<td>Sistemas de combustível H₂</td>
<td>Regulamenta requisitos técnicos para componentes de hidrogênio em veículos rodoviários.</td>
</tr>
</tbody>
</table>
<p><strong>4. Competição e Conformidade Esportiva</strong></p>
<table>
<thead>
<tr>
<th><strong>Norma</strong></th>
<th><strong>Aplicação</strong></th>
<th><strong>Descrição</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>FIA T1U</strong></td>
<td>Rally-Raid</td>
<td>Regulamento técnico e de segurança para a categoria Ultimate do World Rally-Raid Championship (W2RC).</td>
</tr>
<tr>
<td><strong>A.S.O. Safety Guide</strong></td>
<td>Eventos Dakar</td>
<td>Normas específicas de segurança exigidas pela organização do Rally Dakar (capacetes, HUD, rádios, sistemas embarcados).</td>
</tr>
<tr>
<td><strong>FIA Appendix J</strong></td>
<td>Equipamento de competição</td>
<td>Regulamenta estruturas de segurança, chassi, EDR, extintores, assentos e cintos.</td>
</tr>
</tbody>
</table>
<p><strong>5. Cibersegurança, Dados e Integridade Cognitiva</strong></p>
<table>
<thead>
<tr>
<th><strong>Norma</strong></th>
<th><strong>Aplicação</strong></th>
<th><strong>Descrição</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ISO 27001</strong></td>
<td>Cibersegurança</td>
<td>Gestão de segurança da informação para ECUs, redes embarcadas, runtime NEVO OS™ e o ambiente cognitivo distribuído.</td>
</tr>
<tr>
<td><strong>UNECE R155</strong></td>
<td>Segurança cibernética veicular</td>
<td>Requisitos obrigatórios para veículos inteligentes e conectados a partir de 2024.</td>
</tr>
<tr>
<td><strong>UNECE R156</strong></td>
<td>Atualizações OTA</td>
<td>Norma internacional para gerenciamento seguro de atualizações remotas e firmware embarcado.</td>
</tr>
</tbody>
</table>
<p><strong>6. Padrões de Simulação, Teste e Qualidade CAE</strong></p>
<table>
<thead>
<tr>
<th><strong>Norma</strong></th>
<th><strong>Aplicação</strong></th>
<th><strong>Descrição</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ISO 9001</strong></td>
<td>Qualidade</td>
<td>Gestão de qualidade aplicada à engenharia e manufatura de sistemas VORTEXA.</td>
</tr>
<tr>
<td><strong>ISO 10303 (STEP)</strong></td>
<td>Troca de dados CAD/CAE</td>
<td>Interoperabilidade de modelos e gêmeos digitais com plataformas ANSYS/CAE.</td>
</tr>
<tr>
<td><strong>DO-330</strong></td>
<td>Ferramentas de verificação</td>
<td>Qualificação de ferramentas de simulação, análise e certificação digital em projetos críticos.</td>
</tr>
</tbody>
</table>`
        </div>
        <div class="glossary-item" id="sensorgid">
            <h4>SensorGrid™</h4>
            <p>Rede embarcada de sensores estruturais, térmicos, elétricos e cinemáticos</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="sismo">
            <h4>SISMO™</h4>
            <p>Sistema Inteligente de Suspensão Modular Otimizada</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="smart-skin">
            <h4>Smart Skin™</h4>
            <p>Carenagem ativa multicamadas com sensores, autocura, geração e armazenamento de energia</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="smfd">
            <h4>SMFD™</h4>
            <p>Sequential Manual Failsafe Drive</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="subcore">
            <h4>SubCore™</h4>
            <p>Módulo computacional autônomo embarcado com capacidade de inferência e fallback independente</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="tak-4i">
            <h4>TAK-4i</h4>
            <p>Sistema de suspensão independente da Oshkosh Defense</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="v-dvd">
            <h4>V-DVD™</h4>
            <p>Tração Direta Vetorial VORTEXA</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="vavi">
            <h4>VAVi™</h4>
            <p>Vortexa Active Valvetrain Intelligent (sistema de válvulas ativas adaptativas)</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="viretta">
            <h4>VIRETTA™</h4>
            <p>Vortexa Intelligent Reactive Traction & Tactical Assistance – Sistema integrado de direção, frenagem e bypass com inteligência embarcada, redundância neural e failback hidráulico.</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="vortexa-brain">
            <h4>Vortexa Brain™</h4>
            <p>Unidade central de inferência cognitiva embarcada baseada em VORTEXCORE™</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="vortexacore">
            <h4>VORTEXCORE™</h4>
            <p>Família de ASIC SoCs para inferência neural distribuída</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="vortexa-sinapsi">
            <h4>VORTEXA SINAPSI™</h4>
            <p>Arquitetura embarcada para aprendizado profundo contínuo e runtime adaptativo</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="vrsh">
            <h4>VRSH™</h4>
            <p>Capacete Inteligente com HUD adaptativo, sensores BCI/EMG e fallback auditivo</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="vsc-resil">
            <h4>VSC-RESIL™</h4>
            <p>Cápsula de sobrevivência modular e blindada VORTEXA</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="vulcans">
            <h4>VULCANS™</h4>
            <p>Rede autônoma embarcada para suporte de vida e redundância térmica</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="w2rc">
            <h4>W2RC</h4>
            <p>World Rally-Raid Championship</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="xai">
            <h4>xAI</h4>
            <p>Empresa de IA embarcada e criadora do Grok 6</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
        <div class="glossary-item" id="xrt-vtca">
            <h4>xRT-VTXA™</h4>
            <p>Runtime proprietário de tempo real estendido com fallback cognitivo</p>
            <button onclick="returnToOrigin()" class="return-btn">← Voltar ao texto</button>
        </div>
    </div>
    <p><em>Nota: termos marcados com ™ fazem parte do ecossistema proprietário VORTEXA. Clique sobre os termos no corpo do documento para acessar esta seção.</em></p>
</section>

<section id="normas-tecnicas">
    <h3>Normas Técnicas e Conformidade</h3>
    <div class="section-nav">
        <a href="#glossario" class="nav-link">← Voltar à Seção</a>
    </div>
    <p>O VORTEXA HYBRID foi desenvolvido em conformidade com as principais normas internacionais que regem a segurança funcional automotiva, robustez ambiental, sistemas críticos embarcados, compatibilidade regulatória para competição extrema, abastecimento de hidrogênio e cibersegurança. A adesão a esses marcos normativos assegura a interoperabilidade global, proteção do operador e confiabilidade operacional em múltiplos cenários táticos.</p>

    <h4>1. Segurança Funcional e Sistemas Críticos</h4>
    <table>
        <thead>
            <tr>
                <th>Norma</th>
                <th>Aplicação</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ISO 26262 – ASIL-D</td>
                <td>Segurança automotiva</td>
                <td>Define requisitos para sistemas embarcados críticos com falha segura. Aplicada ao Vortexa Brain™, NEVO OS™, SubCores™, ECU Resilient™ e modos de fallback cognitivo.</td>
            </tr>
            <tr>
                <td>IEC 61508</td>
                <td>Sistemas elétricos/eletrônicos</td>
                <td>Norma genérica de segurança funcional para todos os níveis do sistema eletrônico do VORTEXA.</td>
            </tr>
            <tr>
                <td>AUTOSAR Adaptive</td>
                <td>Arquitetura embarcada</td>
                <td>Padrão para sistemas automotivos adaptativos e software tolerante a falhas.</td>
            </tr>
        </tbody>
    </table>

    <h4>2. Robustez Ambiental e Operação Extrema</h4>
    <table>
        <thead>
            <tr>
                <th>Norma</th>
                <th>Aplicação</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>MIL-STD-810H</td>
                <td>Condições extremas</td>
                <td>Padroniza testes de resistência ambiental, como vibração, choque térmico, poeira, lama, submersão e altitude.</td>
            </tr>
            <tr>
                <td>IP68/IP69K</td>
                <td>Proteção contra água e poeira</td>
                <td>Certificações para selagem completa de componentes eletrônicos críticos contra intrusão de água sob pressão e partículas sólidas.</td>
            </tr>
            <tr>
                <td>SAE J1455</td>
                <td>Veículos pesados</td>
                <td>Testes de durabilidade e validação ambiental em veículos fora de estrada e militares.</td>
            </tr>
        </tbody>
    </table>

    <h4>3. Normas Específicas de Combustível e H₂</h4>
    <table>
        <thead>
            <tr>
                <th>Norma</th>
                <th>Aplicação</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>SAE J2601</td>
                <td>Tanques de hidrogênio</td>
                <td>Protocolo de abastecimento seguro para veículos com H₂ de 700 bar. Compatível com os tanques modulares do VORTEXA HYBRID.</td>
            </tr>
            <tr>
                <td>ISO 19880-1</td>
                <td>Infraestrutura H₂</td>
                <td>Segurança de equipamentos para reabastecimento com hidrogênio gasoso.</td>
            </tr>
            <tr>
                <td>UN ECE R134</td>
                <td>Sistemas de combustível H₂</td>
                <td>Regulamenta requisitos técnicos para componentes de hidrogênio em veículos rodoviários.</td>
            </tr>
        </tbody>
    </table>

    <h4>4. Competição e Conformidade Esportiva</h4>
    <table>
        <thead>
            <tr>
                <th>Norma</th>
                <th>Aplicação</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>FIA T1U</td>
                <td>Rally-Raid</td>
                <td>Regulamento técnico e de segurança para a categoria Ultimate do World Rally-Raid Championship (W2RC).</td>
            </tr>
            <tr>
                <td>A.S.O. Safety Guide</td>
                <td>Eventos Dakar</td>
                <td>Normas específicas de segurança exigidas pela o
(Content truncated due to size limit. Use line ranges to read in chunks)
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

