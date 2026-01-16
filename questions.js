// questions.js
// AWS Certified Cloud Practitioner (CLF-C02)
// 50 AUTHORIAL PRACTICE QUESTIONS – PART 1
 

window.QUESTION_BANK = [

/* =======================
   CLOUD CONCEPTS
======================= */

{
  id: "q001",
  domain: "Cloud Concepts",
  tags: ["Cloud Computing"],
  type: "single",
  question: "Which benefit of cloud computing allows users to pay only for the resources they use?",
  options: [
    "High availability",
    "Economies of scale",
    "Pay-as-you-go pricing",
    "Global reach"
  ],
  correct: [2],
  explanation: "Pay-as-you-go pricing means customers only pay for the resources they consume."
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
  explanation: "Scalability is the ability to adjust resources up or down according to demand."
},
{
  id: "q003",
  domain: "Cloud Concepts",
  tags: ["Deployment Models"],
  type: "single",
  question: "Which cloud deployment model provides resources exclusively for a single organization?",
  options: [
    "Public cloud",
    "Hybrid cloud",
    "Private cloud",
    "Community cloud"
  ],
  correct: [2],
  explanation: "A private cloud is dedicated to a single organization."
},
{
  id: "q004",
  domain: "Cloud Concepts",
  tags: ["Global Infrastructure"],
  type: "single",
  question: "Which AWS component is designed to isolate failures within a Region?",
  options: [
    "AWS Regions",
    "Availability Zones",
    "Edge Locations",
    "Local Zones"
  ],
  correct: [1],
  explanation: "Availability Zones are isolated locations within a Region designed for fault tolerance."
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
  explanation: "AWS is responsible for the security of the underlying cloud infrastructure."
},

/* =======================
   SECURITY
======================= */

{
  id: "q006",
  domain: "Security",
  tags: ["IAM"],
  type: "single",
  question: "Which AWS service is used to manage users and permissions?",
  options: [
    "Amazon EC2",
    "AWS IAM",
    "Amazon S3",
    "AWS Config"
  ],
  correct: [1],
  explanation: "AWS IAM manages identities, permissions, users, groups, and roles."
},
{
  id: "q007",
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
  explanation: "MFA and IAM roles are best practices. Root credentials should never be shared."
},
{
  id: "q008",
  domain: "Security",
  tags: ["Encryption"],
  type: "single",
  question: "Which AWS service helps manage encryption keys?",
  options: [
    "AWS Shield",
    "AWS KMS",
    "AWS WAF",
    "Amazon Inspector"
  ],
  correct: [1],
  explanation: "AWS Key Management Service (KMS) is used to create and manage encryption keys."
},
{
  id: "q009",
  domain: "Security",
  tags: ["Monitoring"],
  type: "single",
  question: "Which AWS service records API calls for auditing purposes?",
  options: [
    "Amazon CloudWatch",
    "AWS CloudTrail",
    "AWS Config",
    "Amazon GuardDuty"
  ],
  correct: [1],
  explanation: "AWS CloudTrail records API activity for governance and auditing."
},
{
  id: "q010",
  domain: "Security",
  tags: ["DDoS Protection"],
  type: "single",
  question: "Which AWS service provides protection against DDoS attacks?",
  options: [
    "AWS Shield",
    "AWS Inspector",
    "AWS Trusted Advisor",
    "Amazon Macie"
  ],
  correct: [0],
  explanation: "AWS Shield protects applications against DDoS attacks."
},

/* =======================
   TECHNOLOGY
======================= */

{
  id: "q011",
  domain: "Technology",
  tags: ["Compute"],
  type: "single",
  question: "Which AWS service provides scalable virtual servers in the cloud?",
  options: [
    "AWS Lambda",
    "Amazon EC2",
    "Amazon ECS",
    "AWS Elastic Beanstalk"
  ],
  correct: [1],
  explanation: "Amazon EC2 provides resizable compute capacity in the cloud."
},
{
  id: "q012",
  domain: "Technology",
  tags: ["Storage"],
  type: "single",
  question: "Which AWS service is object storage?",
  options: [
    "Amazon EBS",
    "Amazon EFS",
    "Amazon S3",
    "Amazon FSx"
  ],
  correct: [2],
  explanation: "Amazon S3 is an object storage service."
},
{
  id: "q013",
  domain: "Technology",
  tags: ["Databases"],
  type: "single",
  question: "Which AWS service is a fully managed NoSQL key-value database?",
  options: [
    "Amazon RDS",
    "Amazon DynamoDB",
    "Amazon Aurora",
    "Amazon Redshift"
  ],
  correct: [1],
  explanation: "Amazon DynamoDB is a fully managed NoSQL key-value database."
},
{
  id: "q014",
  domain: "Technology",
  tags: ["Networking"],
  type: "single",
  question: "What is the purpose of an Internet Gateway in a VPC?",
  options: [
    "To filter traffic",
    "To allow communication with the internet",
    "To encrypt network traffic",
    "To store data"
  ],
  correct: [1],
  explanation: "An Internet Gateway allows resources in a VPC to connect to the internet."
},
{
  id: "q015",
  domain: "Technology",
  tags: ["Serverless"],
  type: "single",
  question: "Which AWS service allows you to run code without provisioning servers?",
  options: [
    "Amazon EC2",
    "AWS Lambda",
    "Amazon Lightsail",
    "AWS Batch"
  ],
  correct: [1],
  explanation: "AWS Lambda runs code without requiring server management."
},

/* =======================
   BILLING & PRICING
======================= */

{
  id: "q016",
  domain: "Billing & Pricing",
  tags: ["Pricing"],
  type: "single",
  question: "Which pricing model offers the lowest cost for unused EC2 capacity?",
  options: [
    "On-Demand",
    "Reserved Instances",
    "Spot Instances",
    "Savings Plans"
  ],
  correct: [2],
  explanation: "Spot Instances use spare capacity at significant discounts."
},
{
  id: "q017",
  domain: "Billing & Pricing",
  tags: ["Cost Management"],
  type: "single",
  question: "Which AWS service helps track and control costs?",
  options: [
    "AWS Budgets",
    "AWS Shield",
    "AWS Inspector",
    "Amazon CloudWatch"
  ],
  correct: [0],
  explanation: "AWS Budgets helps monitor and manage costs."
},
{
  id: "q018",
  domain: "Billing & Pricing",
  tags: ["Free Tier"],
  type: "single",
  question: "How long is the AWS Free Tier available for most services?",
  options: [
    "3 months",
    "6 months",
    "12 months",
    "Unlimited"
  ],
  correct: [2],
  explanation: "Most AWS Free Tier services are available for 12 months."
},
{
  id: "q019",
  domain: "Billing & Pricing",
  tags: ["Support Plans"],
  type: "single",
  question: "Which AWS Support plan includes a Technical Account Manager (TAM)?",
  options: [
    "Basic",
    "Developer",
    "Business",
    "Enterprise"
  ],
  correct: [3],
  explanation: "Enterprise Support includes a Technical Account Manager."
},
{
  id: "q020",
  domain: "Billing & Pricing",
  tags: ["Cost Optimization"],
  type: "single",
  question: "Which tool provides best-practice recommendations to reduce AWS costs?",
  options: [
    "AWS Trusted Advisor",
    "Amazon Inspector",
    "AWS WAF",
    "AWS CloudTrail"
  ],
  correct: [0],
  explanation: "AWS Trusted Advisor provides cost optimization recommendations."
},

/* =======================
   PART 2 (Questions 21–70)
   CLOUD CONCEPTS
======================= */

{
  id: "q021",
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
  id: "q022",
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
  explanation: "Deploying across multiple Availability Zones improves fault tolerance and availability."
},
{
  id: "q023",
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
  explanation: "AWS achieves economies of scale, resulting in lower variable costs for customers."
},
{
  id: "q024",
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
  id: "q025",
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
  explanation: "Fault tolerance means a system can continue operating even when components fail."
},

/* =======================
   SECURITY
======================= */

{
  id: "q026",
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
  id: "q027",
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
  id: "q028",
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
  id: "q029",
  domain: "Security",
  tags: ["Threat Detection"],
  type: "single",
  question: "Which AWS service helps detect suspicious activity and threats?",
  options: [
    "Amazon GuardDuty",
    "AWS CloudTrail",
    "AWS Config",
    "Amazon CloudWatch"
  ],
  correct: [0],
  explanation: "Amazon GuardDuty provides intelligent threat detection."
},
{
  id: "q030",
  domain: "Security",
  tags: ["Data Classification"],
  type: "single",
  question: "Which AWS service helps discover and protect sensitive data stored in S3?",
  options: [
    "Amazon Inspector",
    "Amazon Macie",
    "AWS Shield",
    "AWS WAF"
  ],
  correct: [1],
  explanation: "Amazon Macie uses machine learning to identify sensitive data in S3."
},

/* =======================
   TECHNOLOGY
======================= */

{
  id: "q031",
  domain: "Technology",
  tags: ["Load Balancing"],
  type: "single",
  question: "Which AWS service distributes incoming traffic across multiple targets?",
  options: [
    "Amazon Route 53",
    "Elastic Load Balancing",
    "AWS Auto Scaling",
    "Amazon CloudFront"
  ],
  correct: [1],
  explanation: "Elastic Load Balancing distributes traffic across multiple targets."
},
{
  id: "q032",
  domain: "Technology",
  tags: ["Auto Scaling"],
  type: "single",
  question: "What is the main purpose of AWS Auto Scaling?",
  options: [
    "Encrypting data at rest",
    "Automatically adjusting compute capacity",
    "Reducing storage costs",
    "Monitoring application logs"
  ],
  correct: [1],
  explanation: "AWS Auto Scaling automatically adjusts capacity based on demand."
},
{
  id: "q033",
  domain: "Technology",
  tags: ["Content Delivery"],
  type: "single",
  question: "Which AWS service improves global content delivery performance?",
  options: [
    "Amazon S3",
    "Amazon CloudFront",
    "AWS Direct Connect",
    "Amazon VPC"
  ],
  correct: [1],
  explanation: "Amazon CloudFront is a content delivery network (CDN)."
},
{
  id: "q034",
  domain: "Technology",
  tags: ["Containers"],
  type: "single",
  question: "Which AWS service is used to run containers without managing servers?",
  options: [
    "Amazon ECS with EC2",
    "Amazon EKS",
    "AWS Fargate",
    "Amazon Lightsail"
  ],
  correct: [2],
  explanation: "AWS Fargate runs containers without requiring server management."
},
{
  id: "q035",
  domain: "Technology",
  tags: ["Backups"],
  type: "single",
  question: "Which AWS service helps centrally manage and automate backups?",
  options: [
    "AWS Backup",
    "Amazon S3 Glacier",
    "AWS Storage Gateway",
    "Amazon EBS"
  ],
  correct: [0],
  explanation: "AWS Backup automates and manages backups across AWS services."
},

/* =======================
   BILLING & PRICING
======================= */

{
  id: "q036",
  domain: "Billing & Pricing",
  tags: ["Billing Dashboard"],
  type: "single",
  question: "Which AWS tool provides a detailed view of monthly charges?",
  options: [
    "AWS Budgets",
    "AWS Cost Explorer",
    "AWS Pricing Calculator",
    "AWS Trusted Advisor"
  ],
  correct: [1],
  explanation: "AWS Cost Explorer provides detailed cost and usage reports."
},
{
  id: "q037",
  domain: "Billing & Pricing",
  tags: ["Alerts"],
  type: "single",
  question: "Which service allows you to set alerts when costs exceed thresholds?",
  options: [
    "Amazon CloudWatch",
    "AWS Budgets",
    "AWS Billing Console",
    "AWS Pricing Calculator"
  ],
  correct: [1],
  explanation: "AWS Budgets allows cost and usage alerts."
},
{
  id: "q038",
  domain: "Billing & Pricing",
  tags: ["Estimation"],
  type: "single",
  question: "Which tool helps estimate AWS costs before deployment?",
  options: [
    "AWS Trusted Advisor",
    "AWS Pricing Calculator",
    "AWS Budgets",
    "AWS Cost Explorer"
  ],
  correct: [1],
  explanation: "AWS Pricing Calculator estimates costs prior to deployment."
},
{
  id: "q039",
  domain: "Billing & Pricing",
  tags: ["Billing Access"],
  type: "single",
  question: "Who can access billing information by default in AWS?",
  options: [
    "All IAM users",
    "Only the root user",
    "All administrators",
    "Only AWS Support"
  ],
  correct: [1],
  explanation: "Only the root user has billing access by default."
},
{
  id: "q040",
  domain: "Billing & Pricing",
  tags: ["Consolidated Billing"],
  type: "single",
  question: "What is a benefit of consolidated billing in AWS Organizations?",
  options: [
    "Separate invoices for each account",
    "Combined billing and volume discounts",
    "Free services for all accounts",
    "No need for security controls"
  ],
  correct: [1],
  explanation: "Consolidated billing combines usage and enables volume discounts."
},

/* =======================
   PART 3 (q041–q090)
   Paste these objects INSIDE your window.QUESTION_BANK array
======================= */

{
  id: "q041",
  domain: "Cloud Concepts",
  tags: ["Well-Architected"],
  type: "single",
  question: "Which AWS resource provides best practices for designing reliable and secure cloud architectures?",
  options: ["AWS Well-Architected Framework", "AWS Artifact", "AWS Personal Health Dashboard", "AWS Pricing Calculator"],
  correct: [0],
  explanation: "The AWS Well-Architected Framework provides architectural best practices across key pillars."
},
{
  id: "q042",
  domain: "Cloud Concepts",
  tags: ["Cloud Adoption"],
  type: "single",
  question: "Which statement best describes a key advantage of moving from on-premises to AWS?",
  options: ["Higher upfront capital expense", "Manual scaling of capacity", "Faster experimentation and agility", "Eliminating security responsibilities"],
  correct: [2],
  explanation: "Cloud enables faster experimentation, faster time-to-market, and agility with on-demand resources."
},
{
  id: "q043",
  domain: "Cloud Concepts",
  tags: ["Global Infrastructure"],
  type: "single",
  question: "Which AWS component primarily helps reduce latency for end users by caching content closer to them?",
  options: ["Availability Zones", "Edge Locations", "AWS Regions", "VPC Subnets"],
  correct: [1],
  explanation: "Edge Locations are used by services like CloudFront to cache content closer to users."
},
{
  id: "q044",
  domain: "Cloud Concepts",
  tags: ["Resiliency"],
  type: "single",
  question: "A company wants to reduce the impact of a single component failure. Which approach best supports this goal?",
  options: ["Deploy all resources in one AZ", "Use a single EC2 instance", "Design for redundancy across AZs", "Store data only on instance storage"],
  correct: [2],
  explanation: "Redundancy across multiple Availability Zones improves resiliency and reduces single points of failure."
},
{
  id: "q045",
  domain: "Cloud Concepts",
  tags: ["Cloud Economics"],
  type: "single",
  question: "Which concept allows AWS customers to trade upfront expense for variable expense?",
  options: ["CAPEX to OPEX", "Single-tenancy", "Static provisioning", "Manual scaling"],
  correct: [0],
  explanation: "AWS enables shifting from CAPEX (upfront) to OPEX (pay-as-you-go variable expense)."
},

{
  id: "q046",
  domain: "Security",
  tags: ["IAM", "Authentication"],
  type: "single",
  question: "Which AWS feature is used to provide temporary credentials for AWS API access?",
  options: ["IAM Access Keys", "AWS STS", "Security Groups", "Network ACLs"],
  correct: [1],
  explanation: "AWS Security Token Service (STS) issues temporary security credentials."
},
{
  id: "q047",
  domain: "Security",
  tags: ["IAM", "Roles"],
  type: "single",
  question: "What is the recommended way for an EC2 instance to access an S3 bucket securely?",
  options: ["Embed access keys in the application code", "Use an IAM role attached to the EC2 instance", "Share the root user credentials", "Open the bucket to public access"],
  correct: [1],
  explanation: "Use an IAM role on EC2 to provide short-lived credentials without hardcoding secrets."
},
{
  id: "q048",
  domain: "Security",
  tags: ["Compliance"],
  type: "single",
  question: "Which AWS service provides on-demand access to AWS compliance reports and agreements?",
  options: ["AWS Artifact", "AWS Trusted Advisor", "Amazon Inspector", "AWS Organizations"],
  correct: [0],
  explanation: "AWS Artifact provides access to compliance reports like SOC and ISO documents."
},
{
  id: "q049",
  domain: "Security",
  tags: ["Network Security"],
  type: "single",
  question: "Which statement about security groups is TRUE?",
  options: [
    "They are stateless firewalls",
    "They operate at the subnet level only",
    "They are stateful and operate at the instance level",
    "They deny all outbound traffic by default"
  ],
  correct: [2],
  explanation: "Security groups are stateful and control inbound/outbound traffic at the instance/ENI level."
},
{
  id: "q050",
  domain: "Security",
  tags: ["Logging", "Monitoring"],
  type: "multi",
  question: "Which AWS services can help with security monitoring and investigation? (Select TWO)",
  options: ["AWS CloudTrail", "Amazon GuardDuty", "AWS Pricing Calculator", "AWS Snowball"],
  correct: [0, 1],
  explanation: "CloudTrail logs API activity; GuardDuty detects threats using logs and intelligence feeds."
},

{
  id: "q051",
  domain: "Technology",
  tags: ["Compute", "Managed Services"],
  type: "single",
  question: "Which AWS service makes it easier to deploy and scale applications without managing the underlying infrastructure details?",
  options: ["AWS Elastic Beanstalk", "Amazon EC2", "Amazon VPC", "AWS Direct Connect"],
  correct: [0],
  explanation: "Elastic Beanstalk is a managed service for deploying and scaling web applications."
},
{
  id: "q052",
  domain: "Technology",
  tags: ["Storage", "EBS"],
  type: "single",
  question: "Which storage option is best suited for persistent block storage for a single EC2 instance?",
  options: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon CloudFront"],
  correct: [1],
  explanation: "Amazon EBS provides persistent block storage volumes for EC2."
},
{
  id: "q053",
  domain: "Technology",
  tags: ["Storage", "EFS"],
  type: "single",
  question: "Which AWS service provides a scalable shared file system that can be mounted by multiple EC2 instances?",
  options: ["Amazon EFS", "Amazon EBS", "Amazon S3", "AWS Storage Gateway"],
  correct: [0],
  explanation: "Amazon EFS is a managed NFS file system that can be mounted by many EC2 instances."
},
{
  id: "q054",
  domain: "Technology",
  tags: ["Databases", "RDS"],
  type: "single",
  question: "Which AWS service is a managed relational database offering automated backups and patching?",
  options: ["Amazon DynamoDB", "Amazon RDS", "Amazon S3", "Amazon ElastiCache"],
  correct: [1],
  explanation: "Amazon RDS is a managed relational database service with maintenance features."
},
{
  id: "q055",
  domain: "Technology",
  tags: ["DNS", "Route 53"],
  type: "single",
  question: "Which AWS service is used for DNS and domain name management?",
  options: ["Amazon Route 53", "Amazon CloudFront", "AWS Shield", "AWS Systems Manager"],
  correct: [0],
  explanation: "Amazon Route 53 is AWS’s scalable DNS and domain registration service."
},

{
  id: "q056",
  domain: "Billing & Pricing",
  tags: ["Tagging"],
  type: "single",
  question: "What is a common use of AWS resource tags related to billing?",
  options: ["Encrypting objects in S3", "Controlling network traffic", "Allocating costs by project or department", "Increasing EC2 performance"],
  correct: [2],
  explanation: "Tags help organize resources and allocate costs in billing reports."
},
{
  id: "q057",
  domain: "Billing & Pricing",
  tags: ["Organizations"],
  type: "single",
  question: "Which service helps centrally manage multiple AWS accounts with consolidated billing?",
  options: ["AWS Organizations", "AWS IAM", "AWS Artifact", "AWS Config"],
  correct: [0],
  explanation: "AWS Organizations provides multi-account management and consolidated billing."
},
{
  id: "q058",
  domain: "Billing & Pricing",
  tags: ["Savings Plans"],
  type: "single",
  question: "What is a primary benefit of Savings Plans?",
  options: ["Free DDoS protection", "Discounts for committed compute usage", "Automatic code deployment", "Unlimited free storage"],
  correct: [1],
  explanation: "Savings Plans offer discounted rates in exchange for a commitment to compute usage."
},
{
  id: "q059",
  domain: "Billing & Pricing",
  tags: ["Cost Explorer"],
  type: "single",
  question: "Which AWS tool helps visualize and analyze historical costs and usage?",
  options: ["AWS Cost Explorer", "AWS Artifact", "AWS Shield", "Amazon Inspector"],
  correct: [0],
  explanation: "Cost Explorer provides interactive charts and reports for costs and usage."
},
{
  id: "q060",
  domain: "Billing & Pricing",
  tags: ["TCO"],
  type: "single",
  question: "Which AWS tool helps compare the cost of on-premises infrastructure to AWS?",
  options: ["AWS TCO Calculator", "AWS Pricing Calculator", "AWS Budgets", "AWS Health Dashboard"],
  correct: [0],
  explanation: "The AWS TCO Calculator helps estimate cost savings from moving to AWS."
},

{
  id: "q061",
  domain: "Cloud Concepts",
  tags: ["Migration"],
  type: "single",
  question: "Which strategy involves moving an application to AWS with minimal changes?",
  options: ["Re-platform", "Refactor", "Re-host (lift and shift)", "Retire"],
  correct: [2],
  explanation: "Re-hosting (lift and shift) moves workloads with minimal changes."
},
{
  id: "q062",
  domain: "Cloud Concepts",
  tags: ["Service Models"],
  type: "single",
  question: "Which cloud service model typically provides the highest level of abstraction for customers?",
  options: ["IaaS", "PaaS", "SaaS", "On-premises"],
  correct: [2],
  explanation: "SaaS provides complete applications managed by the provider, with the least customer management."
},
{
  id: "q063",
  domain: "Cloud Concepts",
  tags: ["Managed Services"],
  type: "single",
  question: "Which statement best describes an AWS managed service?",
  options: ["You manage the physical data centers", "AWS manages underlying infrastructure tasks like patching", "You must buy hardware upfront", "Only root user can use it"],
  correct: [1],
  explanation: "Managed services reduce operational burden by handling tasks like patching and maintenance."
},
{
  id: "q064",
  domain: "Cloud Concepts",
  tags: ["Disaster Recovery"],
  type: "single",
  question: "Which concept describes how quickly a system must be restored after a disruption?",
  options: ["RTO", "RPO", "MFA", "CIDR"],
  correct: [0],
  explanation: "RTO (Recovery Time Objective) is the target time to restore service after a disruption."
},
{
  id: "q065",
  domain: "Cloud Concepts",
  tags: ["Disaster Recovery"],
  type: "single",
  question: "Which concept describes the maximum acceptable amount of data loss measured in time?",
  options: ["RTO", "RPO", "NACL", "AZ"],
  correct: [1],
  explanation: "RPO (Recovery Point Objective) defines acceptable data loss in time."
},

{
  id: "q066",
  domain: "Security",
  tags: ["WAF"],
  type: "single",
  question: "Which AWS service helps protect web applications from common web exploits like SQL injection?",
  options: ["AWS WAF", "AWS Shield", "AWS KMS", "AWS Budgets"],
  correct: [0],
  explanation: "AWS WAF helps filter and monitor HTTP requests to protect against common web attacks."
},
{
  id: "q067",
  domain: "Security",
  tags: ["Secrets"],
  type: "single",
  question: "Which AWS service is designed to store and rotate secrets such as database credentials?",
  options: ["AWS Secrets Manager", "AWS Artifact", "Amazon Inspector", "AWS Direct Connect"],
  correct: [0],
  explanation: "AWS Secrets Manager helps manage, retrieve, and rotate secrets securely."
},
{
  id: "q068",
  domain: "Security",
  tags: ["Config"],
  type: "single",
  question: "Which service can track resource configuration changes and evaluate them against desired settings?",
  options: ["AWS Config", "AWS CloudTrail", "Amazon CloudFront", "AWS Snowcone"],
  correct: [0],
  explanation: "AWS Config tracks configuration changes and can evaluate compliance rules."
},
{
  id: "q069",
  domain: "Security",
  tags: ["Encryption"],
  type: "single",
  question: "Which option is an example of encryption at rest?",
  options: ["Encrypting data stored on an EBS volume", "Using HTTPS for web traffic", "Using a VPN connection", "Using a VPC route table"],
  correct: [0],
  explanation: "Encryption at rest protects stored data (e.g., EBS, S3) when it is not being transmitted."
},
{
  id: "q070",
  domain: "Security",
  tags: ["MFA"],
  type: "single",
  question: "What does MFA add to the login process?",
  options: ["A second factor beyond password", "A new billing method", "A private subnet", "A storage class"],
  correct: [0],
  explanation: "Multi-Factor Authentication requires an additional factor (e.g., token/app) beyond a password."
},

{
  id: "q071",
  domain: "Technology",
  tags: ["Messaging"],
  type: "single",
  question: "Which AWS service is used for decoupling applications with a managed message queue?",
  options: ["Amazon SQS", "Amazon SNS", "AWS Batch", "Amazon Route 53"],
  correct: [0],
  explanation: "Amazon SQS is a managed message queue that decouples components."
},
{
  id: "q072",
  domain: "Technology",
  tags: ["Notifications"],
  type: "single",
  question: "Which AWS service is best for sending notifications to multiple subscribers using a publish/subscribe model?",
  options: ["Amazon SQS", "Amazon SNS", "Amazon RDS", "Amazon EBS"],
  correct: [1],
  explanation: "Amazon SNS is a pub/sub service for notifications to multiple subscribers."
},
{
  id: "q073",
  domain: "Technology",
  tags: ["API"],
  type: "single",
  question: "Which AWS service helps create, publish, and manage APIs?",
  options: ["Amazon API Gateway", "AWS CloudTrail", "Amazon CloudFront", "AWS Backup"],
  correct: [0],
  explanation: "Amazon API Gateway is used to build, deploy, and manage APIs."
},
{
  id: "q074",
  domain: "Technology",
  tags: ["Analytics"],
  type: "single",
  question: "Which AWS service is a data warehouse for analytics at scale?",
  options: ["Amazon Redshift", "Amazon DynamoDB", "Amazon S3", "Amazon EFS"],
  correct: [0],
  explanation: "Amazon Redshift is a managed data warehouse for analytics workloads."
},
{
  id: "q075",
  domain: "Technology",
  tags: ["Caching"],
  type: "single",
  question: "Which AWS service helps improve application performance by caching frequently accessed data in memory?",
  options: ["Amazon ElastiCache", "Amazon RDS", "Amazon S3 Glacier", "AWS CloudTrail"],
  correct: [0],
  explanation: "Amazon ElastiCache provides in-memory caching using Redis or Memcached."
},

{
  id: "q076",
  domain: "Billing & Pricing",
  tags: ["Data Transfer"],
  type: "single",
  question: "Which statement about AWS data transfer costs is generally TRUE?",
  options: [
    "All data transfer is free",
    "Data transfer into AWS is typically free, while data transfer out may incur charges",
    "Data transfer within a VPC always has the highest cost",
    "Data transfer out to the internet is always free"
  ],
  correct: [1],
  explanation: "Inbound data transfer is often free; outbound transfer (especially to the internet) can be charged."
},
{
  id: "q077",
  domain: "Billing & Pricing",
  tags: ["Reserved Instances"],
  type: "single",
  question: "Reserved Instances are most appropriate for which type of workload?",
  options: ["Short-term, unpredictable workloads", "Steady-state workloads with predictable usage", "Batch jobs that can be interrupted", "One-time testing only"],
  correct: [1],
  explanation: "Reserved Instances fit steady workloads where long-term usage is predictable."
},
{
  id: "q078",
  domain: "Billing & Pricing",
  tags: ["Spot Instances"],
  type: "single",
  question: "Which workload is BEST suited for Spot Instances?",
  options: ["A production database", "A mission-critical web server", "Fault-tolerant batch processing", "A single-instance legacy app"],
  correct: [2],
  explanation: "Spot is ideal for fault-tolerant, interruptible workloads like batch jobs."
},
{
  id: "q079",
  domain: "Billing & Pricing",
  tags: ["Budgets"],
  type: "single",
  question: "Which capability is provided by AWS Budgets?",
  options: ["Create DNS records", "Set cost and usage alerts", "Deploy containers", "Manage encryption keys"],
  correct: [1],
  explanation: "AWS Budgets allows setting thresholds and receiving alerts for costs/usage."
},
{
  id: "q080",
  domain: "Billing & Pricing",
  tags: ["Trusted Advisor"],
  type: "single",
  question: "AWS Trusted Advisor can provide recommendations related to which areas? (Select ONE best answer)",
  options: ["Cost optimization, security, and performance", "Only billing invoices", "Only identity management", "Only network routing"],
  correct: [0],
  explanation: "Trusted Advisor provides best-practice checks for cost, security, performance, fault tolerance, and limits."
},

{
  id: "q081",
  domain: "Cloud Concepts",
  tags: ["Responsibility Model"],
  type: "single",
  question: "Under the Shared Responsibility Model for Amazon RDS, who is responsible for patching the database engine?",
  options: ["The customer always", "AWS", "A third-party vendor", "No one"],
  correct: [1],
  explanation: "For managed services like RDS, AWS handles patching and maintenance of the underlying database software (depending on configuration)."
},
{
  id: "q082",
  domain: "Security",
  tags: ["IAM", "Federation"],
  type: "single",
  question: "A company wants employees to sign in to AWS using existing corporate credentials. Which approach helps achieve this?",
  options: ["Use IAM users for everyone", "Use identity federation with IAM roles", "Share one access key", "Use the root account for SSO"],
  correct: [1],
  explanation: "Federation enables users to access AWS using existing identities and assume IAM roles."
},
{
  id: "q083",
  domain: "Technology",
  tags: ["Hybrid Connectivity"],
  type: "single",
  question: "Which AWS service provides a dedicated private network connection from on-premises to AWS?",
  options: ["AWS Direct Connect", "Amazon CloudFront", "AWS WAF", "Amazon Route 53"],
  correct: [0],
  explanation: "AWS Direct Connect provides dedicated network connectivity to AWS."
},
{
  id: "q084",
  domain: "Technology",
  tags: ["Migration", "Snow Family"],
  type: "single",
  question: "Which AWS service family is commonly used to move large amounts of data offline to AWS?",
  options: ["AWS Snow Family", "Amazon CloudFront", "AWS Lambda", "Amazon Route 53"],
  correct: [0],
  explanation: "The AWS Snow Family provides physical devices to transfer data into/out of AWS."
},
{
  id: "q085",
  domain: "Security",
  tags: ["VPC", "NACL"],
  type: "single",
  question: "Which statement about Network ACLs (NACLs) is TRUE?",
  options: [
    "They are stateful",
    "They apply at the subnet level and are stateless",
    "They apply only to individual instances",
    "They cannot be used to allow traffic"
  ],
  correct: [1],
  explanation: "NACLs are stateless and apply at the subnet level, with explicit inbound and outbound rules."
},

{
  id: "q086",
  domain: "Billing & Pricing",
  tags: ["Cost Allocation"],
  type: "single",
  question: "Which practice helps attribute AWS costs to a specific team or application?",
  options: ["Enable MFA on the root user", "Use cost allocation tags", "Use a single AWS account only", "Disable CloudTrail"],
  correct: [1],
  explanation: "Cost allocation tags help break down spending by project, team, or environment."
},
{
  id: "q087",
  domain: "Technology",
  tags: ["Observability"],
  type: "multi",
  question: "Which features are commonly associated with Amazon CloudWatch? (Select TWO)",
  options: ["Metrics and alarms", "API call auditing", "Log collection and analysis", "Domain registration"],
  correct: [0, 2],
  explanation: "CloudWatch provides metrics/alarms and supports logs. CloudTrail is for API auditing."
},
{
  id: "q088",
  domain: "Security",
  tags: ["Incident Awareness"],
  type: "single",
  question: "Which AWS service provides alerts and remediation guidance for events that may impact AWS resources?",
  options: ["AWS Personal Health Dashboard", "AWS Pricing Calculator", "Amazon Route 53", "AWS Secrets Manager"],
  correct: [0],
  explanation: "Personal Health Dashboard provides personalized alerts and guidance about AWS events."
},
{
  id: "q089",
  domain: "Technology",
  tags: ["S3 Storage Classes"],
  type: "single",
  question: "Which S3 storage class is typically best for long-term archival with retrieval times in minutes or hours?",
  options: ["S3 Standard", "S3 Intelligent-Tiering", "S3 Glacier Flexible Retrieval (Glacier)", "S3 One Zone-IA"],
  correct: [2],
  explanation: "S3 Glacier classes are designed for archival with lower cost and slower retrieval."
},
{
  id: "q090",
  domain: "Billing & Pricing",
  tags: ["Support Plans"],
  type: "single",
  question: "Which AWS Support plan is included at no additional cost?",
  options: ["Basic", "Developer", "Business", "Enterprise"],
  correct: [0],
  explanation: "Basic Support is included for all AWS customers at no additional cost."
},

/* =======================
   PART 4 (q091–q140)
   Paste these objects INSIDE your window.QUESTION_BANK array
======================= */

{
  id: "q091",
  domain: "Cloud Concepts",
  tags: ["AWS Support", "Guidance"],
  type: "single",
  question: "Which AWS resource provides documentation, whitepapers, and best practices for AWS services?",
  options: ["AWS Documentation", "AWS Budgets", "AWS Organizations", "AWS Health"],
  correct: [0],
  explanation: "AWS Documentation and whitepapers provide official guidance and best practices for AWS services."
},
{
  id: "q092",
  domain: "Cloud Concepts",
  tags: ["Well-Architected", "Pillars"],
  type: "single",
  question: "Which pillar of the AWS Well-Architected Framework focuses on protecting information and systems?",
  options: ["Security", "Reliability", "Performance Efficiency", "Cost Optimization"],
  correct: [0],
  explanation: "The Security pillar focuses on protecting data, systems, and assets."
},
{
  id: "q093",
  domain: "Cloud Concepts",
  tags: ["Reliability"],
  type: "single",
  question: "Which practice best improves reliability for a web application in AWS?",
  options: ["Use a single EC2 instance", "Deploy across multiple Availability Zones", "Disable monitoring", "Store data only on instance store"],
  correct: [1],
  explanation: "Deploying across multiple AZs improves fault tolerance and overall reliability."
},
{
  id: "q094",
  domain: "Cloud Concepts",
  tags: ["Performance Efficiency"],
  type: "single",
  question: "Which idea is most aligned with the Performance Efficiency pillar?",
  options: ["Using least privilege IAM policies", "Selecting resource types to meet performance needs", "Using a single Region for all workloads", "Avoiding automation"],
  correct: [1],
  explanation: "Performance Efficiency includes selecting the right resource types and sizes to meet requirements."
},
{
  id: "q095",
  domain: "Cloud Concepts",
  tags: ["Cost Optimization"],
  type: "single",
  question: "Which action supports the Cost Optimization pillar?",
  options: ["Overprovisioning capacity", "Using cost allocation tags and budgets", "Disabling autoscaling", "Keeping unused resources running"],
  correct: [1],
  explanation: "Cost allocation tags and budgets help track and optimize spending."
},

{
  id: "q096",
  domain: "Security",
  tags: ["IAM", "Groups"],
  type: "single",
  question: "What is a recommended way to manage permissions for multiple IAM users with similar job functions?",
  options: ["Create access keys for everyone", "Use IAM groups and attach policies to the group", "Share one IAM user among the team", "Use the root user for daily tasks"],
  correct: [1],
  explanation: "IAM groups simplify permission management by attaching policies to a group of users."
},
{
  id: "q097",
  domain: "Security",
  tags: ["IAM", "Roles"],
  type: "single",
  question: "Which IAM entity is best suited to grant permissions to an AWS service (like EC2) to access other AWS resources?",
  options: ["IAM user", "IAM role", "IAM group", "Root user"],
  correct: [1],
  explanation: "IAM roles are intended to be assumed by AWS services, applications, or federated users."
},
{
  id: "q098",
  domain: "Security",
  tags: ["S3", "Public Access"],
  type: "single",
  question: "Which feature helps prevent accidental public exposure of S3 buckets at the account level?",
  options: ["S3 Versioning", "S3 Block Public Access", "S3 Transfer Acceleration", "S3 Event Notifications"],
  correct: [1],
  explanation: "S3 Block Public Access provides centralized controls to prevent public access to buckets and objects."
},
{
  id: "q099",
  domain: "Security",
  tags: ["Encryption", "In Transit"],
  type: "single",
  question: "Which is an example of encryption in transit?",
  options: ["Encrypting an EBS volume", "Using HTTPS for a web application", "Using S3 Glacier", "Storing backups in S3"],
  correct: [1],
  explanation: "HTTPS encrypts data in transit between clients and servers."
},
{
  id: "q100",
  domain: "Security",
  tags: ["DDoS", "Shield"],
  type: "single",
  question: "AWS Shield Standard is primarily designed to help protect against what type of threat?",
  options: ["SQL injection", "DDoS attacks", "Privilege escalation", "Data loss"],
  correct: [1],
  explanation: "AWS Shield provides protection against Distributed Denial of Service (DDoS) attacks."
},

{
  id: "q101",
  domain: "Technology",
  tags: ["EC2", "Instance Types"],
  type: "single",
  question: "What is a common purpose of EC2 instance types?",
  options: ["They define network ACL rules", "They define CPU, memory, storage, and networking capacity", "They define S3 storage class behavior", "They define IAM permissions"],
  correct: [1],
  explanation: "EC2 instance types specify hardware characteristics like vCPU, memory, and networking."
},
{
  id: "q102",
  domain: "Technology",
  tags: ["Serverless", "Event-driven"],
  type: "single",
  question: "Which best describes AWS Lambda?",
  options: ["A managed database service", "A serverless compute service that runs code in response to events", "A dedicated network connection service", "A tool for cost estimation"],
  correct: [1],
  explanation: "Lambda runs code without managing servers and is commonly triggered by events."
},
{
  id: "q103",
  domain: "Technology",
  tags: ["S3", "Versioning"],
  type: "single",
  question: "What is a key benefit of enabling versioning on an S3 bucket?",
  options: ["It reduces latency globally", "It helps recover from accidental deletions or overwrites", "It automatically compresses objects", "It encrypts data by default"],
  correct: [1],
  explanation: "Versioning keeps multiple versions of objects, helping recover from accidental changes."
},
{
  id: "q104",
  domain: "Technology",
  tags: ["EBS", "Snapshots"],
  type: "single",
  question: "What is an Amazon EBS snapshot?",
  options: ["A live replication of an EC2 instance", "A point-in-time backup of an EBS volume stored in S3", "A DNS record", "A type of IAM policy"],
  correct: [1],
  explanation: "EBS snapshots are point-in-time backups of volumes, stored in Amazon S3."
},
{
  id: "q105",
  domain: "Technology",
  tags: ["CloudFront", "CDN"],
  type: "single",
  question: "Which scenario is best suited for Amazon CloudFront?",
  options: ["Running a relational database", "Caching and delivering static and dynamic content globally", "Creating IAM users", "Managing encryption keys"],
  correct: [1],
  explanation: "CloudFront is a CDN that caches content at edge locations for faster delivery."
},

{
  id: "q106",
  domain: "Billing & Pricing",
  tags: ["Billing", "Cost Allocation"],
  type: "single",
  question: "Which AWS feature helps you categorize and track AWS costs by environment (e.g., dev, test, prod)?",
  options: ["Resource tags", "Security groups", "Route tables", "IAM roles"],
  correct: [0],
  explanation: "Resource tags can be used for cost allocation and reporting by project or environment."
},
{
  id: "q107",
  domain: "Billing & Pricing",
  tags: ["Pricing Models"],
  type: "single",
  question: "Which pricing model is best for a workload that needs uninterrupted compute capacity with no long-term commitment?",
  options: ["Spot Instances", "On-Demand Instances", "Reserved Instances", "Dedicated Hosts only"],
  correct: [1],
  explanation: "On-Demand is suitable for short-term, unpredictable, or uninterrupted workloads without commitment."
},
{
  id: "q108",
  domain: "Billing & Pricing",
  tags: ["Savings Plans"],
  type: "single",
  question: "Which statement about Savings Plans is TRUE?",
  options: [
    "They only apply to Amazon S3 storage",
    "They provide discounts in exchange for a commitment to compute usage",
    "They require buying dedicated hardware",
    "They eliminate all data transfer costs"
  ],
  correct: [1],
  explanation: "Savings Plans provide discounted compute pricing with a usage commitment."
},
{
  id: "q109",
  domain: "Billing & Pricing",
  tags: ["Free Tier"],
  type: "single",
  question: "Which statement best describes the AWS Free Tier?",
  options: [
    "All services are free forever",
    "Some services offer limited free usage for 12 months or always-free limits",
    "Only EC2 is free",
    "The Free Tier includes Enterprise Support"
  ],
  correct: [1],
  explanation: "AWS Free Tier offers limited free usage for certain services (some 12 months, some always-free)."
},
{
  id: "q110",
  domain: "Billing & Pricing",
  tags: ["Cost Optimization"],
  type: "single",
  question: "Which action can help reduce cost for idle EC2 instances?",
  options: ["Increase instance size", "Stop or terminate unused instances", "Disable CloudWatch", "Move instances to public subnet"],
  correct: [1],
  explanation: "Stopping or terminating unused instances helps reduce costs (stopped instances still incur some charges like EBS)."
},

{
  id: "q111",
  domain: "Cloud Concepts",
  tags: ["AWS Cloud", "Innovation"],
  type: "single",
  question: "Which AWS benefit allows you to quickly provision resources for experimentation and then shut them down?",
  options: ["Static capacity planning", "On-demand resource provisioning", "Single-tenant hardware", "Manual scaling only"],
  correct: [1],
  explanation: "On-demand provisioning allows rapid experimentation and teardown when no longer needed."
},
{
  id: "q112",
  domain: "Cloud Concepts",
  tags: ["Global Infrastructure", "Regions"],
  type: "single",
  question: "A customer wants to meet data residency requirements for a specific country. What should they consider first?",
  options: ["Choosing an AWS Region in that country/area", "Using Edge Locations only", "Using Spot Instances", "Disabling encryption"],
  correct: [0],
  explanation: "Data residency requirements often depend on where data is stored; selecting the appropriate Region is key."
},
{
  id: "q113",
  domain: "Cloud Concepts",
  tags: ["Sustainability"],
  type: "single",
  question: "Which statement best aligns with the Sustainability pillar in the AWS Well-Architected Framework?",
  options: ["Run all workloads 24/7 to avoid cold starts", "Minimize resource usage and maximize utilization", "Avoid monitoring to reduce overhead", "Use the largest instance type available"],
  correct: [1],
  explanation: "Sustainability focuses on minimizing environmental impact by improving utilization and reducing unnecessary resources."
},
{
  id: "q114",
  domain: "Cloud Concepts",
  tags: ["Multi-AZ"],
  type: "single",
  question: "What is a common reason to deploy an application across multiple Availability Zones?",
  options: ["To reduce the need for IAM", "To improve fault tolerance", "To eliminate costs", "To force traffic through a single server"],
  correct: [1],
  explanation: "Multi-AZ deployments improve fault tolerance and availability."
},
{
  id: "q115",
  domain: "Cloud Concepts",
  tags: ["Hybrid"],
  type: "single",
  question: "Which term describes using both on-premises infrastructure and AWS Cloud resources together?",
  options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
  correct: [2],
  explanation: "Hybrid cloud combines on-premises infrastructure with cloud services."
},

{
  id: "q116",
  domain: "Security",
  tags: ["Network Security", "Defense in Depth"],
  type: "single",
  question: "Which concept describes using multiple layers of security controls to protect AWS workloads?",
  options: ["Single point of failure", "Defense in depth", "Shared root credentials", "Static provisioning"],
  correct: [1],
  explanation: "Defense in depth uses multiple layers of controls (network, identity, monitoring, etc.)."
},
{
  id: "q117",
  domain: "Security",
  tags: ["CloudTrail", "Auditing"],
  type: "single",
  question: "What type of information is primarily captured by AWS CloudTrail?",
  options: ["CPU utilization metrics", "API calls and account activity", "Object storage classes", "Database query plans"],
  correct: [1],
  explanation: "CloudTrail logs API calls and account activity for auditing and governance."
},
{
  id: "q118",
  domain: "Security",
  tags: ["KMS", "Key Policies"],
  type: "single",
  question: "In AWS KMS, what is a primary purpose of a key policy?",
  options: ["To define DNS routing", "To control access to a KMS key", "To create S3 buckets", "To patch EC2 instances"],
  correct: [1],
  explanation: "Key policies define who can use and manage KMS keys."
},
{
  id: "q119",
  domain: "Security",
  tags: ["IAM", "Access Keys"],
  type: "single",
  question: "What are IAM access keys primarily used for?",
  options: ["Logging in to the AWS console", "Programmatic access to AWS services", "Encrypting EBS volumes", "Routing traffic in a VPC"],
  correct: [1],
  explanation: "Access keys are used for programmatic access via CLI/SDK, not for console login."
},
{
  id: "q120",
  domain: "Security",
  tags: ["Secrets Manager"],
  type: "single",
  question: "Which benefit does AWS Secrets Manager provide?",
  options: ["Cost estimation for services", "Secure storage and rotation of secrets", "A content delivery network", "A DDoS mitigation service"],
  correct: [1],
  explanation: "Secrets Manager securely stores secrets and can rotate them automatically."
},

{
  id: "q121",
  domain: "Technology",
  tags: ["Compute", "ECS/EKS"],
  type: "single",
  question: "Which AWS service is a managed Kubernetes service?",
  options: ["Amazon ECS", "Amazon EKS", "AWS Lambda", "Amazon Lightsail"],
  correct: [1],
  explanation: "Amazon EKS is AWS’s managed Kubernetes service."
},
{
  id: "q122",
  domain: "Technology",
  tags: ["Containers", "ECS"],
  type: "single",
  question: "Which AWS service is commonly used to run containerized applications with AWS-managed orchestration (not necessarily Kubernetes)?",
  options: ["Amazon ECS", "Amazon RDS", "Amazon Route 53", "AWS Artifact"],
  correct: [0],
  explanation: "Amazon ECS is AWS’s native container orchestration service."
},
{
  id: "q123",
  domain: "Technology",
  tags: ["Storage", "Glacier"],
  type: "single",
  question: "Which S3 storage class is generally best for long-term archival data with infrequent access?",
  options: ["S3 Standard", "S3 One Zone-IA", "S3 Glacier (archival classes)", "S3 Reduced Redundancy"],
  correct: [2],
  explanation: "Glacier storage classes are designed for low-cost archival with infrequent access."
},
{
  id: "q124",
  domain: "Technology",
  tags: ["Networking", "VPC"],
  type: "single",
  question: "Which VPC component controls how traffic is routed within a VPC?",
  options: ["Route tables", "Key pairs", "IAM policies", "S3 bucket policies"],
  correct: [0],
  explanation: "Route tables determine where network traffic is directed."
},
{
  id: "q125",
  domain: "Technology",
  tags: ["Monitoring", "CloudWatch Logs"],
  type: "single",
  question: "Which AWS service feature can be used to collect and store application logs?",
  options: ["Amazon CloudWatch Logs", "AWS Cost Explorer", "AWS Organizations", "AWS Budgets"],
  correct: [0],
  explanation: "CloudWatch Logs stores and monitors log data from applications and AWS resources."
},

{
  id: "q126",
  domain: "Billing & Pricing",
  tags: ["Pricing Calculator"],
  type: "single",
  question: "Why would a customer use the AWS Pricing Calculator?",
  options: ["To enable encryption keys", "To estimate costs for planned workloads", "To configure VPC routing", "To create IAM users"],
  correct: [1],
  explanation: "The Pricing Calculator helps estimate costs before deploying resources."
},
{
  id: "q127",
  domain: "Billing & Pricing",
  tags: ["Consolidated Billing", "Organizations"],
  type: "single",
  question: "In AWS Organizations, what is the main purpose of consolidated billing?",
  options: ["To separate costs into multiple invoices", "To centrally pay for multiple accounts and share discounts", "To replace IAM", "To eliminate taxes"],
  correct: [1],
  explanation: "Consolidated billing provides one bill and can share volume discounts across accounts."
},
{
  id: "q128",
  domain: "Billing & Pricing",
  tags: ["Cost Explorer", "Forecasting"],
  type: "single",
  question: "Which AWS tool can provide cost forecasts based on historical usage?",
  options: ["AWS Cost Explorer", "AWS Shield", "Amazon Macie", "AWS WAF"],
  correct: [0],
  explanation: "Cost Explorer includes forecasting features based on historical spend/usage."
},
{
  id: "q129",
  domain: "Billing & Pricing",
  tags: ["Support Plans"],
  type: "single",
  question: "Which AWS Support plan generally includes access to AWS Trusted Advisor checks beyond the basic set?",
  options: ["Basic", "Developer", "Business", "Enterprise"],
  correct: [2],
  explanation: "Business (and Enterprise) Support includes more Trusted Advisor checks than the basic set."
},
{
  id: "q130",
  domain: "Billing & Pricing",
  tags: ["Billing Permissions"],
  type: "single",
  question: "How can a root user allow an IAM user to view billing information?",
  options: ["Enable IAM access to billing in account settings and grant permissions", "Share the root password", "Create a public S3 bucket", "Disable MFA"],
  correct: [0],
  explanation: "Billing access requires enabling IAM access to billing and granting appropriate IAM permissions."
},

{
  id: "q131",
  domain: "Cloud Concepts",
  tags: ["Service Categories"],
  type: "single",
  question: "Which statement is TRUE about AWS managed services?",
  options: ["They require customers to manage physical servers", "They reduce operational tasks like patching and maintenance", "They can only be used by the root user", "They always cost more than self-managed services"],
  correct: [1],
  explanation: "Managed services reduce operational overhead by handling infrastructure management tasks."
},
{
  id: "q132",
  domain: "Security",
  tags: ["GuardDuty", "Threat Detection"],
  type: "single",
  question: "Amazon GuardDuty primarily analyzes which types of data sources?",
  options: ["Billing invoices only", "VPC Flow Logs, DNS logs, and CloudTrail events", "S3 storage classes", "EC2 instance types"],
  correct: [1],
  explanation: "GuardDuty analyzes CloudTrail, VPC Flow Logs, and DNS logs to detect threats."
},
{
  id: "q133",
  domain: "Technology",
  tags: ["VPC", "Subnets"],
  type: "single",
  question: "What is a subnet in Amazon VPC?",
  options: [
    "A global CDN endpoint",
    "A range of IP addresses in a VPC",
    "A billing container for costs",
    "A type of encryption key"
  ],
  correct: [1],
  explanation: "A subnet is a range of IP addresses in a VPC, typically within one Availability Zone."
},
{
  id: "q134",
  domain: "Technology",
  tags: ["S3", "Access"],
  type: "single",
  question: "Which mechanism can be used to control access to an S3 bucket?",
  options: ["S3 bucket policies", "Route tables", "Security groups only", "EC2 instance types"],
  correct: [0],
  explanation: "S3 bucket policies (and IAM policies/ACLs) control access to S3 resources."
},
{
  id: "q135",
  domain: "Billing & Pricing",
  tags: ["RI vs Spot"],
  type: "single",
  question: "Which option is generally best for workloads that can be interrupted and restarted?",
  options: ["Reserved Instances", "On-Demand Instances", "Spot Instances", "Dedicated Hosts"],
  correct: [2],
  explanation: "Spot Instances are ideal for interruptible workloads that are fault-tolerant."
},

{
  id: "q136",
  domain: "Security",
  tags: ["Responsibility Model"],
  type: "single",
  question: "For an EC2 instance, which responsibility typically belongs to the customer?",
  options: ["Physical security of data centers", "Patching the host OS used by AWS", "Patching the guest operating system on the instance", "Maintaining the AWS global network"],
  correct: [2],
  explanation: "With EC2, customers manage the guest OS, including patching and configuration."
},
{
  id: "q137",
  domain: "Technology",
  tags: ["Route 53", "Routing Policies"],
  type: "single",
  question: "Which Route 53 feature helps route users to the nearest endpoint based on latency?",
  options: ["Latency-based routing", "Simple routing only", "Geoproximity routing only", "Failover routing only"],
  correct: [0],
  explanation: "Latency-based routing directs traffic to the region that provides the lowest latency."
},
{
  id: "q138",
  domain: "Technology",
  tags: ["CloudFormation"],
  type: "single",
  question: "Which AWS service lets you model and provision AWS resources using templates?",
  options: ["AWS CloudFormation", "AWS Config", "Amazon CloudFront", "AWS Budgets"],
  correct: [0],
  explanation: "CloudFormation uses templates to provision resources in an automated, repeatable way."
},
{
  id: "q139",
  domain: "Technology",
  tags: ["Elasticity", "Auto Scaling"],
  type: "single",
  question: "Which combination best supports automatic scaling for an application on EC2?",
  options: ["Amazon S3 + KMS", "EC2 Auto Scaling + Elastic Load Balancing", "CloudTrail + Artifact", "Route 53 + Budgets"],
  correct: [1],
  explanation: "Auto Scaling adjusts capacity and ELB distributes traffic across instances."
},
{
  id: "q140",
  domain: "Billing & Pricing",
  tags: ["Chargeback/Showback"],
  type: "single",
  question: "A company wants to show each team its AWS spend without changing who pays the bill. What practice supports this?",
  options: ["Use cost allocation tags and Cost Explorer reports", "Use a single IAM user", "Disable CloudTrail", "Use only one Availability Zone"],
  correct: [0],
  explanation: "Tags + reporting enable showback/chargeback by team or project without changing billing ownership."
},

/* =======================
   PART 5 (q141–q200)
   Paste these objects INSIDE your window.QUESTION_BANK array
======================= */

{
  id: "q141",
  domain: "Cloud Concepts",
  tags: ["AWS CAF"],
  type: "single",
  question: "Which AWS resource provides guidance for cloud adoption across people, process, and technology?",
  options: ["AWS Cloud Adoption Framework (CAF)", "AWS Pricing Calculator", "AWS Artifact", "Amazon CloudFront"],
  correct: [0],
  explanation: "AWS CAF provides guidance to help organizations plan and execute cloud adoption."
},
{
  id: "q142",
  domain: "Cloud Concepts",
  tags: ["Managed Services"],
  type: "single",
  question: "Which is an example of an AWS managed service that reduces operational tasks for customers?",
  options: ["Amazon RDS", "Amazon EC2", "Amazon VPC", "Amazon Route 53 Resolver endpoints"],
  correct: [0],
  explanation: "Amazon RDS is managed (patching/backups options), reducing customer operational burden versus self-managed databases."
},
{
  id: "q143",
  domain: "Cloud Concepts",
  tags: ["Global Reach"],
  type: "single",
  question: "A company wants to serve global users with low latency. Which AWS concept supports this goal?",
  options: ["Using a single Availability Zone", "Using edge caching with a CDN", "Using instance store for backups", "Disabling DNS"],
  correct: [1],
  explanation: "Using a CDN like CloudFront caches content at edge locations to reduce latency globally."
},
{
  id: "q144",
  domain: "Cloud Concepts",
  tags: ["Agility"],
  type: "single",
  question: "Which cloud benefit most directly supports rapid experimentation?",
  options: ["Long procurement cycles", "On-demand provisioning", "Single-tenant hardware", "Manual capacity planning"],
  correct: [1],
  explanation: "On-demand provisioning lets teams spin up resources quickly and shut them down when done."
},
{
  id: "q145",
  domain: "Cloud Concepts",
  tags: ["Reliability"],
  type: "single",
  question: "Which design principle most improves reliability in AWS?",
  options: ["Build monolithic systems only", "Test recovery procedures", "Avoid automation", "Use only one subnet"],
  correct: [1],
  explanation: "Reliability best practices include testing recovery and failover procedures."
},

{
  id: "q146",
  domain: "Security",
  tags: ["IAM", "Credentials"],
  type: "single",
  question: "What is the recommended way to provide programmatic access to AWS for an application running on EC2?",
  options: ["Hardcode access keys in the app", "Use IAM roles for EC2", "Use the root access keys", "Make the S3 bucket public"],
  correct: [1],
  explanation: "IAM roles provide temporary credentials to EC2 without hardcoding secrets."
},
{
  id: "q147",
  domain: "Security",
  tags: ["IAM", "MFA"],
  type: "single",
  question: "Which option is a best practice for protecting the AWS root account?",
  options: ["Use it for daily administration", "Enable MFA and lock away credentials", "Share it with the finance team", "Create multiple root users"],
  correct: [1],
  explanation: "Root account should be protected with MFA and used only when necessary."
},
{
  id: "q148",
  domain: "Security",
  tags: ["WAF", "Shield"],
  type: "single",
  question: "Which AWS service is specifically designed to help filter malicious HTTP requests to a web application?",
  options: ["AWS WAF", "AWS Shield", "AWS KMS", "AWS Budgets"],
  correct: [0],
  explanation: "AWS WAF filters HTTP(S) requests to protect against common web exploits."
},
{
  id: "q149",
  domain: "Security",
  tags: ["Encryption", "KMS"],
  type: "single",
  question: "Which AWS service integrates with many AWS services to manage encryption keys centrally?",
  options: ["AWS KMS", "AWS Trusted Advisor", "AWS Health", "AWS Config"],
  correct: [0],
  explanation: "KMS manages keys used by services like S3, EBS, RDS, etc."
},
{
  id: "q150",
  domain: "Security",
  tags: ["CloudTrail", "Governance"],
  type: "single",
  question: "What is a primary use case of AWS CloudTrail?",
  options: ["Content delivery", "API activity logging and auditing", "Caching database results", "Estimating costs"],
  correct: [1],
  explanation: "CloudTrail records API calls for auditing, security investigations, and governance."
},

{
  id: "q151",
  domain: "Technology",
  tags: ["Storage", "S3"],
  type: "single",
  question: "Which statement best describes Amazon S3?",
  options: ["Block storage for EC2", "Object storage designed for scalability and durability", "A relational database service", "A DNS service"],
  correct: [1],
  explanation: "S3 is highly durable object storage for a wide variety of use cases."
},
{
  id: "q152",
  domain: "Technology",
  tags: ["Compute", "Lambda"],
  type: "single",
  question: "Which AWS service is best suited for running short-lived code in response to events?",
  options: ["Amazon EC2", "AWS Lambda", "Amazon RDS", "Amazon EFS"],
  correct: [1],
  explanation: "Lambda is serverless and event-driven for short-lived execution."
},
{
  id: "q153",
  domain: "Technology",
  tags: ["Networking", "VPC"],
  type: "single",
  question: "Which AWS service is used to create an isolated virtual network in the AWS Cloud?",
  options: ["Amazon VPC", "Amazon Route 53", "AWS CloudFormation", "Amazon CloudFront"],
  correct: [0],
  explanation: "Amazon VPC provides networking isolation and control in AWS."
},
{
  id: "q154",
  domain: "Technology",
  tags: ["Databases", "DynamoDB"],
  type: "single",
  question: "Which AWS database service is serverless and automatically scales for NoSQL workloads?",
  options: ["Amazon Aurora", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"],
  correct: [2],
  explanation: "DynamoDB is a managed NoSQL service that scales automatically."
},
{
  id: "q155",
  domain: "Technology",
  tags: ["Messaging", "Decoupling"],
  type: "single",
  question: "Which service is best for decoupling application components using a queue?",
  options: ["Amazon SNS", "Amazon SQS", "Amazon EventBridge (rules only)", "Amazon Route 53"],
  correct: [1],
  explanation: "SQS is a managed queue to decouple producers and consumers."
},

{
  id: "q156",
  domain: "Billing & Pricing",
  tags: ["Cost Management"],
  type: "single",
  question: "Which AWS feature helps identify which resources are driving costs?",
  options: ["AWS Cost Explorer", "AWS WAF", "AWS Shield", "AWS Secrets Manager"],
  correct: [0],
  explanation: "Cost Explorer helps analyze spend by service, linked account, tags, etc."
},
{
  id: "q157",
  domain: "Billing & Pricing",
  tags: ["Budgets"],
  type: "single",
  question: "Which AWS service can send alerts when forecasted costs exceed a threshold?",
  options: ["AWS Budgets", "AWS Artifact", "Amazon CloudFront", "AWS Direct Connect"],
  correct: [0],
  explanation: "AWS Budgets supports alerts on actual or forecasted spend/usage."
},
{
  id: "q158",
  domain: "Billing & Pricing",
  tags: ["Pricing Models"],
  type: "single",
  question: "Which compute pricing option provides discounts for a commitment but still offers flexibility across instance families?",
  options: ["On-Demand", "Savings Plans", "Spot Instances", "Dedicated Hosts"],
  correct: [1],
  explanation: "Savings Plans provide discounted compute with flexible usage across many services/instance types."
},
{
  id: "q159",
  domain: "Billing & Pricing",
  tags: ["Support Plans"],
  type: "single",
  question: "Which AWS Support plan is most suitable for a production workload that needs 24/7 access to support engineers?",
  options: ["Basic", "Developer", "Business", "Enterprise"],
  correct: [2],
  explanation: "Business Support includes 24/7 support for production issues (Enterprise adds TAM and more)."
},
{
  id: "q160",
  domain: "Billing & Pricing",
  tags: ["Cost Optimization"],
  type: "single",
  question: "Which action is a cost-optimization best practice?",
  options: ["Right-size resources based on utilization", "Always choose the largest instance type", "Disable autoscaling", "Keep unused environments running"],
  correct: [0],
  explanation: "Right-sizing reduces waste by matching capacity to actual needs."
},

{
  id: "q161",
  domain: "Cloud Concepts",
  tags: ["Disaster Recovery"],
  type: "single",
  question: "Which statement about RPO is correct?",
  options: ["RPO measures time to recover systems", "RPO measures acceptable data loss in time", "RPO is a type of firewall", "RPO is an AWS support plan"],
  correct: [1],
  explanation: "RPO is the maximum acceptable data loss measured in time."
},
{
  id: "q162",
  domain: "Cloud Concepts",
  tags: ["Disaster Recovery"],
  type: "single",
  question: "Which statement about RTO is correct?",
  options: ["RTO measures acceptable data loss", "RTO measures target recovery time", "RTO is a DNS policy", "RTO is a storage class"],
  correct: [1],
  explanation: "RTO is the target time to restore systems after a disruption."
},
{
  id: "q163",
  domain: "Cloud Concepts",
  tags: ["Well-Architected"],
  type: "single",
  question: "Which action is most aligned with operational excellence?",
  options: ["Perform changes manually", "Use infrastructure as code and automate deployments", "Avoid documentation", "Disable logging"],
  correct: [1],
  explanation: "Operational excellence includes automation, IaC, and continuous improvement."
},
{
  id: "q164",
  domain: "Cloud Concepts",
  tags: ["Cloud Economics"],
  type: "single",
  question: "Which benefit of AWS helps reduce the need to guess capacity requirements?",
  options: ["Elasticity", "Data residency", "Single tenancy", "Manual scaling"],
  correct: [0],
  explanation: "Elasticity allows scaling to match demand, reducing capacity guessing."
},
{
  id: "q165",
  domain: "Cloud Concepts",
  tags: ["Shared Responsibility"],
  type: "single",
  question: "Which item is typically the customer’s responsibility when using AWS?",
  options: ["Security of data centers", "Hardware maintenance", "Configuring IAM permissions", "Maintaining the AWS global network"],
  correct: [2],
  explanation: "Customers are responsible for configuring IAM, data, and application-level security."
},

{
  id: "q166",
  domain: "Security",
  tags: ["S3", "Encryption"],
  type: "single",
  question: "Which feature can help ensure S3 objects are encrypted automatically when uploaded?",
  options: ["Default bucket encryption", "S3 Transfer Acceleration", "S3 Static Website Hosting", "S3 Object Lock (only)"],
  correct: [0],
  explanation: "Default encryption can automatically encrypt objects at rest when they are stored in S3."
},
{
  id: "q167",
  domain: "Security",
  tags: ["IAM", "Policy Types"],
  type: "single",
  question: "Which type of IAM policy is directly attached to an AWS resource like an S3 bucket?",
  options: ["Identity-based policy", "Resource-based policy", "Service control policy", "Session policy only"],
  correct: [1],
  explanation: "Resource-based policies are attached to resources (e.g., S3 bucket policy)."
},
{
  id: "q168",
  domain: "Security",
  tags: ["Organizations", "SCP"],
  type: "single",
  question: "What is the primary purpose of a Service Control Policy (SCP) in AWS Organizations?",
  options: ["Grant permissions to users", "Set maximum available permissions for accounts", "Encrypt data at rest", "Route traffic between subnets"],
  correct: [1],
  explanation: "SCPs define guardrails—limits on what actions can be performed in member accounts."
},
{
  id: "q169",
  domain: "Security",
  tags: ["Monitoring", "Config"],
  type: "single",
  question: "Which AWS service can evaluate whether resources comply with desired configurations (e.g., ‘S3 buckets must not be public’)?",
  options: ["AWS Config", "AWS Cost Explorer", "AWS Budgets", "Amazon Route 53"],
  correct: [0],
  explanation: "AWS Config can record configurations and evaluate compliance with rules."
},
{
  id: "q170",
  domain: "Security",
  tags: ["Incident Response"],
  type: "multi",
  question: "Which actions support incident investigation in AWS? (Select TWO)",
  options: ["Review CloudTrail logs", "Review VPC Flow Logs", "Increase instance size immediately", "Disable logging to reduce noise"],
  correct: [0, 1],
  explanation: "CloudTrail and VPC Flow Logs are key sources for investigating security events and network activity."
},

{
  id: "q171",
  domain: "Technology",
  tags: ["Storage", "EFS"],
  type: "single",
  question: "Which storage service is best for a shared file system across multiple EC2 instances in multiple AZs?",
  options: ["Amazon EBS", "Amazon EFS", "Amazon S3 Standard", "EC2 instance store"],
  correct: [1],
  explanation: "EFS is a managed NFS file system for shared access across instances."
},
{
  id: "q172",
  domain: "Technology",
  tags: ["Networking", "NAT"],
  type: "single",
  question: "What is a common purpose of a NAT Gateway in a VPC?",
  options: ["Allow inbound internet access to private subnets", "Allow instances in private subnets to access the internet outbound", "Replace security groups", "Provide DNS hosting"],
  correct: [1],
  explanation: "A NAT Gateway allows outbound internet access from private subnets while blocking unsolicited inbound."
},
{
  id: "q173",
  domain: "Technology",
  tags: ["Elastic Load Balancing"],
  type: "single",
  question: "What is a key benefit of Elastic Load Balancing?",
  options: ["It stores objects", "It distributes incoming traffic across multiple targets", "It creates IAM policies", "It manages budgets"],
  correct: [1],
  explanation: "ELB balances traffic across targets like EC2 instances, containers, and IPs."
},
{
  id: "q174",
  domain: "Technology",
  tags: ["Route 53", "Failover"],
  type: "single",
  question: "Which Route 53 routing policy helps automatically route traffic to a healthy endpoint if the primary becomes unhealthy?",
  options: ["Weighted routing", "Failover routing", "Latency routing", "Simple routing"],
  correct: [1],
  explanation: "Failover routing works with health checks to route traffic to a backup endpoint."
},
{
  id: "q175",
  domain: "Technology",
  tags: ["S3", "Durability"],
  type: "single",
  question: "Which statement best describes Amazon S3 durability?",
  options: ["S3 is designed for very low durability", "S3 is designed for extremely high durability across multiple facilities", "S3 stores data only on one disk", "S3 provides block storage only"],
  correct: [1],
  explanation: "S3 is designed for high durability by storing data redundantly across multiple devices and facilities."
},

{
  id: "q176",
  domain: "Billing & Pricing",
  tags: ["Billing", "Permissions"],
  type: "single",
  question: "By default, which identity has access to the AWS Billing and Cost Management console?",
  options: ["Any IAM user", "Only the root user", "Any user with a security group", "Only AWS Support engineers"],
  correct: [1],
  explanation: "Only the root user has billing access by default; IAM access must be explicitly enabled and granted."
},
{
  id: "q177",
  domain: "Billing & Pricing",
  tags: ["Data Transfer"],
  type: "single",
  question: "Which factor can increase AWS costs unexpectedly for a web application serving global users?",
  options: ["Inbound data transfer only", "Outbound data transfer to the internet", "Using IAM roles", "Using VPC route tables"],
  correct: [1],
  explanation: "Outbound data transfer (egress) to the internet is commonly billed and can grow with usage."
},
{
  id: "q178",
  domain: "Billing & Pricing",
  tags: ["Spot", "Interruption"],
  type: "single",
  question: "What is a key characteristic of Spot Instances?",
  options: ["They are always the most expensive option", "They can be interrupted by AWS with short notice", "They require a 3-year commitment", "They include a TAM"],
  correct: [1],
  explanation: "Spot Instances use spare capacity and can be interrupted, so they fit fault-tolerant workloads."
},
{
  id: "q179",
  domain: "Billing & Pricing",
  tags: ["Reserved Instances"],
  type: "single",
  question: "Reserved Instances primarily provide what benefit?",
  options: ["Higher latency", "Lower cost for steady-state usage", "Automatic code execution", "DDoS prevention"],
  correct: [1],
  explanation: "Reserved Instances reduce cost for predictable, steady-state workloads."
},
{
  id: "q180",
  domain: "Billing & Pricing",
  tags: ["Cost Optimization"],
  type: "single",
  question: "Which AWS feature can help automatically move objects to cheaper storage classes based on lifecycle rules?",
  options: ["S3 Lifecycle", "CloudTrail", "IAM Groups", "EC2 Auto Scaling"],
  correct: [0],
  explanation: "S3 Lifecycle policies can transition objects to cheaper classes or expire them automatically."
},

{
  id: "q181",
  domain: "Cloud Concepts",
  tags: ["Support", "Guidance"],
  type: "single",
  question: "Which AWS service provides recommendations to improve security, performance, and reduce costs?",
  options: ["AWS Trusted Advisor", "AWS KMS", "Amazon SQS", "AWS CloudFormation"],
  correct: [0],
  explanation: "Trusted Advisor provides best-practice recommendations across cost, performance, security, and more."
},
{
  id: "q182",
  domain: "Cloud Concepts",
  tags: ["Compute Options"],
  type: "single",
  question: "Which AWS compute option is best described as 'functions as a service' (FaaS)?",
  options: ["Amazon EC2", "AWS Lambda", "Amazon ECS on EC2", "AWS Direct Connect"],
  correct: [1],
  explanation: "AWS Lambda is a serverless FaaS option for running code in response to events."
},
{
  id: "q183",
  domain: "Cloud Concepts",
  tags: ["Infrastructure"],
  type: "single",
  question: "Which statement best describes an Availability Zone (AZ)?",
  options: ["A separate geographic area containing multiple Regions", "One or more discrete data centers with redundant power/networking within a Region", "A global edge cache site only", "A customer’s on-premises data center"],
  correct: [1],
  explanation: "An AZ consists of one or more data centers within a Region with independent power/networking."
},
{
  id: "q184",
  domain: "Cloud Concepts",
  tags: ["Regions"],
  type: "single",
  question: "Which factor is most relevant when selecting an AWS Region?",
  options: ["Root user password strength", "Latency to users and compliance requirements", "EC2 key pair name", "The number of IAM users"],
  correct: [1],
  explanation: "Region selection is often driven by latency, data residency, and compliance requirements."
},
{
  id: "q185",
  domain: "Cloud Concepts",
  tags: ["Elasticity"],
  type: "single",
  question: "Which scenario best demonstrates elasticity?",
  options: [
    "Buying more servers for next year",
    "Scaling out during peak hours and scaling in after peak hours",
    "Keeping the same server capacity all year",
    "Migrating data with a physical device"
  ],
  correct: [1],
  explanation: "Elasticity is dynamic scaling up and down based on demand."
},

{
  id: "q186",
  domain: "Security",
  tags: ["Access Control"],
  type: "single",
  question: "Which AWS service or feature is used to define who can access AWS resources and what actions they can perform?",
  options: ["AWS IAM", "Amazon CloudFront", "AWS Direct Connect", "Amazon Route 53"],
  correct: [0],
  explanation: "IAM defines identities and permissions across AWS."
},
{
  id: "q187",
  domain: "Security",
  tags: ["S3", "Object Lock"],
  type: "single",
  question: "Which S3 feature can help prevent objects from being deleted or overwritten for a fixed retention period?",
  options: ["S3 Object Lock", "S3 Transfer Acceleration", "S3 Inventory", "S3 Select"],
  correct: [0],
  explanation: "S3 Object Lock can enforce write-once-read-many (WORM) retention."
},
{
  id: "q188",
  domain: "Security",
  tags: ["MFA", "Best Practices"],
  type: "single",
  question: "Which is a strong security reason to enable MFA for IAM users?",
  options: ["It reduces data transfer fees", "It adds an additional verification factor beyond a password", "It increases EC2 CPU performance", "It automatically encrypts S3 objects"],
  correct: [1],
  explanation: "MFA adds a second factor, reducing risk from compromised passwords."
},
{
  id: "q189",
  domain: "Security",
  tags: ["CloudWatch", "Alarms"],
  type: "single",
  question: "Which AWS feature can notify you when a metric crosses a defined threshold?",
  options: ["CloudWatch Alarms", "CloudTrail Trails", "S3 Versioning", "IAM Groups"],
  correct: [0],
  explanation: "CloudWatch Alarms can trigger notifications or actions when thresholds are breached."
},
{
  id: "q190",
  domain: "Security",
  tags: ["Secrets"],
  type: "single",
  question: "Where is it best to store database credentials for an application running in AWS?",
  options: ["In the source code repository", "In plaintext on the EC2 instance", "In AWS Secrets Manager", "In an S3 public bucket"],
  correct: [2],
  explanation: "Secrets Manager stores and rotates secrets securely, avoiding hardcoded credentials."
},

{
  id: "q191",
  domain: "Technology",
  tags: ["CloudFormation", "IaC"],
  type: "single",
  question: "What is a key benefit of using AWS CloudFormation?",
  options: ["Manual, one-off setups", "Repeatable infrastructure provisioning using templates", "Automatic cost refunds", "Replacing IAM policies"],
  correct: [1],
  explanation: "CloudFormation enables repeatable, consistent deployments via infrastructure-as-code templates."
},
{
  id: "q192",
  domain: "Technology",
  tags: ["Storage Gateway"],
  type: "single",
  question: "Which AWS service can connect on-premises environments with cloud storage using hybrid storage integration?",
  options: ["AWS Storage Gateway", "Amazon CloudFront", "AWS WAF", "AWS Shield"],
  correct: [0],
  explanation: "Storage Gateway provides hybrid connectivity between on-prem and AWS storage."
},
{
  id: "q193",
  domain: "Technology",
  tags: ["Direct Connect"],
  type: "single",
  question: "Which benefit is commonly associated with AWS Direct Connect?",
  options: ["A dedicated private connection with more consistent network performance", "Automatic encryption of all data at rest", "Free global internet bandwidth", "A managed NoSQL database"],
  correct: [0],
  explanation: "Direct Connect provides dedicated connectivity and can offer consistent throughput/latency."
},
{
  id: "q194",
  domain: "Technology",
  tags: ["CloudFront", "Origins"],
  type: "single",
  question: "In CloudFront, what is an 'origin'?",
  options: ["A DNS record", "The source of content CloudFront distributes (e.g., S3 bucket or web server)", "An IAM policy", "A VPC subnet"],
  correct: [1],
  explanation: "An origin is the backend source where CloudFront fetches content."
},
{
  id: "q195",
  domain: "Technology",
  tags: ["RDS", "Multi-AZ"],
  type: "single",
  question: "What is a primary benefit of enabling Multi-AZ for Amazon RDS?",
  options: ["Lower storage cost", "Automatic failover to a standby instance in another AZ", "Faster global caching", "Eliminating the need for IAM"],
  correct: [1],
  explanation: "RDS Multi-AZ provides high availability via synchronous standby and automatic failover."
},

{
  id: "q196",
  domain: "Billing & Pricing",
  tags: ["Billing", "Invoices"],
  type: "single",
  question: "Which AWS feature helps you receive a single consolidated bill for multiple AWS accounts?",
  options: ["AWS Organizations consolidated billing", "AWS IAM", "AWS Shield Standard", "AWS KMS"],
  correct: [0],
  explanation: "AWS Organizations supports consolidated billing for multiple accounts."
},
{
  id: "q197",
  domain: "Billing & Pricing",
  tags: ["Cost Allocation Tags"],
  type: "single",
  question: "Which statement about cost allocation tags is TRUE?",
  options: [
    "They automatically encrypt data",
    "They help categorize costs by project, team, or environment",
    "They replace IAM policies",
    "They prevent DDoS attacks"
  ],
  correct: [1],
  explanation: "Tags are commonly used to attribute costs and organize billing reports."
},
{
  id: "q198",
  domain: "Billing & Pricing",
  tags: ["Pricing", "Estimator"],
  type: "single",
  question: "Which AWS tool is best for estimating the monthly cost of a planned solution before deploying it?",
  options: ["AWS Pricing Calculator", "AWS Cost Explorer", "AWS Budgets", "AWS Artifact"],
  correct: [0],
  explanation: "Pricing Calculator is used for pre-deployment cost estimation."
},
{
  id: "q199",
  domain: "Billing & Pricing",
  tags: ["Support Plans"],
  type: "single",
  question: "Which AWS Support plan typically offers the most guidance with a Technical Account Manager (TAM)?",
  options: ["Basic", "Developer", "Business", "Enterprise"],
  correct: [3],
  explanation: "Enterprise Support includes a TAM and the highest level of support features."
},
{
  id: "q200",
  domain: "Billing & Pricing",
  tags: ["Cost Optimization", "S3"],
  type: "single",
  question: "Which S3 feature can help automatically optimize storage costs by moving data to lower-cost tiers without manual intervention?",
  options: ["S3 Intelligent-Tiering", "S3 Static Website Hosting", "S3 Transfer Acceleration", "S3 Access Points"],
  correct: [0],
  explanation: "S3 Intelligent-Tiering automatically moves objects between access tiers based on usage patterns."
},

/* =======================
   Imported set (q201–q220)
   Source: user-provided Q/A
   Paste INSIDE window.QUESTION_BANK array
======================= */

{
  id: "q201",
  domain: "Billing & Pricing",
  tags: ["EC2", "Reserved Instances"],
  type: "single",
  question: "A company plans to use reserved instances to get discounted pricing for Amazon EC2 instances. The company may need to change the EC2 instance type during the one year period. Which instance purchasing option is the MOST cost-effective?",
  options: [
    "Regional Reserved Instances",
    "Zonal Reserved Instances",
    "Convertible Reserved Instances",
    "Standard Reserved Instances"
  ],
  correct: [2],
  explanation: "Convertible RIs provide discounts and allow changes to instance family/type during the term (more flexibility than Standard RIs)."
},
{
  id: "q202",
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
  explanation: "Reserved Instances can reduce cost compared to On-Demand and can reserve capacity (especially in a specific AZ when applicable)."
},
{
  id: "q203",
  domain: "Security",
  tags: ["DDoS", "Shield"],
  type: "single",
  question: "What AWS service offers managed DDoS protection?",
  options: [
    "AWS Shield",
    "AWS Firewall Manager",
    "Amazon GuardDuty",
    "Amazon Inspector"
  ],
  correct: [0],
  explanation: "AWS Shield provides DDoS protection (Standard included; Advanced offers enhanced protections and support)."
},
{
  id: "q204",
  domain: "Technology",
  tags: ["RDS", "Managed Services"],
  type: "multi",
  question: "Which benefits can a company gain by deploying a relational database on Amazon RDS instead of Amazon EC2? (Select TWO.)",
  options: [
    "Indexing of tables",
    "Software patching",
    "Automated backups",
    "Schema management",
    "Root access to OS"
  ],
  correct: [1, 2],
  explanation: "RDS is managed: AWS handles database engine patching (depending on settings) and supports automated backups."
},
{
  id: "q205",
  domain: "Security",
  tags: ["Shared Responsibility", "EC2"],
  type: "single",
  question: "Customers using AWS services must patch operating systems on which of the following services?",
  options: [
    "Amazon EC2",
    "Amazon DynamoDB",
    "AWS Lambda",
    "AWS Fargate"
  ],
  correct: [0],
  explanation: "With EC2, the customer manages the guest OS, including patching and hardening."
},
{
  id: "q206",
  domain: "Technology",
  tags: ["Managed Services", "RDS"],
  type: "multi",
  question: "When running applications in the AWS Cloud, which common tasks can AWS manage on behalf of customers? (Select TWO.)",
  options: [
    "Application source code auditing",
    "Creating a database schema",
    "Taking a backup of a database",
    "Patching database software",
    "Application security testing"
  ],
  correct: [2, 3],
  explanation: "For managed database services, AWS can handle backups and patching, reducing operational overhead."
},
{
  id: "q207",
  domain: "Billing & Pricing",
  tags: ["EC2", "Capacity", "Savings Plans"],
  type: "single",
  question: "A company has a mission-critical Linux application that must run every Monday from 6 AM to 10 PM and cannot be interrupted. Which EC2 purchasing option is MOST cost-effective?",
  options: [
    "Spot Instances",
    "On-Demand Capacity Reservation with Savings Plan",
    "Dedicated Hosts",
    "Regional Reserved Instances"
  ],
  correct: [1],
  explanation: "Capacity Reservations help ensure capacity availability, while Savings Plans can reduce compute costs for predictable usage."
},
{
  id: "q208",
  domain: "Billing & Pricing",
  tags: ["Cost Estimation"],
  type: "single",
  question: "Which tool should be used to estimate the cost of a new AWS workload?",
  options: [
    "Cost Explorer",
    "AWS Pricing Calculator",
    "AWS Cost and Usage Report",
    "Billing Dashboard"
  ],
  correct: [1],
  explanation: "AWS Pricing Calculator is designed to estimate costs before deploying resources."
},
{
  id: "q209",
  domain: "Technology",
  tags: ["Global", "Latency", "CloudFront", "Global Accelerator"],
  type: "multi",
  question: "A company deploys a web app in one region but serves global users. Which services help reduce latency? (Select TWO.)",
  options: [
    "AWS Global Accelerator",
    "Amazon CloudFront",
    "AWS Snowcone",
    "AWS Direct Connect",
    "AWS Transit Gateway"
  ],
  correct: [0, 1],
  explanation: "CloudFront caches content at edge locations; Global Accelerator improves routing over AWS’s global network to healthy endpoints."
},
{
  id: "q210",
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
  explanation: "AWS is responsible for the security 'of' the cloud, including underlying host infrastructure and firmware."
},
{
  id: "q211",
  domain: "Technology",
  tags: ["CloudFront", "CDN"],
  type: "single",
  question: "A website has a global customer base and poor performance. Which service reduces latency?",
  options: [
    "Amazon CloudFront",
    "Amazon EC2 Auto Scaling",
    "Amazon Direct Connect",
    "Amazon ElastiCache"
  ],
  correct: [0],
  explanation: "CloudFront is a CDN that caches content closer to users to reduce latency."
},
{
  id: "q212",
  domain: "Technology",
  tags: ["Auto Scaling", "Load Balancing", "High Availability"],
  type: "single",
  question: "A website has highly variable traffic and must be highly available. What is MOST cost-effective?",
  options: [
    "Dedicated host",
    "Manual EC2 scaling",
    "EC2 Auto Scaling group + Elastic Load Balancer",
    "Max-sized EC2 instance"
  ],
  correct: [2],
  explanation: "Auto Scaling adjusts capacity with demand and ELB distributes traffic, improving availability and cost efficiency."
},
{
  id: "q213",
  domain: "Security",
  tags: ["S3", "Bucket Policy"],
  type: "single",
  question: "Which S3 bucket policy element defines who gets access?",
  options: [
    "Principal",
    "Condition",
    "Action",
    "Resource"
  ],
  correct: [0],
  explanation: "The Principal element specifies the user, account, service, or other entity allowed/denied access."
},
{
  id: "q214",
  domain: "Technology",
  tags: ["S3", "Storage"],
  type: "single",
  question: "How much data can be stored in Amazon S3?",
  options: [
    "100 PB",
    "1 PB",
    "Virtually unlimited",
    "100 TB"
  ],
  correct: [2],
  explanation: "S3 is designed for massive scale; you can store virtually unlimited objects."
},
{
  id: "q215",
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
  explanation: "Agility is about moving fast: provisioning resources quickly and experimenting rapidly."
},
{
  id: "q216",
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
  explanation: "Layered protection (e.g., WAF/firewalling + Shield) can help mitigate DDoS and malicious traffic patterns."
},
{
  id: "q217",
  domain: "Cloud Concepts",
  tags: ["Economies of Scale"],
  type: "single",
  question: "AWS can reduce prices continually due to:",
  options: [
    "Compute Savings Plans",
    "Economies of scale",
    "Elastic compute",
    "Pay-as-you-go"
  ],
  correct: [1],
  explanation: "Economies of scale allow AWS to operate at massive volume and pass savings on to customers over time."
},
{
  id: "q218",
  domain: "Security",
  tags: ["IAM", "Best Practices"],
  type: "single",
  question: "What is a best practice for IAM access keys?",
  options: [
    "Rotate access keys regularly",
    "No need to manage",
    "Never use access keys",
    "AWS rotates them"
  ],
  correct: [0],
  explanation: "Access keys should be rotated and protected; prefer roles/temporary credentials whenever possible."
},
{
  id: "q219",
  domain: "Security",
  tags: ["IAM", "Access Keys"],
  type: "single",
  question: "Which IAM entity is associated with access keys?",
  options: [
    "IAM Policy",
    "IAM Role",
    "IAM User",
    "IAM Group"
  ],
  correct: [2],
  explanation: "Access keys are created for IAM users (roles use temporary credentials via STS)."
},
{
  id: "q220",
  domain: "Technology",
  tags: ["Edge Locations", "CloudFront", "Shield"],
  type: "multi",
  question: "Which services are associated with Edge Locations? (Select TWO.)",
  options: [
    "AWS Config",
    "Amazon EBS",
    "CloudFront",
    "AWS Shield",
    "AWS Direct Connect"
  ],
  correct: [2, 3],
  explanation: "CloudFront uses edge locations for caching, and services like Shield integrate with edge/perimeter protections for internet-facing apps."
},


];



