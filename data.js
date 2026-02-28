/**
 * Profile data for Lin Qi's academic homepage.
 * ============================================
 * To update your homepage, edit this file and push to GitHub.
 * The site will auto-deploy via GitHub Actions.
 *
 * Sections you can update:
 *   - personalInfo   : basic contact & title info
 *   - profile        : biography paragraphs (zh / en)
 *   - education      : degrees
 *   - researchAreas  : research directions with images
 *   - news           : latest updates shown on the home section
 *   - publications   : journal & conference papers
 *   - patents        : invention patents
 *   - projects       : funded research projects
 *   - teaching       : courses taught
 *   - recruitment    : enrollment info (zh / en)
 *   - labImages      : lab environment gallery
 */

window.PROFILE = {

  /* ───────────── Personal Info ───────────── */
  personalInfo: {
    name_zh: "齐林",
    name_en: "Lin Qi",
    title_zh: "副教授 / 博士生导师 / 硕士生导师",
    title_en: "Associate Professor / Ph.D. & Master's Supervisor",
    dept_zh: "东北大学 医学与生物信息工程学院",
    dept_en: "College of Medicine and Biological Information Engineering, Northeastern University",
    email: "qilin@bmie.neu.edu.cn",
    phone: "024-83656229",
    mobile: "15840153893",
    address_zh: "辽宁省沈阳市浑南区创新路195号，东北大学浑南校区，生科楼",
    address_en: "College of MBIE, Northeastern University, Shenyang, Liaoning, P.R. China 110169",
    avatar: "assets/images/profile.png",
    googleScholar: "",
    orcid: ""
  },

  /* ───────────── Profile / Bio ───────────── */
  profile: {
    zh: [
      "齐林于清华大学医学院生物医学工程系获学士/硕士学位（本硕连读）（师从国家杰青/长江学者/IEEE Fellow/AIMBE Fellow/IAMBE Fellow 白净教授），于香港中文大学电子工程系获博士学位（师从加拿大工程院院士/香港工程师学院院士/IEEE Fellow 孟庆虎教授），后于香港中文大学从事博士后研究，现任东北大学医学与生物信息工程学院副教授，硕士生和博士生导师。",
      "齐林博士一直致力于基于数据驱动和智能分析的生理系统功能分析、生理信号及医学影像的智能分析处理、医疗机器人等方面的研究，在 IJNBE、IEEE TRO、IEEE JBHI、IEEE TIM、IEEE TCE、Inf. Fusion、BSPC、CVPR、IEEE ROBIO 等国际知名期刊和会议发表 SCI/EI 检索论文40余篇，曾获得 ROBIO 国际会议最佳学生论文奖及最佳论文提名奖，担任多个国际期刊和知名国际学术会议 IEEE ICRA、IEEE ROBIO 的审稿人和组委会委员，并担任中国医工整合联盟副理事，沈阳市D级人才。",
      "主持和参与国家重点研发计划项目、国家卫生健康委员会辅助循环重点实验室开放性课题、中央高校基本科研业务费专项资金项目、辽宁省重点研发项目和面上项目、国家自然科学基金项目。课题组与中国科学院深圳先进技术研究院、中国医科大学、中山大学、哈尔滨工业大学（深圳）、南方科技大学和香港中文大学有着深入的科研合作与联合人才培养。"
    ],
    en: [
      "Lin Qi received the B.S. and M.S. degrees in Biomedical Engineering from the School of Medicine, Tsinghua University. He obtained the Ph.D. in Electronic Engineering from the Chinese University of Hong Kong. He is now an associate professor in the College of Medicine and Biological Information Engineering, Northeastern University, China. He serves as a supervisor for master's and Ph.D. students.",
      "He has published more than 40 papers in premier international journals and conferences including IJNBE, IEEE TRO, IEEE JBHI, IEEE TIM, IEEE TCE, Information Fusion, BSPC, CVPR, and IEEE ROBIO. He received the Best Student Paper Award and Best Paper Nomination at the ROBIO conference, and serves as a reviewer and committee member for IEEE ICRA, IEEE ROBIO, and other leading venues.",
      "He leads and participates in multiple national and provincial research projects, including the National Key R&D Program of China. His group maintains active collaboration with the Shenzhen Institutes of Advanced Technology (CAS), China Medical University, Sun Yat-sen University, HIT Shenzhen, SUSTech, and CUHK."
    ]
  },

  /* ───────────── Education ───────────── */
  education: [
    { school_zh: "香港中文大学", school_en: "The Chinese University of Hong Kong", major_zh: "电子工程", major_en: "Electronic Engineering", degree_zh: "博士", degree_en: "Ph.D." },
    { school_zh: "清华大学", school_en: "Tsinghua University", major_zh: "生物医学工程", major_en: "Biomedical Engineering", degree_zh: "硕士", degree_en: "M.Sc.Eng" },
    { school_zh: "清华大学", school_en: "Tsinghua University", major_zh: "生物医学工程", major_en: "Biomedical Engineering", degree_zh: "学士", degree_en: "B.Sc.Eng" }
  ],

  /* ───────────── Research Areas ───────────── */
  researchAreas: [
    {
      title_zh: "基于数据驱动和智能分析的生理系统功能分析",
      title_en: "Functional Analysis of Physiological Systems Based on Data-Driven and Intelligent Analysis",
      image: "assets/mirror/img_0005.png",
      desc_zh: "利用数据驱动方法与深度学习技术，对心血管、呼吸等生理系统进行功能建模与分析。",
      desc_en: "Using data-driven methods and deep learning for functional modeling and analysis of cardiovascular and respiratory physiological systems."
    },
    {
      title_zh: "生理信号与医学影像智能分析处理",
      title_en: "Intelligent Processing and Analysis for Multimodal Medical Data",
      image: "assets/mirror/img_0006.jpg",
      desc_zh: "基于深度学习与人工智能的生理信号（心电、脉搏波等）及医学影像（MRI、CT等）智能处理。",
      desc_en: "Deep learning-based intelligent processing of physiological signals (ECG, pulse waves) and medical images (MRI, CT)."
    },
    {
      title_zh: "基于计算机视觉的非接触式人体生物信息识别和分析",
      title_en: "Non-contact Human Biometrics Recognition Based on Computer Vision",
      image: "assets/mirror/img_0007.png",
      desc_zh: "利用面部视频实现非接触式心率、血压、血氧等生理参数估计。",
      desc_en: "Contactless estimation of heart rate, blood pressure, and SpO2 from facial video using computer vision."
    },
    {
      title_zh: "面向健康监测的医疗机器人应用",
      title_en: "Medical Robotics for Home Healthcare",
      image: "assets/mirror/img_0008.jpg",
      desc_zh: "研究面向家庭健康监测及微创手术的医疗机器人关键技术。",
      desc_en: "Research on medical robotics for home health monitoring and minimally invasive surgery."
    }
  ],

  /* ───────────── News / Updates ───────────── */
  news: [
    { date: "2026.02", content_zh: "课题组论文被国际计算机视觉领域顶级会议 CVPR 2026（CCF-A）接受，祝贺宇龙同学！", content_en: "Paper accepted by CVPR 2026 (CCF-A). Congratulations to Yulong!" },
    { date: "2025.12", content_zh: "祝贺子怡同学荣获2025年度「东北大学优秀研究生」", content_en: "Congratulations to Ziyi for receiving the NEU Outstanding Graduate Student Award 2025." },
    { date: "2025.12", content_zh: "祝贺佳朋同学荣获「东北大学优秀硕士毕业论文」", content_en: "Congratulations to Jiapeng for winning the NEU Outstanding Master's Thesis Award." },
    { date: "2025.11", content_zh: "祝贺宇龙同学荣获2025年度研究生国家奖学金", content_en: "Congratulations to Yulong for receiving the National Graduate Scholarship 2025." },
    { date: "2025.09", content_zh: "祝贺王焯同学获得全美知名UA大学CSE全额奖学金赴美攻读博士学位", content_en: "Congratulations to Wang Zhuo for receiving a full CSE Ph.D. scholarship at the University of Arizona." },
    { date: "2025.07", content_zh: "祝贺子怡和宇龙同学于2025年「第十届全国大学生生物医学工程创新设计竞赛」中荣获全国一等奖！", content_en: "Congratulations to Ziyi and Yulong for winning the National First Prize at the 10th National BME Innovation Design Competition!" },
    { date: "2025.06", content_zh: "恭喜佳朋、奕谋、铭骏、周杰、舒月、奕嘉同学顺利毕业，分别入职/升学至河北医科大学、中芯国际、中国科技大学、北京医智影、辽宁省公务员、上海交通大学等。", content_en: "Congratulations to Jiapeng, Yimou, Mingjun, Jie Zhou, Shuyue, and Yijia on their graduation and placement at top institutions and companies." }
  ],

  /* ───────────── Publications ───────────── */
  publications: [
    /* ---- 2026 ---- */
    {
      authors: "Xinyuan Jiao, Qihe Gao, <b>Lin Qi*</b>, Lisheng Xu, and Wei Qian",
      title: "AI-powered Measurement of Blood Pressure and Oxygen Saturation based on Camera: Advancements, Challenges and Future Prospects",
      journal: "IEEE Transactions on Instrumentation and Measurement",
      year: 2026,
      doi: "10.1109/TIM.2026.3664375",
      tags: ["JCR Q1", "IF=6.0"],
      type: "journal"
    },
    /* ---- 2025 ---- */
    {
      authors: "Yimou Lv, Xinyuan Jiao, <b>Lin Qi*</b>, Qi Zhang, Lisheng Xu and Wei Qian",
      title: "CoDPN: An Unsupervised Collaborative Dual-path Network For Contactless Remote Physiological Measurement",
      journal: "IEEE Journal of Biomedical and Health Informatics",
      year: 2025,
      doi: "10.1109/JBHI.2025.3610265",
      tags: ["JCR Q1", "IF=7.7"],
      type: "journal"
    },
    {
      authors: "Jie Zhou, Yulong Shi, <b>Lin Qi*</b>, Xue Jiang, Shouliang Qi, Wei Qian",
      title: "A3-DualUD: Source-free unsupervised domain adaptation via anatomical anchor alignment and dual-path uncertainty denoising for cross-modality medical image segmentation",
      journal: "Computer Methods and Programs in Biomedicine",
      year: 2025,
      volume: "271",
      pages: "109017",
      doi: "10.1016/j.cmpb.2025.109017",
      tags: ["JCR Q1", "IF=5.4"],
      type: "journal"
    },
    {
      authors: "Jiapeng Li, Yijia Chen, Shijie Li, Lisheng Xu, Wei Qian, Shuai Tian, <b>Lin Qi*</b>",
      title: "TIG-UDA: Generative unsupervised domain adaptation with transformer-embedded invariance for cross-modality medical image segmentation",
      journal: "Biomedical Signal Processing and Control",
      year: 2025,
      volume: "106",
      pages: "107722",
      doi: "10.1016/j.bspc.2025.107722",
      tags: ["JCR Q1", "IF=5.1"],
      type: "journal"
    },
    {
      authors: "关舒月, 吕奕谋, 李永春, 夏宬智, <b>齐林*</b>, 徐礼胜",
      title: "基于面部视频的非接触式心率测量的深度学习方法综述",
      journal: "生物医学工程学杂志",
      year: 2025,
      volume: "42(1)",
      pages: "197-204",
      doi: "10.7507/1001-5515.200405057",
      tags: ["EI"],
      type: "journal"
    },
    {
      authors: "Jiapeng Li, Yifan Zhang, Lisheng Xu, Yudong Yao, <b>Lin Qi*</b>",
      title: "ISGAN: Unsupervised Domain Adaptation with Improved Symmetric GAN for Cross-Modality Multi-organ Segmentation",
      journal: "IEEE Journal of Biomedical and Health Informatics",
      year: 2025,
      volume: "29(6)",
      pages: "3874-3885",
      doi: "10.1109/JBHI.2024.3507092",
      tags: ["JCR Q1", "IF=7.7"],
      type: "journal"
    },
    {
      authors: "Bailin Hou, Yimou Lv, <b>Lin Qi*</b> and Yongchun Li",
      title: "TCNTransNet: A Semi-Supervised Temporal-Spatial Fusion Framework for Heart Rate Estimation From Camera Video",
      journal: "IEEE Transactions on Consumer Electronics",
      year: 2025,
      volume: "71(2)",
      pages: "5837-5846",
      doi: "10.1109/TCE.2024.3424338",
      tags: ["JCR Q1", "IF=10.9"],
      type: "journal"
    },
    /* ---- 2024 ---- */
    {
      authors: "Yanrui Liu, Chunlong Xu, <b>Lin Qi*</b>, Yongchun Li",
      title: "A robust non-contact heart rate estimation from facial video based on a non-parametric signal extraction model",
      journal: "Biomedical Signal Processing and Control",
      year: 2024,
      volume: "93",
      pages: "106186",
      doi: "10.1016/j.bspc.2024.106186",
      tags: ["JCR Q1", "IF=5.1"],
      type: "journal"
    },
    {
      authors: "Qi Zhang, Ya-hui Zhang, Li-ling Hao*, Xuan-hao Xu, Gui-fu Wu, Ling Lin, Xiu-li Xu*, <b>Lin Qi*</b>, Shuai Tian*",
      title: "A numerical study on the siphonic effect of enhanced external counterpulsation at lower extremities with a coupled 0D-1D closed-loop personalized hemodynamics model",
      journal: "Journal of Biomechanics",
      year: 2024,
      volume: "166",
      pages: "112057",
      doi: "10.1016/j.jbiomech.2024.112057",
      tags: ["JCR Q3", "IF=2.7"],
      type: "journal"
    },
    {
      authors: "Yijia Chen, Jiapeng Li, Haoze Yu, <b>Lin Qi*</b>, Yongchun Li",
      title: "Source-Free Unsupervised Domain Adaptation Fundus Image Segmentation via Entropy Optimization and Anatomical Priors",
      journal: "Procedia Computer Science",
      year: 2024,
      volume: "250",
      pages: "182-187",
      doi: "10.1016/j.procs.2024.11.023",
      tags: ["EI"],
      type: "conference"
    },
    {
      authors: "Yifan Zhang, Yonghui Wang, Lisheng Xu, Yudong Yao, Wei Qian, and <b>Lin Qi*</b>",
      title: "ST-GAN: A Swin Transformer-Based Generative Adversarial Network for Unsupervised Domain Adaptation of Cross-Modality Cardiac Segmentation",
      journal: "IEEE Journal of Biomedical and Health Informatics",
      year: 2024,
      volume: "28(2)",
      pages: "893-904",
      doi: "10.1109/JBHI.2023.3336965",
      tags: ["JCR Q1", "IF=7.7"],
      type: "journal"
    },
    /* ---- 2023 ---- */
    {
      authors: "Yonghui Wang, Yifan Zhang, Lisheng Xu, Shouliang Qi, Yudong Yao, Wei Qian, Stephen E. Greenwald, <b>Lin Qi*</b>",
      title: "TSP-UDANet: two-stage progressive unsupervised domain adaptation network for automated cross-modality cardiac segmentation",
      journal: "Neural Computing and Applications",
      year: 2023,
      volume: "35(30)",
      pages: "22189-22207",
      doi: "10.1007/s00521-023-08939-6",
      tags: ["JCR Q2", "IF=6.0"],
      type: "journal"
    },
    {
      authors: "Jiapeng Li, Yimou Lv, Lisheng Xu and <b>Lin Qi*</b>",
      title: "An Unsupervised Domain Adaptation Model Based on Multi-Level Joint Alignment for Multi-Modal Cardiac Image Segmentation",
      journal: "Procedia Computer Science",
      year: 2023,
      volume: "226",
      pages: "106-112",
      doi: "10.1016/j.procs.2023.10.643",
      tags: ["EI"],
      type: "conference"
    },
    {
      authors: "Lisheng Xu, Haoran Zhang, Jiaole Wang, Ang Li, Shuang Song, Hongliang Ren*, <b>Lin Qi*</b>, Jason J. Gu*, Max Q.-H. Meng*",
      title: "Information loss challenges in surgical navigation systems: From information fusion to AI-based approaches",
      journal: "Information Fusion",
      year: 2023,
      volume: "92",
      pages: "13-36",
      doi: "10.1016/j.inffus.2022.11.015",
      tags: ["JCR Q1", "IF=18.6"],
      type: "journal"
    },
    /* ---- 2022 ---- */
    {
      authors: "Lisheng Xu, Shuran Zhou, Lu Wang, Yang Yao, Liling Hao, Lin Qi, Yudong Yao, Hongguang Han, Ramakrishna Mukkamala, and Stephen E. Greenwald",
      title: "Improving the accuracy and robustness of carotid-femoral pulse wave velocity measurement using a simplified tube-load model",
      journal: "Scientific Reports",
      year: 2022,
      volume: "12(1)",
      pages: "5147",
      doi: "",
      tags: [],
      type: "journal"
    },
    {
      authors: "Jiapeng Li, Xuehao Cao, Lisheng Xu, <b>Lin Qi*</b>",
      title: "Finite Element Analysis for the Effects of the Descending Aorta Tortuosity on Aortic Hemodynamics",
      journal: "Procedia Computer Science",
      year: 2022,
      volume: "209",
      pages: "148-156",
      doi: "10.1016/j.procs.2022.10.109",
      tags: ["EI"],
      type: "conference"
    },
    {
      authors: "Qi Zhang, Yahui Zhang, Liling Hao, Yujia Zhong, Kunlin Wu, Zhuo Wang, Shuai Tian, Lin Qi, Guifu Wu",
      title: "A personalized 0D-1D model of cardiovascular system for the hemodynamic simulation of enhanced external counterpulsation",
      journal: "Computer Methods and Programs in Biomedicine",
      year: 2022,
      volume: "227",
      pages: "107224",
      doi: "",
      tags: [],
      type: "journal"
    },
    {
      authors: "Na Pang, Wen Meng, Yongsheng Zhong, Xiufang Liu, Zhengrong Lin, Tianxu Guo, Hui Zhou, Lin Qi, Long Meng, Lisheng Xu, and Lili Niu",
      title: "Ultrasound Deep Brain Stimulation Modulates Body Temperature in Mice",
      journal: "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
      year: 2022,
      volume: "30",
      pages: "1851-1857",
      doi: "10.1109/TNSRE.2022.3188516",
      tags: [],
      type: "journal"
    },
    /* ---- 2021 ---- */
    {
      authors: "<b>Lin Qi</b>, Wenbo Zhu, Wei Qian, Lisheng Xu, Ying He, and Feihu Zhao",
      title: "The Performance of a Spherical-tip Catheter for Stent Post-dilation: Finite Element Analysis and Experiments",
      journal: "Frontiers in Physiology",
      year: 2021,
      volume: "12",
      pages: "1305",
      doi: "10.3389/fphys.2021.734565",
      tags: ["JCR Q1", "IF=4.75"],
      type: "journal"
    },
    {
      authors: "Boyuan Zhang, Hengkang Li, Lisheng Xu, <b>Lin Qi*</b>, Yudong Yao and Stephen E. Greenwald",
      title: "Non-contact Heart Rate Measurement using a Webcam, based on Joint Blind Source Separation and a Skin Reflection Model: for a Wide Range of Imaging Conditions",
      journal: "Journal of Sensors",
      year: 2021,
      volume: "2021",
      pages: "9995871",
      doi: "10.1155/2021/9995871",
      tags: [],
      type: "journal"
    },
    {
      authors: "Junjie Zou, Shasha Yi, Lili Niu, Hui Zhou, Zhengrong Lin, Yibo Wang, Xiaowei Huang, Wen Meng, Yanwu Guo*, <b>Lin Qi*</b>, Long Meng*",
      title: "Neuroprotective Effect of Ultrasound Neuromodulation on Kainic Acid-Induced Epilepsy in Mice",
      journal: "IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control",
      year: 2021,
      volume: "68(9)",
      pages: "3006-3016",
      doi: "10.1109/TUFFC.2021.3079628",
      tags: ["JCR Q1", "IF=3.7"],
      type: "journal"
    },
    /* ---- 2020 ---- */
    {
      authors: "Lili Niu, Yanchen Guo, Zhengrong Lin, Zhe Shi, Tianyuan Bian, Lin Qi, Long Meng, Anthony A. Grace, Hairong Zheng and Ti-Fei Yuan",
      title: "Noninvasive ultrasound deep brain stimulation of nucleus accumbens induces behavioral avoidance",
      journal: "Science China Life Sciences",
      year: 2020,
      volume: "63",
      pages: "1328-1336",
      doi: "10.1007/s11427-019-1616-6",
      tags: [],
      type: "journal"
    },
    {
      authors: "Yahui Zhang, Lin Qi, Frans Van De Vosse, Chenglin Du, Yudong Yao, Jianhang Du, Guifu Wu, and Lisheng Xu",
      title: "Recovery Responses of Central Hemodynamics in Basketball Athletes and Controls after the Bruce Test",
      journal: "Frontiers in Physiology",
      year: 2020,
      volume: "11",
      pages: "1335",
      doi: "",
      tags: [],
      type: "journal"
    },
    {
      authors: "<b>Lin Qi</b>, Haoran Zhang, Xuehao Cao, Xuyang Lyu, Lisheng Xu, Benqiang Yang, Yangming Ou",
      title: "Multi-Scale Feature Fusion Convolutional Neural Network for Concurrent Segmentation of Left Ventricle and Myocardium in Cardiac MR Images",
      journal: "Journal of Medical Imaging and Health Informatics",
      year: 2020,
      volume: "10(5)",
      pages: "1023-1032",
      doi: "10.1166/jmihi.2020.3005",
      tags: [],
      type: "journal"
    },
    {
      authors: "<b>齐林</b>, 张舶远, 于慧东, 徐礼胜",
      title: "4种基于rPPG的非接触式心率估计方法的性能评估",
      journal: "医疗卫生装备",
      year: 2020,
      volume: "41(12)",
      pages: "21-25+47",
      doi: "10.19745/j.1003-8868.2020268",
      tags: ["中国科技核心"],
      type: "journal"
    },
    /* ---- 2019 ---- */
    {
      authors: "<b>Lin Qi</b>, Haoran Zhang, Wenjun Tan, Shouliang Qi, Lisheng Xu, Yudong Yao, and Wei Qian",
      title: "Cascaded Conditional Generative Adversarial Networks with Multi-Scale Attention Fusion for Automated Bi-Ventricle Segmentation in Cardiac MRI",
      journal: "IEEE Access",
      year: 2019,
      volume: "7",
      pages: "172305-172320",
      doi: "10.1109/ACCESS.2019.2956210",
      tags: ["JCR Q2", "IF=4.0"],
      type: "journal"
    },
    {
      authors: "Hanguang Xiao, Lin Qi, Lisheng Xu, Decai Li, Bo Hu, Pengdong Zhao, Huijiao Ren, and Jinfeng Huang",
      title: "Estimation of wave reflection in aorta from radial pulse waveform by artificial neural network: a numerical study",
      journal: "Computer Methods and Programs in Biomedicine",
      year: 2019,
      volume: "182",
      pages: "105064",
      doi: "",
      tags: [],
      type: "journal"
    },
    {
      authors: "<b>Lin Qi</b>, Huidong Yu, Lisheng Xu, Ramadhani Selemani Mpanda and Stephen E. Greenwald",
      title: "Robust Heart Rate Estimation from Facial Video Using Project_ICA",
      journal: "Physiological Measurement",
      year: 2019,
      volume: "40(8)",
      pages: "085007",
      doi: "10.1088/1361-6579/ab2c9f",
      tags: ["JCR Q2", "IF=2.7"],
      type: "journal"
    },
    {
      authors: "Junxin Chen, Jiazhu Xing, Leo Yu Zhang, and <b>Lin Qi*</b>",
      title: "Compressed sensing for electrocardiogram acquisition in wireless body sensor network: a comparative analysis",
      journal: "International Journal of Distributed Sensor Networks",
      year: 2019,
      volume: "15(7)",
      pages: "1-11",
      doi: "10.1177/1550147719864884",
      tags: [],
      type: "journal"
    },
    /* ---- 2018 ---- */
    {
      authors: "Yahui Zhang<sup>#</sup>, <b>Lin Qi<sup>#</sup></b>, Lisheng Xu, Xingguo Sun, Wenyan Liu, Shuran Zhou, Frans van de Vosse, and Stephen E. Greenwald",
      title: "Effects of exercise modalities on central hemodynamics, arterial stiffness and cardiac function in cardiovascular disease: Systematic review and meta-analysis of randomized controlled trials",
      journal: "PLoS ONE",
      year: 2018,
      volume: "13(7)",
      pages: "e0200829",
      doi: "",
      tags: ["co-first"],
      type: "journal"
    },
    /* ---- 2016 ---- */
    {
      authors: "Liao Wu, Jiaole Wang, Lin Qi, Keyu Wu, Hongliang Ren, and Max Q-H. Meng",
      title: "Simultaneous Hand–Eye, Tool–Flange, and Robot–Robot Calibration for Comanipulation by Solving the AXB=YCZ Problem",
      journal: "IEEE Transactions on Robotics",
      year: 2016,
      volume: "32(2)",
      pages: "413-428",
      doi: "10.1109/TRO.2016.2530079",
      tags: [],
      type: "journal"
    },
    /* ---- 2014 ---- */
    {
      authors: "<b>Lin Qi</b>, Xiaona Wang, and Max Q-H. Meng",
      title: "3D Finite Element Modeling and Analysis of Dynamic Force in Bone Drilling for Orthopedic Surgery",
      journal: "International Journal for Numerical Methods in Biomedical Engineering",
      year: 2014,
      volume: "30",
      pages: "845-856",
      doi: "10.1002/cnm.2631",
      tags: ["JCR Q2", "IF=2.5"],
      type: "journal"
    },
    /* ---- Conference Papers ---- */
    {
      authors: "Min Liu, Lisheng Xu, and <b>Lin Qi*</b>",
      title: "Simulation and Kinematic Modelling of a Wire-driven Active Interventional Catheter for PCI",
      journal: "IEEE ROBIO 2019, Dali, China",
      year: 2019,
      pages: "2771-2776",
      doi: "",
      tags: ["EI"],
      type: "conference"
    },
    {
      authors: "Haoran Zhang, Xuehao Cao, Lisheng Xu, and <b>Lin Qi*</b>",
      title: "Conditional Convolution Generative Adversarial Network for Bi-ventricle Segmentation in Cardiac MR Images",
      journal: "ISICDM 2019, Xi'an, China",
      year: 2019,
      pages: "118-122",
      doi: "",
      tags: ["EI"],
      type: "conference"
    },
    {
      authors: "Shuo Zhao, Haoran Zhang, Dongyang Wang, Lisheng Xu, and <b>Lin Qi*</b>",
      title: "Noninvasive Prediction of Pulmonary Hypertension Based on Finite Element Analysis and Machine Learning",
      journal: "IEEE ICIA 2018, Wuyishan, China",
      year: 2018,
      pages: "790-795",
      doi: "",
      tags: ["EI"],
      type: "conference"
    }
  ],

  /* ───────────── Patents ───────────── */
  patents: [
    { inventors: "齐林，阎程霖，于明洋，赵京瑞", title: "一种驾驶员酒驾以及疲劳驾驶的检测方法、装置及存储介质", number: "ZL202111082202.1", status: "granted" },
    { inventors: "齐林，刘敏，朱文博，邓斌，徐礼胜", title: "一种尖端基于环形柔性臂的可变刚度的血管介入导管", number: "201910524669.3", status: "filed" },
    { inventors: "齐林，刘敏，吕玉超，朱文博", title: "一种基于线驱动的可变刚度的血管介入导管", number: "ZL201821130377.9", status: "granted" },
    { inventors: "齐林，晏宝恩，徐礼胜，庄家烁", title: "一种基于智能手机的多功能生理信号发生器", number: "ZL201810294721.6", status: "granted" },
    { inventors: "徐礼胜，张良钰，齐林，郭增智，王璐", title: "一种心电轴6导联错接检测系统及方法", number: "ZL201610290064.9", status: "granted" }
  ],

  /* ───────────── Research Projects ───────────── */
  projects: [
    { name_zh: "辽宁省重点研发项目：面向监所讯问过程的智能监测预警关键技术研发与示范", name_en: "Liaoning Key R&D: Intelligent Monitoring and Early Warning for Interrogation Processes", id: "2024JH2/102500076", funding: "30万", role_zh: "主持人", role_en: "PI", period: "2024-" },
    { name_zh: "辽宁省沈阳市「揭榜挂帅」项目：人工智能类脑情感识别分析技术研究", name_en: "Shenyang 'Open Competition': AI Brain-inspired Emotion Recognition", id: "21-104-1-24", funding: "158万", role_zh: "主要参与人", role_en: "Co-PI", period: "2021-" },
    { name_zh: "辽宁省自然科学基金计划面上项目：基于多模态生理信号分析与建模的EECP治疗糖尿病足的疗效研究", name_en: "NSFC Liaoning: EECP Treatment for Diabetic Foot via Multimodal Physiological Modeling", id: "2021-MS-087", funding: "5万", role_zh: "主持人", role_en: "PI", period: "2021-2023" },
    { name_zh: "国家重点研发计划项目：基于体外反搏技术平台的循环系统智能化康复辅具研发", name_en: "National Key R&D: Intelligent Circulation Rehabilitation Platform Based on EECP", id: "2020YFC2004400", funding: "521万", role_zh: "子课题负责人", role_en: "Co-PI", period: "2020-2023" },
    { name_zh: "国家卫生健康委员会辅助循环重点实验室开放性课题：基于外周生理多尺度建模分析的体外反搏治疗糖尿病足疗效研究", name_en: "NHC Key Lab Open Grant: EECP Treatment for Diabetic Foot via Peripheral Modeling", id: "cvclab201901", funding: "6万", role_zh: "主持人", role_en: "PI", period: "2020-2021" },
    { name_zh: "国家自然科学基金：基于多模态数据与多耦合模型的肺动脉高压无创检测关键技术研究", name_en: "NSFC: Non-invasive PAH Detection via Multimodal Data and Multi-coupled Models", id: "61773110", funding: "64万", role_zh: "主要参与者", role_en: "Co-PI", period: "2018-2021" },
    { name_zh: "企业课题：大动脉易损斑块力学特性及其周围血流动力学改变的建模与仿真", name_en: "Industry Grant: Modeling Vulnerable Plaque Mechanics and Hemodynamics", id: "", funding: "10万", role_zh: "主持人", role_en: "PI", period: "2018-2021" },
    { name_zh: "中央高校基本科研业务费项目（重大创新项目）：基于大数据智能分析的精准肿瘤诊疗模式探索", name_en: "Fundamental Research (Key): Precision Tumor Diagnosis via Big Data Analytics", id: "N172008008", funding: "100万", role_zh: "主要参与者", role_en: "Co-PI", period: "2018-2021" },
    { name_zh: "中央高校基本科研业务费项目：用于微创外科手术中光学定位信息缺失的补偿机理及关键技术研究", name_en: "Fundamental Research: Optical Tracking Compensation for Minimally Invasive Surgery", id: "N171904009", funding: "12万", role_zh: "主持人", role_en: "PI", period: "2018-2020" },
    { name_zh: "辽宁省自然科学基金计划重点项目：机器人辅助脊柱手术钻削操作的术前仿真评估研究", name_en: "Liaoning NSF (Key): Pre-operative Simulation for Robotic Spine Surgery", id: "20170520180", funding: "10万", role_zh: "主持人", role_en: "PI", period: "2017-2020" }
  ],

  /* ───────────── Teaching ───────────── */
  teaching: [
    { course_zh: "可穿戴健康电子技术（双语）", course_en: "Wearable Health Electronics (Bilingual)", semester_zh: "春学期", semester_en: "Spring", hours: 16, credits: 1.0 },
    { course_zh: "生物医学信息检测与处理（双语）", course_en: "Biomedical Information Detection & Processing (Bilingual)", semester_zh: "春学期", semester_en: "Spring", hours: 16, credits: 1.0 },
    { course_zh: "智能手术导航与医疗机器人（双语）", course_en: "Intelligent Surgical Navigation & Medical Robotics (Bilingual)", semester_zh: "春学期", semester_en: "Spring", hours: 16, credits: 1.0 },
    { course_zh: "生物医学传感器与测量（双语）", course_en: "Biomedical Sensors & Measurement (Bilingual)", semester_zh: "秋学期", semester_en: "Autumn", hours: 32, credits: 2.0 },
    { course_zh: "生物医学电子学及仪器", course_en: "Biomedical Electronics & Instruments", semester_zh: "春学期", semester_en: "Spring", hours: 64, credits: 4.0 }
  ],

  /* ───────────── Recruitment ───────────── */
  recruitment: {
    zh: [
      "招收研究生（学硕/专硕/博士）",
      "课题组注重培养学生的科研能力及综合素质，全过程鼓励和促进学生的全面成长。课题组已形成良好的科研氛围并提供先进的实验环境，鼓励学生发表高水平论文及其他科研成果。指导的研究生获得「东北大学优秀硕士学位论文」、指导留学生获得「东北大学外国留学生成绩优秀奖」，指导研究生毕业后多到国内外知名医疗企业和互联网企业工作。",
      "课题组与中国科学院深圳先进技术研究院、中国医科大学、中山大学、哈尔滨工业大学、山东大学、香港中文大学有着深入的科研合作与联合人才培养，已推荐多名优秀毕业生到国内外知名高校继续深造。",
      "现招收2026级博士、硕士研究生，欢迎感兴趣的同学邮件联系！"
    ],
    en: [
      "Recruiting Graduate Students (Master's / Ph.D.)",
      "Our group emphasizes both research capability and personal growth. We foster a strong research culture, provide advanced lab resources, and encourage high-quality publications. Our graduates have won NEU Outstanding Master's Thesis awards and secured positions at leading medical technology and Internet companies.",
      "We maintain active collaborations with SIAT (CAS), China Medical University, Sun Yat-sen University, HIT, Shandong University, and CUHK, and have recommended outstanding graduates to top universities worldwide.",
      "We are currently recruiting Ph.D. and Master's students for the 2026 cohort. Interested candidates are welcome to contact us via email!"
    ]
  },

  /* ───────────── Lab Gallery ───────────── */
  labImages: [
    { src: "assets/mirror/img_0009.jpg", caption_zh: "实验室环境", caption_en: "Lab Environment" },
    { src: "assets/mirror/img_0010.jpg", caption_zh: "实验室环境", caption_en: "Lab Environment" },
    { src: "assets/mirror/img_0011.jpg", caption_zh: "实验室环境", caption_en: "Lab Environment" },
    { src: "assets/mirror/img_0012.jpg", caption_zh: "实验设备", caption_en: "Lab Equipment" },
    { src: "assets/mirror/img_0013.png", caption_zh: "学生科研活动", caption_en: "Student Research Activities" },
    { src: "assets/mirror/img_0014.png", caption_zh: "学生科研活动", caption_en: "Student Research Activities" }
  ],

  /* ───────────── Teacher Gallery (教师风采) ───────────── */
  teacherGallery: [
    {
      src: "assets/mirror/img_0018.jpg",
      caption_zh: "在EMBC学术交流",
      caption_en: "Academic Exchange at EMBC",
      desc_zh: "参加国际生物医学工程会议（EMBC）学术交流",
      desc_en: "Attending the International Conference on Engineering in Medicine and Biology (EMBC)"
    },
    {
      src: "assets/mirror/img_0019.jpg",
      caption_zh: "MIT学术交流",
      caption_en: "Academic Visit to MIT",
      desc_zh: "赴美国麻省理工学院（MIT）进行学术交流访问",
      desc_en: "Academic visit to the Massachusetts Institute of Technology (MIT)"
    },
    {
      src: "assets/mirror/img_0020.jpg",
      caption_zh: "哈佛医学院交流",
      caption_en: "Visit to Harvard Medical School",
      desc_zh: "赴哈佛医学院进行学术交流访问",
      desc_en: "Academic visit to Harvard Medical School"
    }
  ]

};
