export const projects = [
  {
    id: "fba-llm",
    title: "FBA-LLM",
    bullets: [
      "Constrains LLM outputs to structured product data to prevent hallucinated business decisions",
      "Builds a unified facts pipeline from product metrics and customer reviews",
      "Enforces guarded reasoning with validation to ensure all outputs are evidence-backed"
  ],
    overview:
      "FBA-LLM is a decision support system for Amazon product research that prioritizes reliability over generation. Instead of allowing the model to freely speculate, the system constrains outputs to structured evidence derived from product metrics and customer reviews.",
    problem:
      "LLMs can generate convincing but incorrect business insights when used for product research. Amazon sellers rely on noisy, unstructured data like reviews, making it easy to draw false conclusions without grounded analysis.",
    approach:
      "Built a structured facts pipeline that ingests product metrics (CSV), reviews (TXT), and optional visual inputs into a unified context block. The system restricts the LLM to reasoning only over this evidence and applies guardrails to prevent unsupported claims, enforce schema consistency, and validate outputs. This turns the system into a constrained decision engine rather than a free-form generator.",
    techStack: ["Python", "Claude API", "GROQ API", "LangChain", "FastAPI", "React"],
    github: "https://github.com/tvarnnn/FBA-LLM-GUI",
  },
  {
    id: "finance-advisor",
    title: "Finance Advisor",
    bullets: [
      "Parses raw bank statements into structured transaction data with automated categorization",
      "Detects anomalies using statistical methods and Isolation Forest models",
      "Uses LLM tool-calling to dynamically retrieve real financial data and prevent fabricated responses"
    ],
    overview:
      "A local-first financial analysis system that converts raw bank statements into structured insights and enables grounded AI queries over real transaction data.",
    problem:
      "Personal finance tools either rely on manual tracking or generate generic advice without context. Raw bank data is messy, inconsistent, and difficult to analyze without a structured pipeline, and LLMs can produce misleading answers without access to real data.",
    approach:
      "Built a pipeline that parses PDF bank statements, cleans and categorizes transactions, and computes spending analytics. Combined statistical anomaly detection with machine learning (Isolation Forest). Instead of injecting static context, implemented a tool-calling architecture where the LLM dynamically retrieves only the necessary financial data per query, ensuring all responses are grounded in real user data.",
    techStack: ["Python", "FastAPI", "SQLite", "pdfplumber", "scikit-learn", "NumPy", "Groq API", "React", "Recharts"],
    github: "(coming soon)",
  },
  {
    id: "computer-vision-system",
    title: "Computer Vision System",
    bullets: [
      "Tracks people and objects over time using YOLOv8 and ByteTrack with persistent IDs",
      "Extracts motion features and interaction events from pose estimation and object proximity",
      "Learns behavior patterns via clustering and predicts actions (e.g., object pickup) in real time"
    ],
    overview:
      "A real-time computer vision system that models human-object interactions and learns behavioral patterns from video streams.",
    problem:
      "Object detection alone doesn’t capture behavior. Understanding how people interact with objects requires tracking, motion analysis, and temporal modeling across frames rather than isolated predictions.",
    approach:
      "Built a multi-stage pipeline combining detection (YOLOv8), tracking (ByteTrack), pose estimation, and motion feature extraction. Interaction events are logged and processed through a state machine, then clustered to identify recurring behavior patterns. A RandomForest model is trained on motion data to predict actions such as object pickup in real time.",
    techStack: ["Python", "YOLOv8", "ByteTrack", "MediaPipe", "OpenCV", "CLIP", "scikit-learn"],
    github: "(coming soon)",
  },
  {
    id: "nexus-cli",
    title: "NEXUS (CLI Agent)",
    bullets: [
      "LLM agent that dynamically discovers and executes tools over a local codebase.",
      "Integrates multiple MCP servers (filesystem, search, RAG) into a unified tool interface.",
      "Supports controlled execution modes (manual, confirmation, auto) for safe tool usage.",
    ],
    overview:
      "A command-line coding assistant built as part of a team project, using an agent loop to reason over tasks, execute tools, and iteratively refine results.",
    problem:
      "Most coding assistants generate suggestions but lack the ability to interact with real environments. Bridging reasoning with tool execution requires structured orchestration and safe integration with external tools.",
    approach:
      "Built an agent loop that alternates between reasoning, tool execution, and observation. Integrated multiple MCP servers (filesystem, external search, and local RAG) into a unified interface, enabling the agent to dynamically discover and invoke tools during execution while maintaining controlled interaction modes.",
    techStack: ["Python", "Groq API", "Ollama", "MCP", "ChromaDB"],
    github: "(coming soon)",
  },
  {
    id: "ml-visualizer",
    title: "ML Visualizer",
    bullets: [
      "Interactive playground for exploring how machine learning models learn in real time",
      "Visualizes decision boundaries, optimization paths, and training dynamics across algorithms",
      "Includes multiple modules (loss landscapes, clustering, neural networks, RL) for hands-on experimentation"
    ],
    overview:
      "ML Visualizer is an interactive playground for exploring how machine learning algorithms behave during training. Originally built to better understand concepts from my coursework, it evolved into a tool for experimenting with models and visualizing learning dynamics in real time.",
    problem:
      "Understanding how machine learning models learn is difficult from static diagrams or theory alone. Concepts like optimization, decision boundaries, and overfitting require visual, interactive feedback to build intuition.",
    approach:
      "Built a modular system using FastAPI and Gradio to serve interactive visualizations. Each module simulates a different ML concept — including optimization paths, clustering behavior, and neural network training — with real-time updates driven by NumPy-based implementations.",
    techStack: ["Python", "FastAPI", "Gradio", "NumPy", "Plotly", "scikit-learn"],
    github: "https://github.com/tvarnnn/Gradient_Visualizer",
    demo: "https://huggingface.co/spaces/tvarn/ML-Visualizer",
  },
  {
    id: "notebooklm-clone",
    title: "NotebookLM Clone",
    bullets: [
      "Document-grounded Q&A system with citation-backed responses over uploaded sources",
      "Supports multi-format ingestion (PDF, TXT, URLs) with chunking and vector retrieval",
      "Generates artifacts such as summaries, quizzes, and podcast-style transcripts"
    ],
    overview:
      "A self-hostable document intelligence system inspired by NotebookLM. Users upload sources, organize them into notebooks, and interact through a chat interface with grounded, citation-backed responses.",
    problem:
      "Many document-based AI tools are locked to proprietary platforms or lack flexibility for custom workflows. Users need a system that can ingest diverse sources, maintain context, and generate reliable outputs with traceable citations.",
    approach:
      "Built a modular RAG pipeline that parses documents, chunks text with overlap, and stores embeddings in a vector database. Queries trigger retrieval of relevant chunks, which are passed to the LLM with strict grounding instructions to prevent hallucination. The system supports artifact generation (reports, quizzes, transcripts) and organizes data through a notebook-based storage structure.",
    techStack: ["Python", "LangChain", "ChromaDB", "Groq API", "Gradio"],
    github: "https://github.com/tvarnnn/NotebookLM",
    demo: "https://huggingface.co/spaces/Tvarn3/NotebookLM",
  },
  {
    id: "lastfm-dashboard",
    title: "Last.fm Dashboard",
    bullets: [
      "Processes and analyzes large-scale listening data (~95k+ tracks) from the Last.fm API",
      "Builds interactive dashboards for artist trends, listening patterns, and discovery timelines",
      "Transforms raw scrobble data into structured insights with time-based aggregation"
    ],
    overview:
      "An interactive data analysis dashboard for exploring personal listening habits using Last.fm data. Transforms raw scrobble history into structured insights across time, artists, and listening patterns.",
    problem:
      "Raw listening data from APIs is difficult to interpret without aggregation and visualization. Understanding patterns like listening habits, artist discovery, and trends over time requires structured analysis.",
    approach:
      "Fetched and cached scrobble data from the Last.fm API, then built a pipeline to clean and aggregate listening behavior. Developed a modular Shiny dashboard with views for artists, albums, tracks, and historical trends, enabling interactive drill-down exploration.",
    techStack: ["R", "Shiny", "dplyr", "ggplot2", "plotly", "Last.fm API"],
    github: "https://github.com/tvarnnn/Last.fm-Project",
  },
  {
    id: "RL-Stock Trader",
    title: "Reinforcement Learning Stock Trader",
    bullets: [
      "Built a multi-stock trading environment where a DQN agent learns portfolio-level allocation strategies",
      "Designed a risk-adjusted reward function to balance returns and exposure across assets",
      "Implemented stable training with replay buffers and target networks, evaluating performance via net worth over time",
    ],
    overview:
    "A deep reinforcement learning system where a DQN agent learns trading strategies across multiple stocks. The agent interacts with a custom environment and is trained to maximize portfolio net worth over time.",
    problem:
    "Most RL trading projects operate on a single asset and optimize for short-term reward, which doesn’t reflect real portfolio behavior. Financial markets are noisy, non-stationary, and require balancing risk across multiple assets rather than maximizing isolated gains.",
    approach:
    "Built a custom multi-stock environment where the agent makes allocation decisions across assets at each timestep. Designed a reward function that incorporates both returns and risk exposure to encourage stable portfolio growth.\n" +
        "\n" +
        "Implemented a DQN agent with replay buffers and a target network to stabilize training. Evaluated performance using train/test splits and net worth progression over time.",
    techStack: ["Python", "PyTorch (DQN)", "Gymnasium (environment)", "Pandas", "Matplotlib", "yFinance"],
    github: "https://github.com/tvarnnn/RL-Stock-Trader",
  }
];
