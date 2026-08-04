/* ==========================================================================
   MOCK DATA
   Power Automate will later replace it
   ========================================================================== */

const RAW_RECORDS = [
  {
    application: "1234 - AU - LINKAGE2",
    bu: "Commercial, Consumer and Claims",
    portfolio: "General Insurance / International / APAC",
    qid: "92396",
    vulnerabilityName: "Microsoft Azure Connected Machine Agent Elevation of Privilege Vulnerability - May 2024",
    riskPriority: 4,
    age: 62,
    assetStatus: "Active",
    assetQualys: "PWGISERVAPP001",
    serverEnvironment: "Production",
    uniqueRecord: "1",
    sysIdServiceNow: "64bf5ef4db749054b09e34f66896193",
    assetServiceNow: "pwgiservapp001",
    assetQID: "PWGISERVAPP001_92396",
    firstFoundDate: "2026-05-13",
    lastFoundTime: "2026-07-14 07:35",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Customers are advised to refer to Microsoft update guidance and apply the latest Azure Connected Machine Agent update.",
    results: "HKLM\\SOFTWARE\\Microsoft\\Azure Connected Machine Agent V1",
    ageRolling: "\u2014",
    portfolioOwner: "Genri xyz, Saravanan abc",
    responsibleCIO: "Umar qwe",
    primaryAppOwner: "Kiran Kumar",
    productionSupportManager: "Ramnath K, Jeya Kumar, Greg xyz",
    asm: "Suresh Kannan",
    l2Poc: "Arun Prakash",
    l3Poc: "Meera Nair",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "Automated Patching",
    disposition2: "EPM",
    ip: "10.62.150.7",
    joinTypeMethodology: "Joined to CMDB by name",
    patchGroup: "GISC-W4-Lima",
    dispositionDetail: "\u2014",
    previousStatus: "Pending",
    currentStatus: "In Progress",
    statusCategory: "BAU EPM Patching"
  },
  {
    application: "6434 - CN - Online Backtrack Visualization Platform",
    bu: "Commercial, Consumer and Claims",
    portfolio: "General Insurance / International / APAC",
    qid: "48219",
    vulnerabilityName: "OpenSSL Multiple Vulnerabilities (CVE-2024-0727)",
    riskPriority: 2,
    age: 118,
    assetStatus: "Active",
    assetQualys: "PWGIWSCNMALL002",
    serverEnvironment: "Production",
    uniqueRecord: "2",
    sysIdServiceNow: "77ce2ab1cc849054b09e34f66896211",
    assetServiceNow: "pwgiwscnmall002",
    assetQID: "PWGIWSCNMALL002_48219",
    firstFoundDate: "2026-03-22",
    lastFoundTime: "2026-07-15 06:10",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "2026-06-02 10:15",
    timesReopened: 1,
    solution: "Upgrade OpenSSL to version 3.2.1 or later per vendor advisory.",
    results: "OpenSSL 3.0.11 detected on host; vulnerable to denial of service via malformed PKCS12 file.",
    ageRolling: "30-60 days",
    portfolioOwner: "Genri Como, Saravanan",
    responsibleCIO: "Umar Goldeli",
    primaryAppOwner: "Li Gang Ding",
    productionSupportManager: "Ramnath K, Jeya Kumar",
    asm: "Wendy Zhao",
    l2Poc: "Li Wei",
    l3Poc: "Zhang Min",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "Manual Patching",
    disposition2: "BAU",
    ip: "10.64.144.123",
    joinTypeMethodology: "Joined to CMDB by IP",
    patchGroup: "GISC-CN-Shanghai",
    dispositionDetail: "Awaiting change window approval",
    previousStatus: "Pending",
    currentStatus: "Pending",
    statusCategory: "Feedback Required"
  },
  {
    application: "6434 - CN - Online Backtrack Visualization Platform",
    bu: "Commercial, Consumer and Claims",
    portfolio: "General Insurance / International / APAC",
    qid: "55102",
    vulnerabilityName: "Exposed Git Repository Metadata on Web Server",
    riskPriority: 3,
    age: 41,
    assetStatus: "Active",
    assetQualys: "PWGIWSCNMALL002",
    serverEnvironment: "Production",
    uniqueRecord: "15",
    sysIdServiceNow: "ee41ff53gc849054b09e34f66896322",
    assetServiceNow: "pwgiwscnmall002",
    assetQID: "PWGIWSCNMALL002_55102",
    firstFoundDate: "2026-06-09",
    lastFoundTime: "2026-07-15 06:10",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Remove or block public access to the .git directory on the web server.",
    results: "/.git/config publicly accessible, exposing repository metadata.",
    ageRolling: "30-60 days",
    portfolioOwner: "Genri Como, Saravanan",
    responsibleCIO: "Umar Goldeli",
    primaryAppOwner: "Li Gang Ding",
    productionSupportManager: "Ramnath K, Jeya Kumar",
    asm: "Wendy Zhao",
    l2Poc: "Li Wei",
    l3Poc: "Zhang Min",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "BAU Investigation",
    disposition2: "BAU",
    ip: "10.64.144.126",
    joinTypeMethodology: "Joined to CMDB by IP",
    patchGroup: "GISC-CN-Shanghai",
    dispositionDetail: "Web team notified to restrict directory access",
    previousStatus: "Pending",
    currentStatus: "In Progress",
    statusCategory: "BAU Investigation"
  },
  {
    application: "6155 - MY - Retail Payments Gateway",
    bu: "Retail Banking, Consumer Lending",
    portfolio: "Retail Banking / Payments / APAC",
    qid: "38217",
    vulnerabilityName: "Apache Log4j Remote Code Execution Vulnerability",
    riskPriority: 1,
    age: 201,
    assetStatus: "Active",
    assetQualys: "RPGWMYWSC004",
    serverEnvironment: "Production",
    uniqueRecord: "3",
    sysIdServiceNow: "1a4d9be2ec749054b09e34f668963ff",
    assetServiceNow: "rpgwmywsc004",
    assetQID: "RPGWMYWSC004_38217",
    firstFoundDate: "2025-12-30",
    lastFoundTime: "2026-07-13 22:05",
    ltrIndicator: "LTR",
    lastReopenedDatetime: "2026-05-11 09:40",
    timesReopened: 2,
    solution: "Upgrade Log4j to 2.17.1 or later; remove JndiLookup class if patching is not feasible.",
    results: "log4j-core-2.14.1.jar found in application classpath.",
    ageRolling: "180+ days",
    portfolioOwner: "Farah Aziz",
    responsibleCIO: "Ravi Chandrasekaran",
    primaryAppOwner: "Nadia Hassan",
    productionSupportManager: "Priya Sundaram",
    asm: "Farid Rahman",
    l2Poc: "Aisyah Rahim",
    l3Poc: "Hafiz Zainal",
    ltrId: "LTR-2026-0091",
    ltrEndDate: "2026-09-30",
    disposition1: "Manual Patching",
    disposition2: "BAU",
    ip: "10.72.18.44",
    joinTypeMethodology: "Joined to CMDB by name",
    patchGroup: "GISC-MY-KL",
    dispositionDetail: "Long Term Remediation plan approved",
    previousStatus: "In Progress",
    currentStatus: "RA",
    statusCategory: "LTR"
  },
  {
    application: "7021 - HK - Claims Intake Portal",
    bu: "Commercial, Consumer and Claims",
    portfolio: "General Insurance / International / APAC",
    qid: "91004",
    vulnerabilityName: "Microsoft Windows Print Spooler Remote Code Execution (PrintNightmare)",
    riskPriority: 1,
    age: 9,
    assetStatus: "Active",
    assetQualys: "CLMINTKHK002",
    serverEnvironment: "Production",
    uniqueRecord: "4",
    sysIdServiceNow: "9b21ff4a2c749054b09e34f66896a12",
    assetServiceNow: "clmintkhk002",
    assetQID: "CLMINTKHK002_91004",
    firstFoundDate: "2026-07-06",
    lastFoundTime: "2026-07-15 05:52",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Apply Microsoft security update KB5040427 and disable Point and Print if not required.",
    results: "Print Spooler service running without the July 2026 cumulative update.",
    ageRolling: "0-30 days",
    portfolioOwner: "Ka Yee Wong",
    responsibleCIO: "Umar Goldeli",
    primaryAppOwner: "Desmond Lau",
    productionSupportManager: "Michael Patrick Galloway",
    asm: "Vivian Chow",
    l2Poc: "Herman Lam",
    l3Poc: "Cheryl Ho",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "ODR/CHG Path",
    disposition2: "BAU",
    ip: "10.88.4.17",
    joinTypeMethodology: "Joined to CMDB by name",
    patchGroup: "GISC-HK-Central",
    dispositionDetail: "Change request submitted, pending CAB approval",
    previousStatus: "Pending",
    currentStatus: "In Progress",
    statusCategory: "ODR/CHG Path"
  },
  {
    application: "3310 - SG - Employee Self Service Portal",
    bu: "Corporate Functions",
    portfolio: "Corporate Functions / Shared Services / APAC",
    qid: "55671",
    vulnerabilityName: "Unsupported Windows Server 2012 R2 Operating System Detected",
    riskPriority: 3,
    age: 340,
    assetStatus: "Active",
    assetQualys: "ESSSGWSC011",
    serverEnvironment: "Non-Production",
    uniqueRecord: "5",
    sysIdServiceNow: "3d78ba6cee749054b09e34f66896fa7",
    assetServiceNow: "esssgwsc011",
    assetQID: "ESSSGWSC011_55671",
    firstFoundDate: "2025-08-10",
    lastFoundTime: "2026-07-12 03:18",
    ltrIndicator: "LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Migrate workload to a supported OS version; vendor no longer issues security patches.",
    results: "Windows Server 2012 R2 reached end of extended support on Oct 10, 2023.",
    ageRolling: "180+ days",
    portfolioOwner: "Wei Ling Tan",
    responsibleCIO: "Ravi Chandrasekaran",
    primaryAppOwner: "Aaron Koh",
    productionSupportManager: "Priya Sundaram",
    asm: "Jasmine Ong",
    l2Poc: "Kevin Tay",
    l3Poc: "Rachel Lim",
    ltrId: "LTR-2026-0034",
    ltrEndDate: "2026-12-31",
    disposition1: "Decom (Server)",
    disposition2: "\u2014",
    ip: "10.51.9.203",
    joinTypeMethodology: "Joined to CMDB by name",
    patchGroup: "GISC-SG-Changi",
    dispositionDetail: "Server decommission scheduled Q4 2026",
    previousStatus: "RA",
    currentStatus: "Decom Path",
    statusCategory: "Decom (Server)"
  },
  {
    application: "4501 - IN - Underwriting Analytics Engine",
    bu: "Commercial, Consumer and Claims",
    portfolio: "General Insurance / International / APAC",
    qid: "60123",
    vulnerabilityName: "Apache Tomcat Information Disclosure Vulnerability",
    riskPriority: 4,
    age: 27,
    assetStatus: "Fixed",
    assetQualys: "UWANLYINWSC007",
    serverEnvironment: "Non-Production",
    uniqueRecord: "6",
    sysIdServiceNow: "5f0acb99dd749054b09e34f668961e4",
    assetServiceNow: "uwanlyinwsc007",
    assetQID: "UWANLYINWSC007_60123",
    firstFoundDate: "2026-06-01",
    lastFoundTime: "2026-07-09 12:47",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Upgrade Apache Tomcat to the latest patched version and re-scan to confirm closure.",
    results: "Rescan confirmed vulnerability no longer present.",
    ageRolling: "0-30 days",
    portfolioOwner: "Arjun Mehta",
    responsibleCIO: "Ravi Chandrasekaran",
    primaryAppOwner: "Sunita Rao",
    productionSupportManager: "Priya Sundaram",
    asm: "Rohan Malhotra",
    l2Poc: "Deepa Iyer",
    l3Poc: "Anil Kapoor",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "Closed as per rescan",
    disposition2: "\u2014",
    ip: "10.44.22.9",
    joinTypeMethodology: "Joined to CMDB by name",
    patchGroup: "GISC-IN-Mumbai",
    dispositionDetail: "Verified closed via rescan on Jul 9, 2026",
    previousStatus: "In Progress",
    currentStatus: "Closed",
    statusCategory: "Closed as per rescan"
  },
  {
    application: "2290 - TH - Agent Mobility App Backend",
    bu: "Retail Banking, Consumer Lending",
    portfolio: "Retail Banking / Distribution / APAC",
    qid: "71540",
    vulnerabilityName: "SSL/TLS Server Supports Weak Cipher Suites",
    riskPriority: 3,
    age: 5,
    assetStatus: "Active",
    assetQualys: "AGMOBTHWSC003",
    serverEnvironment: "Production",
    uniqueRecord: "7",
    sysIdServiceNow: "8e12dc45ff749054b09e34f66896c88",
    assetServiceNow: "agmobthwsc003",
    assetQID: "AGMOBTHWSC003_71540",
    firstFoundDate: "2026-07-10",
    lastFoundTime: "2026-07-14 18:22",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Disable weak cipher suites (RC4, 3DES) and enforce TLS 1.2+ with modern cipher order.",
    results: "Server accepts TLS_RSA_WITH_3DES_EDE_CBC_SHA during handshake test.",
    ageRolling: "0-30 days",
    portfolioOwner: "Suchada Boonmee",
    responsibleCIO: "Ravi Chandrasekaran",
    primaryAppOwner: "Nattapong Srisuk",
    productionSupportManager: "Priya Sundaram",
    asm: "Somchai Prasert",
    l2Poc: "Kanya Wattana",
    l3Poc: "Preecha Suk",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "For Rescan",
    disposition2: "BAU",
    ip: "10.33.6.71",
    joinTypeMethodology: "Joined to CMDB by name",
    patchGroup: "GISC-TH-Bangkok",
    dispositionDetail: "Config change deployed, awaiting rescan validation",
    previousStatus: "Pending",
    currentStatus: "In Progress",
    statusCategory: "For Rescan"
  },
  {
    application: "5890 - PH - Policy Document Archive",
    bu: "Commercial, Consumer and Claims",
    portfolio: "General Insurance / International / APAC",
    qid: "83007",
    vulnerabilityName: "Unsupported Third-Party Backup Agent Version Detected",
    riskPriority: 5,
    age: 74,
    assetStatus: "Active",
    assetQualys: "PDAPHWSC009",
    serverEnvironment: "Non-Production",
    uniqueRecord: "8",
    sysIdServiceNow: "2c88ff10ab749054b09e34f66896d55",
    assetServiceNow: "pdaphwsc009",
    assetQID: "PDAPHWSC009_83007",
    firstFoundDate: "2026-05-02",
    lastFoundTime: "2026-07-08 09:00",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Not applicable \u2014 asset is out of scope for this scan policy.",
    results: "Asset flagged under OOS Scope per current scan policy exclusion list.",
    ageRolling: "60-90 days",
    portfolioOwner: "Miguel Santos",
    responsibleCIO: "Umar Goldeli",
    primaryAppOwner: "Carmela Reyes",
    productionSupportManager: "Michael Patrick Galloway",
    asm: "Isabel Cruz",
    l2Poc: "Marco Villanueva",
    l3Poc: "Grace Tan",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "OOS Scope",
    disposition2: "\u2014",
    ip: "10.19.55.14",
    joinTypeMethodology: "Joined to CMDB by name",
    patchGroup: "GISC-PH-Manila",
    dispositionDetail: "Excluded per scan policy; reviewed quarterly",
    previousStatus: "Pending",
    currentStatus: "Out of Scope",
    statusCategory: "OOS Scope"
  },
  {
    application: "6620 - VN - Branch Network Monitoring Tool",
    bu: "Corporate Functions",
    portfolio: "Corporate Functions / IT Operations / APAC",
    qid: "44982",
    vulnerabilityName: "SNMP Agent Default Community String Detected",
    riskPriority: 2,
    age: 152,
    assetStatus: "Active",
    assetQualys: "BNMVNWSC021",
    serverEnvironment: "Production",
    uniqueRecord: "9",
    sysIdServiceNow: "6a99ee31cd749054b09e34f66896b30",
    assetServiceNow: "bnmvnwsc021",
    assetQID: "BNMVNWSC021_44982",
    firstFoundDate: "2026-02-14",
    lastFoundTime: "2026-07-11 15:37",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "2026-06-20 08:05",
    timesReopened: 1,
    solution: "Change default SNMP community strings ('public'/'private') to strong, unique values.",
    results: "SNMP v1 responded to 'public' community string on UDP/161.",
    ageRolling: "90-180 days",
    portfolioOwner: "Linh Tran",
    responsibleCIO: "Ravi Chandrasekaran",
    primaryAppOwner: "Hoang Minh",
    productionSupportManager: "Priya Sundaram",
    asm: "Bao Nguyen",
    l2Poc: "Thu Pham",
    l3Poc: "Duc Le",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "BAU Investigation",
    disposition2: "BAU",
    ip: "10.27.3.60",
    joinTypeMethodology: "Joined to CMDB by IP",
    patchGroup: "GISC-VN-Hanoi",
    dispositionDetail: "Investigating device ownership before remediation",
    previousStatus: "Pending",
    currentStatus: "In Progress",
    statusCategory: "BAU Investigation"
  },
  {
    application: "1177 - AU - Legacy Broker Reporting Tool",
    bu: "Retail Banking, Consumer Lending",
    portfolio: "Retail Banking / Reporting / APAC",
    qid: "29988",
    vulnerabilityName: "Adobe Flash Player End-of-Life Detected",
    riskPriority: 3,
    age: 410,
    assetStatus: "Active",
    assetQualys: "LBRTAUWSC014",
    serverEnvironment: "Non-Production",
    uniqueRecord: "10",
    sysIdServiceNow: "4b11aa22ef749054b09e34f66896e77",
    assetServiceNow: "lbrtauwsc014",
    assetQID: "LBRTAUWSC014_29988",
    firstFoundDate: "2025-05-30",
    lastFoundTime: "2026-07-02 11:11",
    ltrIndicator: "LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Not currently actioned \u2014 pending business decision on application retirement.",
    results: "Adobe Flash Player runtime detected; vendor support ended Dec 31, 2020.",
    ageRolling: "180+ days",
    portfolioOwner: "Chloe Bennett",
    responsibleCIO: "Ravi Chandrasekaran",
    primaryAppOwner: "James Whitfield",
    productionSupportManager: "Priya Sundaram",
    asm: "Suresh Kannan",
    l2Poc: "Olivia Marsh",
    l3Poc: "Ethan Cole",
    ltrId: "LTR-2026-0012",
    ltrEndDate: "2026-10-15",
    disposition1: "Others",
    disposition2: "\u2014",
    ip: "10.15.44.2",
    joinTypeMethodology: "Joined to CMDB by name",
    patchGroup: "GISC-AU-Sydney",
    dispositionDetail: "Awaiting application retirement decision from business owner",
    previousStatus: "RA",
    currentStatus: "Others",
    statusCategory: "Others"
  },
  {
    application: "8801 - GB - Claims Document Repository",
    bu: "Commercial, Consumer and Claims",
    portfolio: "General Insurance / International / EMEA",
    qid: "67340",
    vulnerabilityName: "Microsoft SharePoint Server Remote Code Execution Vulnerability",
    riskPriority: 2,
    age: 19,
    assetStatus: "Active",
    assetQualys: "CDRGBWSC002",
    serverEnvironment: "Production",
    uniqueRecord: "11",
    sysIdServiceNow: "aa77bc19de749054b09e34f66896d02",
    assetServiceNow: "cdrgbwsc002",
    assetQID: "CDRGBWSC002_67340",
    firstFoundDate: "2026-07-01",
    lastFoundTime: "2026-07-16 09:14",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Apply the latest SharePoint Server cumulative security update per vendor advisory.",
    results: "SharePoint Server 2019 build predates the July 2026 security update.",
    ageRolling: "0-30 days",
    portfolioOwner: "Oliver Hartley",
    responsibleCIO: "Fatima Al-Sayed",
    primaryAppOwner: "Grace Whitmore",
    productionSupportManager: "Daniel Osei",
    asm: "Henry Aldridge",
    l2Poc: "Sophie Clarke",
    l3Poc: "Ben Fletcher",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "BAU EPM Patching",
    disposition2: "EPM",
    ip: "10.91.12.30",
    joinTypeMethodology: "Joined to CMDB by name",
    patchGroup: "GISC-GB-London",
    dispositionDetail: "Patch scheduled in next maintenance window",
    previousStatus: "Pending",
    currentStatus: "In Progress",
    statusCategory: "BAU EPM Patching"
  },
  {
    application: "9433 - DE - Corporate Data Lake",
    bu: "Corporate Functions",
    portfolio: "Corporate Functions / Data & Analytics / EMEA",
    qid: "72918",
    vulnerabilityName: "PostgreSQL Multiple Privilege Escalation Vulnerabilities",
    riskPriority: 3,
    age: 88,
    assetStatus: "Active",
    assetQualys: "CDLDEWSC008",
    serverEnvironment: "Non-Production",
    uniqueRecord: "12",
    sysIdServiceNow: "bb18cd20ef749054b09e34f66896e13",
    assetServiceNow: "cdldewsc008",
    assetQID: "CDLDEWSC008_72918",
    firstFoundDate: "2026-04-24",
    lastFoundTime: "2026-07-10 14:02",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Upgrade PostgreSQL to the latest minor version addressing the privilege escalation CVEs.",
    results: "PostgreSQL 14.6 detected; fixed in 14.9 and later.",
    ageRolling: "60-90 days",
    portfolioOwner: "Lena Fischer",
    responsibleCIO: "Fatima Al-Sayed",
    primaryAppOwner: "Jonas Weber",
    productionSupportManager: "Daniel Osei",
    asm: "Henry Aldridge",
    l2Poc: "Anna Kruger",
    l3Poc: "Felix Braun",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "BAU Others",
    disposition2: "BAU",
    ip: "10.82.40.17",
    joinTypeMethodology: "Joined to CMDB by IP",
    patchGroup: "GISC-DE-Frankfurt",
    dispositionDetail: "Change ticket drafted, awaiting DBA review",
    previousStatus: "Pending",
    currentStatus: "Pending",
    statusCategory: "Feedback Required"
  },
  {
    application: "9012 - US - Policy Administration System",
    bu: "Commercial, Consumer and Claims",
    portfolio: "General Insurance / International / AMER",
    qid: "81205",
    vulnerabilityName: "Apache Struts Remote Code Execution Vulnerability",
    riskPriority: 1,
    age: 33,
    assetStatus: "Active",
    assetQualys: "PASUSWSC015",
    serverEnvironment: "Production",
    uniqueRecord: "13",
    sysIdServiceNow: "cc29de31fa749054b09e34f66896f24",
    assetServiceNow: "pasuswsc015",
    assetQID: "PASUSWSC015_81205",
    firstFoundDate: "2026-06-17",
    lastFoundTime: "2026-07-17 20:33",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Upgrade Apache Struts to the latest patched release; audit for exposed OGNL endpoints.",
    results: "Struts 2.5.28 in use, vulnerable to remote code execution via crafted request.",
    ageRolling: "30-60 days",
    portfolioOwner: "Rachel Donovan",
    responsibleCIO: "Marcus Ibarra",
    primaryAppOwner: "Tyler Brooks",
    productionSupportManager: "Sofia Alvarado",
    asm: "Diego Fernandez",
    l2Poc: "Amanda Rios",
    l3Poc: "Chris Palmer",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "ODR/CHG Path",
    disposition2: "BAU",
    ip: "10.104.8.55",
    joinTypeMethodology: "Joined to CMDB by name",
    patchGroup: "GISC-US-Dallas",
    dispositionDetail: "Emergency change request filed given critical severity",
    previousStatus: "Escalated",
    currentStatus: "In Progress",
    statusCategory: "ODR/CHG Path"
  },
  {
    application: "9550 - CA - Fraud Detection Service",
    bu: "Retail Banking, Consumer Lending",
    portfolio: "Retail Banking / Fraud & Risk / AMER",
    qid: "84471",
    vulnerabilityName: "Certificate Signed Using Weak Hashing Algorithm (SHA-1)",
    riskPriority: 4,
    age: 14,
    assetStatus: "Active",
    assetQualys: "FDSCAWSC021",
    serverEnvironment: "Production",
    uniqueRecord: "14",
    sysIdServiceNow: "dd30ef42fb749054b09e34f668970aa",
    assetServiceNow: "fdscawsc021",
    assetQID: "FDSCAWSC021_84471",
    firstFoundDate: "2026-07-06",
    lastFoundTime: "2026-07-18 06:47",
    ltrIndicator: "Non-LTR",
    lastReopenedDatetime: "\u2014",
    timesReopened: 0,
    solution: "Reissue the certificate chain using SHA-256 and redeploy to affected endpoints.",
    results: "Leaf certificate signed with SHA-1 detected on public-facing endpoint.",
    ageRolling: "0-30 days",
    portfolioOwner: "Nathalie Cote",
    responsibleCIO: "Marcus Ibarra",
    primaryAppOwner: "Ethan Brar",
    productionSupportManager: "Sofia Alvarado",
    asm: "Diego Fernandez",
    l2Poc: "Michelle Roy",
    l3Poc: "Kevin Sharma",
    ltrId: "\u2014",
    ltrEndDate: "\u2014",
    disposition1: "For Rescan",
    disposition2: "BAU",
    ip: "10.117.3.19",
    joinTypeMethodology: "Joined to CMDB by name",
    patchGroup: "GISC-CA-Toronto",
    dispositionDetail: "New certificate deployed, awaiting rescan confirmation",
    previousStatus: "In Progress",
    currentStatus: "In Progress",
    statusCategory: "For Rescan"
  }
];

/* ==========================================================================
   COUNTRY + REGION + SLA COUNTDOWN CALCULATION
   ========================================================================== */
const COUNTRY_MAP = {
  AU: "Australia", CN: "China", MY: "Malaysia", HK: "Hong Kong",
  SG: "Singapore", IN: "India", TH: "Thailand", PH: "Philippines", VN: "Vietnam",
  GB: "United Kingdom", DE: "Germany", AE: "UAE", US: "United States", CA: "Canada"
};

// Mapping a country code to its region grouping.
const COUNTRY_REGION_MAP = {
  AU: "APAC", CN: "APAC", MY: "APAC", HK: "APAC", SG: "APAC",
  IN: "APAC", TH: "APAC", PH: "APAC", VN: "APAC",
  GB: "EMEA", DE: "EMEA", AE: "EMEA",
  US: "AMER", CA: "AMER"
};

const REGION_META = {
  APAC: { label: "APAC", sub: "Asia Pacific", icon: "bi-globe-asia-australia" },
  EMEA: { label: "EMEA", sub: "Europe, Middle East & Africa", icon: "bi-globe-europe-africa" },
  AMER: { label: "AMER", sub: "Americas", icon: "bi-globe-americas" }
};

function extractCountryCode(applicationName) {
  const match = applicationName.match(/-\s*([A-Z]{2})\s*-/);
  return match ? match[1] : null;
}

function extractCountry(applicationName) {
  const code = extractCountryCode(applicationName);
  return COUNTRY_MAP[code] || code || "Unknown";
}

function extractRegion(applicationName) {
  const code = extractCountryCode(applicationName);
  return COUNTRY_REGION_MAP[code] || "Other";
}

// Remediation SLA window (in days) by risk priority, counted from First Found Date.
const SLA_WINDOW_DAYS = { 1: 30, 2: 30, 3: 60, 4: 90, 5: 120 };

// Reference "today" used for SLA countdown math.
const TODAY = new Date("2026-07-20T00:00:00");

function slaDueDate(record) {
  const found = new Date(record.firstFoundDate + "T00:00:00");
  const windowDays = SLA_WINDOW_DAYS[record.riskPriority] || 90;
  const due = new Date(found);
  due.setDate(due.getDate() + windowDays);
  return due;
}

function slaDaysRemaining(record) {
  const due = slaDueDate(record);
  return Math.round((due - TODAY) / (1000 * 60 * 60 * 24));
}

// Potential Fail: SLA not yet breached, but 15 days or fewer remain until it is.
const POTENTIAL_FAIL_THRESHOLD_DAYS = 15;

function slaStatus(daysRemaining) {
  if (daysRemaining < 0) return "Outside SLA";
  if (daysRemaining <= POTENTIAL_FAIL_THRESHOLD_DAYS) return "Potential Fail";
  return "Within SLA";
}

/* ==========================================================================
   STATE
   ========================================================================== */
let allRecords = [];
let filteredRecords = [];
let currentPage = 1;
const PAGE_SIZE = 6;
let sortState = { key: "riskPriority", dir: "asc" };
let activeSummaryFilter = null; // 'sla' | 'critical' | 'pending' | 'closed' | null
let selectedRegion = ""; // '' = no region chosen yet (show selector), '__all__' = all regions, or a region code

// Main Status categories (from Data Definition sheet)
const statusStyle = {
  "Pending":       { cls: "badge-warning" },
  "In Progress":   { cls: "badge-info" },
  "RA":            { cls: "badge-info" },
  "Decom Path":    { cls: "badge-neutral" },
  "Out of Scope":  { cls: "badge-neutral" },
  "Others":        { cls: "badge-neutral" },
  "Closed":        { cls: "badge-success" }
};

// Risk Priority meta: 1 = most severe
const riskPriorityMeta = {
  1: { label: "1 \u2014 Critical", cls: "badge-danger" },
  2: { label: "2 \u2014 High",     cls: "badge-orange" },
  3: { label: "3 \u2014 Medium",   cls: "badge-warning" },
  4: { label: "4 \u2014 Low",      cls: "badge-info" },
  5: { label: "5 \u2014 Informational", cls: "badge-neutral" }
};

function slaBadge(sla) {
  let cls = "badge-success";
  if (sla === "Outside SLA") cls = "badge-danger";
  else if (sla === "Potential Fail") cls = "badge-orange";
  return `<span class="badge-status ${cls}"><span class="dot"></span>${escapeHtml(sla)}</span>`;
}

function slaCountdownText(record) {
  const days = record.slaDaysRemaining;
  if (days >= 0) {
    const cls = days <= 7 ? "is-soon" : "is-ok";
    return `<span class="days-left ${cls}">${days} day${days === 1 ? "" : "s"} left</span>`;
  }
  const overdue = Math.abs(days);
  return `<span class="days-left is-critical">Overdue by ${overdue} day${overdue === 1 ? "" : "s"}</span>`;
}

function riskBadge(priority) {
  const meta = riskPriorityMeta[priority] || { label: `${priority}`, cls: "badge-neutral" };
  return `<span class="badge-status ${meta.cls}"><span class="dot"></span>${meta.label}</span>`;
}

/* ==========================================================================
   DATA LOADING (swapped for a Power Automate call later)
   ========================================================================== */
function loadRecords() {
  allRecords = RAW_RECORDS.map((r, i) => {
    const daysRemaining = slaDaysRemaining(r);
    return {
      id: `rec-${i}`,
      country: extractCountry(r.application),
      region: extractRegion(r.application),
      sla: slaStatus(daysRemaining),
      slaDaysRemaining: daysRemaining,
      ...r
    };
  });
}

/* ==========================================================================
   HELPERS
   ========================================================================== */
function formatDate(dateStr) {
  if (!dateStr || dateStr === "\u2014" || dateStr === "TBD") return dateStr || "\u2014";
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function statusBadge(status) {
  const style = statusStyle[status] || { cls: "badge-neutral" };
  return `<span class="badge-status ${style.cls}"><span class="dot"></span>${escapeHtml(status)}</span>`;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function uniqueSorted(arr) {
  return [...new Set(arr)].sort((a, b) => String(a).localeCompare(String(b)));
}

/* ==========================================================================
   FILTER OPTIONS
   ========================================================================== */
function populateFilterOptions() {
  const riskSel = document.getElementById("filterRiskPriority");
  const slaSel = document.getElementById("filterSLA");
  const statusSel = document.getElementById("filterStatus");
  const qidSel = document.getElementById("filterQID");
  const serverSel = document.getElementById("filterServer");
  const regionSel = document.getElementById("filterRegion");
  const asmSel = document.getElementById("filterASM");
  const vulnSel = document.getElementById("filterVuln");
  const appSel = document.getElementById("filterApp");

  uniqueSorted(allRecords.map(r => r.riskPriority)).forEach(v => {
    const meta = riskPriorityMeta[v];
    riskSel.add(new Option(meta ? meta.label : v, v));
  });
  uniqueSorted(allRecords.map(r => r.sla)).forEach(v => slaSel.add(new Option(v, v)));
  uniqueSorted(allRecords.map(r => r.currentStatus)).forEach(v => statusSel.add(new Option(v, v)));
  uniqueSorted(allRecords.map(r => r.qid)).forEach(v => qidSel.add(new Option(v, v)));
  uniqueSorted(allRecords.map(r => r.assetQualys)).forEach(v => serverSel.add(new Option(v, v)));
  uniqueSorted(allRecords.map(r => r.region)).forEach(v => {
    const meta = REGION_META[v];
    regionSel.add(new Option(meta ? meta.label : v, v));
  });
  uniqueSorted(allRecords.map(r => r.asm)).forEach(v => asmSel.add(new Option(v, v)));
  uniqueSorted(allRecords.map(r => r.vulnerabilityName)).forEach(v => vulnSel.add(new Option(v, v)));
  uniqueSorted(allRecords.map(r => r.application)).forEach(v => appSel.add(new Option(v, v)));

  refreshCountryOptions();
}

// Country dropdown is scoped to whichever region is currently selected, so members
// never see country choices that would return zero rows for their region.
function refreshCountryOptions() {
  const countrySel = document.getElementById("filterCountry");
  const currentValue = countrySel.value;
  countrySel.innerHTML = '<option value="">All</option>';

  const scoped = (selectedRegion && selectedRegion !== "__all__")
    ? allRecords.filter(r => r.region === selectedRegion)
    : allRecords;

  uniqueSorted(scoped.map(r => r.country)).forEach(v => countrySel.add(new Option(v, v)));

  // Preserve the previous selection only if it's still a valid option.
  if ([...countrySel.options].some(o => o.value === currentValue)) {
    countrySel.value = currentValue;
  }
}

/* ==========================================================================
   SUMMARY CARDS
   ========================================================================== */
function computeSummary() {
  const total = allRecords.length;
  const critical = allRecords.filter(r => r.riskPriority <= 2 && r.currentStatus !== "Closed").length;
  const slaBreached = allRecords.filter(r => r.sla === "Outside SLA" && r.currentStatus !== "Closed").length;
  const pending = allRecords.filter(r => ["Pending", "In Progress"].includes(r.currentStatus)).length;
  const closed = allRecords.filter(r => r.currentStatus === "Closed").length;
  return { total, critical, slaBreached, pending, closed };
}

function renderSummary() {
  const s = computeSummary();
  const grid = document.getElementById("summaryGrid");
  const cards = [
    { key: null,       cls: "sc-total",    icon: "bi-collection",       value: s.total,       label: "Total Vulnerabilities" },
    { key: "critical", cls: "sc-expiring", icon: "bi-exclamation-triangle", value: s.critical, label: "Critical / High Risk" },
    { key: "sla",      cls: "sc-pending",  icon: "bi-hourglass-split",  value: s.slaBreached, label: "SLA Breached" },
    { key: "pending",  cls: "sc-feedback", icon: "bi-chat-square-text", value: s.pending,     label: "Pending / In Progress" },
    { key: "closed",   cls: "sc-resolved", icon: "bi-check-circle",     value: s.closed,      label: "Closed" }
  ];

  grid.innerHTML = cards.map(c => `
    <div class="summary-card ${c.cls} ${activeSummaryFilter === c.key ? 'is-active' : ''}" data-key="${c.key || ''}">
      <div class="sc-top">
        <span class="sc-icon"><i class="bi ${c.icon}"></i></span>
      </div>
      <div class="sc-value">${c.value}</div>
      <div class="sc-label">${c.label}</div>
    </div>
  `).join("");

  grid.querySelectorAll(".summary-card").forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.key || null;
      activeSummaryFilter = activeSummaryFilter === key ? null : key;
      currentPage = 1;
      applyFilters();
      renderSummary();
    });
  });
}

/* ==========================================================================
   FILTER + SEARCH + SORT PIPELINE
   ========================================================================== */
function applyFilters() {
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  const riskPriority = document.getElementById("filterRiskPriority").value;
  const sla = document.getElementById("filterSLA").value;
  const status = document.getElementById("filterStatus").value;
  const qid = document.getElementById("filterQID").value;
  const server = document.getElementById("filterServer").value;
  const country = document.getElementById("filterCountry").value;
  const asm = document.getElementById("filterASM").value;
  const vuln = document.getElementById("filterVuln").value;
  const app = document.getElementById("filterApp").value;
  const vulnCount = document.getElementById("filterVulnCount").value;

  // Count how many vulnerability records each application has, so the
  // "No. of Vulnerabilities" filter can isolate single vs. multiple entries.
  const appVulnCounts = {};
  allRecords.forEach(rec => {
    appVulnCounts[rec.application] = (appVulnCounts[rec.application] || 0) + 1;
  });

  filteredRecords = allRecords.filter(r => {
    if (selectedRegion && selectedRegion !== "__all__" && r.region !== selectedRegion) return false;
    if (vulnCount === "single" && appVulnCounts[r.application] !== 1) return false;
    if (vulnCount === "multiple" && appVulnCounts[r.application] <= 1) return false;
    if (riskPriority && String(r.riskPriority) !== riskPriority) return false;
    if (sla && r.sla !== sla) return false;
    if (status && r.currentStatus !== status) return false;
    if (qid && r.qid !== qid) return false;
    if (server && r.assetQualys !== server) return false;
    if (country && r.country !== country) return false;
    if (asm && r.asm !== asm) return false;
    if (vuln && r.vulnerabilityName !== vuln) return false;
    if (app && r.application !== app) return false;

    if (activeSummaryFilter === "critical" && !(r.riskPriority <= 2 && r.currentStatus !== "Closed")) return false;
    if (activeSummaryFilter === "sla" && !(r.sla === "Outside SLA" && r.currentStatus !== "Closed")) return false;
    if (activeSummaryFilter === "pending" && !["Pending", "In Progress"].includes(r.currentStatus)) return false;
    if (activeSummaryFilter === "closed" && r.currentStatus !== "Closed") return false;

    if (q) {
      const haystack = [
        r.application, r.vulnerabilityName, r.qid, r.assetQualys, r.bu, r.country,
        r.portfolioOwner, r.primaryAppOwner, r.responsibleCIO, r.ip,
        r.asm, r.l2Poc, r.l3Poc,
        r.currentStatus, r.previousStatus
      ].join(" ").toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  sortRecords();
  renderResultsArea();
}

function sortRecords() {
  const { key, dir } = sortState;
  filteredRecords.sort((a, b) => {
    let va = a[key], vb = b[key];
    if (typeof va === "string") va = va.toLowerCase();
    if (typeof vb === "string") vb = vb.toLowerCase();
    if (va < vb) return dir === "asc" ? -1 : 1;
    if (va > vb) return dir === "asc" ? 1 : -1;
    return 0;
  });
}

/* ==========================================================================
   REGION SELECTOR + GATING
   ========================================================================== */
function renderRegionSelectGrid() {
  const grid = document.getElementById("regionSelectGrid");
  const regionKeys = Object.keys(REGION_META);

  const cards = [
    {
      key: "__all__",
      label: "All Regions",
      sub: "View records across every region",
      icon: "bi-globe",
      count: allRecords.length
    },
    ...regionKeys.map(key => ({
      key,
      label: REGION_META[key].label,
      sub: REGION_META[key].sub,
      icon: REGION_META[key].icon,
      count: allRecords.filter(r => r.region === key).length
    }))
  ];

  grid.innerHTML = cards.map(c => `
    <button type="button" class="region-card" data-region="${c.key}">
      <span class="region-card-icon"><i class="bi ${c.icon}"></i></span>
      <span class="region-card-label">${escapeHtml(c.label)}</span>
      <span class="region-card-sub">${escapeHtml(c.sub)}</span>
      <span class="region-card-count">${c.count} record${c.count === 1 ? "" : "s"}</span>
    </button>
  `).join("");

  grid.querySelectorAll(".region-card").forEach(btn => {
    btn.addEventListener("click", () => selectRegion(btn.dataset.region));
  });
}

function selectRegion(regionKey) {
  selectedRegion = regionKey;
  document.getElementById("filterRegion").value = regionKey;
  // The Country dropdown is region-scoped, so refresh it and clear any now-invalid selection.
  document.getElementById("filterCountry").value = "";
  refreshCountryOptions();
  currentPage = 1;
  applyFilters();
}

function renderResultsArea() {
  const regionSelectCard = document.getElementById("regionSelectCard");
  const tableWrapper = document.getElementById("tableWrapper");
  const regionBanner = document.getElementById("regionBanner");
  const countEl = document.getElementById("resultsCount");

  if (!selectedRegion) {
    regionSelectCard.classList.remove("d-none");
    tableWrapper.classList.add("d-none");
    regionBanner.classList.add("d-none");
    countEl.textContent = "Select a region to begin";
    renderRegionSelectGrid();
    return;
  }

  regionSelectCard.classList.add("d-none");
  tableWrapper.classList.remove("d-none");
  regionBanner.classList.remove("d-none");

  const meta = selectedRegion === "__all__"
    ? { label: "All Regions" }
    : (REGION_META[selectedRegion] || { label: selectedRegion });
  document.getElementById("regionBannerName").textContent = meta.label;

  renderTable();
}

/* ==========================================================================
   TABLE RENDER
   ========================================================================== */
function renderTable() {
  const body = document.getElementById("recordsBody");
  const empty = document.getElementById("emptyState");
  const countEl = document.getElementById("resultsCount");
  const table = document.getElementById("recordsTable");

  countEl.textContent = `${filteredRecords.length} record${filteredRecords.length === 1 ? "" : "s"}`;

  if (filteredRecords.length === 0) {
    body.innerHTML = "";
    table.style.display = "none";
    empty.classList.remove("d-none");
    document.getElementById("paginationBar").style.visibility = "hidden";
    return;
  }
  table.style.display = "table";
  empty.classList.add("d-none");
  document.getElementById("paginationBar").style.visibility = "visible";

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filteredRecords.slice(start, start + PAGE_SIZE);

  body.innerHTML = pageItems.map(r => `
      <tr>
        <td class="cell-app">
          <span class="app-name">${escapeHtml(r.application)}</span>
        </td>
        <td class="cell-vuln">${escapeHtml(r.vulnerabilityName)}</td>
        <td class="cell-owner">
          <span class="owner-name">${escapeHtml(r.assetQualys)}</span>
        </td>
        <td class="cell-qid">${escapeHtml(r.qid)}</td>
        <td>${riskBadge(r.riskPriority)}</td>
        <td class="cell-sla">${slaBadge(r.sla)}${slaCountdownText(r)}</td>
        <td class="cell-status">
          ${statusBadge(r.currentStatus)}
          <span class="status-sub">Category: ${escapeHtml(r.statusCategory)}</span>
        </td>
        <td class="td-action">
          <div class="action-buttons">
            <button class="btn-details" data-id="${r.id}"><i class="bi bi-eye"></i> View</button>
            <button class="btn-page btn-download" data-id="${r.id}" title="Download record as text file"><i class="bi bi-download"></i></button>
          </div>
        </td>
      </tr>
    `).join("");

  body.querySelectorAll(".btn-details").forEach(btn => {
    btn.addEventListener("click", () => openDetail(btn.dataset.id));
  });
  body.querySelectorAll(".btn-download").forEach(btn => {
    btn.addEventListener("click", () => downloadRecord(btn.dataset.id));
  });

  document.getElementById("pageInfo").textContent = `Page ${currentPage} of ${totalPages}`;
  document.getElementById("prevPage").disabled = currentPage <= 1;
  document.getElementById("nextPage").disabled = currentPage >= totalPages;

  document.querySelectorAll(".records-table thead th[data-sort]").forEach(th => {
    th.querySelector(".sort-caret")?.remove();
    if (th.dataset.sort === sortState.key) {
      const caret = document.createElement("span");
      caret.className = "sort-caret";
      caret.innerHTML = sortState.dir === "asc" ? "\u25B2" : "\u25BC";
      th.appendChild(caret);
    }
  });
}

/* ==========================================================================
   ROW DOWNLOAD (exports every field of a record as a text file)
   ========================================================================== */
function downloadRecord(id) {
  const r = allRecords.find(x => x.id === id);
  if (!r) return;

  const regionLabel = (REGION_META[r.region] && REGION_META[r.region].label) || r.region;
  const val = (v) => (v === undefined || v === null || v === "") ? "\u2014" : v;
  const line = (label, value) => `${label}: ${val(value)}`;
  const divider = "-".repeat(60);

  const content = [
    "QUALYS VULNERABILITY RECORD",
    "=".repeat(60),
    line("Record ID", r.id),
    line("QID", r.qid),
    line("Application", r.application),
    "",
    "STATUS",
    divider,
    line("Previous Status", r.previousStatus),
    line("Current Status", r.currentStatus),
    line("Status Category", r.statusCategory),
    "",
    "VULNERABILITY",
    divider,
    line("Vulnerability Name", r.vulnerabilityName),
    line("Risk Priority", r.riskPriority),
    line("SLA", r.sla),
    line("SLA Days Remaining (negative = overdue)", r.slaDaysRemaining),
    line("Age (days)", r.age),
    line("Age Rolling Bucket", r.ageRolling),
    line("Vulnerability Status (Qualys)", r.assetStatus),
    line("Solution", r.solution),
    line("Results", r.results),
    "",
    "APPLICATION & OWNERSHIP",
    divider,
    line("Business Unit", r.bu),
    line("Country", r.country),
    line("Region", regionLabel),
    line("Portfolio", r.portfolio),
    line("Portfolio Owner", r.portfolioOwner),
    line("Primary App Owner(s)", r.primaryAppOwner),
    line("Responsible CIO", r.responsibleCIO),
    line("Production Support Manager", r.productionSupportManager),
    "",
    "SUPPORT CONTACTS",
    divider,
    line("ASM", r.asm),
    line("L2 PoC", r.l2Poc),
    line("L3 PoC", r.l3Poc),
    "",
    "ASSET & SCAN DETAIL",
    divider,
    line("Asset (Qualys)", r.assetQualys),
    line("Server Environment", r.serverEnvironment),
    line("Asset (ServiceNow)", r.assetServiceNow),
    line("Asset_QID", r.assetQID),
    line("Sys ID (ServiceNow)", r.sysIdServiceNow),
    line("Unique Record", r.uniqueRecord),
    line("IP Address", r.ip),
    line("Join Type Methodology", r.joinTypeMethodology),
    line("First Found Date", r.firstFoundDate),
    line("Last Found Time", r.lastFoundTime),
    line("LTR Indicator", r.ltrIndicator),
    line("Last Reopened Datetime", r.lastReopenedDatetime),
    line("# of Times Reopened", r.timesReopened),
    line("Patch Group", r.patchGroup),
    "",
    "REMEDIATION & DISPOSITION",
    divider,
    line("Disposition 1", r.disposition1),
    line("Disposition 2", r.disposition2),
    line("Disposition Detail", r.dispositionDetail),
    line("LTR ID", r.ltrId),
    line("LTR End Date", r.ltrEndDate),
    "",
    "=".repeat(60),
    `Exported: ${new Date().toISOString()}`
  ].join("\n");

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const safeName = `${r.qid || "record"}_${r.assetQualys || r.id}`.replace(/[^a-zA-Z0-9._-]+/g, "_");
  const a = document.createElement("a");
  a.href = url;
  a.download = `${safeName}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ==========================================================================
   DETAIL MODAL
   ========================================================================== */
function openDetail(id) {
  const r = allRecords.find(x => x.id === id);
  if (!r) return;

  document.getElementById("modalCertId").textContent = `QID ${r.qid}`;
  document.getElementById("modalAppTitle").textContent = r.application;

  document.getElementById("modalBody").innerHTML = `
    <div class="detail-status-row">
      <span class="flow-label">Status</span>
      ${statusBadge(r.previousStatus)}
      <i class="bi bi-arrow-right"></i>
      ${statusBadge(r.currentStatus)}
      <span style="margin-left:auto;">${riskBadge(r.riskPriority)}</span>
    </div>

    <div class="detail-section-title">Vulnerability</div>
    <div class="detail-grid">
      <div class="detail-item full">
        <div class="di-label">Vulnerability Name</div>
        <div class="di-value">${escapeHtml(r.vulnerabilityName)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">SLA</div>
        <div class="di-value">${slaBadge(r.sla)}${slaCountdownText(r)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Age</div>
        <div class="di-value">${r.age} days (${escapeHtml(r.ageRolling)})</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Vulnerability Status (Qualys)</div>
        <div class="di-value">${escapeHtml(r.assetStatus)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Status Category</div>
        <div class="di-value">${escapeHtml(r.statusCategory)}</div>
      </div>
      <div class="detail-item full">
        <div class="di-label">Solution</div>
        <div class="di-value">${escapeHtml(r.solution)}</div>
      </div>
      <div class="detail-item full">
        <div class="di-label">Results</div>
        <div class="di-value mono">${escapeHtml(r.results)}</div>
      </div>
    </div>

    <div class="detail-section-title">Application &amp; Ownership</div>
    <div class="detail-grid">
      <div class="detail-item">
        <div class="di-label">Business Unit</div>
        <div class="di-value">${escapeHtml(r.bu)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Country</div>
        <div class="di-value">${escapeHtml(r.country)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Portfolio</div>
        <div class="di-value">${escapeHtml(r.portfolio)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Portfolio Owner</div>
        <div class="di-value">${escapeHtml(r.portfolioOwner)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Primary App Owner(s)</div>
        <div class="di-value">${escapeHtml(r.primaryAppOwner)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Responsible CIO</div>
        <div class="di-value">${escapeHtml(r.responsibleCIO)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Production Support Manager</div>
        <div class="di-value">${escapeHtml(r.productionSupportManager)}</div>
      </div>
    </div>

    <div class="detail-section-title">Support Contacts</div>
    <div class="detail-grid">
      <div class="detail-item">
        <div class="di-label">ASM</div>
        <div class="di-value">${escapeHtml(r.asm)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">L2 PoC</div>
        <div class="di-value">${escapeHtml(r.l2Poc)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">L3 PoC</div>
        <div class="di-value">${escapeHtml(r.l3Poc)}</div>
      </div>
    </div>

    <div class="detail-section-title">Asset &amp; Scan Detail</div>
    <div class="detail-grid">
      <div class="detail-item">
        <div class="di-label">Asset (Qualys)</div>
        <div class="di-value mono">${escapeHtml(r.assetQualys)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Server Environment</div>
        <div class="di-value">${escapeHtml(r.serverEnvironment)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Asset (ServiceNow)</div>
        <div class="di-value mono">${escapeHtml(r.assetServiceNow)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Asset_QID</div>
        <div class="di-value mono">${escapeHtml(r.assetQID)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Sys ID (ServiceNow)</div>
        <div class="di-value mono">${escapeHtml(r.sysIdServiceNow)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">IP Address</div>
        <div class="di-value mono">${escapeHtml(r.ip)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Join Type Methodology</div>
        <div class="di-value">${escapeHtml(r.joinTypeMethodology)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">First Found Date</div>
        <div class="di-value">${formatDate(r.firstFoundDate)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Last Found Time</div>
        <div class="di-value">${escapeHtml(r.lastFoundTime)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">LTR Indicator</div>
        <div class="di-value">${escapeHtml(r.ltrIndicator)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Last Reopened Datetime</div>
        <div class="di-value">${escapeHtml(r.lastReopenedDatetime)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label"># of Times Reopened</div>
        <div class="di-value">${r.timesReopened}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Patch Group</div>
        <div class="di-value">${escapeHtml(r.patchGroup)}</div>
      </div>
    </div>

    <div class="detail-section-title">Remediation &amp; Disposition</div>
    <div class="detail-grid">
      <div class="detail-item">
        <div class="di-label">Disposition 1</div>
        <div class="di-value">${escapeHtml(r.disposition1)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">Disposition 2</div>
        <div class="di-value">${escapeHtml(r.disposition2)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">LTR ID</div>
        <div class="di-value">${escapeHtml(r.ltrId)}</div>
      </div>
      <div class="detail-item">
        <div class="di-label">LTR End Date</div>
        <div class="di-value">${formatDate(r.ltrEndDate)}</div>
      </div>
      <div class="detail-item full">
        <div class="di-label">Disposition Detail</div>
        <div class="di-value">${escapeHtml(r.dispositionDetail)}</div>
      </div>
    </div>
  `;

  const modal = new bootstrap.Modal(document.getElementById("detailModal"));
  modal.show();
}

/* ==========================================================================
   EVENTS
   ========================================================================== */
function wireEvents() {
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");

  searchInput.addEventListener("input", () => {
    searchClear.classList.toggle("d-none", searchInput.value.length === 0);
    currentPage = 1;
    applyFilters();
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.classList.add("d-none");
    currentPage = 1;
    applyFilters();
  });

  document.getElementById("filterRegion").addEventListener("change", (e) => {
    selectRegion(e.target.value);
  });
  document.getElementById("changeRegionBtn").addEventListener("click", () => {
    selectRegion("");
  });

  ["filterRiskPriority", "filterSLA", "filterStatus", "filterQID", "filterServer", "filterCountry", "filterASM", "filterVuln", "filterApp", "filterVulnCount"].forEach(id => {
    document.getElementById(id).addEventListener("change", () => {
      currentPage = 1;
      applyFilters();
    });
  });

  // Clears search + filters only. The selected region is left untouched —
  // switching regions is done via the Region dropdown or "Change region".
  const clearFiltersKeepRegion = () => {
    searchInput.value = "";
    searchClear.classList.add("d-none");
    ["filterRiskPriority", "filterSLA", "filterStatus", "filterQID", "filterServer", "filterCountry", "filterASM", "filterVuln", "filterApp", "filterVulnCount"].forEach(id => {
      document.getElementById(id).value = "";
    });
    activeSummaryFilter = null;
    refreshCountryOptions();
    currentPage = 1;
    applyFilters();
    renderSummary();
  };

  document.getElementById("resetFilters").addEventListener("click", clearFiltersKeepRegion);
  document.getElementById("emptyResetBtn").addEventListener("click", clearFiltersKeepRegion);

  document.querySelectorAll(".records-table thead th[data-sort]").forEach(th => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      if (sortState.key === key) {
        sortState.dir = sortState.dir === "asc" ? "desc" : "asc";
      } else {
        sortState = { key, dir: "asc" };
      }
      sortRecords();
      renderTable();
    });
  });

  document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) { currentPage--; renderTable(); }
  });
  document.getElementById("nextPage").addEventListener("click", () => {
    currentPage++; renderTable();
  });

  document.getElementById("refreshBtn").addEventListener("click", (e) => {
    e.currentTarget.classList.add("spinning");
    document.getElementById("syncTime").textContent = "just now";
    setTimeout(() => e.currentTarget.classList.remove("spinning"), 700);
    // Placeholder: this is where Power Automate refresh call would be triggered.
    applyFilters();
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  loadRecords();
  populateFilterOptions();
  renderSummary();
  wireEvents();
  applyFilters();
});
