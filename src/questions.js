const questions = [
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Rapid Access Memory"],
    answer: "Random Access Memory"
  },
  {
    question: "Which language is used for React?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
  },
  {
    question: "Which data structure follows LIFO?",
    options: ["Queue", "Array", "Stack", "Tree"],
    answer: "Stack"
  },
  {
    question: "Which SQL command is used to retrieve data?",
    options: ["GET", "FETCH", "SELECT", "SHOW"],
    answer: "SELECT"
  },
  {
    question: "Which key uniquely identifies a record?",
    options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"],
    answer: "Primary Key"
  },
  {
    question: "HTML stands for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "Home Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "CSS is used for?",
    options: ["Database", "Styling", "Programming", "Networking"],
    answer: "Styling"
  },
  {
    question: "Which protocol is used for web browsing?",
    options: ["FTP", "SMTP", "HTTP", "TCP"],
    answer: "HTTP"
  },
  {
    question: "What is the default port of HTTP?",
    options: ["21", "25", "80", "443"],
    answer: "80"
  },
  {
    question: "Which layer handles routing?",
    options: ["Application", "Transport", "Network", "Physical"],
    answer: "Network"
  },
  {
    question: "Which OS is open source?",
    options: ["Windows", "Linux", "macOS", "DOS"],
    answer: "Linux"
  },
  {
    question: "What is the brain of the computer?",
    options: ["RAM", "Hard Disk", "CPU", "Motherboard"],
    answer: "CPU"
  },
  {
    question: "Python is a?",
    options: ["Compiler", "Programming Language", "OS", "Database"],
    answer: "Programming Language"
  },
  {
    question: "Which symbol is used for comments in Python?",
    options: ["//", "#", "/*", "--"],
    answer: "#"
  },
  {
    question: "Which company developed Java?",
    options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
    answer: "Sun Microsystems"
  },
  {
    question: "What is JVM?",
    options: ["Java Virtual Machine", "Java Variable Method", "Joint Virtual Machine", "Java Vendor Machine"],
    answer: "Java Virtual Machine"
  },
  {
    question: "Which sorting algorithm is fastest on average?",
    options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"],
    answer: "Quick Sort"
  },
  {
    question: "Binary search works on?",
    options: ["Sorted Array", "Unsorted Array", "Queue", "Graph"],
    answer: "Sorted Array"
  },
  {
    question: "What is the full form of DBMS?",
    options: ["Database Management System", "Data Backup Management System", "Digital Base Management System", "Database Method System"],
    answer: "Database Management System"
  },
  {
    question: "Which SQL command removes a table?",
    options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
    answer: "DROP"
  },
  {
    question: "Which protocol is used to transfer files?",
    options: ["HTTP", "FTP", "SMTP", "SSH"],
    answer: "FTP"
  },
  {
    question: "What is the default port of HTTPS?",
    options: ["80", "21", "443", "25"],
    answer: "443"
  },
  {
    question: "Which device connects networks together?",
    options: ["Switch", "Router", "Hub", "Repeater"],
    answer: "Router"
  },{
    question: "Which data structure uses nodes and pointers?",
    options: ["Array", "Linked List", "Stack", "Queue"],
    answer: "Linked List"
  },
  {
    question: "Which traversal visits Root-Left-Right?",
    options: ["Inorder", "Postorder", "Preorder", "Level Order"],
    answer: "Preorder"
  },
  {
    question: "Which traversal visits Left-Root-Right?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    answer: "Inorder"
  },
  {
    question: "What is the time complexity of Binary Search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    answer: "O(log n)"
  },
  {
    question: "Which database is NoSQL?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    answer: "MongoDB"
  },
  {
    question: "Which command is used to insert data in SQL?",
    options: ["ADD", "INSERT", "PUT", "APPEND"],
    answer: "INSERT"
  },
  {
    question: "Which keyword is used to create a table?",
    options: ["MAKE TABLE", "NEW TABLE", "CREATE TABLE", "ADD TABLE"],
    answer: "CREATE TABLE"
  },
  {
    question: "What does LAN stand for?",
    options: ["Large Area Network", "Local Area Network", "Long Area Network", "Link Area Network"],
    answer: "Local Area Network"
  },
  {
    question: "What does WAN stand for?",
    options: ["Wide Area Network", "Wireless Area Network", "Web Area Network", "World Access Network"],
    answer: "Wide Area Network"
  },
  {
    question: "Which protocol sends emails?",
    options: ["HTTP", "FTP", "SMTP", "TCP"],
    answer: "SMTP"
  },
  {
    question: "Which protocol receives emails?",
    options: ["POP3", "FTP", "HTTP", "SSH"],
    answer: "POP3"
  },
  {
    question: "Which language is primarily used for Android development?",
    options: ["Python", "Kotlin", "PHP", "Ruby"],
    answer: "Kotlin"
  },
  {
    question: "Which symbol is used for single-line comments in Java?",
    options: ["#", "//", "/*", "--"],
    answer: "//"
  },
  {
    question: "Which loop executes at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while"
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["inherits", "extends", "implements", "super"],
    answer: "extends"
  },
  {
    question: "What is the extension of Java source files?",
    options: [".class", ".java", ".jar", ".exe"],
    answer: ".java"
  },
  {
    question: "Which operator is used for equality check in JavaScript?",
    options: ["=", "==", "===", "!="],
    answer: "==="
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "IBM"],
    answer: "Netscape"
  },
  {
    question: "Which tag is used for hyperlinks in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "Which CSS property changes text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    answer: "color"
  },
  {
    question: "Which React hook is used for state management?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState"
  },
  {
    question: "Firebase is mainly a?",
    options: ["Programming Language", "Database Platform", "Operating System", "Compiler"],
    answer: "Database Platform"
  },
  {
    question: "Git is used for?",
    options: ["Networking", "Version Control", "Database", "Design"],
    answer: "Version Control"
  },
  {
    question: "GitHub is a?",
    options: ["IDE", "Version Control Hosting Platform", "Compiler", "Database"],
    answer: "Version Control Hosting Platform"
  },
  {
    question: "Which command uploads local commits to GitHub?",
    options: ["git add", "git commit", "git push", "git clone"],
    answer: "git push"
  }
];

export default questions;
