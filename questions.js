// questions.js
// AWS Certified Cloud Practitioner (CLF-C02)
// Practice Question Bank (organized by domain)

window.QUESTION_BANK = [
  /* =======================
     CLOUD CONCEPTS
  ======================= */

  {
    id: "q001",
    domain: "Cloud Concepts",
    tags: ["Cloud Computing"],
    type: "single",
    question:
      "Which benefit of cloud computing allows users to pay only for the resources they use?",
    options: [
      "High availability",
      "Economies of scale",
      "Pay-as-you-go pricing",
      "Global reach"
    ],
    correct: [2],
    explanation:
      "Pay-as-you-go pricing means customers only pay for the resources they consume."
  },
  {
    id: "q002",
    domain: "Cloud Concepts",
    tags: ["Scalability"],
    type: "single",
    question: "What does scalability mean in the AWS Cloud?",
    options: [
      "Automatically encrypting data",
      "Increasing or decreasing resources based on demand",
      "Paying a fixed monthly cost",
      "Using multiple AWS Regions by default"
    ],
    correct: [1],
    explanation:
      "Scalability is the ability to adjust resources up or down according to demand."
  },
  {
    id: "q003",
    domain: "Cloud Concepts",
    tags: ["Deployment Models"],
    type: "single",
    question:
      "Which cloud deployment model provides resources exclusively for a single organization?",
    options: ["Public cloud", "Hybrid cloud", "Private cloud", "Community cloud"],
    correct: [2],
    explanation: "A private cloud is dedicated to a single organization."
  },
  {
    id: "q004",
    domain: "Cloud Concepts",
    tags: ["Global Infrastructure"],
    type: "single",
    question: "Which AWS component is designed to isolate failures within a Region?",
    options: ["AWS Regions", "Availability Zones", "Edge Locations", "Local Zones"],
    correct: [1],
    explanation:
      "Availability Zones are isolated locations within a Region designed for fault tolerance."
  },
  {
    id: "q005",
    domain: "Cloud Concepts",
    tags: ["Shared Responsibility"],
    type: "single",
    question: "Under the AWS Shared Responsibility Model, what is AWS responsible for?",
    options: [
      "Configuring security groups",
      "Managing customer data",
      "Security of the cloud infrastructure",
      "Installing operating systems on EC2"
    ],
    correct: [2],
    explanation:
      "AWS is responsible for the security of the underlying cloud infrastructure."
  },
  {
    id: "q006",
    domain: "Cloud Concepts",
    tags: ["Elasticity"],
    type: "single",
    question: "What does elasticity in the AWS Cloud refer to?",
    options: [
      "Automatically encrypting data",
      "Automatically scaling resources up and down based on demand",
      "Paying a fixed monthly fee",
      "Using multiple AWS Regions by default"
    ],
    correct: [1],
    explanation: "Elasticity allows systems to automatically adjust capacity to match demand."
  },
  {
    id: "q007",
    domain: "Cloud Concepts",
    tags: ["High Availability"],
    type: "single",
    question: "How does AWS help achieve high availability?",
    options: [
      "By using a single Availability Zone",
      "By deploying resources across multiple Availability Zones",
      "By storing backups on local disks",
      "By using only one AWS Region"
    ],
    correct: [1],
    explanation:
      "Deploying across multiple Availability Zones improves fault tolerance and availability."
  },
  {
    id: "q008",
    domain: "Cloud Concepts",
    tags: ["Economies of Scale"],
    type: "single",
    question: "What is a benefit of AWS economies of scale?",
    options: [
      "Higher upfront costs",
      "Lower variable costs",
      "Limited service availability",
      "Manual infrastructure scaling"
    ],
    correct: [1],
    explanation:
      "AWS achieves economies of scale, resulting in lower variable costs for customers."
  },
  {
    id: "q009",
    domain: "Cloud Concepts",
    tags: ["Regions"],
    type: "single",
    question: "Why might a customer choose one AWS Region over another?",
    options: [
      "To reduce latency for end users",
      "To avoid paying for services",
      "To eliminate the need for backups",
      "To remove the need for security controls"
    ],
    correct: [0],
    explanation: "Choosing a Region closer to users can reduce latency."
  },
  {
    id: "q010",
    domain: "Cloud Concepts",
    tags: ["Fault Tolerance"],
    type: "single",
    question: "What is fault tolerance in cloud computing?",
    options: [
      "Preventing all failures",
      "The ability to continue operating despite failures",
      "Paying less for unused resources",
      "Encrypting data automatically"
    ],
    correct: [1],
    explanation:
      "Fault tolerance means a system can continue operating even when components fail."
  },
  {
    id: "q011",
    domain: "Cloud Concepts",
    tags: ["Well-Architected"],
    type: "single",
    question:
      "Which AWS resource provides best practices for designing reliable and secure cloud architectures?",
    options: [
      "AWS Well-Architected Framework",
      "AWS Artifact",
      "AWS Personal Health Dashboard",
      "AWS Pricing Calculator"
    ],
    correct: [0],
    explanation:
      "The AWS Well-Architected Framework provides architectural best practices across key pillars."
  },
  {
    id: "q012",
    domain: "Cloud Concepts",
    tags: ["Cloud Adoption"],
    type: "single",
    question:
      "Which statement best describes a key advantage of moving from on-premises to AWS?",
    options: [
      "Higher upfront capital expense",
      "Manual scaling of capacity",
      "Faster experimentation and agility",
      "Eliminating security responsibilities"
    ],
    correct: [2],
    explanation:
      "Cloud enables faster experimentation, faster time-to-market, and agility with on-demand resources."
  },
  {
    id: "q013",
    domain: "Cloud Concepts",
    tags: ["Global Infrastructure"],
    type: "single",
    question:
      "Which AWS component primarily helps reduce latency for end users by caching content closer to them?",
    options: ["Availability Zones", "Edge Locations", "AWS Regions", "VPC Subnets"],
    correct: [1],
    explanation:
      "Edge Locations are used by services like CloudFront to cache content closer to users."
  },
  {
    id: "q014",
    domain: "Cloud Concepts",
    tags: ["Resiliency"],
    type: "single",
    question:
      "A company wants to reduce the impact of a single component failure. Which approach best supports this goal?",
    options: [
      "Deploy all resources in one AZ",
      "Use a single EC2 instance",
      "Design for redundancy across AZs",
      "Store data only on instance storage"
    ],
    correct: [2],
    explanation:
      "Redundancy across multiple Availability Zones improves resiliency and reduces single points of failure."
  },
  {
    id: "q015",
    domain: "Cloud Concepts",
    tags: ["Cloud Economics"],
    type: "single",
    question:
      "Which concept allows AWS customers to trade upfront expense for variable expense?",
    options: ["CAPEX to OPEX", "Single-tenancy", "Static provisioning", "Manual scaling"],
    correct: [0],
    explanation:
      "AWS enables shifting from CAPEX (upfront) to OPEX (pay-as-you-go variable expense)."
  },
  {
    id: "q016",
    domain: "Cloud Concepts",
    tags: ["Migration"],
    type: "single",
    question: "Which strategy involves moving an application to AWS with minimal changes?",
    options: ["Re-platform", "Refactor", "Re-host (lift and shift)", "Retire"],
    correct: [2],
    explanation: "Re-hosting (lift and shift) moves workloads with minimal changes."
  },
  {
    id: "q017",
    domain: "Cloud Concepts",
    tags: ["Service Models"],
    type: "single",
    question: "Which cloud service model typically provides the highest level of abstraction for customers?",
    options: ["IaaS", "PaaS", "SaaS", "On-premises"],
    correct: [2],
    explanation:
      "SaaS provides complete applications managed by the provider, with the least customer management."
  },
  {
    id: "q018",
    domain: "Cloud Concepts",
    tags: ["Managed Services"],
    type: "single",
    question: "Which statement best describes an AWS managed service?",
    options: [
      "You manage the physical data centers",
      "AWS manages underlying infrastructure tasks like patching",
      "You must buy hardware upfront",
      "Only root user can use it"
    ],
    correct: [1],
    explanation:
      "Managed services reduce operational burden by handling tasks like patching and maintenance."
  },
  {
    id: "q019",
    domain: "Cloud Concepts",
    tags: ["Disaster Recovery"],
    type: "single",
    question: "Which concept describes how quickly a system must be restored after a disruption?",
    options: ["RTO", "RPO", "MFA", "CIDR"],
    correct: [0],
    explanation:
      "RTO (Recovery Time Objective) is the target time to restore service after a disruption."
  },
  {
    id: "q020",
    domain: "Cloud Concepts",
    tags: ["Disaster Recovery"],
    type: "single",
    question:
      "Which concept describes the maximum acceptable amount of data loss measured in time?",
    options: ["RTO", "RPO", "NACL", "AZ"],
    correct: [1],
    explanation: "RPO (Recovery Point Objective) defines acceptable data loss in time."
  },
  {
    id: "q021",
    domain: "Cloud Concepts",
    tags: ["Agility"],
    type: "multi",
    question: "Which best describes agility in AWS? (Select TWO.)",
    options: [
      "Speed of resource creation",
      "Speed of feature rollout",
      "Ability to experiment quickly",
      "Automatic scaling",
      "Elimination of wasted capacity"
    ],
    correct: [0, 2],
    explanation:
      "Agility is about moving fast: provisioning resources quickly and experimenting rapidly."
  },
  {
    id: "q022",
    domain: "Cloud Concepts",
    tags: ["Economies of Scale"],
    type: "single",
    question: "AWS can reduce prices continually due to:",
    options: ["Compute Savings Plans", "Economies of scale", "Elastic compute", "Pay-as-you-go"],
    correct: [1],
    explanation:
      "Economies of scale allow AWS to operate at massive volume and pass savings on to customers over time."
  },
  {
    id: "q023",
    domain: "Cloud Concepts",
    tags: ["Cloud Benefits"],
    type: "multi",
    question: "Which are AWS Cloud advantages? (Select TWO.)",
    options: [
      "AWS manages all security",
      "No global deployments",
      "Fixed monthly costs",
      "No data center maintenance",
      "No capacity guessing"
    ],
    correct: [3, 4],
    explanation:
      "AWS reduces undifferentiated heavy lifting (data centers) and enables elasticity (no capacity guessing)."
  },
  {
    id: "q024",
    domain: "Cloud Concepts",
    tags: ["Cloud Benefits"],
    type: "multi",
    question: "Which are valid cloud benefits? (Select TWO.)",
    options: [
      "Go global in minutes",
      "Outsource all risk",
      "Outsource development",
      "Fast provisioning",
      "Full data center control"
    ],
    correct: [0, 3],
    explanation: "Cloud enables rapid global reach and fast provisioning of resources."
  },
  {
    id: "q025",
    domain: "Cloud Concepts",
    tags: ["Elasticity"],
    type: "single",
    question: "Which feature fixes underutilized resources?",
    options: ["High availability", "Fault tolerance", "Elasticity", "Global deployment"],
    correct: [2],
    explanation:
      "Elasticity helps match resources to demand, reducing overprovisioning and underutilization."
  },
  {
    id: "q026",
    domain: "Cloud Concepts",
    tags: ["VPC", "Regions & AZs"],
    type: "single",
    question: "A VPC can include multiple:",
    options: ["Internet Gateways", "Regions", "Edge Locations", "Availability Zones"],
    correct: [3],
    explanation:
      "A VPC is regional and can span multiple Availability Zones within the same Region."
  },
  {
    id: "q027",
    domain: "Cloud Concepts",
    tags: ["Quick Starts"],
    type: "single",
    question: "Which resource helps deploy popular technologies using AWS best practices?",
    options: ["AWS Artifact", "AWS Config", "AWS Quick Starts", "AWS CloudFormation"],
    correct: [2],
    explanation:
      "AWS Quick Starts provide reference deployments that follow AWS best practices."
  },
  {
    id: "q028",
    domain: "Cloud Concepts",
    tags: ["Agility"],
    type: "multi",
    question: "How does AWS increase speed and agility? (Select TWO.)",
    options: [
      "Lower cost of deployment",
      "Scalable compute capacity",
      "Private connections",
      "Secured data centers",
      "Fast provisioning of resources"
    ],
    correct: [1, 4],
    explanation:
      "AWS increases agility through on-demand scalable capacity and fast provisioning."
  },
  {
    id: "q029",
    domain: "Cloud Concepts",
    tags: ["Architecture", "Best Practices"],
    type: "multi",
    question: "Which design principles improve workload operation? (Select TWO.)",
    options: [
      "Minimize platform design",
      "Customized hardware",
      "Loose coupling",
      "Remove single points of failure",
      "Minimum viable product"
    ],
    correct: [2, 3],
    explanation:
      "Loose coupling and removing single points of failure improve resiliency and maintainability."
  },
  {
    id: "q030",
    domain: "Cloud Concepts",
    tags: ["Operational Excellence"],
    type: "multi",
    question: "Which principles align with Operational Excellence? (Select TWO.)",
    options: [
      "Anticipate failure",
      "Static procedures",
      "Large changes",
      "Manual operations",
      "Operations as code"
    ],
    correct: [0, 4],
    explanation:
      "Operational Excellence emphasizes automation (operations as code) and learning from failure."
  },
  {
    id: "q031",
    domain: "Cloud Concepts",
    tags: ["Architecture", "Loose Coupling"],
    type: "single",
    question: "Refactoring monoliths to microservices relates to which principle?",
    options: ["Multiple solutions", "Stop heavy lifting", "Manage change", "Loose coupling"],
    correct: [3],
    explanation:
      "Microservices support loose coupling by separating components so they can evolve independently."
  },

  /* =======================
     SECURITY
  ======================= */

  {
    id: "q032",
    domain: "Security",
    tags: ["IAM"],
    type: "single",
    question: "Which AWS service is used to manage users and permissions?",
    options: ["Amazon EC2", "AWS IAM", "Amazon S3", "AWS Config"],
    correct: [1],
    explanation: "AWS IAM manages identities, permissions, users, groups, and roles."
  },
  {
    id: "q033",
    domain: "Security",
    tags: ["Best Practices"],
    type: "multi",
    question: "Which actions improve AWS account security? (Select TWO)",
    options: [
      "Enable MFA for the root user",
      "Share root credentials with developers",
      "Use IAM roles for applications",
      "Store access keys in source code"
    ],
    correct: [0, 2],
    explanation:
      "MFA and IAM roles are best practices. Root credentials should never be shared."
  },
  {
    id: "q034",
    domain: "Security",
    tags: ["Encryption"],
    type: "single",
    question: "Which AWS service helps manage encryption keys?",
    options: ["AWS Shield", "AWS KMS", "AWS WAF", "Amazon Inspector"],
    correct: [1],
    explanation:
      "AWS Key Management Service (KMS) is used to create and manage encryption keys."
  },
  {
    id: "q035",
    domain: "Security",
    tags: ["Monitoring"],
    type: "single",
    question: "Which AWS service records API calls for auditing purposes?",
    options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Config", "Amazon GuardDuty"],
    correct: [1],
    explanation: "AWS CloudTrail records API activity for governance and auditing."
  },
  {
    id: "q036",
    domain: "Security",
    tags: ["DDoS Protection"],
    type: "single",
    question: "Which AWS service provides protection against DDoS attacks?",
    options: ["AWS Shield", "AWS Inspector", "AWS Trusted Advisor", "Amazon Macie"],
    correct: [0],
    explanation: "AWS Shield protects applications against DDoS attacks."
  },
  {
    id: "q037",
    domain: "Security",
    tags: ["Root User"],
    type: "single",
    question: "Which action should be taken immediately after creating an AWS account?",
    options: [
      "Share root credentials with administrators",
      "Enable MFA on the root user",
      "Delete the root user",
      "Create EC2 instances"
    ],
    correct: [1],
    explanation: "Enabling MFA on the root user is a critical security best practice."
  },
  {
    id: "q038",
    domain: "Security",
    tags: ["IAM Policies"],
    type: "single",
    question: "What is an IAM policy?",
    options: [
      "A document that defines permissions",
      "A physical security device",
      "A network firewall",
      "A billing alert"
    ],
    correct: [0],
    explanation: "IAM policies are JSON documents that define permissions."
  },
  {
    id: "q039",
    domain: "Security",
    tags: ["Least Privilege"],
    type: "single",
    question: "What does the principle of least privilege mean?",
    options: [
      "Granting users full access",
      "Granting only the permissions required to perform tasks",
      "Sharing credentials across teams",
      "Disabling all security features"
    ],
    correct: [1],
    explanation: "Least privilege means granting only the permissions needed for a task."
  },
  {
    id: "q040",
    domain: "Security",
    tags: ["Threat Detection"],
    type: "single",
    question: "Which AWS service helps detect suspicious activity and threats?",
    options: ["Amazon GuardDuty", "AWS CloudTrail", "AWS Config", "Amazon CloudWatch"],
    correct: [0],
    explanation: "Amazon GuardDuty provides intelligent threat detection."
  },
  {
    id: "q041",
    domain: "Security",
    tags: ["Data Classification"],
    type: "single",
    question: "Which AWS service helps discover and protect sensitive data stored in S3?",
    options: ["Amazon Inspector", "Amazon Macie", "AWS Shield", "AWS WAF"],
    correct: [1],
    explanation: "Amazon Macie uses machine learning to identify sensitive data in S3."
  },
  {
    id: "q042",
    domain: "Security",
    tags: ["Monitoring", "Auditing"],
    type: "multi",
    question: "Which AWS services gather information about account activity? (Select TWO.)",
    options: [
      "Amazon Connect",
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "Amazon CloudFront",
      "AWS Trusted Advisor"
    ],
    correct: [1, 2],
    explanation:
      "CloudTrail records API activity; CloudWatch collects metrics/logs and can provide operational visibility."
  },
  {
    id: "q043",
    domain: "Security",
    tags: ["Root Account", "Billing"],
    type: "multi",
    question: "Which tasks require the AWS account root user? (Select TWO.)",
    options: [
      "Changing AWS Support plans",
      "Enabling S3 encryption",
      "Viewing CloudTrail logs",
      "Changing payment currency",
      "Changing account name"
    ],
    correct: [0, 3],
    explanation:
      "Certain account-level and billing actions (like support plan and payment settings) require the root user."
  },
  {
    id: "q044",
    domain: "Security",
    tags: ["Credentials"],
    type: "single",
    question: "Which credential is used for programmatic access?",
    options: ["SSL/TLS certificate", "SSH public keys", "Access keys", "Username and password"],
    correct: [2],
    explanation:
      "Access keys (access key ID + secret) are used for API/CLI/SDK programmatic access."
  },
  {
    id: "q045",
    domain: "Security",
    tags: ["IAM", "Best Practices"],
    type: "multi",
    question: "Which IAM practices should be followed? (Select TWO.)",
    options: [
      "Create IAM roles for groups",
      "Create users in regions",
      "Enable MFA",
      "Disable password policies",
      "Least privilege policies"
    ],
    correct: [2, 4],
    explanation: "Enable MFA and follow least privilege to reduce risk and limit blast radius."
  },
  {
    id: "q046",
    domain: "Security",
    tags: ["Threat Detection", "GuardDuty"],
    type: "single",
    question: "Which service detects malicious activity?",
    options: ["Amazon GuardDuty", "AWS Shield", "AWS CloudHSM", "AWS KMS"],
    correct: [0],
    explanation:
      "GuardDuty analyzes logs to detect suspicious or malicious activity."
  },
  {
    id: "q047",
    domain: "Security",
    tags: ["IAM", "Access Keys"],
    type: "single",
    question: "What are IAM access keys used for?",
    options: ["Console login", "Log integrity", "Encryption in transit", "Programmatic API calls"],
    correct: [3],
    explanation:
      "Access keys are for programmatic calls via AWS CLI/SDKs, not for console login."
  },
  {
    id: "q048",
    domain: "Security",
    tags: ["Data Protection", "Macie"],
    type: "single",
    question: "Which service protects sensitive data in S3?",
    options: ["Amazon Detective", "AWS Policy Generator", "Amazon GuardDuty", "Amazon Macie"],
    correct: [3],
    explanation:
      "Amazon Macie discovers and classifies sensitive data (like PII) in S3 using ML."
  },
  {
    id: "q049",
    domain: "Security",
    tags: ["Shared Responsibility"],
    type: "multi",
    question: "Which are AWS responsibilities? (Select TWO.)",
    options: [
      "Encrypting AWS backbone traffic",
      "Enabling S3 encryption",
      "Configuring security groups",
      "Enforcing app access",
      "Scanning service endpoints"
    ],
    correct: [0, 4],
    explanation:
      "AWS is responsible for securing the infrastructure and core service endpoints (security of the cloud)."
  },
  {
    id: "q050",
    domain: "Security",
    tags: ["Compliance", "Artifact"],
    type: "single",
    question: "Why access AWS Artifact?",
    options: ["Training materials", "Config details", "Security & compliance docs", "Security assessments"],
    correct: [2],
    explanation: "AWS Artifact provides access to compliance reports and agreements."
  },
  {
    id: "q051",
    domain: "Security",
    tags: ["Security Best Practices"],
    type: "multi",
    question: "How can an application be secured? (Select TWO.)",
    options: ["Disable encryption", "Encrypt data at rest", "Least privilege access", "Full admin access"],
    correct: [1, 2],
    explanation:
      "Encrypt data at rest and enforce least privilege to reduce exposure and limit unauthorized actions."
  },
  {
    id: "q052",
    domain: "Security",
    tags: ["IAM", "Best Practices"],
    type: "single",
    question: "What is a best practice for IAM access keys?",
    options: ["Rotate access keys regularly", "No need to manage", "Never use access keys", "AWS rotates them"],
    correct: [0],
    explanation:
      "Access keys should be rotated and protected; prefer roles/temporary credentials whenever possible."
  },
  {
    id: "q053",
    domain: "Security",
    tags: ["IAM", "Access Keys"],
    type: "single",
    question: "Which IAM entity is associated with access keys?",
    options: ["IAM Policy", "IAM Role", "IAM User", "IAM Group"],
    correct: [2],
    explanation:
      "Access keys are created for IAM users (roles use temporary credentials via STS)."
  },
  {
    id: "q054",
    domain: "Security",
    tags: ["S3", "Bucket Policy"],
    type: "single",
    question: "Which S3 bucket policy element defines who gets access?",
    options: ["Principal", "Condition", "Action", "Resource"],
    correct: [0],
    explanation:
      "The Principal element specifies the user, account, service, or other entity allowed/denied access."
  },
  {
    id: "q055",
    domain: "Security",
    tags: ["Shared Responsibility", "EC2"],
    type: "single",
    question: "Customers using AWS services must patch operating systems on which of the following services?",
    options: ["Amazon EC2", "Amazon DynamoDB", "AWS Lambda", "AWS Fargate"],
    correct: [0],
    explanation:
      "With EC2, the customer manages the guest OS, including patching and hardening."
  },
  {
    id: "q056",
    domain: "Security",
    tags: ["Shared Responsibility", "EC2"],
    type: "single",
    question: "According to the AWS shared responsibility model, which is AWS’s responsibility?",
    options: [
      "Configuring network ACLs",
      "Updating security group rules",
      "Patching software on EC2",
      "Updating firmware on underlying EC2 hosts"
    ],
    correct: [3],
    explanation:
      "AWS is responsible for the security 'of' the cloud, including underlying host infrastructure and firmware."
  },
  {
    id: "q057",
    domain: "Security",
    tags: ["DDoS", "Shield"],
    type: "single",
    question: "What AWS service offers managed DDoS protection?",
    options: ["AWS Shield", "AWS Firewall Manager", "Amazon GuardDuty", "Amazon Inspector"],
    correct: [0],
    explanation:
      "AWS Shield provides DDoS protection (Standard included; Advanced offers enhanced protections and support)."
  },
  {
    id: "q058",
    domain: "Security",
    tags: ["DDoS", "Network Protection"],
    type: "single",
    question: "What is one method of protecting against DDoS attacks?",
    options: [
      "CloudWatch monitoring",
      "Configure firewall in front of resources",
      "CloudTrail logging",
      "AWS Health Dashboard"
    ],
    correct: [1],
    explanation:
      "Layered protection (e.g., WAF/firewalling + Shield) can help mitigate DDoS and malicious traffic patterns."
  },

  /* =======================
     TECHNOLOGY
  ======================= */

  {
    id: "q059",
    domain: "Technology",
    tags: ["Compute"],
    type: "single",
    question: "Which AWS service provides scalable virtual servers in the cloud?",
    options: ["AWS Lambda", "Amazon EC2", "Amazon ECS", "AWS Elastic Beanstalk"],
    correct: [1],
    explanation: "Amazon EC2 provides resizable compute capacity in the cloud."
  },
  {
    id: "q060",
    domain: "Technology",
    tags: ["Storage"],
    type: "single",
    question: "Which AWS service is object storage?",
    options: ["Amazon EBS", "Amazon EFS", "Amazon S3", "Amazon FSx"],
    correct: [2],
    explanation: "Amazon S3 is an object storage service."
  },
  {
    id: "q061",
    domain: "Technology",
    tags: ["Databases"],
    type: "single",
    question: "Which AWS service is a fully managed NoSQL key-value database?",
    options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Aurora", "Amazon Redshift"],
    correct: [1],
    explanation: "Amazon DynamoDB is a fully managed NoSQL key-value database."
  },
  {
    id: "q062",
    domain: "Technology",
    tags: ["Networking"],
    type: "single",
    question: "What is the purpose of an Internet Gateway in a VPC?",
    options: ["To filter traffic", "To allow communication with the internet", "To encrypt network traffic", "To store data"],
    correct: [1],
    explanation:
      "An Internet Gateway allows resources in a VPC to connect to the internet."
  },
  {
    id: "q063",
    domain: "Technology",
    tags: ["Serverless"],
    type: "single",
    question: "Which AWS service allows you to run code without provisioning servers?",
    options: ["Amazon EC2", "AWS Lambda", "Amazon Lightsail", "AWS Batch"],
    correct: [1],
    explanation: "AWS Lambda runs code without requiring server management."
  },
  {
    id: "q064",
    domain: "Technology",
    tags: ["Load Balancing"],
    type: "single",
    question: "Which AWS service distributes incoming traffic across multiple targets?",
    options: ["Amazon Route 53", "Elastic Load Balancing", "AWS Auto Scaling", "Amazon CloudFront"],
    correct: [1],
    explanation:
      "Elastic Load Balancing distributes traffic across multiple targets."
  },
  {
    id: "q065",
    domain: "Technology",
    tags: ["Auto Scaling"],
    type: "single",
    question: "What is the main purpose of AWS Auto Scaling?",
    options: ["Encrypting data at rest", "Automatically adjusting compute capacity", "Reducing storage costs", "Monitoring application logs"],
    correct: [1],
    explanation:
      "AWS Auto Scaling automatically adjusts capacity based on demand."
  },
  {
    id: "q066",
    domain: "Technology",
    tags: ["Content Delivery"],
    type: "single",
    question: "Which AWS service improves global content delivery performance?",
    options: ["Amazon S3", "Amazon CloudFront", "AWS Direct Connect", "Amazon VPC"],
    correct: [1],
    explanation: "Amazon CloudFront is a content delivery network (CDN)."
  },
  {
    id: "q067",
    domain: "Technology",
    tags: ["Containers"],
    type: "single",
    question: "Which AWS service is used to run containers without managing servers?",
    options: ["Amazon ECS with EC2", "Amazon EKS", "AWS Fargate", "Amazon Lightsail"],
    correct: [2],
    explanation:
      "AWS Fargate runs containers without requiring server management."
  },
  {
    id: "q068",
    domain: "Technology",
    tags: ["Backups"],
    type: "single",
    question: "Which AWS service helps centrally manage and automate backups?",
    options: ["AWS Backup", "Amazon S3 Glacier", "AWS Storage Gateway", "Amazon EBS"],
    correct: [0],
    explanation:
      "AWS Backup automates and manages backups across AWS services."
  },
  {
    id: "q069",
    domain: "Technology",
    tags: ["Developer Tools", "CodeCommit"],
    type: "single",
    question: "Which AWS service provides a managed software version control system?",
    options: ["AWS CodeCommit", "AWS CodePipeline", "Amazon CodeDeploy", "AWS DataSync"],
    correct: [0],
    explanation:
      "AWS CodeCommit is a managed, private Git-based source control service."
  },
  {
    id: "q070",
    domain: "Technology",
    tags: ["Serverless", "Step Functions"],
    type: "single",
    question: "Which AWS service creates visual serverless workflows?",
    options: ["Amazon SQS", "AWS Lambda", "AWS Step Functions", "Amazon SNS"],
    correct: [2],
    explanation: "Step Functions orchestrates serverless workflows with state machines."
  },
  {
    id: "q071",
    domain: "Technology",
    tags: ["Messaging", "SNS"],
    type: "single",
    question: "Which service sends push notifications to many subscribers?",
    options: ["AWS Step Functions", "Amazon SQS", "Amazon SWF", "Amazon SNS"],
    correct: [3],
    explanation:
      "Amazon SNS is a pub/sub service for sending notifications to many subscribers."
  },
  {
    id: "q072",
    domain: "Technology",
    tags: ["Storage", "EBS"],
    type: "single",
    question: "Which service provides root storage for EC2?",
    options: ["Amazon S3", "Amazon EFS", "Amazon EBS", "Amazon AMI"],
    correct: [2],
    explanation:
      "EBS provides persistent block storage and is commonly used as an EC2 root volume."
  },
  {
    id: "q073",
    domain: "Technology",
    tags: ["Databases", "Aurora"],
    type: "single",
    question: "Which service is best for scalable MySQL with backups?",
    options: ["Amazon Athena", "Amazon DocumentDB", "Amazon DynamoDB", "Amazon Aurora"],
    correct: [3],
    explanation:
      "Aurora (MySQL-compatible) is managed, scalable, and supports backups/HA options."
  },
  {
    id: "q074",
    domain: "Technology",
    tags: ["Databases", "Self-Managed"],
    type: "single",
    question: "Which deployment allows OS access for a relational database?",
    options: ["Amazon S3", "Amazon RDS", "Amazon DynamoDB", "Amazon EC2"],
    correct: [3],
    explanation:
      "Running the database on EC2 gives you OS-level access and full control (but more management)."
  },
  {
    id: "q075",
    domain: "Technology",
    tags: ["Data", "Data Exchange"],
    type: "single",
    question: "Which service provides third-party datasets?",
    options: ["Amazon Redshift", "AWS Glue", "AWS Data Exchange", "AWS Data Pipeline"],
    correct: [2],
    explanation:
      "AWS Data Exchange helps find, subscribe to, and use third-party datasets."
  },
  {
    id: "q076",
    domain: "Technology",
    tags: ["Networking", "Internet Gateway"],
    type: "single",
    question: "Which component allows inbound internet access to a VPC?",
    options: ["Route table", "Virtual Private Gateway", "Internet Gateway", "NAT Gateway"],
    correct: [2],
    explanation:
      "An Internet Gateway enables internet connectivity for public subnets when routes are configured."
  },
  {
    id: "q077",
    domain: "Technology",
    tags: ["Compute Services"],
    type: "multi",
    question: "Which are compute services? (Select TWO.)",
    options: ["AWS Batch", "AWS Elastic Beanstalk", "Amazon EFS", "Amazon Inspector", "AWS CloudTrail"],
    correct: [0, 1],
    explanation:
      "AWS Batch runs batch compute jobs; Elastic Beanstalk deploys and scales applications on compute resources."
  },
  {
    id: "q078",
    domain: "Technology",
    tags: ["EC2", "AMI"],
    type: "single",
    question: "What launches a pre-configured EC2 instance?",
    options: ["Amazon Machine Image (AMI)", "Amazon EBS", "Amazon AppStream", "AWS Systems Manager"],
    correct: [0],
    explanation:
      "An AMI is a template used to launch EC2 instances with a predefined OS/software configuration."
  },
  {
    id: "q079",
    domain: "Technology",
    tags: ["Global", "Latency", "CloudFront", "Global Accelerator"],
    type: "multi",
    question:
      "A company deploys a web app in one region but serves global users. Which services help reduce latency? (Select TWO.)",
    options: [
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "AWS Snowcone",
      "AWS Direct Connect",
      "AWS Transit Gateway"
    ],
    correct: [0, 1],
    explanation:
      "CloudFront caches content at edge locations; Global Accelerator improves routing over AWS’s global network to healthy endpoints."
  },

  /* =======================
     BILLING & PRICING
  ======================= */

  {
    id: "q080",
    domain: "Billing & Pricing",
    tags: ["Pricing"],
    type: "single",
    question: "Which pricing model offers the lowest cost for unused EC2 capacity?",
    options: ["On-Demand", "Reserved Instances", "Spot Instances", "Savings Plans"],
    correct: [2],
    explanation: "Spot Instances use spare capacity at significant discounts."
  },
  {
    id: "q081",
    domain: "Billing & Pricing",
    tags: ["Cost Management"],
    type: "single",
    question: "Which AWS service helps track and control costs?",
    options: ["AWS Budgets", "AWS Shield", "AWS Inspector", "Amazon CloudWatch"],
    correct: [0],
    explanation: "AWS Budgets helps monitor and manage costs."
  },
  {
    id: "q082",
    domain: "Billing & Pricing",
    tags: ["Free Tier"],
    type: "single",
    question: "How long is the AWS Free Tier available for most services?",
    options: ["3 months", "6 months", "12 months", "Unlimited"],
    correct: [2],
    explanation: "Most AWS Free Tier services are available for 12 months."
  },
  {
    id: "q083",
    domain: "Billing & Pricing",
    tags: ["Support Plans"],
    type: "single",
    question: "Which AWS Support plan includes a Technical Account Manager (TAM)?",
    options: ["Basic", "Developer", "Business", "Enterprise"],
    correct: [3],
    explanation: "Enterprise Support includes a Technical Account Manager."
  },
  {
    id: "q084",
    domain: "Billing & Pricing",
    tags: ["Cost Optimization"],
    type: "single",
    question: "Which tool provides best-practice recommendations to reduce AWS costs?",
    options: ["AWS Trusted Advisor", "Amazon Inspector", "AWS WAF", "AWS CloudTrail"],
    correct: [0],
    explanation:
      "AWS Trusted Advisor provides cost optimization recommendations."
  },
  {
    id: "q085",
    domain: "Billing & Pricing",
    tags: ["Cost Management", "Cost Explorer"],
    type: "single",
    question: "Which tool views and manages AWS costs over time?",
    options: ["AWS Budgets", "AWS Inspector", "AWS Cost Explorer", "AWS Organizations"],
    correct: [2],
    explanation:
      "AWS Cost Explorer helps visualize and analyze costs and usage over time."
  },
  {
    id: "q086",
    domain: "Billing & Pricing",
    tags: ["Cost Allocation", "Tags"],
    type: "single",
    question: "What can be used to categorize and track AWS costs by project?",
    options: ["Consolidated billing", "Multiple accounts", "AWS Trusted Advisor", "Cost allocation tags"],
    correct: [3],
    explanation:
      "Cost allocation tags help categorize spend by project, team, or environment."
  },
  {
    id: "q087",
    domain: "Billing & Pricing",
    tags: ["Cost Allocation", "Tags"],
    type: "single",
    question: "How can EC2 costs be allocated per department?",
    options: ["Billing alerts", "Tags + cost allocation reports", "Separate VPCs", "Billing access"],
    correct: [1],
    explanation:
      "Tagging resources and using cost allocation reports enables department-level cost tracking."
  },
  {
    id: "q088",
    domain: "Billing & Pricing",
    tags: ["Consolidated Billing"],
    type: "multi",
    question: "What are benefits of consolidated billing? (Select TWO.)",
    options: ["Business support", "Lower unit pricing", "Fixed discounts", "Single bill", "Higher service limits"],
    correct: [1, 3],
    explanation:
      "Consolidated billing provides a single bill and can lower unit pricing through aggregated usage."
  },
  {
    id: "q089",
    domain: "Billing & Pricing",
    tags: ["Organizations", "Consolidated Billing"],
    type: "single",
    question: "Which service provides volume discounts across accounts?",
    options: ["AWS Budgets", "Cost Explorer", "AWS Organizations", "Cost & Usage Report"],
    correct: [2],
    explanation:
      "AWS Organizations supports consolidated billing and can share volume discounts across accounts."
  },
  {
    id: "q090",
    domain: "Billing & Pricing",
    tags: ["Cost Estimation"],
    type: "single",
    question: "Which tool should be used to estimate the cost of a new AWS workload?",
    options: ["Cost Explorer", "AWS Pricing Calculator", "AWS Cost and Usage Report", "Billing Dashboard"],
    correct: [1],
    explanation:
      "AWS Pricing Calculator is designed to estimate costs before deploying resources."
  },
  {
    id: "q091",
    domain: "Billing & Pricing",
    tags: ["EC2", "Reserved Instances"],
    type: "single",
    question:
      "A company plans to use reserved instances to get discounted pricing for Amazon EC2 instances. The company may need to change the EC2 instance type during the one year period. Which instance purchasing option is the MOST cost-effective?",
    options: [
      "Regional Reserved Instances",
      "Zonal Reserved Instances",
      "Convertible Reserved Instances",
      "Standard Reserved Instances"
    ],
    correct: [2],
    explanation:
      "Convertible RIs provide discounts and allow changes to instance family/type during the term (more flexibility than Standard RIs)."
  },
  {
    id: "q092",
    domain: "Billing & Pricing",
    tags: ["Reserved Instances"],
    type: "multi",
    question: "What are the benefits of using reserved instances? (Select TWO.)",
    options: [
      "Uses dedicated hardware",
      "High availability",
      "More flexibility",
      "Reserve capacity",
      "Reduced cost"
    ],
    correct: [3, 4],
    explanation:
      "Reserved Instances can reduce cost compared to On-Demand and can reserve capacity (especially in a specific AZ when applicable)."
  },
  {
    id: "q093",
    domain: "Billing & Pricing",
    tags: ["EC2", "Billing"],
    type: "single",
    question:
      "You have been running an on-demand Amazon EC2 instance for 4h, 5 minutes and 6 seconds. How much time will you be billed for?",
    options: ["4h", "5h", "4h, 5m, 6s", "4h, 6m"],
    correct: [1],
    explanation:
      "For this question’s expected exam logic: partial hours are rounded up to the next hour, so it bills as 5 hours."
  }
];



