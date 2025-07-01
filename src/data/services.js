import { 
  FaExchangeAlt,
  FaStream,
  FaCubes,
  FaChartBar,
  FaCloud,
  FaPuzzlePiece,
  FaTools,
  FaGraduationCap,
  FaLightbulb
} from 'react-icons/fa';

export const services = [
  {
    id: "data-integration",
    icon: <FaExchangeAlt className="text-4xl text-white" />,
    title: "Data Integration",
    description: "Consolidate data from spreadsheets, CRMs, POS systems, e-commerce platforms, and  Cloud & On-Premises databases into a single, unified view.",
    benefit: "Save time, eliminate errors, and ensure all your data is accessible and ready for decision-making.",
    fullDescription: `
      <h2>Data Integration Services</h2>
      <h3>Unify Your Data for Smarter Decision-Making</h3>
      
      <p>In today's fast-paced business world, data is scattered across multiple platforms—CRMs, POS systems, e-commerce platforms, cloud databases, and spreadsheets. Without seamless integration, businesses struggle with data silos, inconsistencies, and inefficiencies.</p>
      <p>At Coralytica, we provide end-to-end data integration solutions, ensuring that all your critical business information is centralized, synchronized, and readily available for analysis and decision-making.</p>
      
      <h3>What is Data Integration?</h3>
      <p>Data Integration is the process of consolidating data from various sources into a single, unified, and structured format. This eliminates manual data handling, reduces errors, and enables real-time insights.</p>
      
      <h3>Key Benefits of Our Data Integration Solutions</h3>
      <ul>
        <li><strong>Eliminate Data Silos</strong> – Connect multiple systems and platforms into a single source of truth.</li>
        <li><strong>Improve Data Accuracy</strong> – Standardize, clean, and validate data across all sources.</li>
        <li><strong>Save Time & Boost Efficiency</strong> – Automate workflows to reduce manual work and human errors.</li>
        <li><strong>Enable Real-Time Insights</strong> – Implement real-time or batch processing for data-driven decision-making.</li>
        <li><strong>Scalability & Performance</strong> – Our integration solutions are designed to grow with your business needs.</li>
      </ul>
      
      <h3>Our Data Integration Expertise</h3>
      <p>We specialize in seamless data integration across a wide range of systems and formats, ensuring that your business has a fully connected data ecosystem.</p>
      <ul>
        <li><strong>API & System Integrations</strong> – Securely connect CRM, ERP, POS, e-commerce, and financial software.</li>
        <li><strong>Database Synchronization & Replication</strong> – Keep data consistent and up to date across cloud and on-premise environments.</li>
        <li><strong>Cloud & On-Premises Data Integration</strong> – Seamlessly connect Google Cloud, Azure, and AWS environments.</li>
        <li><strong>Real-Time & Batch Processing</strong> – Implement real-time streaming (Kafka, Pub/Sub, Dataflow) and scheduled batch processing.</li>
        <li><strong>Custom Data Connectors</strong> – Build bespoke integration solutions for legacy systems and unique business needs.</li>
      </ul>
      
      <h3>Our Approach to Data Integration</h3>
      <ol>
        <li><strong>Discovery & Strategy</strong> – We analyze your data sources, formats, and business needs to create a customized integration plan.</li>
        <li><strong>System Architecture & Design</strong> – We develop a scalable integration framework that aligns with your business objectives.</li>
        <li><strong>Implementation & Automation</strong> – Using industry-leading tools, we automate data pipelines and workflows.</li>
        <li><strong>Testing & Optimization</strong> – We validate data integrity, identify inconsistencies, and optimize performance.</li>
        <li><strong>Continuous Support & Scaling</strong> – As your business evolves, our solutions grow with you, ensuring long-term reliability.</li>
      </ol>
      
      <h3>Technologies We Work With</h3>
      <ul>
        <li><strong>Cloud Platforms</strong> – Google Cloud (BigQuery, Dataflow, Airflow), Azure (Data Factory, Databricks, Synapse), AWS (Glue, Lambda, RDS)</li>
        <li><strong>Databases</strong> – SQL Server, Snowflake, PostgreSQL, MySQL, NoSQL (MongoDB, Firebase)</li>
        <li><strong>Data Processing</strong> – Apache Spark, PySpark, Hadoop, Kafka, Pub/Sub</li>
        <li><strong>Visualization & BI</strong> – Power BI, Tableau</li>
      </ul>
      
      <p>With Coralytica, your business can seamlessly integrate, automate, and optimize its data infrastructure, enabling faster, more informed decision-making.</p>
    `
  },
  {
    id: "etl-pipelines",
    icon: <FaStream className="text-4xl text-white" />,
    title: "ETL and Automated Data Pipelines",
    description: "Automate the cleaning, transformation, and loading of data into analysis-ready systems.",
    benefit: "Reduce manual tasks, ensure real-time updates, and maintain consistent data accuracy.",
    fullDescription: `
      <h2>ETL & Automated Data Pipelines</h2>
      <p>Seamlessly extract, transform, and load data into analysis-ready systems with automated, scalable, and reliable pipelines.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Eliminate manual processes</strong> – Automate workflows to save time and reduce errors.</li>
        <li><strong>Real-time & batch processing</strong> – Get instant insights or schedule data updates.</li>
        <li><strong>Ensure data quality & consistency</strong> – Clean, validate, and standardize data automatically.</li>
        <li><strong>Scalable & flexible</strong> – Deploy on-prem, cloud, or hybrid environments.</li>
      </ul>

      <h3>How We Do It</h3>
      <p>We build robust ETL and data pipelines that:</p>
      <ul>
        <li>Extract data from multiple sources (databases, APIs, ERP, CRM, e-commerce, logs).</li>
        <li>Transform raw data with business rules, cleaning, and aggregation.</li>
        <li>Load structured data into warehouses, lakes, or transactional systems.</li>
        <li>Automate & monitor with built-in error detection and alerting.</li>
      </ul>

      <h3>Technologies We Use</h3>
      
      <h4>Code-Based Data Pipelines</h4>
      <ul>
        <li>Python & SQL for customized data transformation and automation.</li>
        <li>Apache Spark & PySpark for large-scale parallel processing.</li>
      </ul>

      <h4>On-Premise ETL Solutions</h4>
      <ul>
        <li>SSIS (SQL Server Integration Services) for Microsoft environments.</li>
        <li>Pentaho Data Integration (PDI) for flexible and scalable ETL workflows.</li>
      </ul>

      <h4>Cloud-Based ETL Solutions</h4>
      <ul>
        <li>AWS Glue – Serverless ETL with native AWS integration.</li>
        <li>Google Cloud Dataflow – Real-time data processing with Apache Beam.</li>
        <li>Azure Data Factory – Hybrid data orchestration in Azure.</li>
        <li>Databricks with Spark – Advanced transformations and scalable cloud data processing.</li>
      </ul>

      <h4>Orchestration & Workflow Automation</h4>
      <ul>
        <li>Apache Airflow – Workflow orchestration and scheduling.</li>
        <li>dbt (Data Build Tool) – Modular and scalable data modeling.</li>
      </ul>

      <h3>Our Approach</h3>
      <ol>
        <li><strong>Discovery & Strategy</strong> – Assess data sources, formats, and business needs.</li>
        <li><strong>Architecture & Design</strong> – Develop a scalable, optimized data pipeline.</li>
        <li><strong>Implementation & Automation</strong> – Build efficient, resilient workflows.</li>
        <li><strong>Monitoring & Optimization</strong> – Ensure data integrity and peak performance.</li>
        <li><strong>Continuous Support & Scaling</strong> – Future-proof solutions that grow with your business.</li>
      </ol>

      <p>With Coralytica, your data is always clean, connected, and ready for action.</p>
    `
  },
  {
    id: "data-modeling",
    icon: <FaCubes className="text-4xl text-white" />,
    title: "Data Architecture, Modeling & Scalable Data Warehouses & Data Lakes",
    description: "Build scalable, structured data warehouses optimized for reporting and analysis.",
    benefit: "Enable faster, more accurate insights by organizing and optimizing your data for seamless reporting, analytics, and business intelligence.",
    fullDescription: `
      <h2>Data Architecture, Modeling & Scalable Data Warehouses & Data Lakes</h2>
      <p>Transform scattered data into a centralized, structured, and high-performance system that drives smarter business decisions.</p>

      <h3>Key Benefit</h3>
      <p>Enable faster, more accurate insights by organizing and optimizing your data for seamless reporting, analytics, and business intelligence.</p>

      <h3>Why Your Business Needs a Strong Data Architecture</h3>
      <p>Many businesses struggle with disorganized, disconnected, and unreliable data, leading to:</p>

      <ul>
        <li>Time-consuming manual reporting – Hours wasted compiling spreadsheets.</li>
        <li>Inconsistent data across systems – Conflicting numbers from different sources.</li>
        <li>Slow decision-making – Delays in accessing real-time insights.</li>
        <li>Limited scalability – Data systems that don't grow with your business.</li>
      </ul>

      <p>With a modern data architecture, businesses can:</p>

      <ul>
        <li>Unify data from all sources – Create a single, accurate version of the truth.</li>
        <li>Automate data processes – Eliminate errors and manual effort.</li>
        <li>Get real-time insights – Make faster, data-driven decisions.</li>
        <li>Scale effortlessly – Adapt data infrastructure to business growth.</li>
        <li>Reduce costs & optimize performance – Efficient storage and processing solutions.</li>
      </ul>

      <h3>How We Help</h3>
      <p>We design and implement scalable data solutions that turn fragmented data into a strategic asset:</p>

      <ul>
        <li>Data Warehouses & Data Lakes – Centralized storage for structured and unstructured data.</li>
        <li>Data Marts & Operational Data Stores (ODS) – Custom datasets tailored to business needs.</li>
        <li>Hybrid OLTP & OLAP Architectures – Enable both real-time operations and deep analytics.</li>
        <li>Intelligent Data Modeling – Ensure consistency, accuracy, and high performance.</li>
      </ul>

      <h3>Business Outcomes You Can Expect</h3>
      <ul>
        <li>Faster & More Accurate Analytics – Insights in minutes, not days.</li>
        <li>Lower Costs & Higher ROI – Optimize storage, processing, and resource allocation.</li>
        <li>Increased Productivity – Free up time by automating reporting and data integration.</li>
        <li>Deeper Business Insights – Access real-time and historical trends with ease.</li>
        <li>Seamless System Integration – Connect ERP, CRM, BI tools, and cloud platforms effortlessly.</li>
      </ul>

      <h3>Technologies We Use</h3>
      <ul>
        <li>Cloud Data Warehouses – Snowflake, BigQuery, Redshift, Azure Synapse.</li>
        <li>Data Lakes – AWS S3, Google Cloud Storage, Azure Data Lake.</li>
        <li>ETL & Automation – dbt, Apache Spark, Airflow, AWS Glue, Azure Data Factory.</li>
        <li>On-Prem & Hybrid Databases – SQL Server, Oracle, PostgreSQL, MySQL.</li>
      </ul>

      <h3>Our Proven Process</h3>
      <ol>
        <li>Assessment & Strategy – Identify business goals and data challenges.</li>
        <li>Architecture & Design – Create a scalable, optimized data infrastructure.</li>
        <li>Automation & Integration – Streamline data movement for seamless reporting.</li>
        <li>Optimization & Scaling – Ensure peak efficiency, speed, and cost-effectiveness.</li>
      </ol>

      <h3>Why Choose Coralytica?</h3>
      <p>We don't just store data—we turn it into a strategic advantage to help businesses:</p>

      <ul>
        <li>Speed up insights – Reduce reporting time from days to minutes.</li>
        <li>Eliminate inefficiencies – Automate data processes and improve accuracy.</li>
        <li>Drive business growth – Build a scalable, future-proof data infrastructure.</li>
      </ul>

      <p>Let's build your next-generation data ecosystem today!</p>
    `
  },
  {
    id: "dashboard-design",
    icon: <FaChartBar className="text-4xl text-white" />,
    title: "Dashboard Design & Business Insights",
    description: "Create interactive, user-friendly dashboards to visualize pre-defined KPIs and monitor business performance in real time.",
    benefit: "Empower teams with intuitive, visually compelling dashboards that provide instant business insights—without needing technical expertise.",
    fullDescription: `
      <h2>Dashboard Design & Business Insights</h2>
      <p>Turn raw data into clear, actionable insights with interactive dashboards designed for real-time decision-making.</p>

      <h3>Key Benefit</h3>
      <p>Empower teams with intuitive, visually compelling dashboards that provide instant business insights—without needing technical expertise.</p>

      <h3>Why Your Business Needs Smart Dashboards</h3>
      <p>Many businesses struggle with:</p>

      <ul>
        <li>Scattered reports & spreadsheets – Wasting time collecting and interpreting data.</li>
        <li>Complex, hard-to-read analytics – Making decision-making slow and frustrating.</li>
        <li>Lack of real-time insights – Reacting too late to market changes and operational issues.</li>
        <li>Over-reliance on IT teams – Waiting on reports instead of accessing data on demand.</li>
      </ul>

      <p>A well-designed dashboard strategy helps businesses:</p>

      <ul>
        <li>See critical KPIs in real time – No more waiting for reports—instant access to insights.</li>
        <li>Make data-driven decisions faster – Focus on what matters with clear, visual analytics.</li>
        <li>Customize dashboards for different teams – Tailor insights for executives, finance, sales, and operations.</li>
        <li>Improve efficiency & collaboration – Centralize data for a single source of truth.</li>
        <li>Access from anywhere – Cloud-based and mobile-friendly dashboards keep teams connected.</li>
      </ul>

      <h3>How We Help</h3>
      <p>We design dashboards that are clear, interactive, and tailored to your business needs:</p>

      <ul>
        <li>Executive Dashboards – Track high-level KPIs for leadership teams.</li>
        <li>Operational Dashboards – Monitor daily performance, trends, and risks.</li>
        <li>Analytical Dashboards – Dive deeper into data for advanced insights.</li>
        <li>Custom Visualizations – Showcase complex data relationships in an intuitive format.</li>
        <li>Embedded Analytics – Integrate dashboards directly into your existing apps and workflows.</li>
      </ul>

      <h3>Tools & Technologies We Use</h3>
      <p>We work with the best business intelligence (BI) and visualization platforms, including:</p>

      <ul>
        <li>Industry-Leading BI Tools – Tableau, Power BI, Looker, Qlik.</li>
        <li>Custom Web-Based Dashboards – D3.js, Chart.js, React libraries.</li>
        <li>Cloud & Embedded Analytics – Integrated with AWS, Google Cloud, and Azure.</li>
      </ul>

      <p>All dashboards are designed with user experience in mind, ensuring data is accessible, easy to navigate, and visually impactful.</p>

      <h3>Business Outcomes You Can Expect</h3>
      <ul>
        <li>Faster decision-making – Get real-time updates on business performance.</li>
        <li>Deeper business insights – Uncover trends and opportunities quickly.</li>
        <li>More efficient teams – Reduce time spent on manual reporting.</li>
        <li>Data-driven culture – Make strategic decisions based on real-time metrics.</li>
      </ul>

      <h3>Our Proven Process</h3>
      <ol>
        <li>Discovery & Planning – Understand your business goals and key metrics.</li>
        <li>Dashboard Design & Prototyping – Create interactive, easy-to-use visualizations.</li>
        <li>Data Integration – Connect to your data sources for real-time updates.</li>
        <li>Testing & Optimization – Ensure performance, accuracy, and usability.</li>
        <li>Deployment & Training – Enable teams to use dashboards effectively.</li>
      </ol>

      <h3>Why Choose Coralytica?</h3>
      <p>We simplify complex data with dashboards that are not just visually stunning—but practical, insightful, and built for real-world decision-making.</p>
    `
  },
  {
    id: "cloud-analytics",
    icon: <FaCloud className="text-4xl text-white" />,
    title: "Cloud-Based & On-Premises Analytics",
    description: "Make smarter business decisions with data-driven insights, whether your analytics run on-premise, in the cloud, or both.",
    benefit: "Give your business the power of real-time, easy-to-use analytics, accessible from anywhere—without needing a dedicated IT team.",
    fullDescription: `
      <h2>Cloud-Based & On-Premises Analytics</h2>
      <p>Make smarter business decisions with data-driven insights, whether your analytics run on-premise, in the cloud, or both.</p>

      <h3>Key Benefit</h3>
      <p>Give your business the power of real-time, easy-to-use analytics, accessible from anywhere—without needing a dedicated IT team.</p>

      <h3>Why Your Business Needs Smart Analytics</h3>
      <p>Many small and medium-sized businesses struggle with:</p>

      <ul>
        <li>Spending too much time on spreadsheets – Manual reports that take hours to prepare.</li>
        <li>Data spread across different systems – Hard to get a clear, real-time picture.</li>
        <li>Missed opportunities – Without good data, it's difficult to optimize sales, costs, or operations.</li>
        <li>Lack of actionable insights – Reports that show numbers but don't guide decision-making.</li>
      </ul>

      <p>With cloud or on-premise analytics, businesses can:</p>

      <ul>
        <li>Automate reporting – Spend less time compiling data and more time acting on insights.</li>
        <li>Monitor performance in real-time – Track sales, cash flow, inventory, and more.</li>
        <li>Improve efficiency – Reduce waste and optimize operations with data-backed decisions.</li>
        <li>Grow with confidence – Use past trends to forecast and plan smarter.</li>
        <li>Choose where to run analytics – Keep data on-premise, in the cloud, or a mix of both.</li>
      </ul>

      <h3>How We Help</h3>
      <p>We make data analytics simple, accessible, and tailored to your business:</p>

      <ul>
        <li>On-Premise & Cloud Analytics – Choose the best environment for your business needs.</li>
        <li>Automated Business Reports – No more manual data crunching—get insights instantly.</li>
        <li>Custom Dashboards & KPIs – Track the numbers that matter most to you.</li>
        <li>Integration with Existing Tools – Connect accounting, sales, and operations systems.</li>
        <li>Data Security & Compliance – Ensure your business data stays protected.</li>
      </ul>

      <h3>Real-World Impact for Small & Medium-Sized Businesses</h3>
      
      <h4>Retail & E-Commerce</h4>
      <ul>
        <li>KPI Examples: Best-selling products, monthly revenue, stock levels.</li>
        <li>Impact: Avoid stockouts, optimize pricing, and improve customer retention.</li>
      </ul>

      <h4>Professional Services & Agencies</h4>
      <ul>
        <li>KPI Examples: Billable hours, project profitability, client retention rates.</li>
        <li>Impact: Improve project efficiency and maximize revenue per client.</li>
      </ul>

      <h4>Hospitality & Restaurants</h4>
      <ul>
        <li>KPI Examples: Table turnover, online order trends, customer satisfaction.</li>
        <li>Impact: Adjust staffing, reduce food waste, and improve guest experience.</li>
      </ul>

      <h4>Local Manufacturing & Distribution</h4>
      <ul>
        <li>KPI Examples: Production output, inventory accuracy, delivery times.</li>
        <li>Impact: Optimize supply chains, reduce costs, and improve order fulfillment.</li>
      </ul>

      <h4>Finance & Accounting</h4>
      <ul>
        <li>KPI Examples: Cash flow trends, overdue invoices, revenue forecasting.</li>
        <li>Impact: Improve financial planning and reduce late payments.</li>
      </ul>

      <h3>Platforms We Work With</h3>
      <p>We support both on-premise and cloud analytics, using tools that fit your business:</p>

      <ul>
        <li>Cloud-Based Analytics – AWS, Google Cloud, Microsoft Azure.</li>
        <li>On-Premise Solutions – SQL-based analytics, local reporting systems.</li>
        <li>BI & Dashboard Tools – Power BI, Tableau, Looker, Google Data Studio.</li>
      </ul>

      <p>Whether you prefer on-site control or the flexibility of the cloud, we tailor analytics to match your needs.</p>

      <h3>Business Outcomes You Can Expect</h3>
      <ul>
        <li>Faster Decisions – Access real-time business data from anywhere.</li>
        <li>Save Time & Reduce Errors – Automate reporting and avoid manual mistakes.</li>
        <li>Improve Profitability – Identify inefficiencies and uncover new opportunities.</li>
        <li>Stay Competitive – Use data-driven insights to grow faster and smarter.</li>
      </ul>

      <h3>Our Proven Process</h3>
      <ol>
        <li>Understand Your Business – Identify key metrics and reporting needs.</li>
        <li>Build & Optimize Analytics – Design dashboards, automate reports, and ensure accuracy.</li>
        <li>Integrate & Secure Data – Connect your existing systems and maintain data protection.</li>
        <li>Train & Support – Make sure your team understands and uses analytics effectively.</li>
      </ol>

      <h3>Why Choose Coralytica?</h3>
      <p>We help small and medium-sized businesses make data-driven decisions without complexity.</p>
    `
  },
  {
    id: "data-migration",
    icon: <FaPuzzlePiece className="text-4xl text-white" />,
    title: "Data Migration from On-Premise to the Cloud",
    description: "Seamlessly migrate your on-premise data and applications to the cloud with minimal disruption and maximum security.",
    benefit: "Reduce infrastructure costs, improve scalability, and enhance data accessibility while ensuring business continuity during migration.",
    fullDescription: `
      <h2>Data Migration from On-Premise to the Cloud</h2>
      <p>Migrate your data with zero downtime, maximum security, and optimized performance—ensuring a smooth transition to the cloud.</p>

      <h3>Key Benefit</h3>
      <p>Eliminate costly legacy infrastructure and unlock scalable, secure, and high-performance cloud data solutions for better agility and growth.</p>

      <h3>Why Move Your Data to the Cloud?</h3>
      <p>Many businesses rely on outdated on-premise systems that come with challenges like:</p>

      <ul>
        <li>High maintenance costs – Servers, storage, and upgrades are expensive.</li>
        <li>Limited scalability – Struggling to handle growing data volumes.</li>
        <li>Data silos & inefficiencies – Disconnected systems slowing down decision-making.</li>
        <li>Security & compliance risks – On-premise environments are harder to monitor and protect.</li>
      </ul>

      <p>With a cloud data migration, your business benefits from:</p>

      <ul>
        <li>Lower infrastructure costs – No need for expensive hardware maintenance.</li>
        <li>Scalability on demand – Easily expand storage and processing power as needed.</li>
        <li>Better security & compliance – Built-in encryption, monitoring, and access controls.</li>
        <li>Faster access to insights – Improve reporting, analytics, and decision-making.</li>
        <li>Business continuity – Reduce risks of downtime, data loss, or system failures.</li>
      </ul>

      <h3>How We Help</h3>
      <p>At Coralytica, we ensure a smooth, secure, and fully optimized migration with minimal disruption to your business operations.</p>

      <ul>
        <li>Cloud Strategy & Readiness Assessment – Evaluate your current infrastructure and define the best migration plan.</li>
        <li>Data Extraction & Transformation – Ensure data is cleansed, formatted, and optimized for the cloud.</li>
        <li>Seamless Cloud Migration – Move databases, applications, and workloads securely.</li>
        <li>Validation & Performance Tuning – Test and optimize cloud environments for efficiency.</li>
        <li>Ongoing Support & Optimization – Ensure continuous monitoring, security, and cost control.</li>
      </ul>

      <h3>Migration Approaches We Support</h3>
      <p>We tailor our migration approach to fit your business needs:</p>

      <ul>
        <li>Lift & Shift – Rapidly move data "as-is" to the cloud with minimal changes.</li>
        <li>Replatforming – Optimize workloads for better cloud performance.</li>
        <li>Refactoring – Redesign applications to take full advantage of cloud-native features.</li>
        <li>Hybrid & Multi-Cloud Solutions – Maintain certain workloads on-premise while leveraging cloud power.</li>
      </ul>

      <h3>Cloud Platforms We Work With</h3>
      <ul>
        <li>Amazon Web Services (AWS) – Redshift, S3, Glue, Lambda.</li>
        <li>Microsoft Azure – Synapse, Data Factory, Databricks.</li>
        <li>Google Cloud Platform (GCP) – BigQuery, Dataflow, Looker.</li>
        <li>Snowflake Data Cloud – Scalable, cloud-native data warehousing.</li>
      </ul>

      <h3>Business Outcomes You Can Expect</h3>
      <ul>
        <li>Faster Data Access – Improve analytics and reporting speeds.</li>
        <li>Reduced IT Costs – Cut expenses on hardware and maintenance.</li>
        <li>Enhanced Performance – Cloud-optimized storage and computing.</li>
        <li>Stronger Security & Compliance – Built-in encryption and monitoring.</li>
        <li>Seamless Integration – Connect cloud with existing applications.</li>
      </ul>

      <h3>Our Proven Migration Process</h3>
      <ol>
        <li>Assessment & Planning – Analyze your current infrastructure and create a roadmap.</li>
        <li>Data Preparation & Extraction – Cleanse, transform, and optimize your data.</li>
        <li>Cloud Migration Execution – Securely move data with minimal disruption.</li>
        <li>Testing & Validation – Ensure accuracy, security, and efficiency.</li>
        <li>Optimization & Ongoing Support – Monitor performance and fine-tune resources.</li>
      </ol>

      <h3>Why Choose Coralytica?</h3>
      <p>We make cloud migration simple, secure, and cost-effective, helping businesses transition with confidence.</p>
    `
  },
  {
    id: "data-enablement",
    icon: <FaTools className="text-4xl text-white" />,
    title: "Data Enablement and Platform Support",
    description: "Comprehensive support and enablement services to ensure your data platforms run smoothly and efficiently.",
    benefit: "Maximize the value of your data investments with expert support, training, and optimization services.",
    fullDescription: `
      <h2>Data Enablement and Platform Support</h2>
      <p>Ensure your data platforms deliver maximum value with our comprehensive support and enablement services.</p>

      <h3>Key Benefit</h3>
      <p>Maximize the value of your data investments with expert support, training, and optimization services.</p>

      <h3>Why Your Business Needs Data Enablement</h3>
      <p>Many businesses face challenges with their data platforms:</p>

      <ul>
        <li>Underutilized platforms – Not fully leveraging the capabilities of your data tools.</li>
        <li>Technical bottlenecks – Delays in getting support when issues arise.</li>
        <li>Knowledge gaps – Teams not fully trained on available features.</li>
        <li>Performance issues – Systems not optimized for efficiency.</li>
      </ul>

      <p>With our enablement services, your business can:</p>

      <ul>
        <li>Optimize platform usage – Get the most out of your data investments.</li>
        <li>Reduce downtime – Quick resolution of technical issues.</li>
        <li>Empower teams – Build internal expertise through training.</li>
        <li>Improve efficiency – Optimize system performance and workflows.</li>
        <li>Stay current – Regular updates on new features and best practices.</li>
      </ul>

      <h3>Our Support Services</h3>
      <p>We provide comprehensive support across your data ecosystem:</p>

      <ul>
        <li>Technical Support – Expert assistance for platform issues and optimization.</li>
        <li>User Training – Hands-on sessions to build team capabilities.</li>
        <li>Performance Monitoring – Regular checks to ensure optimal operation.</li>
        <li>Best Practices – Guidance on platform usage and data management.</li>
        <li>Upgrade Planning – Strategic advice on platform evolution.</li>
      </ul>

      <h3>Platforms We Support</h3>
      <ul>
        <li>Business Intelligence Tools – Power BI, Tableau, Looker.</li>
        <li>Data Warehouses – Snowflake, BigQuery, Redshift, Azure Synapse.</li>
        <li>ETL Platforms – Informatica, Talend, Apache NiFi.</li>
        <li>Cloud Platforms – AWS, Azure, Google Cloud.</li>
        <li>Database Systems – SQL Server, PostgreSQL, MongoDB.</li>
      </ul>

      <h3>Business Outcomes You Can Expect</h3>
      <ul>
        <li>Improved Efficiency – Faster resolution of technical issues.</li>
        <li>Better ROI – Maximized value from your data platforms.</li>
        <li>Enhanced Productivity – Teams working more effectively with data tools.</li>
        <li>Reduced Risk – Proactive monitoring and issue prevention.</li>
        <li>Future-Ready – Regular updates on new features and capabilities.</li>
      </ul>

      <h3>Our Support Process</h3>
      <ol>
        <li>Initial Assessment – Understand your current platform usage and needs.</li>
        <li>Support Plan Development – Create a customized support strategy.</li>
        <li>Implementation – Set up monitoring, training, and support processes.</li>
        <li>Ongoing Optimization – Regular reviews and improvements.</li>
        <li>Continuous Learning – Keep teams updated with new features and best practices.</li>
      </ol>

      <h3>Why Choose Coralytica?</h3>
      <p>We provide comprehensive support that ensures your data platforms deliver maximum value to your business.</p>
    `
  },
  {
    id: "data-training",
    icon: <FaGraduationCap className="text-4xl text-white" />,
    title: "Training and Capacitation in Data Analysis and Engineering",
    description: "Empower your team with practical knowledge and skills in data analysis and engineering through customized training programs.",
    benefit: "Build internal expertise and data-driven culture while reducing dependency on external consultants.",
    fullDescription: `
      <h2>Training and Capacitation in Data Analysis and Engineering</h2>
      <p>Empower your team with the knowledge and skills needed to leverage data effectively in your business operations.</p>

      <h3>Key Benefit</h3>
      <p>Build internal expertise and data-driven culture while reducing dependency on external consultants.</p>

      <h3>Why Invest in Data Training?</h3>
      <p>Many businesses face challenges with data literacy and technical expertise:</p>

      <ul>
        <li>Limited data literacy – Teams struggle to understand and use data effectively.</li>
        <li>High dependency on external consultants – Costly and time-consuming.</li>
        <li>Missed opportunities – Not fully leveraging available data tools and platforms.</li>
        <li>Slow adoption of new technologies – Resistance to change and lack of understanding.</li>
      </ul>

      <p>With our training programs, your business can:</p>

      <ul>
        <li>Build internal expertise – Develop a skilled team of data professionals.</li>
        <li>Reduce costs – Minimize dependency on external consultants.</li>
        <li>Improve efficiency – Faster adoption of data tools and processes.</li>
        <li>Foster innovation – Encourage data-driven decision making.</li>
        <li>Stay competitive – Keep up with latest data technologies and practices.</li>
      </ul>

      <h3>Our Training Programs</h3>
      <p>We offer comprehensive training programs tailored to your needs:</p>

      <ul>
        <li>Data Analysis Fundamentals – Basic concepts and tools for data analysis.</li>
        <li>Data Engineering – ETL processes, data pipelines, and automation.</li>
        <li>Business Intelligence – Dashboard creation and data visualization.</li>
        <li>Data Governance – Best practices for data management and security.</li>
      </ul>

      <h3>Training Formats</h3>
      <p>We provide flexible training options to suit your team's needs:</p>

      <ul>
        <li>On-site Workshops – Hands-on training at your location.</li>
        <li>Virtual Sessions – Remote training with interactive components.</li>
        <li>Custom Programs – Tailored to your specific tools and processes.</li>
        <li>Certification Paths – Industry-recognized certifications.</li>
        <li>Mentoring Programs – One-on-one guidance for key team members.</li>
      </ul>

      <h3>Topics We Cover</h3>
      <ul>
        <li>Data Analysis Tools – Excel, SQL, Python, R.</li>
        <li>Visualization Platforms – Power BI, Tableau, Looker.</li>
        <li>ETL & Automation – SSIS, Apache Airflow, dbt.</li>
        <li>Data Warehousing – Data Modelling, Architecture, On-premise and Cloud</li>
        <li>Best Practices – Data modeling, governance, security.</li>
      </ul>

      <h3>Business Outcomes You Can Expect</h3>
      <ul>
        <li>Improved Data Literacy – Better understanding and use of data across teams.</li>
        <li>Increased Efficiency – Faster adoption of data tools and processes.</li>
        <li>Cost Reduction – Less dependency on external consultants.</li>
        <li>Better Decision Making – More data-driven business decisions.</li>
        <li>Enhanced Innovation – New ideas and approaches to data challenges.</li>
      </ul>

      <h3>Our Training Approach</h3>
      <ol>
        <li>Assessment – Evaluate current skill levels and identify gaps.</li>
        <li>Customization – Design training programs for your specific needs.</li>
        <li>Implementation – Deliver training through chosen format.</li>
        <li>Evaluation – Measure progress and adjust as needed.</li>
        <li>Support – Ongoing guidance and resources.</li>
      </ol>

      <h3>Why Choose Coralytica?</h3>
      <p>We combine technical expertise with practical business experience to deliver training that makes a real difference to your organization.</p>
    `
  },
  {
    id: "ai-automation",
    icon: <FaLightbulb className="text-4xl text-white" />,
    title: "AI & Automation",
    description: "Unlock the power of AI-driven analytics and business process automation. Let your team focus on what matters while intelligent agents like Reef deliver instant insights and automate repetitive tasks.",
    benefit: "Experience next-level efficiency and decision-making with AI-powered tools tailored for your business.",
    fullDescription: `
      <h2>AI & Automation – Meet Reef Analytics Agent</h2>
      <p>Reef Analytics Agent is Coralytica's AI-powered assistant that brings instant, conversational analytics and automation to your business. Ask questions in natural language, get actionable insights, and automate repetitive reporting or analysis tasks—all via WhatsApp or your preferred channel.</p>
      <h3>Key Features</h3>
      <ul>
        <li><strong>Conversational Analytics</strong> – Get answers, charts, and explanations instantly by asking questions in plain English.</li>
        <li><strong>Business Process Automation</strong> – Automate routine data tasks, reporting, and notifications.</li>
        <li><strong>Integration with Your Data</strong> – Connects to your spreadsheets, databases, or cloud systems securely.</li>
        <li><strong>No Technical Skills Required</strong> – Designed for business users, not just IT teams.</li>
        <li><strong>Customizable & Scalable</strong> – Tailored to your business needs and ready to grow with you.</li>
      </ul>
      <h3>Why Choose AI & Automation?</h3>
      <ul>
        <li>Save time and reduce manual work</li>
        <li>Empower your team with instant, data-driven answers</li>
        <li>Improve accuracy and consistency in reporting</li>
        <li>Focus on strategic decisions, not repetitive tasks</li>
      </ul>
      <p>Discover how Reef Analytics Agent can transform your business—request a free demo today!</p>
    `
  }
];