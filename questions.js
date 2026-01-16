// questions.js
// Banco inicial de QUESTOES AUTORIAIS (exemplo). Aumente aos poucos.

window.QUESTION_BANK = [
  {
    id: "q1",
    domain: "Security",
    tags: ["IAM", "Least Privilege"],
    type: "single",
    question: "Which AWS service is primarily used to manage users, groups, roles, and permissions?",
    options: ["Amazon EC2", "AWS IAM", "Amazon S3", "AWS CloudTrail"],
    correct: [1],
    explanation: "AWS IAM (Identity and Access Management) manages identities and permissions (users, groups, roles, policies)."
  },
  {
    id: "q2",
    domain: "Cloud Concepts",
    tags: ["Shared Responsibility"],
    type: "single",
    question: "Under the AWS Shared Responsibility Model, which task is the customer responsible for?",
    options: [
      "Physical security of data centers",
      "Patching the hypervisor",
      "Configuring security groups for EC2 instances",
      "Maintaining AWS global network infrastructure"
    ],
    correct: [2],
    explanation: "Customers configure security controls in the cloud (like security groups). AWS handles facilities, hardware, and core services."
  },
  {
    id: "q3",
    domain: "Technology",
    tags: ["Storage", "S3"],
    type: "single",
    question: "Which AWS service is best suited for storing and retrieving objects such as images, backups, and logs?",
    options: ["Amazon RDS", "Amazon S3", "Amazon EBS", "Amazon EC2"],
    correct: [1],
    explanation: "Amazon S3 is object storage designed for storing and retrieving data (objects) at scale."
  },
  {
    id: "q4",
    domain: "Billing & Pricing",
    tags: ["Pricing", "Cost Optimization"],
    type: "single",
    question: "Which pricing model typically offers the biggest discount compared to On-Demand for steady workloads over time?",
    options: ["On-Demand", "Reserved Instances / Savings Plans", "Spot Instances for any use", "Free Tier only"],
    correct: [1],
    explanation: "Reserved Instances and Savings Plans provide discounts in exchange for a commitment (usage or term), ideal for steady workloads."
  },
  {
    id: "q5",
    domain: "Security",
    tags: ["Encryption", "KMS"],
    type: "single",
    question: "Which AWS service helps you create and manage encryption keys used to encrypt data?",
    options: ["AWS KMS", "AWS Shield", "Amazon Inspector", "AWS Budgets"],
    correct: [0],
    explanation: "AWS Key Management Service (KMS) manages encryption keys and integrates with many AWS services."
  },
  {
    id: "q6",
    domain: "Technology",
    tags: ["Networking", "VPC"],
    type: "single",
    question: "What is an Amazon VPC?",
    options: [
      "A global content delivery network",
      "A logically isolated section of the AWS Cloud where you can launch resources",
      "A managed database service",
      "A tool for cost alerts"
    ],
    correct: [1],
    explanation: "Amazon VPC lets you define networking (subnets, routes, gateways) in a logically isolated virtual network."
  },
  {
    id: "q7",
    domain: "Billing & Pricing",
    tags: ["Support Plans"],
    type: "single",
    question: "Which AWS Support plan includes a Technical Account Manager (TAM)?",
    options: ["Basic", "Developer", "Business", "Enterprise"],
    correct: [3],
    explanation: "Enterprise Support includes a TAM (and other advanced features), while Business/Developer do not include a TAM."
  },
  {
    id: "q8",
    domain: "Cloud Concepts",
    tags: ["Deployment Models"],
    type: "single",
    question: "Which option best describes 'scalability' in cloud computing?",
    options: [
      "Encrypting data at rest",
      "Ability to increase or decrease resources to meet demand",
      "Paying a fixed monthly cost",
      "Using multiple regions automatically by default"
    ],
    correct: [1],
    explanation: "Scalability is the ability to adjust capacity (up/down) based on demand."
  },
  {
    id: "q9",
    domain: "Technology",
    tags: ["Monitoring", "CloudWatch"],
    type: "single",
    question: "Which AWS service provides metrics and alarms for AWS resources (like CPU utilization) by default?",
    options: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Config", "AWS WAF"],
    correct: [1],
    explanation: "CloudWatch provides metrics, logs, and alarms. CloudTrail tracks API calls (auditing)."
  },
  {
    id: "q10",
    domain: "Security",
    tags: ["MFA", "Best Practices"],
    type: "multi",
    question: "Select TWO best practices to improve account security in AWS.",
    options: [
      "Enable MFA for privileged users",
      "Share the root user credentials with the team",
      "Use IAM roles for applications running on AWS",
      "Store access keys in plain text in a public repo"
    ],
    correct: [0, 2],
    explanation: "Use MFA and IAM roles. Never share root credentials and never store secrets in public repos."
  }
];
