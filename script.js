// Conteúdo em múltiplos idiomas
const content = {
    pt: {
        title: "VORTEXA HYBRID TECH FRAMEWORK",
        sections: {
            intro: {
                title: "INTRODUÇÃO e RESUMO EXECUTIVO",
                content: `
                    <h3>Introdução Institucional</h3>
                    <p>Origem e Visão Estratégica: A <a href="#glossario" class="glossary-term" data-term="vortexa-motorsport">Vortexa Motorsport Inc.</a> foi fundada no ecossistema de inovação do <a href="#glossario" class="glossary-term" data-term="stanford-startx">Stanford StartX</a>, como spin-off convergente de pesquisas avançadas em neuroengenharia, inteligência artificial e mobilidade autônoma, com sinergia direta com o <a href="#glossario" class="glossary-term" data-term="stanford-ddl">Stanford Driving Decision Lab (DDL)</a>. A empresa mantém vínculos ativos com centros de excelência globais para transformar disrupção em confiabilidade aplicada — do deserto ao espaço.</p>
                    
                    <p>Com sede em fase de instalação no <a href="#glossario" class="glossary-term" data-term="colorado-springs">Colorado Springs Innovation Hub</a>, próximo a zonas de testes em altitude, baixa pressão e clima severo, a nova central técnico-científica da Vortexa Motorsport Inc. abrigará o complexo de validação <a href="#glossario" class="glossary-term" data-term="cae-vortexa">CAE VORTEXA™</a>, incluindo infraestrutura para simulação termomecânica, laboratório de runtime neural e um túnel de vento modular 60% para protótipos de carros off-road com aerodinâmica otimizada (Cx ≈ 0,38).</p>
                    
                    <h4>1.1 Visão Geral do VORTEXA HYBRID</h4>
                    <p>O <a href="#glossario" class="glossary-term" data-term="vortexa-hybrid">VORTEXA HYBRID</a> é uma plataforma modular e resiliente baseada no <a href="#glossario" class="glossary-term" data-term="vortexa-framework">VORTEXA HYBRID TECH FRAMEWORK</a>, uma arquitetura integrada para mobilidade extrema. Composta por cinco blocos funcionais interdependentes — estrutura, propulsão, energia, cognição e escalabilidade —, a plataforma foi projetada para operar com confiabilidade em ambientes como <a href="#glossario" class="glossary-term" data-term="w2rc">W2RC</a>, operações de defesa, mineração remota e resgate autônomo.</p>
                    
                    <h4>1.2 Diferenciais e Benefícios</h4>
                    <ul>
                        <li>Resiliência Sistêmica: Redundância física, digital e energética, com fallback manual e microECUs.</li>
                        <li>Eficiência Energética: 85% em modo híbrido, com torque vetorial e recuperação térmica avançada.</li>
                        <li>Autonomia Inteligente: 300–900 km (modo fallback); até 2.000 km com 20 kg de H₂ (modo estendido).</li>
                        <li>IA em Tempo Real: Grok 6 com latência ≤10 ms, inferência embarcada (<a href="#glossario" class="glossary-term" data-term="tinyml">TinyML</a>) e <a href="#glossario" class="glossary-term" data-term="xrt-vtxa">xRT-VTXA</a> para blackout.</li>
                        <li>Aplicações Multissetoriais: Rally-raid (W2RC), defesa tática, mineração profunda, operações <a href="#glossario" class="glossary-term" data-term="sar">SAR</a>.</li>
                    </ul>
                    
                    <h4>1.3 Roadmap Estratégico e Chamada para Ação</h4>
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
                `
            },
            dados: {
                title: "DADOS TÉCNICOS",
                content: `
                    <h3>Parte II: Núcleo Técnico e Arquitetura Cognitiva do Sistema</h3>
                    
                    <h4>2.1 Arquitetura Estrutural e Modularidade</h4>
                    <p>A estrutura do VORTEXA HYBRID foi concebida com um único princípio inegociável: sobreviver e continuar operando mesmo após falhas severas. Sua arquitetura modular e multicamadas, denominada <a href="#glossario" class="glossary-term" data-term="mrcs">MRCS™ – Modular Reconfigurable Chassis System</a>, combina blindagem ativa, redes de controle redundantes e reconfiguração funcional em campo.</p>
                    
                    <h5>Divisão Estrutural – MRCS™</h5>
                    <ul>
                        <li><strong><a href="#glossario" class="glossary-term" data-term="ifm">IFM – Módulo Frontal Integrado</a>:</strong> Estrutura de absorção programada com radar frontal, painéis solares <a href="#glossario" class="glossary-term" data-term="cigs">CIGS</a> integrados, chassi deformável e travessia de sensores <a href="#glossario" class="glossary-term" data-term="lidar">LIDAR</a>/SensorGrid™.</li>
                        <li><strong><a href="#glossario" class="glossary-term" data-term="ccm">CCM – Módulo Central Blindado</a>:</strong> Monocoque em multicamadas com <a href="#glossario" class="glossary-term" data-term="survivor-capsule">Survivor Capsule™ (VSC-RESIL™)</a> integrada, tanques laterais de H₂ encapsulados, blindagem balística, isolamento térmico e <a href="#glossario" class="glossary-term" data-term="vortexa-brain">Vortexa Brain™</a> em núcleo protegido.</li>
                        <li><strong><a href="#glossario" class="glossary-term" data-term="rtm">RTM – Módulo Traseiro Térmico</a>:</strong> Compartimento para o <a href="#glossario" class="glossary-term" data-term="ice-hbr1">ICE HBR-1</a> (PIPO Moteurs), motores QEV vetoriais, microturbina <a href="#glossario" class="glossary-term" data-term="pem">PEM</a>, baterias de estado sólido (QuantumScape/Sila) e exaustão adaptativa Akrapovič, com circuito térmico redundante <a href="#glossario" class="glossary-term" data-term="vulcans">VULCANS™</a>.</li>
                    </ul>
                    
                    <h5>Parâmetros Técnicos Atualizados:</h5>
                    <ul>
                        <li>Material: Compósito híbrido <a href="#glossario" class="glossary-term" data-term="cfrp-grafeno">CFRP-grafeno</a> com aramida balística</li>
                        <li>Rigidez Torcional: 45 kNm/° (CAE Validated)</li>
                        <li>Peso Estrutural Total: ~1.800 kg (configuração média)</li>
                        <li>Tanques de H₂: 2×5 kg (Eaton 700 bar encapsulados)</li>
                        <li>Resfriamento Estrutural: Rede VULCANS™ multicircuito (80 bar)</li>
                        <li>Interoperabilidade: Compatível com <a href="#glossario" class="glossary-term" data-term="flute-kits">Flute Kits™</a> e <a href="#glossario" class="glossary-term" data-term="quickbay">QuickBay™</a> para reconfiguração rápida em campo</li>
                    </ul>
                    
                    <h4>2.2 Filosofia Funcional e Design Gordon Murray</h4>
                    <p>A filosofia funcional de Gordon Murray — "_Design should follow the purest function_" — inspira profundamente o VORTEXA HYBRID. No lugar de excessos, encontra-se clareza estrutural. No lugar de ornamentos, propósito técnico absoluto.</p>
                    
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
                    
                    <h4>2.3 Survivor Capsule™ (VSC-RESIL™)</h4>
                    <p>A <a href="#glossario" class="glossary-term" data-term="survivor-capsule">Survivor Capsule™ VSC-RESIL™</a> é o núcleo de proteção biomecânica, cognitiva e térmica do VORTEXA HYBRID. Desenvolvida com inspiração em cápsulas aeroespaciais, sistemas <a href="#glossario" class="glossary-term" data-term="mrap">MRAP</a> militares e cockpits de hipercarros de resistência, a VSC-RESIL™ integra blindagem leve, gerenciamento térmico adaptativo e compatibilidade total com o capacete inteligente <a href="#glossario" class="glossary-term" data-term="vrsh">VRSH™</a>.</p>
                `
            },
            press: {
                title: "PRESS RELEASE",
                content: `
                    <h3>VORTEXA HYBRID TECH FRAMEWORK: A Revolução na Mobilidade Extrema</h3>
                    <p>A Vortexa Motorsport, nascida do ecossistema de inovação da Stanford StartX, apresenta o VORTEXA HYBRID TECH FRAMEWORK, uma plataforma de mobilidade inteligente que redefine os limites da engenharia automotiva. Diferente de qualquer veículo convencional, o VORTEXA HYBRID é um ecossistema vivo, adaptativo e resiliente, projetado para operar nos ambientes mais desafiadores do planeta, desde os desertos escaldantes até as operações de resgate mais críticas.</p>
                    
                    <p>Com uma arquitetura modular e multicamadas, o VORTEXA HYBRID integra tecnologias de ponta em neuroengenharia, inteligência artificial e robótica autônoma. Seu design, inspirado na filosofia de Gordon Murray, prioriza a funcionalidade e a sobrevivência em vez de meros adornos. Cada componente é otimizado para resistir a falhas severas, reconfigurar-se dinamicamente e continuar operando mesmo sob as condições mais extremas.</p>
                    
                    <p>No coração do VORTEXA HYBRID está o VORTEXA BRAIN™, um núcleo de inteligência distribuída que, em conjunto com os SubCores™ e o sistema operacional NEVO OS™, garante uma capacidade de adaptação sem precedentes. A inovadora VORTEXA SMART SKIN™ atua como um escudo térmico e sistema energético auxiliar, enquanto a Survivor Capsule™ (VSC-RESIL™) oferece proteção biomecânica e cognitiva inigualável para a tripulação.</p>
                    
                    <p>Com um powertrain híbrido de alta performance, o VORTEXA HYBRID promete eficiência energética superior e autonomia estendida, operando com hidrogênio e e-fuels. A capacidade de reconfiguração rápida em campo, através dos Flute Kits™ e da rede QuickBay™ FieldOps, assegura que o VORTEXA esteja sempre pronto para qualquer missão.</p>
                    
                    <p>A Vortexa Motorsport está validando o VORTEXA HYBRID através de gêmeos digitais e testes de campo rigorosos, com um roadmap estratégico que culmina em validações extremas até 2030. Convidamos parceiros da indústria, institutos de pesquisa e agências de missão crítica a se juntarem a nós nesta jornada para moldar o futuro da mobilidade extrema.</p>
                `
            },
            glossario: {
                title: "GLOSSÁRIO TÉCNICO",
                content: `
                    <div class="glossary-grid">
                        <div class="glossary-item" id="vortexa-hybrid">
                            <h4>VORTEXA HYBRID</h4>
                            <p>Plataforma modular e resiliente baseada no VORTEXA HYBRID TECH FRAMEWORK para mobilidade extrema.</p>
                        </div>
                        
                        <div class="glossary-item" id="vortexa-framework">
                            <h4>VORTEXA HYBRID TECH FRAMEWORK</h4>
                            <p>Arquitetura cognitiva, modular e resiliente para mobilidade inteligente.</p>
                        </div>
                        
                        <div class="glossary-item" id="stanford-startx">
                            <h4>Stanford StartX</h4>
                            <p>Ecossistema de inovação onde a Vortexa Motorsport Inc. foi fundada.</p>
                        </div>
                        
                        <div class="glossary-item" id="stanford-ddl">
                            <h4>Stanford Driving Decision Lab (DDL)</h4>
                            <p>Laboratório de decisão de condução de Stanford, com o qual a Vortexa Motorsport Inc. mantém sinergia.</p>
                        </div>
                        
                        <div class="glossary-item" id="cae-vortexa">
                            <h4>CAE VORTEXA™</h4>
                            <p>Complexo de validação da Vortexa Motorsport Inc., incluindo infraestrutura para simulação termomecânica e laboratório de runtime neural.</p>
                        </div>
                        
                        <div class="glossary-item" id="w2rc">
                            <h4>W2RC</h4>
                            <p>World Rally-Raid Championship.</p>
                        </div>
                        
                        <div class="glossary-item" id="mrcs">
                            <h4>MRCS™ – Modular Reconfigurable Chassis System</h4>
                            <p>Arquitetura modular e multicamadas do chassi do VORTEXA HYBRID.</p>
                        </div>
                        
                        <div class="glossary-item" id="survivor-capsule">
                            <h4>Survivor Capsule™ (VSC-RESIL™)</h4>
                            <p>Núcleo de proteção biomecânica, cognitiva e térmica do VORTEXA HYBRID.</p>
                        </div>
                        
                        <div class="glossary-item" id="vortexa-brain">
                            <h4>VORTEXA BRAIN™</h4>
                            <p>Núcleo de inteligência operacional do VORTEXA HYBRID.</p>
                        </div>
                        
                        <div class="glossary-item" id="subcores">
                            <h4>SubCores™</h4>
                            <p>Microcontroladores distribuídos com funções específicas.</p>
                        </div>
                        
                        <div class="glossary-item" id="nevo-os">
                            <h4>NEVO OS™</h4>
                            <p>Sistema operacional em tempo real.</p>
                        </div>
                        
                        <div class="glossary-item" id="smart-skin">
                            <h4>VORTEXA SMART SKIN™</h4>
                            <p>Carenagem funcional com propriedades energéticas, autorreparáveis e ultracapacitivas.</p>
                        </div>
                        
                        <div class="glossary-item" id="flute-kits">
                            <h4>Flute Kits™</h4>
                            <p>Módulos compactos de manutenção crítica, diagnóstico tático e reconfiguração embarcada.</p>
                        </div>
                        
                        <div class="glossary-item" id="quickbay">
                            <h4>QuickBay™ FieldOps</h4>
                            <p>Rede que viabiliza o estabelecimento de bases operacionais modulares em zonas remotas.</p>
                        </div>
                        
                        <div class="glossary-item" id="xrt-vtxa">
                            <h4>xRT-VTXA™</h4>
                            <p>Runtime cognitivo embarcado para gestão tática com fallback físico manual.</p>
                        </div>
                        
                        <div class="glossary-item" id="tinyml">
                            <h4>TinyML</h4>
                            <p>Machine Learning embarcado em dispositivos de baixa potência.</p>
                        </div>
                        
                        <div class="glossary-item" id="sar">
                            <h4>SAR</h4>
                            <p>Search and Rescue (Busca e Resgate).</p>
                        </div>
                        
                        <div class="glossary-item" id="vrsh">
                            <h4>VRSH™</h4>
                            <p>Capacete com integração HUD (Head-Up Display), fallback auditivo, comando BCI (Brain-Computer Interface) e blindagem leve.</p>
                        </div>
                        
                        <div class="glossary-item" id="vulcans">
                            <h4>VULCANS™</h4>
                            <p>Sistema de refrigeração/limpeza do VORTEXA.</p>
                        </div>
                        
                        <div class="glossary-item" id="lidar">
                            <h4>LIDAR</h4>
                            <p>Light Detection and Ranging (Detecção e Alcance da Luz) - tecnologia de sensoriamento remoto.</p>
                        </div>
                        
                        <div class="glossary-item" id="cigs">
                            <h4>CIGS</h4>
                            <p>Copper Indium Gallium Selenide (Cobre, Índio, Gálio, Seleneto) - tipo de célula solar.</p>
                        </div>
                        
                        <div class="glossary-item" id="ice-hbr1">
                            <h4>ICE HBR-1</h4>
                            <p>Internal Combustion Engine (Motor de Combustão Interna) - modelo HBR-1.</p>
                        </div>
                        
                        <div class="glossary-item" id="pem">
                            <h4>PEM</h4>
                            <p>Proton Exchange Membrane (Membrana de Troca Protônica) - tipo de célula a combustível.</p>
                        </div>
                        
                        <div class="glossary-item" id="cfrp-grafeno">
                            <h4>CFRP-grafeno</h4>
                            <p>Carbon Fiber Reinforced Polymer (Polímero Reforçado com Fibra de Carbono) com grafeno.</p>
                        </div>
                        
                        <div class="glossary-item" id="mrap">
                            <h4>MRAP</h4>
                            <p>Mine-Resistant Ambush Protected (Resistente a Minas e Protegido contra Emboscadas).</p>
                        </div>
                    </div>
                `
            }
        }
    },
    en: {
        title: "VORTEXA HYBRID TECH FRAMEWORK",
        sections: {
            intro: {
                title: "INTRODUCTION and EXECUTIVE SUMMARY",
                content: `
                    <h3>Institutional Introduction</h3>
                    <p>Origin and Strategic Vision: <a href="#glossario" class="glossary-term" data-term="vortexa-motorsport">Vortexa Motorsport Inc.</a> was founded in the <a href="#glossario" class="glossary-term" data-term="stanford-startx">Stanford StartX</a> innovation ecosystem, as a convergent spin-off of advanced research in neuroengineering, artificial intelligence and autonomous mobility, with direct synergy with the <a href="#glossario" class="glossary-term" data-term="stanford-ddl">Stanford Driving Decision Lab (DDL)</a>. The company maintains active links with global centers of excellence to transform disruption into applied reliability — from desert to space.</p>
                    
                    <p>With headquarters being installed at the <a href="#glossario" class="glossary-term" data-term="colorado-springs">Colorado Springs Innovation Hub</a>, near high-altitude, low-pressure and severe climate testing zones, Vortexa Motorsport Inc.'s new technical-scientific center will house the <a href="#glossario" class="glossary-term" data-term="cae-vortexa">CAE VORTEXA™</a> validation complex, including infrastructure for thermomechanical simulation, neural runtime laboratory and a 60% modular wind tunnel for off-road car prototypes with optimized aerodynamics (Cx ≈ 0.38).</p>
                    
                    <h4>1.1 VORTEXA HYBRID Overview</h4>
                    <p>The <a href="#glossario" class="glossary-term" data-term="vortexa-hybrid">VORTEXA HYBRID</a> is a modular and resilient platform based on the <a href="#glossario" class="glossary-term" data-term="vortexa-framework">VORTEXA HYBRID TECH FRAMEWORK</a>, an integrated architecture for extreme mobility. Composed of five interdependent functional blocks — structure, propulsion, energy, cognition and scalability —, the platform was designed to operate reliably in environments such as <a href="#glossario" class="glossary-term" data-term="w2rc">W2RC</a>, defense operations, remote mining and autonomous rescue.</p>
                    
                    <h4>1.2 Differentials and Benefits</h4>
                    <ul>
                        <li>Systemic Resilience: Physical, digital and energetic redundancy, with manual fallback and microECUs.</li>
                        <li>Energy Efficiency: 85% in hybrid mode, with vectorial torque and advanced thermal recovery.</li>
                        <li>Intelligent Autonomy: 300–900 km (fallback mode); up to 2,000 km with 20 kg of H₂ (extended mode).</li>
                        <li>Real-Time AI: Grok 6 with latency ≤10 ms, embedded inference (<a href="#glossario" class="glossary-term" data-term="tinyml">TinyML</a>) and <a href="#glossario" class="glossary-term" data-term="xrt-vtxa">xRT-VTXA</a> for blackout.</li>
                        <li>Multi-sector Applications: Rally-raid (W2RC), tactical defense, deep mining, <a href="#glossario" class="glossary-term" data-term="sar">SAR</a> operations.</li>
                    </ul>
                    
                    <h4>1.3 Strategic Roadmap and Call to Action</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Milestone</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2025</td>
                                <td>CAE Validation</td>
                                <td>Torque, crash, AI and thermal flow modeling (ANSYS/CAE GmbH)</td>
                            </tr>
                            <tr>
                                <td>2026</td>
                                <td>Functional Prototypes</td>
                                <td>Hybrid powertrain testing (ICE + 2 rear ERS) and intelligent CTIS</td>
                            </tr>
                            <tr>
                                <td>2027</td>
                                <td>Complete Architecture</td>
                                <td>Implementation with 4 independent ERS, embedded CAE VORTEXA</td>
                            </tr>
                            <tr>
                                <td>2028</td>
                                <td>Interface Validation</td>
                                <td>VRSH™, HUD Vuzix, thermal sensors and BCI (neurofeedback) testing</td>
                            </tr>
                            <tr>
                                <td>2029</td>
                                <td>Rally dos Sertões</td>
                                <td>Field testing with full architecture, active fallback and modular kits</td>
                            </tr>
                            <tr>
                                <td>2030</td>
                                <td>Borneo Extreme / Final Validation</td>
                                <td>Hostile environment: dunes, forest, humidity, controlled electrical blackout</td>
                            </tr>
                        </tbody>
                    </table>
                `
            },
            dados: {
                title: "TECHNICAL DATA",
                content: `
                    <h3>Part II: Technical Core and Cognitive System Architecture</h3>
                    
                    <h4>2.1 Structural Architecture and Modularity</h4>
                    <p>The VORTEXA HYBRID structure was conceived with a single non-negotiable principle: survive and continue operating even after severe failures. Its modular and multilayer architecture, called <a href="#glossario" class="glossary-term" data-term="mrcs">MRCS™ – Modular Reconfigurable Chassis System</a>, combines active shielding, redundant control networks and functional field reconfiguration.</p>
                    
                    <h5>Structural Division – MRCS™</h5>
                    <ul>
                        <li><strong><a href="#glossario" class="glossary-term" data-term="ifm">IFM – Integrated Front Module</a>:</strong> Programmed absorption structure with frontal radar, integrated <a href="#glossario" class="glossary-term" data-term="cigs">CIGS</a> solar panels, deformable chassis and <a href="#glossario" class="glossary-term" data-term="lidar">LIDAR</a>/SensorGrid™ sensor crossing.</li>
                        <li><strong><a href="#glossario" class="glossary-term" data-term="ccm">CCM – Armored Central Module</a>:</strong> Multilayer monocoque with integrated <a href="#glossario" class="glossary-term" data-term="survivor-capsule">Survivor Capsule™ (VSC-RESIL™)</a>, encapsulated lateral H₂ tanks, ballistic shielding, thermal insulation and <a href="#glossario" class="glossary-term" data-term="vortexa-brain">Vortexa Brain™</a> in protected core.</li>
                        <li><strong><a href="#glossario" class="glossary-term" data-term="rtm">RTM – Thermal Rear Module</a>:</strong> Compartment for <a href="#glossario" class="glossary-term" data-term="ice-hbr1">ICE HBR-1</a> (PIPO Moteurs), vectorial QEV motors, <a href="#glossario" class="glossary-term" data-term="pem">PEM</a> microturbine, solid-state batteries (QuantumScape/Sila) and adaptive Akrapovič exhaust, with redundant thermal circuit <a href="#glossario" class="glossary-term" data-term="vulcans">VULCANS™</a>.</li>
                    </ul>
                    
                    <h5>Updated Technical Parameters:</h5>
                    <ul>
                        <li>Material: <a href="#glossario" class="glossary-term" data-term="cfrp-grafeno">CFRP-graphene</a> hybrid composite with ballistic aramid</li>
                        <li>Torsional Rigidity: 45 kNm/° (CAE Validated)</li>
                        <li>Total Structural Weight: ~1,800 kg (medium configuration)</li>
                        <li>H₂ Tanks: 2×5 kg (Eaton 700 bar encapsulated)</li>
                        <li>Structural Cooling: VULCANS™ multicircuit network (80 bar)</li>
                        <li>Interoperability: Compatible with <a href="#glossario" class="glossary-term" data-term="flute-kits">Flute Kits™</a> and <a href="#glossario" class="glossary-term" data-term="quickbay">QuickBay™</a> for rapid field reconfiguration</li>
                    </ul>
                    
                    <h4>2.2 Functional Philosophy and Gordon Murray Design</h4>
                    <p>Gordon Murray's functional philosophy — "_Design should follow the purest function_" — deeply inspires the VORTEXA HYBRID. Instead of excess, structural clarity is found. Instead of ornaments, absolute technical purpose.</p>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Gordon Murray Automotive</th>
                                <th>VORTEXA HYBRID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lightness for track performance</td>
                                <td>Resilience for mission survival</td>
                            </tr>
                            <tr>
                                <td>Focus on thermal symmetry and dynamic balance</td>
                                <td>Focus on tactical redundancy and field modularity</td>
                            </tr>
                            <tr>
                                <td>Aesthetic purity as consequence of function</td>
                                <td>Functional camouflage as mission extension</td>
                            </tr>
                            <tr>
                                <td>Design focused on driver's sensory experience</td>
                                <td>Design focused on protection and neurocognitive command</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h4>2.3 Survivor Capsule™ (VSC-RESIL™)</h4>
                    <p>The <a href="#glossario" class="glossary-term" data-term="survivor-capsule">Survivor Capsule™ VSC-RESIL™</a> is the biomechanical, cognitive and thermal protection core of the VORTEXA HYBRID. Developed with inspiration from aerospace capsules, military <a href="#glossario" class="glossary-term" data-term="mrap">MRAP</a> systems and endurance hypercar cockpits, the VSC-RESIL™ integrates lightweight shielding, adaptive thermal management and full compatibility with the intelligent <a href="#glossario" class="glossary-term" data-term="vrsh">VRSH™</a> helmet.</p>
                `
            },
            press: {
                title: "PRESS RELEASE",
                content: `
                    <h3>VORTEXA HYBRID TECH FRAMEWORK: The Revolution in Extreme Mobility</h3>
                    <p>Vortexa Motorsport, born from the Stanford StartX innovation ecosystem, presents the VORTEXA HYBRID TECH FRAMEWORK, an intelligent mobility platform that redefines the limits of automotive engineering. Unlike any conventional vehicle, the VORTEXA HYBRID is a living, adaptive and resilient ecosystem, designed to operate in the planet's most challenging environments, from scorching deserts to the most critical rescue operations.</p>
                    
                    <p>With a modular and multilayer architecture, the VORTEXA HYBRID integrates cutting-edge technologies in neuroengineering, artificial intelligence and autonomous robotics. Its design, inspired by Gordon Murray's philosophy, prioritizes functionality and survival over mere ornaments. Each component is optimized to resist severe failures, dynamically reconfigure itself and continue operating even under the most extreme conditions.</p>
                    
                    <p>At the heart of the VORTEXA HYBRID is the VORTEXA BRAIN™, a distributed intelligence core that, together with SubCores™ and the NEVO OS™ operating system, ensures unprecedented adaptation capability. The innovative VORTEXA SMART SKIN™ acts as a thermal shield and auxiliary energy system, while the Survivor Capsule™ (VSC-RESIL™) offers unparalleled biomechanical and cognitive protection for the crew.</p>
                    
                    <p>With a high-performance hybrid powertrain, the VORTEXA HYBRID promises superior energy efficiency and extended autonomy, operating with hydrogen and e-fuels. The rapid field reconfiguration capability, through Flute Kits™ and the QuickBay™ FieldOps network, ensures that VORTEXA is always ready for any mission.</p>
                    
                    <p>Vortexa Motorsport is validating the VORTEXA HYBRID through digital twins and rigorous field testing, with a strategic roadmap culminating in extreme validations by 2030. We invite industry partners, research institutes and critical mission agencies to join us on this journey to shape the future of extreme mobility.</p>
                `
            },
            glossario: {
                title: "TECHNICAL GLOSSARY",
                content: `
                    <div class="glossary-grid">
                        <div class="glossary-item" id="vortexa-hybrid">
                            <h4>VORTEXA HYBRID</h4>
                            <p>Modular and resilient platform based on the VORTEXA HYBRID TECH FRAMEWORK for extreme mobility.</p>
                        </div>
                        
                        <div class="glossary-item" id="vortexa-framework">
                            <h4>VORTEXA HYBRID TECH FRAMEWORK</h4>
                            <p>Cognitive, modular and resilient architecture for intelligent mobility.</p>
                        </div>
                        
                        <div class="glossary-item" id="stanford-startx">
                            <h4>Stanford StartX</h4>
                            <p>Innovation ecosystem where Vortexa Motorsport Inc. was founded.</p>
                        </div>
                        
                        <div class="glossary-item" id="stanford-ddl">
                            <h4>Stanford Driving Decision Lab (DDL)</h4>
                            <p>Stanford's driving decision laboratory, with which Vortexa Motorsport Inc. maintains synergy.</p>
                        </div>
                        
                        <div class="glossary-item" id="cae-vortexa">
                            <h4>CAE VORTEXA™</h4>
                            <p>Vortexa Motorsport Inc.'s validation complex, including infrastructure for thermomechanical simulation and neural runtime laboratory.</p>
                        </div>
                        
                        <div class="glossary-item" id="w2rc">
                            <h4>W2RC</h4>
                            <p>World Rally-Raid Championship.</p>
                        </div>
                        
                        <div class="glossary-item" id="mrcs">
                            <h4>MRCS™ – Modular Reconfigurable Chassis System</h4>
                            <p>Modular and multilayer architecture of the VORTEXA HYBRID chassis.</p>
                        </div>
                        
                        <div class="glossary-item" id="survivor-capsule">
                            <h4>Survivor Capsule™ (VSC-RESIL™)</h4>
                            <p>Biomechanical, cognitive and thermal protection core of the VORTEXA HYBRID.</p>
                        </div>
                        
                        <div class="glossary-item" id="vortexa-brain">
                            <h4>VORTEXA BRAIN™</h4>
                            <p>Operational intelligence core of the VORTEXA HYBRID.</p>
                        </div>
                        
                        <div class="glossary-item" id="subcores">
                            <h4>SubCores™</h4>
                            <p>Distributed microcontrollers with specific functions.</p>
                        </div>
                        
                        <div class="glossary-item" id="nevo-os">
                            <h4>NEVO OS™</h4>
                            <p>Real-time operating system.</p>
                        </div>
                        
                        <div class="glossary-item" id="smart-skin">
                            <h4>VORTEXA SMART SKIN™</h4>
                            <p>Functional fairing with energetic, self-repairing and ultracapacitive properties.</p>
                        </div>
                        
                        <div class="glossary-item" id="flute-kits">
                            <h4>Flute Kits™</h4>
                            <p>Compact modules for critical maintenance, tactical diagnostics and embedded reconfiguration.</p>
                        </div>
                        
                        <div class="glossary-item" id="quickbay">
                            <h4>QuickBay™ FieldOps</h4>
                            <p>Network that enables the establishment of modular operational bases in remote zones.</p>
                        </div>
                        
                        <div class="glossary-item" id="xrt-vtxa">
                            <h4>xRT-VTXA™</h4>
                            <p>Embedded cognitive runtime for tactical management with manual physical fallback.</p>
                        </div>
                        
                        <div class="glossary-item" id="tinyml">
                            <h4>TinyML</h4>
                            <p>Machine Learning embedded in low-power devices.</p>
                        </div>
                        
                        <div class="glossary-item" id="sar">
                            <h4>SAR</h4>
                            <p>Search and Rescue.</p>
                        </div>
                        
                        <div class="glossary-item" id="vrsh">
                            <h4>VRSH™</h4>
                            <p>Helmet with HUD (Head-Up Display) integration, auditory fallback, BCI (Brain-Computer Interface) command and lightweight shielding.</p>
                        </div>
                        
                        <div class="glossary-item" id="vulcans">
                            <h4>VULCANS™</h4>
                            <p>VORTEXA cooling/cleaning system.</p>
                        </div>
                        
                        <div class="glossary-item" id="lidar">
                            <h4>LIDAR</h4>
                            <p>Light Detection and Ranging - remote sensing technology.</p>
                        </div>
                        
                        <div class="glossary-item" id="cigs">
                            <h4>CIGS</h4>
                            <p>Copper Indium Gallium Selenide - type of solar cell.</p>
                        </div>
                        
                        <div class="glossary-item" id="ice-hbr1">
                            <h4>ICE HBR-1</h4>
                            <p>Internal Combustion Engine - model HBR-1.</p>
                        </div>
                        
                        <div class="glossary-item" id="pem">
                            <h4>PEM</h4>
                            <p>Proton Exchange Membrane - type of fuel cell.</p>
                        </div>
                        
                        <div class="glossary-item" id="cfrp-grafeno">
                            <h4>CFRP-graphene</h4>
                            <p>Carbon Fiber Reinforced Polymer with graphene.</p>
                        </div>
                        
                        <div class="glossary-item" id="mrap">
                            <h4>MRAP</h4>
                            <p>Mine-Resistant Ambush Protected.</p>
                        </div>
                    </div>
                `
            }
        }
    },
    it: {
        title: "VORTEXA HYBRID TECH FRAMEWORK",
        sections: {
            intro: {
                title: "INTRODUZIONE e RIASSUNTO ESECUTIVO",
                content: `
                    <h3>Introduzione Istituzionale</h3>
                    <p>Origine e Visione Strategica: <a href="#glossario" class="glossary-term" data-term="vortexa-motorsport">Vortexa Motorsport Inc.</a> è stata fondata nell'ecosistema di innovazione di <a href="#glossario" class="glossary-term" data-term="stanford-startx">Stanford StartX</a>, come spin-off convergente di ricerche avanzate in neuroingegneria, intelligenza artificiale e mobilità autonoma, con sinergia diretta con il <a href="#glossario" class="glossary-term" data-term="stanford-ddl">Stanford Driving Decision Lab (DDL)</a>. L'azienda mantiene collegamenti attivi con centri di eccellenza globali per trasformare la disruption in affidabilità applicata — dal deserto allo spazio.</p>
                    
                    <p>Con sede in fase di installazione presso il <a href="#glossario" class="glossary-term" data-term="colorado-springs">Colorado Springs Innovation Hub</a>, vicino a zone di test ad alta quota, bassa pressione e clima severo, il nuovo centro tecnico-scientifico di Vortexa Motorsport Inc. ospiterà il complesso di validazione <a href="#glossario" class="glossary-term" data-term="cae-vortexa">CAE VORTEXA™</a>, inclusa l'infrastruttura per simulazione termomeccanica, laboratorio di runtime neurale e una galleria del vento modulare al 60% per prototipi di auto off-road con aerodinamica ottimizzata (Cx ≈ 0,38).</p>
                    
                    <h4>1.1 Panoramica del VORTEXA HYBRID</h4>
                    <p>Il <a href="#glossario" class="glossary-term" data-term="vortexa-hybrid">VORTEXA HYBRID</a> è una piattaforma modulare e resiliente basata sul <a href="#glossario" class="glossary-term" data-term="vortexa-framework">VORTEXA HYBRID TECH FRAMEWORK</a>, un'architettura integrata per la mobilità estrema. Composta da cinque blocchi funzionali interdipendenti — struttura, propulsione, energia, cognizione e scalabilità —, la piattaforma è stata progettata per operare con affidabilità in ambienti come <a href="#glossario" class="glossary-term" data-term="w2rc">W2RC</a>, operazioni di difesa, estrazione mineraria remota e soccorso autonomo.</p>
                    
                    <h4>1.2 Differenziali e Benefici</h4>
                    <ul>
                        <li>Resilienza Sistemica: Ridondanza fisica, digitale ed energetica, con fallback manuale e microECU.</li>
                        <li>Efficienza Energetica: 85% in modalità ibrida, con coppia vettoriale e recupero termico avanzato.</li>
                        <li>Autonomia Intelligente: 300–900 km (modalità fallback); fino a 2.000 km con 20 kg di H₂ (modalità estesa).</li>
                        <li>IA in Tempo Reale: Grok 6 con latenza ≤10 ms, inferenza incorporata (<a href="#glossario" class="glossary-term" data-term="tinyml">TinyML</a>) e <a href="#glossario" class="glossary-term" data-term="xrt-vtxa">xRT-VTXA</a> per blackout.</li>
                        <li>Applicazioni Multisettoriali: Rally-raid (W2RC), difesa tattica, estrazione mineraria profonda, operazioni <a href="#glossario" class="glossary-term" data-term="sar">SAR</a>.</li>
                    </ul>
                    
                    <h4>1.3 Roadmap Strategica e Chiamata all'Azione</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Anno</th>
                                <th>Milestone</th>
                                <th>Descrizione</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2025</td>
                                <td>Validazione CAE</td>
                                <td>Modellazione di coppia, crash, IA e flusso termico (ANSYS/CAE GmbH)</td>
                            </tr>
                            <tr>
                                <td>2026</td>
                                <td>Prototipi Funzionali</td>
                                <td>Test del powertrain ibrido (ICE + 2 ERS posteriori) e CTIS intelligente</td>
                            </tr>
                            <tr>
                                <td>2027</td>
                                <td>Architettura Completa</td>
                                <td>Implementazione con 4 ERS indipendenti, CAE VORTEXA incorporato</td>
                            </tr>
                            <tr>
                                <td>2028</td>
                                <td>Validazione delle Interfacce</td>
                                <td>Test di VRSH™, HUD Vuzix, sensori termici e BCI (neurofeedback)</td>
                            </tr>
                            <tr>
                                <td>2029</td>
                                <td>Rally dos Sertões</td>
                                <td>Test sul campo con architettura completa, fallback attivo e kit modulari</td>
                            </tr>
                            <tr>
                                <td>2030</td>
                                <td>Borneo Extreme / Validazione Finale</td>
                                <td>Ambiente ostile: dune, foresta, umidità, blackout elettrico controllato</td>
                            </tr>
                        </tbody>
                    </table>
                `
            },
            dados: {
                title: "DATI TECNICI",
                content: `
                    <h3>Parte II: Nucleo Tecnico e Architettura Cognitiva del Sistema</h3>
                    
                    <h4>2.1 Architettura Strutturale e Modularità</h4>
                    <p>La struttura del VORTEXA HYBRID è stata concepita con un unico principio innegociabile: sopravvivere e continuare a operare anche dopo guasti gravi. La sua architettura modulare e multistrato, denominata <a href="#glossario" class="glossary-term" data-term="mrcs">MRCS™ – Modular Reconfigurable Chassis System</a>, combina blindatura attiva, reti di controllo ridondanti e riconfigurazione funzionale sul campo.</p>
                    
                    <h5>Divisione Strutturale – MRCS™</h5>
                    <ul>
                        <li><strong><a href="#glossario" class="glossary-term" data-term="ifm">IFM – Modulo Frontale Integrato</a>:</strong> Struttura di assorbimento programmata con radar frontale, pannelli solari <a href="#glossario" class="glossary-term" data-term="cigs">CIGS</a> integrati, telaio deformabile e attraversamento di sensori <a href="#glossario" class="glossary-term" data-term="lidar">LIDAR</a>/SensorGrid™.</li>
                        <li><strong><a href="#glossario" class="glossary-term" data-term="ccm">CCM – Modulo Centrale Blindato</a>:</strong> Monoscocca multistrato con <a href="#glossario" class="glossary-term" data-term="survivor-capsule">Survivor Capsule™ (VSC-RESIL™)</a> integrata, serbatoi laterali di H₂ incapsulati, blindatura balistica, isolamento termico e <a href="#glossario" class="glossary-term" data-term="vortexa-brain">Vortexa Brain™</a> in nucleo protetto.</li>
                        <li><strong><a href="#glossario" class="glossary-term" data-term="rtm">RTM – Modulo Termico Posteriore</a>:</strong> Compartimento per <a href="#glossario" class="glossary-term" data-term="ice-hbr1">ICE HBR-1</a> (PIPO Moteurs), motori QEV vettoriali, microturbina <a href="#glossario" class="glossary-term" data-term="pem">PEM</a>, batterie a stato solido (QuantumScape/Sila) e scarico adattivo Akrapovič, con circuito termico ridondante <a href="#glossario" class="glossary-term" data-term="vulcans">VULCANS™</a>.</li>
                    </ul>
                    
                    <h5>Parametri Tecnici Aggiornati:</h5>
                    <ul>
                        <li>Materiale: Composito ibrido <a href="#glossario" class="glossary-term" data-term="cfrp-grafeno">CFRP-grafene</a> con aramide balistica</li>
                        <li>Rigidità Torsionale: 45 kNm/° (CAE Validated)</li>
                        <li>Peso Strutturale Totale: ~1.800 kg (configurazione media)</li>
                        <li>Serbatoi H₂: 2×5 kg (Eaton 700 bar incapsulati)</li>
                        <li>Raffreddamento Strutturale: Rete VULCANS™ multicircuito (80 bar)</li>
                        <li>Interoperabilità: Compatibile con <a href="#glossario" class="glossary-term" data-term="flute-kits">Flute Kits™</a> e <a href="#glossario" class="glossary-term" data-term="quickbay">QuickBay™</a> per riconfigurazione rapida sul campo</li>
                    </ul>
                    
                    <h4>2.2 Filosofia Funzionale e Design Gordon Murray</h4>
                    <p>La filosofia funzionale di Gordon Murray — "_Design should follow the purest function_" — ispira profondamente il VORTEXA HYBRID. Al posto degli eccessi, si trova chiarezza strutturale. Al posto degli ornamenti, scopo tecnico assoluto.</p>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Gordon Murray Automotive</th>
                                <th>VORTEXA HYBRID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Leggerezza per prestazioni in pista</td>
                                <td>Resilienza per sopravvivenza di missione</td>
                            </tr>
                            <tr>
                                <td>Focus su simmetria termica e bilanciamento dinamico</td>
                                <td>Focus su ridondanza tattica e modularità di campo</td>
                            </tr>
                            <tr>
                                <td>Purezza estetica come conseguenza della funzione</td>
                                <td>Camuffamento funzionale come estensione della missione</td>
                            </tr>
                            <tr>
                                <td>Design orientato all'esperienza sensoriale del pilota</td>
                                <td>Design orientato alla protezione e comando neurocognitivo</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h4>2.3 Survivor Capsule™ (VSC-RESIL™)</h4>
                    <p>La <a href="#glossario" class="glossary-term" data-term="survivor-capsule">Survivor Capsule™ VSC-RESIL™</a> è il nucleo di protezione biomeccanica, cognitiva e termica del VORTEXA HYBRID. Sviluppata con ispirazione da capsule aerospaziali, sistemi <a href="#glossario" class="glossary-term" data-term="mrap">MRAP</a> militari e cockpit di hypercar da resistenza, la VSC-RESIL™ integra blindatura leggera, gestione termica adattiva e compatibilità totale con il casco intelligente <a href="#glossario" class="glossary-term" data-term="vrsh">VRSH™</a>.</p>
                `
            },
            press: {
                title: "COMUNICATO STAMPA",
                content: `
                    <h3>VORTEXA HYBRID TECH FRAMEWORK: La Rivoluzione nella Mobilità Estrema</h3>
                    <p>Vortexa Motorsport, nata dall'ecosistema di innovazione di Stanford StartX, presenta il VORTEXA HYBRID TECH FRAMEWORK, una piattaforma di mobilità intelligente che ridefinisce i limiti dell'ingegneria automobilistica. Diverso da qualsiasi veicolo convenzionale, il VORTEXA HYBRID è un ecosistema vivente, adattivo e resiliente, progettato per operare negli ambienti più sfidanti del pianeta, dai deserti roventi alle operazioni di soccorso più critiche.</p>
                    
                    <p>Con un'architettura modulare e multistrato, il VORTEXA HYBRID integra tecnologie all'avanguardia in neuroingegneria, intelligenza artificiale e robotica autonoma. Il suo design, ispirato alla filosofia di Gordon Murray, privilegia la funzionalità e la sopravvivenza rispetto ai meri ornamenti. Ogni componente è ottimizzato per resistere a guasti gravi, riconfigurarsi dinamicamente e continuare a operare anche nelle condizioni più estreme.</p>
                    
                    <p>Nel cuore del VORTEXA HYBRID c'è il VORTEXA BRAIN™, un nucleo di intelligenza distribuita che, insieme ai SubCores™ e al sistema operativo NEVO OS™, garantisce una capacità di adattamento senza precedenti. L'innovativa VORTEXA SMART SKIN™ agisce come scudo termico e sistema energetico ausiliario, mentre la Survivor Capsule™ (VSC-RESIL™) offre protezione biomeccanica e cognitiva ineguagliabile per l'equipaggio.</p>
                    
                    <p>Con un powertrain ibrido ad alte prestazioni, il VORTEXA HYBRID promette efficienza energetica superiore e autonomia estesa, operando con idrogeno ed e-fuels. La capacità di riconfigurazione rapida sul campo, attraverso i Flute Kits™ e la rete QuickBay™ FieldOps, assicura che il VORTEXA sia sempre pronto per qualsiasi missione.</p>
                    
                    <p>Vortexa Motorsport sta validando il VORTEXA HYBRID attraverso gemelli digitali e test sul campo rigorosi, con una roadmap strategica che culmina in validazioni estreme entro il 2030. Invitiamo partner dell'industria, istituti di ricerca e agenzie di missioni critiche a unirsi a noi in questo viaggio per plasmare il futuro della mobilità estrema.</p>
                `
            },
            glossario: {
                title: "GLOSSARIO TECNICO",
                content: `
                    <div class="glossary-grid">
                        <div class="glossary-item" id="vortexa-hybrid">
                            <h4>VORTEXA HYBRID</h4>
                            <p>Piattaforma modulare e resiliente basata sul VORTEXA HYBRID TECH FRAMEWORK per la mobilità estrema.</p>
                        </div>
                        
                        <div class="glossary-item" id="vortexa-framework">
                            <h4>VORTEXA HYBRID TECH FRAMEWORK</h4>
                            <p>Architettura cognitiva, modulare e resiliente per la mobilità intelligente.</p>
                        </div>
                        
                        <div class="glossary-item" id="stanford-startx">
                            <h4>Stanford StartX</h4>
                            <p>Ecosistema di innovazione dove è stata fondata Vortexa Motorsport Inc.</p>
                        </div>
                        
                        <div class="glossary-item" id="stanford-ddl">
                            <h4>Stanford Driving Decision Lab (DDL)</h4>
                            <p>Laboratorio di decisione di guida di Stanford, con cui Vortexa Motorsport Inc. mantiene sinergia.</p>
                        </div>
                        
                        <div class="glossary-item" id="cae-vortexa">
                            <h4>CAE VORTEXA™</h4>
                            <p>Complesso di validazione di Vortexa Motorsport Inc., inclusa l'infrastruttura per simulazione termomeccanica e laboratorio di runtime neurale.</p>
                        </div>
                        
                        <div class="glossary-item" id="w2rc">
                            <h4>W2RC</h4>
                            <p>World Rally-Raid Championship.</p>
                        </div>
                        
                        <div class="glossary-item" id="mrcs">
                            <h4>MRCS™ – Modular Reconfigurable Chassis System</h4>
                            <p>Architettura modulare e multistrato del telaio del VORTEXA HYBRID.</p>
                        </div>
                        
                        <div class="glossary-item" id="survivor-capsule">
                            <h4>Survivor Capsule™ (VSC-RESIL™)</h4>
                            <p>Nucleo di protezione biomeccanica, cognitiva e termica del VORTEXA HYBRID.</p>
                        </div>
                        
                        <div class="glossary-item" id="vortexa-brain">
                            <h4>VORTEXA BRAIN™</h4>
                            <p>Nucleo di intelligenza operativa del VORTEXA HYBRID.</p>
                        </div>
                        
                        <div class="glossary-item" id="subcores">
                            <h4>SubCores™</h4>
                            <p>Microcontrollori distribuiti con funzioni specifiche.</p>
                        </div>
                        
                        <div class="glossary-item" id="nevo-os">
                            <h4>NEVO OS™</h4>
                            <p>Sistema operativo in tempo reale.</p>
                        </div>
                        
                        <div class="glossary-item" id="smart-skin">
                            <h4>VORTEXA SMART SKIN™</h4>
                            <p>Carenatura funzionale con proprietà energetiche, autoriparanti e ultracapacitive.</p>
                        </div>
                        
                        <div class="glossary-item" id="flute-kits">
                            <h4>Flute Kits™</h4>
                            <p>Moduli compatti per manutenzione critica, diagnostica tattica e riconfigurazione incorporata.</p>
                        </div>
                        
                        <div class="glossary-item" id="quickbay">
                            <h4>QuickBay™ FieldOps</h4>
                            <p>Rete che consente l'istituzione di basi operative modulari in zone remote.</p>
                        </div>
                        
                        <div class="glossary-item" id="xrt-vtxa">
                            <h4>xRT-VTXA™</h4>
                            <p>Runtime cognitivo incorporato per gestione tattica con fallback fisico manuale.</p>
                        </div>
                        
                        <div class="glossary-item" id="tinyml">
                            <h4>TinyML</h4>
                            <p>Machine Learning incorporato in dispositivi a bassa potenza.</p>
                        </div>
                        
                        <div class="glossary-item" id="sar">
                            <h4>SAR</h4>
                            <p>Search and Rescue (Ricerca e Soccorso).</p>
                        </div>
                        
                        <div class="glossary-item" id="vrsh">
                            <h4>VRSH™</h4>
                            <p>Casco con integrazione HUD (Head-Up Display), fallback uditivo, comando BCI (Brain-Computer Interface) e blindatura leggera.</p>
                        </div>
                        
                        <div class="glossary-item" id="vulcans">
                            <h4>VULCANS™</h4>
                            <p>Sistema di raffreddamento/pulizia del VORTEXA.</p>
                        </div>
                        
                        <div class="glossary-item" id="lidar">
                            <h4>LIDAR</h4>
                            <p>Light Detection and Ranging (Rilevamento e Portata della Luce) - tecnologia di telerilevamento.</p>
                        </div>
                        
                        <div class="glossary-item" id="cigs">
                            <h4>CIGS</h4>
                            <p>Copper Indium Gallium Selenide (Rame Indio Gallio Selenio) - tipo di cella solare.</p>
                        </div>
                        
                        <div class="glossary-item" id="ice-hbr1">
                            <h4>ICE HBR-1</h4>
                            <p>Internal Combustion Engine (Motore a Combustione Interna) - modello HBR-1.</p>
                        </div>
                        
                        <div class="glossary-item" id="pem">
                            <h4>PEM</h4>
                            <p>Proton Exchange Membrane (Membrana a Scambio Protonico) - tipo di cella a combustibile.</p>
                        </div>
                        
                        <div class="glossary-item" id="cfrp-grafeno">
                            <h4>CFRP-grafene</h4>
                            <p>Carbon Fiber Reinforced Polymer (Polimero Rinforzato con Fibra di Carbonio) con grafene.</p>
                        </div>
                        
                        <div class="glossary-item" id="mrap">
                            <h4>MRAP</h4>
                            <p>Mine-Resistant Ambush Protected (Resistente alle Mine e Protetto da Imboscate).</p>
                        </div>
                    </div>
                `
            }
        }
    }
};

// Estado da aplicação
let currentLang = 'pt';
let isDarkMode = true;

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

// Carregar conteúdo
function loadContent() {
    const contentDiv = document.getElementById('content');
    const langContent = content[currentLang];
    
    contentDiv.innerHTML = `
        <h1>${langContent.title}</h1>
        
        <section id="intro" class="fade-in">
            <h2>${langContent.sections.intro.title}</h2>
            ${langContent.sections.intro.content}
        </section>
        
        <section id="dados-tecnicos" class="fade-in">
            <h2>${langContent.sections.dados.title}</h2>
            ${langContent.sections.dados.content}
        </section>
        
        <section id="press-release" class="fade-in">
            <h2>${langContent.sections.press.title}</h2>
            ${langContent.sections.press.content}
        </section>
        
        <section id="glossario" class="fade-in">
            <h2>${langContent.sections.glossario.title}</h2>
            ${langContent.sections.glossario.content}
        </section>
    `;
    
    // Adicionar estilos para o glossário
    if (!document.querySelector('.glossary-styles')) {
        const style = document.createElement('style');
        style.className = 'glossary-styles';
        style.textContent = `
            .glossary-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
                margin-top: 30px;
            }
            
            .glossary-item {
                background: rgba(0, 170, 255, 0.1);
                padding: 20px;
                border-radius: 10px;
                border-left: 4px solid #00aaff;
                transition: all 0.3s ease;
            }
            
            .glossary-item:hover {
                background: rgba(0, 170, 255, 0.2);
                transform: translateY(-2px);
            }
            
            .glossary-item h4 {
                margin-top: 0;
                color: #00aaff;
            }
            
            body.light-mode .glossary-item {
                background: rgba(0, 102, 204, 0.1);
                border-left-color: #0066cc;
            }
            
            body.light-mode .glossary-item:hover {
                background: rgba(0, 102, 204, 0.2);
            }
            
            body.light-mode .glossary-item h4 {
                color: #0066cc;
            }
        `;
        document.head.appendChild(style);
    }
    
    setupGlossaryLinks();
}

// Configurar event listeners
function setupEventListeners() {
    // Botões de idioma
    document.getElementById('lang-pt').addEventListener('click', () => changeLang('pt'));
    document.getElementById('lang-en').addEventListener('click', () => changeLang('en'));
    document.getElementById('lang-it').addEventListener('click', () => changeLang('it'));
    
    // Botão de tema
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Atualizar botões ativos
    updateActiveButtons();
}

// Mudar idioma
function changeLang(lang) {
    currentLang = lang;
    loadContent();
    updateActiveButtons();
}

// Alternar tema
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('light-mode', !isDarkMode);
    updateActiveButtons();
}

// Atualizar botões ativos
function updateActiveButtons() {
    // Remover classe active de todos os botões de idioma
    document.querySelectorAll('.controls button').forEach(btn => btn.classList.remove('active'));
    
    // Adicionar classe active ao idioma atual
    document.getElementById(`lang-${currentLang}`).classList.add('active');
    
    // Atualizar texto do botão de tema
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
    if (currentLang === 'en') {
        themeBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    } else if (currentLang === 'it') {
        themeBtn.textContent = isDarkMode ? 'Modalità Chiara' : 'Modalità Scura';
    }
}

// Configurar navegação suave
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Configurar links do glossário
function setupGlossaryLinks() {
    document.querySelectorAll('.glossary-term').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const term = this.getAttribute('data-term');
            const target = document.getElementById(term);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Destacar temporariamente o termo
                target.style.background = 'rgba(255, 107, 53, 0.3)';
                setTimeout(() => {
                    target.style.background = '';
                }, 2000);
            }
        });
    });
}



// Funcionalidades adicionais para melhorar a experiência do usuário

// Adicionar efeito de scroll suave para o sumário
function updateSidebarHighlight() {
    const sections = document.querySelectorAll('section');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    let currentSection = '';
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
        }
    });
    
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Adicionar indicador de progresso de leitura
function createReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00aaff, #0088cc);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
}

function updateReadingProgress() {
    const progressBar = document.getElementById('reading-progress');
    if (progressBar) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }
}

// Adicionar funcionalidade de busca
function createSearchFunction() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="search-input" placeholder="Buscar no documento..." />
        <div id="search-results"></div>
    `;
    
    // Adicionar estilos para a busca
    const searchStyles = document.createElement('style');
    searchStyles.textContent = `
        .search-container {
            margin: 20px 0;
            position: relative;
        }
        
        #search-input {
            width: 100%;
            padding: 12px 20px;
            border: 2px solid #00aaff;
            border-radius: 25px;
            background: rgba(44, 44, 44, 0.8);
            color: #f0f0f0;
            font-size: 16px;
            outline: none;
            transition: all 0.3s ease;
        }
        
        body.light-mode #search-input {
            background: rgba(255, 255, 255, 0.9);
            color: #212529;
        }
        
        #search-input:focus {
            box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);
        }
        
        #search-results {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(44, 44, 44, 0.95);
            border-radius: 10px;
            max-height: 300px;
            overflow-y: auto;
            z-index: 1000;
            display: none;
        }
        
        body.light-mode #search-results {
            background: rgba(255, 255, 255, 0.95);
        }
        
        .search-result-item {
            padding: 10px 20px;
            border-bottom: 1px solid rgba(0, 170, 255, 0.2);
            cursor: pointer;
            transition: background 0.3s ease;
        }
        
        .search-result-item:hover {
            background: rgba(0, 170, 255, 0.1);
        }
        
        .search-highlight {
            background: rgba(255, 255, 0, 0.3);
            padding: 2px 4px;
            border-radius: 3px;
        }
    `;
    document.head.appendChild(searchStyles);
    
    // Inserir a busca no início do conteúdo principal
    const mainContent = document.querySelector('.main-content');
    const contentDiv = document.getElementById('content');
    mainContent.insertBefore(searchContainer, contentDiv);
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            
            const content = document.getElementById('content');
            const textContent = content.textContent.toLowerCase();
            const results = [];
            
            // Buscar por seções que contenham o termo
            const sections = content.querySelectorAll('h2, h3, h4, p');
            sections.forEach(section => {
                const text = section.textContent.toLowerCase();
                if (text.includes(query)) {
                    results.push({
                        element: section,
                        text: section.textContent.substring(0, 100) + '...',
                        type: section.tagName
                    });
                }
            });
            
            if (results.length > 0) {
                searchResults.innerHTML = results.map(result => 
                    `<div class="search-result-item" data-target="${result.element.id || result.element.closest('section').id}">
                        <strong>${result.type}:</strong> ${result.text}
                    </div>`
                ).join('');
                
                searchResults.style.display = 'block';
                
                // Adicionar event listeners para os resultados
                searchResults.querySelectorAll('.search-result-item').forEach(item => {
                    item.addEventListener('click', function() {
                        const targetId = this.getAttribute('data-target');
                        const target = document.getElementById(targetId);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            searchResults.style.display = 'none';
                            searchInput.value = '';
                        }
                    });
                });
            } else {
                searchResults.innerHTML = '<div class="search-result-item">Nenhum resultado encontrado</div>';
                searchResults.style.display = 'block';
            }
        });
        
        // Fechar resultados ao clicar fora
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
}

// Adicionar efeitos de hover melhorados
function enhanceHoverEffects() {
    const style = document.createElement('style');
    style.textContent = `
        .sidebar a.active {
            background: rgba(0, 170, 255, 0.2);
            border-left-color: #00aaff;
            transform: translateX(5px);
        }
        
        body.light-mode .sidebar a.active {
            background: rgba(0, 102, 204, 0.2);
            border-left-color: #0066cc;
        }
        
        .glossary-term {
            position: relative;
            transition: all 0.3s ease;
        }
        
        .glossary-term:hover::after {
            content: "Clique para ver no glossário";
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            white-space: nowrap;
            z-index: 1000;
            opacity: 0;
            animation: fadeInTooltip 0.3s ease forwards;
        }
        
        @keyframes fadeInTooltip {
            to { opacity: 1; }
        }
        
        .controls button {
            position: relative;
            overflow: hidden;
        }
        
        .controls button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }
        
        .controls button:hover::before {
            width: 300px;
            height: 300px;
        }
    `;
    document.head.appendChild(style);
}

// Inicializar todas as funcionalidades adicionais
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar um pouco para garantir que o conteúdo foi carregado
    setTimeout(() => {
        createReadingProgress();
        createSearchFunction();
        enhanceHoverEffects();
        
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

// Adicionar atalhos de teclado
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + F para busca
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Esc para fechar resultados de busca
    if (e.key === 'Escape') {
        const searchResults = document.getElementById('search-results');
        if (searchResults) {
            searchResults.style.display = 'none';
        }
    }
    
    // Atalhos para idiomas
    if (e.altKey) {
        switch(e.key) {
            case '1':
                changeLang('pt');
                break;
            case '2':
                changeLang('en');
                break;
            case '3':
                changeLang('it');
                break;
            case 't':
                toggleTheme();
                break;
        }
    }
});

// Adicionar informações de atalhos
function addKeyboardShortcuts() {
    const shortcutsInfo = document.createElement('div');
    shortcutsInfo.className = 'shortcuts-info';
    shortcutsInfo.innerHTML = `
        <div class="shortcuts-toggle">?</div>
        <div class="shortcuts-panel">
            <h4>Atalhos de Teclado</h4>
            <ul>
                <li><kbd>Ctrl/Cmd + F</kbd> - Buscar</li>
                <li><kbd>Alt + 1</kbd> - Português</li>
                <li><kbd>Alt + 2</kbd> - English</li>
                <li><kbd>Alt + 3</kbd> - Italiano</li>
                <li><kbd>Alt + T</kbd> - Alternar tema</li>
                <li><kbd>Esc</kbd> - Fechar busca</li>
            </ul>
        </div>
    `;
    
    const shortcutsStyles = document.createElement('style');
    shortcutsStyles.textContent = `
        .shortcuts-info {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        }
        
        .shortcuts-toggle {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #00aaff, #0088cc);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-weight: bold;
            font-size: 18px;
            box-shadow: 0 4px 15px rgba(0, 170, 255, 0.3);
            transition: all 0.3s ease;
        }
        
        .shortcuts-toggle:hover {
            transform: scale(1.1);
        }
        
        .shortcuts-panel {
            position: absolute;
            bottom: 50px;
            right: 0;
            background: rgba(44, 44, 44, 0.95);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 10px;
            min-width: 250px;
            display: none;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        body.light-mode .shortcuts-panel {
            background: rgba(255, 255, 255, 0.95);
        }
        
        .shortcuts-panel h4 {
            margin: 0 0 15px 0;
            color: #00aaff;
        }
        
        body.light-mode .shortcuts-panel h4 {
            color: #0066cc;
        }
        
        .shortcuts-panel ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .shortcuts-panel li {
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        kbd {
            background: rgba(0, 170, 255, 0.2);
            padding: 2px 6px;
            border-radius: 3px;
            font-family: monospace;
            font-size: 12px;
        }
    `;
    document.head.appendChild(shortcutsStyles);
    document.body.appendChild(shortcutsInfo);
    
    // Toggle do painel de atalhos
    const toggle = shortcutsInfo.querySelector('.shortcuts-toggle');
    const panel = shortcutsInfo.querySelector('.shortcuts-panel');
    
    toggle.addEventListener('click', () => {
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
    
    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
        if (!shortcutsInfo.contains(e.target)) {
            panel.style.display = 'none';
        }
    });
}

