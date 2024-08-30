import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
// import fs from 'fs';

const app = express();
const port = 3000;
app.set("view engine", "ejs");

// Middleware: Method Override to get put, patch and delete request from html
app.use(methodOverride("_method"));

// Middleware: Path for static files in public folder
app.use(express.static("public"));

// Middleware: bodyParser to get form values form html
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware: Path for required css and js
app.use("/css", express.static("css"));
app.use("/js", express.static("node_modules/bootstrap/dist/js"));
app.use("/js", express.static("node_modules/@floating-ui/dom/dist/"));
app.use("/js", express.static("node_modules/@floating-ui/core/dist"));

// Path of articles in storage
// var articlesPath = './articles'

var articleTitles = [];
var articleContents = [];

// Dummy articles
articleTitles.push(
  "The Rise of Quantum Computing: Unlocking the Future of Technology"
);
articleContents.push(
  "The emergence of quantum computing marks a paradigm shift in the technological landscape, promising to propel humanity into a future defined by unprecedented computational power and revolutionary capabilities. Quantum computing operates on the principles of quantum mechanics, utilizing quantum bits, or qubits, which can exist in multiple states simultaneously, enabling computations to be performed in parallel and exponentially increasing processing speed. Unlike classical computers that rely on binary bits, which are limited to representing information as either 0 or 1, quantum computers leverage the phenomena of superposition and entanglement to manipulate qubits and execute complex algorithms with unparalleled efficiency. Despite being in its nascent stages, quantum computing has garnered significant attention from both academia and industry, with major players like IBM, Google, and Microsoft investing heavily in research and development. These efforts have led to the creation of prototype quantum processors and cloud-based quantum computing platforms, providing researchers and developers worldwide with access to cutting-edge quantum technology.\n\nThe potential applications of quantum computing span a diverse array of fields, ranging from cryptography and optimization to drug discovery and materials science. In the realm of cryptography, quantum computers pose both a threat and an opportunity, as they have the capability to break conventional encryption schemes while also offering secure methods for communication through quantum cryptography. Quantum algorithms such as Shor's algorithm have the potential to factor large numbers exponentially faster than classical algorithms, rendering many existing cryptographic protocols vulnerable to attacks. Consequently, there is a pressing need to develop quantum-resistant cryptographic algorithms to safeguard sensitive information in the age of quantum computing.\n\nMoreover, quantum computing holds immense promise for optimizing complex systems and solving optimization problems that are intractable for classical computers. Quantum algorithms such as Grover's algorithm and the quantum approximate optimization algorithm (QAOA) offer efficient solutions to a wide range of optimization tasks, including supply chain management, financial modeling, and logistics. By harnessing the power of quantum parallelism and entanglement, these algorithms can explore vast solution spaces and identify optimal solutions with unprecedented speed and accuracy, revolutionizing industries and driving innovation across sectors.\n\nIn addition to its applications in cryptography and optimization, quantum computing has the potential to transform scientific research and discovery. Quantum simulators and quantum annealers enable researchers to simulate quantum systems with high fidelity, allowing them to study complex phenomena such as quantum chemistry, condensed matter physics, and quantum biology. By providing insights into the behavior of quantum systems at the atomic and subatomic level, quantum computers can facilitate the design of new materials, the discovery of novel drugs and pharmaceuticals, and the exploration of fundamental questions in physics and chemistry that have eluded classical computational methods.\n\nDespite the tremendous potential of quantum computing, significant challenges remain to be addressed before it can be widely adopted. Chief among these challenges is the issue of decoherence, which refers to the loss of quantum coherence in qubits due to interactions with the environment. Decoherence limits the lifespan of quantum states and introduces errors into quantum computations, posing a major obstacle to the scalability and reliability of quantum hardware. Researchers are actively investigating techniques to mitigate decoherence and improve the stability of qubits, including error correction codes, quantum error correction protocols, and the development of fault-tolerant quantum architectures.\n\nFurthermore, the scalability of quantum hardware presents a significant challenge, as current quantum systems are limited in the number of qubits they can reliably manipulate and the coherence time of these qubits. Scaling up quantum processors to thousands or millions of qubits while maintaining the integrity of quantum states is essential for realizing the full potential of quantum computing and tackling real-world problems at scale. Advances in quantum hardware, such as the development of topological qubits, silicon-based qubits, and trapped-ion qubits, hold promise for achieving this scalability and ushering in the era of practical quantum computing.\n\nIn conclusion, the rise of quantum computing represents a watershed moment in the history of technology, with the potential to revolutionize industries, solve complex problems, and unlock new frontiers of knowledge. From cryptography and optimization to scientific research and discovery, quantum computing offers unprecedented computational power and capabilities that have the power to transform the world as we know it. While significant challenges remain to be overcome, the promise of quantum computing is too great to ignore. By investing in research, fostering collaboration, and embracing the transformative power of quantum technology, we can unlock a future where quantum computing reshapes society, drives innovation, and unlocks the full potential of human ingenuity."
);
articleTitles.push(
  "Augmented Reality: Bridging the Gap Between Virtual and Physical Worlds"
);
articleContents.push(
  "Augmented Reality (AR) stands at the forefront of technological innovation, offering a tantalizing glimpse into a future where the boundaries between the digital and physical worlds blur into insignificance. By overlaying virtual content onto the real-world environment, AR seamlessly integrates digital information and experiences into our everyday lives, transforming the way we perceive and interact with the world around us. As AR technology continues to evolve at a rapid pace, it holds the promise of revolutionizing numerous industries, from entertainment and gaming to healthcare, education, and beyond.\n\nAt its core, AR technology relies on a combination of advanced hardware and software to create immersive, interactive experiences. Head-mounted displays (HMDs), such as smart glasses and goggles, serve as the primary interface for users to view AR content, while sensors and cameras capture real-world data and track the user's movements and interactions. Powerful processors and algorithms process this data in real-time, enabling the seamless integration of virtual elements into the user's field of view.\n\nOne of the most compelling aspects of AR is its ability to enhance our perception of reality by augmenting it with digital overlays, annotations, and enhancements. In the realm of entertainment and gaming, AR has the potential to revolutionize the way we play and experience interactive media. Imagine exploring a virtual world overlaid onto your physical surroundings, battling digital monsters in your living room, or solving puzzles that seamlessly blend into your environment. AR gaming experiences like Pokémon GO have already demonstrated the mass appeal of this technology, attracting millions of players worldwide and generating significant revenue for developers.\n\nBeyond entertainment, AR holds immense potential for practical applications in fields such as healthcare, education, and manufacturing. In healthcare, AR can provide surgeons with real-time, holographic overlays of patient data, enabling them to visualize complex anatomical structures during surgical procedures. Medical students can benefit from immersive AR simulations that allow them to practice surgical techniques and explore virtual patient scenarios in a risk-free environment. Similarly, in education, AR can enrich learning experiences by bringing textbooks to life with interactive 3D models, animations, and simulations. Students can engage with historical events, explore scientific concepts, and conduct virtual experiments that transcend the limitations of traditional classroom settings.\n\nIn the realm of manufacturing and design, AR has the potential to streamline workflows, improve efficiency, and enhance collaboration. Engineers and designers can use AR-enabled tools to visualize and manipulate 3D models of products in real-world contexts, facilitating the design process and reducing the need for physical prototypes. Maintenance technicians can access digital overlays of equipment schematics and repair instructions, simplifying complex tasks and minimizing downtime. By bridging the gap between virtual prototypes and physical products, AR empowers businesses to innovate faster, iterate more efficiently, and deliver superior experiences to customers.\n\nDespite its tremendous potential, AR still faces several challenges on the path to widespread adoption. Technical hurdles, such as ensuring accurate tracking, minimizing latency, and optimizing power consumption, remain key areas of focus for AR developers. Additionally, concerns about privacy, security, and ethical considerations surrounding the collection and use of personal data in AR applications must be addressed to build trust and confidence among users.\n\nFurthermore, the success of AR depends not only on technological advancements but also on the creation of compelling content and experiences that resonate with users. Developers must harness the full creative potential of AR to design immersive, engaging experiences that captivate audiences and deliver tangible value. Collaboration across disciplines, including design, engineering, psychology, and storytelling, will be essential in unlocking the full potential of AR and pushing the boundaries of innovation.\n\nIn conclusion, Augmented Reality represents a transformative technology that has the power to bridge the gap between the virtual and physical worlds, unlocking new possibilities for entertainment, education, healthcare, manufacturing, and beyond. As AR continues to evolve and mature, it holds the promise of revolutionizing industries, transforming the way we work, learn, play, and interact with the world around us. By embracing AR technology and fostering collaboration and creativity, we can unlock a future where the boundaries between the digital and physical realms dissolve, giving rise to new forms of expression, communication, and exploration."
);
articleTitles.push(
  "The Era of Autonomous Vehicles: Navigating Towards a Driverless Future"
);
articleContents.push(
  "Autonomous vehicles (AVs) represent a seismic shift in the automotive industry, heralding a new era of transportation that promises to revolutionize the way we move people and goods. With advancements in artificial intelligence, sensor technology, and machine learning, AVs have transitioned from a futuristic concept to a tangible reality, poised to reshape urban landscapes, improve road safety, and enhance mobility for individuals of all abilities. As the world navigates towards a driverless future, the implications of this transformative technology are profound, touching upon various aspects of society, economy, and infrastructure.\n\nAt the heart of autonomous vehicles lies a sophisticated network of sensors, cameras, lidar, radar, and GPS technology, coupled with powerful onboard computers and algorithms. These components work in concert to perceive and interpret the surrounding environment, identify obstacles, navigate complex roadways, and make real-time decisions without human intervention. By leveraging data from sensors and mapping systems, AVs can anticipate and react to changing traffic conditions, pedestrian movements, and road hazards, resulting in safer and more efficient transportation.\n\nThe potential benefits of autonomous vehicles are far-reaching, encompassing areas such as road safety, congestion mitigation, environmental sustainability, and accessibility. In terms of road safety, AVs have the potential to significantly reduce the number of traffic accidents and fatalities caused by human error, which accounts for the majority of road incidents. By eliminating factors such as distracted driving, impaired judgment, and fatigue, autonomous vehicles offer the promise of safer roads and highways for all users.\n\nMoreover, autonomous vehicles have the capacity to alleviate traffic congestion and reduce travel times by optimizing routes, minimizing stop-and-go traffic, and improving traffic flow through vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication. With the ability to coordinate movements and adjust speeds in real-time, AVs can mitigate traffic bottlenecks and enhance the efficiency of transportation networks, particularly in densely populated urban areas.\n\nFrom an environmental standpoint, autonomous vehicles hold the potential to reduce carbon emissions and mitigate the environmental impact of transportation. By optimizing driving patterns, reducing idling times, and promoting the adoption of electric and hybrid vehicle technologies, AVs can contribute to a cleaner, greener future. Furthermore, the emergence of shared autonomous mobility services, such as ride-hailing and autonomous shuttles, can promote modal shifts away from private car ownership, leading to fewer vehicles on the road and reduced overall emissions.\n\nIn addition to improving road safety, congestion, and environmental sustainability, autonomous vehicles have the potential to enhance accessibility and mobility for individuals with disabilities, seniors, and underserved communities. By providing on-demand, door-to-door transportation services, AVs can empower individuals who are unable to drive or navigate traditional transportation options, enabling greater independence and participation in society.\n\nDespite the tremendous promise of autonomous vehicles, several challenges and considerations must be addressed to realize their full potential. Technical hurdles, such as perfecting sensor technology, refining algorithms, and ensuring robust cybersecurity measures, remain key areas of focus for AV developers and manufacturers. Additionally, regulatory frameworks and standards for AV deployment and operation need to be established to ensure safety, liability, and accountability in the event of accidents or malfunctions.\n\nMoreover, ethical and societal implications surrounding AVs raise complex questions regarding liability, privacy, job displacement, and the ethical decision-making of autonomous systems. Issues such as the ethical prioritization of lives in emergency situations, the potential impact on employment in transportation-related industries, and the ethical use of data collected by AVs require careful consideration and deliberation by policymakers, industry stakeholders, and ethicists.\n\nFurthermore, the integration of autonomous vehicles into existing transportation infrastructure presents logistical challenges, including the need for updated road signage, traffic signals, and infrastructure modifications to accommodate AV operations. Additionally, public acceptance and trust in autonomous technology are crucial factors that will shape the adoption and deployment of AVs, requiring transparency, education, and outreach efforts to address concerns and misconceptions.\n\nIn conclusion, the era of autonomous vehicles represents a transformative shift in the way we conceive of transportation, offering the promise of safer, more efficient, and more accessible mobility for individuals and communities worldwide. As we navigate towards a driverless future, it is imperative to address technical, regulatory, ethical, and societal challenges to ensure that autonomous vehicles fulfill their potential to revolutionize transportation and improve quality of life for all. By fostering collaboration, innovation, and responsible stewardship of this groundbreaking technology, we can chart a course towards a future where autonomous vehicles play a central role in shaping the cities and societies of tomorrow."
);
articleTitles.push(
  "The Ethics of AI: Navigating the Complexities of Artificial Intelligence in Society"
);
articleContents.push(
  "Artificial Intelligence (AI) has emerged as a transformative force in the modern world, revolutionizing industries, augmenting human capabilities, and reshaping the fabric of society. From virtual assistants and recommendation systems to autonomous vehicles and facial recognition technology, AI applications permeate various aspects of our daily lives, influencing decision-making processes, shaping public discourse, and raising profound ethical questions. As AI technologies continue to advance at an unprecedented pace, navigating the complexities of AI ethics has become a pressing concern, requiring careful consideration of the ethical implications, societal impact, and moral responsibilities associated with the development and deployment of AI systems.\n\nAt the heart of AI ethics lies the tension between the potential benefits of AI and the ethical challenges and risks it poses. On one hand, AI has the potential to drive innovation, improve efficiency, and address complex societal challenges in areas such as healthcare, education, and environmental sustainability. AI-powered technologies hold the promise of enhancing productivity, streamlining workflows, and delivering personalized experiences that enrich human lives. However, alongside these benefits, AI also raises ethical concerns related to privacy, bias, fairness, accountability, and transparency.\n\nOne of the primary ethical considerations in AI is the issue of bias and fairness inherent in AI systems. AI algorithms are trained on large datasets that may reflect underlying biases present in society, leading to discriminatory outcomes and perpetuating social inequalities. For example, facial recognition algorithms have been found to exhibit higher error rates for individuals with darker skin tones, raising concerns about racial bias and the potential for discriminatory practices in law enforcement and surveillance. Addressing bias in AI requires proactive measures, including dataset diversity, algorithmic transparency, and fairness-aware machine learning techniques to mitigate bias and ensure equitable outcomes.\n\nMoreover, the ethical implications of AI extend to questions of privacy and data protection. AI systems often rely on vast amounts of personal data to train algorithms and make predictions, raising concerns about data privacy, consent, and surveillance. The proliferation of AI-enabled technologies, such as smart speakers, social media platforms, and IoT devices, has heightened privacy concerns and underscored the need for robust data protection regulations and safeguards. Additionally, the use of AI for surveillance and monitoring purposes raises ethical questions about the balance between security and individual liberties, highlighting the importance of transparency, accountability, and oversight in AI deployments.\n\nAnother ethical consideration in AI revolves around accountability and transparency in decision-making processes. As AI systems become increasingly autonomous and complex, the question of who is responsible for the decisions and actions of AI systems becomes more challenging to answer. In cases of AI failures or errors, determining liability and accountability can be complicated, particularly when AI systems operate in dynamic and unpredictable environments. Establishing mechanisms for transparency, explainability, and accountability in AI decision-making is essential for building trust and ensuring that AI systems are aligned with ethical principles and human values.\n\nFurthermore, the ethical implications of AI extend to questions of autonomy, agency, and the future of work. As AI technologies automate tasks and augment human capabilities, concerns about job displacement, economic inequality, and the erosion of human agency have emerged. While AI has the potential to create new opportunities and enhance productivity, it also raises questions about the distribution of wealth and power, the future of employment, and the ethical implications of delegating decision-making authority to machines. Balancing the benefits of AI with the ethical considerations of job displacement, economic inequality, and human dignity requires careful deliberation and proactive measures to mitigate potential harms.\n\nIn addition to these ethical considerations, the societal impact of AI raises broader questions about the ethical use of technology and its implications for democracy, social cohesion, and human flourishing. AI-powered technologies have the potential to shape public discourse, influence political decision-making, and amplify existing social divisions, posing challenges to democratic governance and social cohesion. Ensuring that AI technologies are developed and deployed in a manner that promotes ethical values, human rights, and social justice is essential for building a more equitable and inclusive society.\n\nAs we navigate the complexities of AI ethics, it is imperative to adopt a multidisciplinary approach that integrates insights from ethics, law, philosophy, computer science, and social sciences. Collaborative efforts among policymakers, technologists, ethicists, civil society organizations, and other stakeholders are essential for developing ethical frameworks, guidelines, and standards that govern the responsible development and deployment of AI technologies. Moreover, fostering public awareness, engagement, and dialogue about the ethical implications of AI is crucial for promoting informed decision-making and shaping ethical AI policies that reflect societal values and aspirations.\n\nIn conclusion, the ethics of AI present a multifaceted and evolving challenge that requires careful consideration of the ethical implications, societal impact, and moral responsibilities associated with the development and deployment of AI technologies. By embracing ethical principles, fostering collaboration, and engaging in meaningful dialogue, we can navigate the complexities of AI ethics and harness the transformative potential of AI to build a more just, inclusive, and human-centered future."
);
articleTitles.push(
  "5G Technology: Accelerating the Fourth Industrial Revolution"
);
articleContents.push(
  "The rollout of 5G technology represents a monumental leap forward in the realm of telecommunications, heralding a new era of connectivity and innovation that promises to reshape industries, revolutionize consumer experiences, and accelerate the pace of technological advancement. As the successor to 4G LTE, 5G technology boasts unprecedented speed, low latency, and high capacity, enabling a wide range of transformative applications and services that have the potential to drive economic growth, enhance productivity, and improve quality of life.\n\nAt its core, 5G technology is characterized by three key features: enhanced mobile broadband (eMBB), ultra-reliable low-latency communication (URLLC), and massive machine-type communication (mMTC). eMBB delivers blazing-fast download and upload speeds, making it possible to stream high-definition video, download large files, and access bandwidth-intensive applications with ease. URLLC ensures ultra-low latency and high reliability, enabling mission-critical applications such as autonomous vehicles, remote surgery, and industrial automation that require real-time responsiveness and zero downtime. mMTC facilitates the connectivity of billions of IoT devices, sensors, and machines, paving the way for the Internet of Things (IoT) revolution and enabling smart cities, connected infrastructure, and intelligent automation.\n\nOne of the most significant implications of 5G technology is its role in accelerating the Fourth Industrial Revolution, a transformative paradigm shift characterized by the convergence of digital, physical, and biological technologies. 5G serves as the backbone of this revolution, providing the high-speed, low-latency connectivity necessary to power emerging technologies such as artificial intelligence, robotics, augmented reality, and the Internet of Things. By enabling seamless communication and data exchange between devices, sensors, and systems, 5G unlocks new possibilities for innovation and disruption across industries.\n\nIn the realm of manufacturing, 5G technology promises to usher in the era of Industry 4.0, characterized by smart factories, autonomous production lines, and predictive maintenance. With 5G-enabled IoT devices and sensors embedded throughout the production process, manufacturers can collect real-time data on equipment performance, supply chain logistics, and product quality, enabling them to optimize operations, reduce downtime, and enhance efficiency. Furthermore, 5G-powered robotics and automation systems enable flexible, agile manufacturing processes that can quickly adapt to changing market demands and customer preferences.\n\nSimilarly, in the transportation sector, 5G technology is driving innovation in connected and autonomous vehicles (CAVs), revolutionizing the way we move people and goods. With 5G connectivity, CAVs can communicate with each other, with roadside infrastructure, and with central traffic management systems in real-time, enabling safer, more efficient transportation networks. 5G-powered CAVs can optimize traffic flow, reduce congestion, and enhance road safety by providing advanced driver assistance systems, collision avoidance capabilities, and intelligent traffic management.\n\nMoreover, 5G technology is poised to transform healthcare delivery, enabling remote patient monitoring, telemedicine, and personalized healthcare services. With 5G-enabled medical devices and wearables, healthcare providers can monitor patients' vital signs, track medication adherence, and diagnose medical conditions remotely, improving access to care and reducing healthcare costs. Additionally, 5G-powered telemedicine platforms enable virtual consultations, remote surgeries, and medical education, expanding access to specialized healthcare services and improving patient outcomes.\n\nIn the realm of entertainment and media, 5G technology is revolutionizing content creation, distribution, and consumption. With ultra-fast download speeds and low latency, 5G enables immersive experiences such as virtual reality (VR), augmented reality (AR), and 360-degree video streaming, transforming the way we engage with digital content. 5G-powered AR applications allow users to overlay digital information onto the physical world, creating interactive experiences for gaming, shopping, navigation, and education.\n\nFurthermore, 5G technology has the potential to unlock new opportunities for smart cities, connected infrastructure, and sustainable urban development. With 5G-enabled IoT sensors and smart grids, cities can optimize energy consumption, manage traffic congestion, and improve public safety. Additionally, 5G-powered smart transportation systems enable efficient public transit, bike-sharing programs, and electric vehicle charging infrastructure, reducing carbon emissions and promoting sustainable mobility.\n\nDespite its transformative potential, the widespread adoption of 5G technology faces several challenges and considerations, including infrastructure deployment, spectrum allocation, cybersecurity, and privacy concerns. Building out the necessary infrastructure for 5G networks requires significant investment in new infrastructure, including small cells, fiber-optic cables, and network densification. Spectrum allocation and management are critical for ensuring sufficient bandwidth and capacity to support the growing demand for wireless connectivity. Additionally, cybersecurity threats and privacy risks associated with 5G networks require robust security measures, encryption protocols, and data protection regulations to safeguard against cyberattacks and unauthorized access.\n\nIn conclusion, 5G technology represents a game-changer in the realm of telecommunications, unlocking new possibilities for connectivity, innovation, and economic growth. By accelerating the Fourth Industrial Revolution, 5G serves as a catalyst for transformative change across industries, driving advancements in manufacturing, transportation, healthcare, entertainment, and urban development."
);
articleTitles.push(
  "Blockchain Beyond Cryptocurrency: Exploring the Diverse Applications of Distributed Ledger Technology"
);
articleContents.push(
  "Blockchain technology, initially synonymous with cryptocurrencies such as Bitcoin, has evolved far beyond its original application, paving the way for a multitude of innovative solutions across various industries. At its core, blockchain is a decentralized, immutable ledger that records transactions and data in a transparent and secure manner. By distributing data across a network of nodes and employing cryptographic techniques, blockchain ensures transparency, integrity, and trust without the need for intermediaries. While cryptocurrencies remain a prominent use case for blockchain, the technology's potential extends far beyond finance, with applications ranging from supply chain management and healthcare to voting systems and intellectual property rights.\n\nOne of the most promising applications of blockchain technology is in supply chain management, where it offers transparency, traceability, and accountability throughout the entire supply chain. By recording every transaction and movement of goods on a blockchain, companies can track the provenance of products from raw materials to the end consumer, ensuring authenticity and quality control. Additionally, blockchain enables real-time monitoring of inventory levels, reducing inefficiencies, and minimizing the risk of counterfeit goods entering the supply chain. Companies like Walmart and IBM are already leveraging blockchain to improve supply chain transparency and streamline operations.\n\nIn the healthcare industry, blockchain technology holds the potential to revolutionize data management, patient records, and medical research. With blockchain, patient health records can be securely stored and shared among healthcare providers, ensuring privacy and interoperability while reducing administrative overhead. Moreover, blockchain enables the secure sharing of medical research data, accelerating the pace of medical discoveries and facilitating collaboration among researchers worldwide. Projects like Medicalchain and Solve.Care are leveraging blockchain to empower patients, streamline healthcare administration, and improve patient outcomes.\n\nAnother area where blockchain technology is making a significant impact is in digital identity management, where it offers a decentralized, secure, and tamper-proof solution for identity verification. With blockchain-based identity systems, individuals have greater control over their personal data and can selectively share information with trusted parties, reducing the risk of identity theft and fraud. Blockchain identity solutions also have the potential to provide access to essential services for underserved populations, such as refugees and migrants, who may lack traditional forms of identification. Projects like uPort and Civic are developing blockchain-based identity platforms to empower individuals and enhance digital trust.\n\nFurthermore, blockchain technology is transforming the way intellectual property rights are managed, enforced, and monetized. By recording digital assets such as patents, copyrights, and trademarks on a blockchain, creators can prove ownership, track usage, and enforce licensing agreements in a transparent and decentralized manner. Smart contracts, self-executing contracts coded on a blockchain, enable automated royalty payments and ensure that creators are fairly compensated for their work. Projects like IPCHAIN and Ascribe are leveraging blockchain to create decentralized marketplaces for intellectual property rights, empowering creators and innovators to protect and monetize their creations.\n\nIn addition to these applications, blockchain technology has the potential to revolutionize voting systems, digital payments, decentralized finance (DeFi), and the Internet of Things (IoT). Blockchain-based voting systems offer transparency, integrity, and security, eliminating the risk of tampering and fraud while increasing voter participation and trust in democratic processes. Digital payments platforms powered by blockchain enable instant, low-cost transactions across borders, bypassing traditional banking intermediaries and reducing transaction fees. DeFi platforms leverage blockchain to democratize access to financial services such as lending, borrowing, and asset management, enabling individuals to participate in global financial markets without relying on centralized institutions. In the IoT space, blockchain enables secure and tamper-proof data sharing and transactions among connected devices, paving the way for new business models and applications.\n\nDespite its transformative potential, blockchain technology still faces several challenges and barriers to adoption, including scalability, interoperability, regulatory uncertainty, and energy consumption. Scalability remains a significant bottleneck for blockchain networks, with limited transaction throughput and high latency inhibiting widespread adoption for high-volume applications. Interoperability between different blockchain platforms and legacy systems is another challenge, hindering seamless data exchange and integration across networks. Moreover, regulatory uncertainty and lack of clear legal frameworks pose risks for businesses and investors operating in the blockchain space, deterring investment and innovation.\n\nIn conclusion, blockchain technology represents a paradigm shift in the way data is managed, transactions are conducted, and trust is established in digital ecosystems. Beyond cryptocurrency, blockchain's potential applications span diverse industries, from supply chain management and healthcare to digital identity and intellectual property rights. As blockchain continues to mature and overcome its technical and regulatory challenges, it holds the promise of transforming industries, empowering individuals, and creating a more transparent, secure, and inclusive digital economy"
);

// To read the number of files in articlesPath
// fs.readdir(articlesPath, (err, files) => {
//   console.log(files.length);
// });

// Root directory request
app.get("/", (req, res) => {
  res.redirect("home");
});

// Home Page request
app.get("/home", (req, res) => {
  res.render("home.ejs");
});

// Compose page request
app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

// Articles page request
app.get("/articles", (req, res) => {
  res.render("articles.ejs", {
    articleTitles: articleTitles,
    articleContents: articleContents,
  });
});

// Publish article request
app.post("/publish", (req, res) => {
  articleTitles.push(req.body.title);
  articleContents.push(req.body.content);

  // Store the published article in files
  // fs.writeFile(articlesPath + "/" + req.body.title + ".txt",req.body.content, (err) => {
  //   if (err) throw err;
  //   console.log("The file has bees saved");
  // });

  res.render("published.ejs");
});

// View article request
app.get("/articles/:id", (req, res) => {
  let index = req.params.id;
  res.render("article.ejs", {
    index: index,
    title: articleTitles[index],
    content: articleContents[index],
  });
});

// Edit article compose page request
app.get("/compose/:id", (req, res) => {
  const index = req.params.id;

  res.render("compose.ejs", {
    index: index,
    title: articleTitles[index],
    content: articleContents[index],
  });
});

// Edit article request
app.put("/publish/:id", (req, res) => {
  const index = req.params.id;

  articleTitles[index] = req.body.title;
  articleContents[index] = req.body.content;

  res.render("published.ejs");
});

// Delete article request
app.delete("/delete/:id", (req, res) => {
  const index = req.params.id;

  // Remove article from array
  articleTitles.splice(index, 1);
  articleContents.splice(index, 1);

  res.redirect("/articles");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
