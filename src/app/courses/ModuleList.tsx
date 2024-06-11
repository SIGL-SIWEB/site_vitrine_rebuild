export const moduleList = [
    {
      title: 'Leadership & Management',
      courses: [
        {
          name: 'CEC : Coaching and communication',
          teacher: [{
            name: 'Christophe Andreu',
            role: 'Corporate Coach / Independent Consultant / Trainer | ACC',
          
          },],
          obj : 'Objectives',
          objectives: ['Coaching workshops', 'Set of methodologies to help better understand the different aspects of communication'],
        },
        {
          name: 'COIN : Interpersonnal communication',
          teacher: [{
            name: 'Anne Dewilde',
            role: 'Head of EPITA\'s Innovation Laboratory | EPITA',
          }],
          obj : 'Objectives',
          objectives: ['Learn to know yourself', 'Develop your know-how-to-be', 'Understand the key concepts of communication and teamwork'],
        },
        {
          name: 'MOAE : Information System Project Management',
          teacher: [{
            name: 'Guillaume Barbier',
            role: 'Project Management Officer | Imerys',
          }],
          obj : 'Objectives',
          objectives: ['Apprehend and understand Information System from a company\'s Point of view',
            'Identify roles, missions and positioning of Project Management',
            'Define responsibilities between Project Management\'s business units',
            'Being Able to conduct an organizational study for IT products / services'
          ],
        },
        {
          name: 'OPCO : Personal Organization and Communication',
          teacher: [{
            name: 'Christophe Andreu',
            role: 'Executive Coach ICF PCC',
          }],
          obj : 'Objectives',
          objectives: ['Being able to manage time, and efficiently apply a personal organization',
            'Being able to reinforce professional efficiency using a better communication',
            'Being able to manage its own professional project'
          ],
        },
        {
          name: 'OPDI : Information Systems Steering and Organization',
          teacher: [{
            name: 'Laurence Jumeaux',
            role: 'Vice-President Business Technology Innovation | Capgemini',
          }],
          obj : 'Objectives',
          objectives: ['Understand digital impact on Information Systems',
            'Improve IT System Department\'s performance',
            'Build a target infrastructure',
            'Evaluate IT Projects\' Return on Investment',
            'Understand IT System Department Cost Reduction Levers'
          ],
        },
      ],
    },
    {
      title: 'Cloud & Architecture',
      courses: [
        {
          name: 'ARCL : Cloud Architecture',
          teacher: [{
            name: 'Yannick Neff',
            role: 'Group Cloud & Infrastructure Director | SUEZ',
          }],
          obj : 'Objectives',
          objectives: ['Validate skills acquisition by building an hybrid cloud and a cloud-based application',
            'Understand key notions of Cloud Computing',
            'Test an open-source Cloud solution'
          ],
          project: '/project#ARCL',
        },
        {
          name: 'CONT : Containerization',
          teacher: [{
            name: 'Nicolas Drouin',
            role: 'Global Cloud Security Architect at Pluxee',
          },
          {
            name: 'Lucas Boisserie',
            role: 'Lead Senior SRE at Jump',
          }],
          obj : 'Objectives',
          objectives: ['Understand container technology and architecture',
            'Discover the good practices of containers and their ecosystem',
            'Know how to use and integrate containers in a continuous integration and deployment chain'
          ],
        },
        {
          name: 'DATA : Data',
          teacher: [{
            name: 'Franck Brechet',
            role: 'Partner | Tasmane',
          }],
          obj : 'Objectives',
          objectives: ['Understand the typologies of data, current uses and new uses',
            'Discover the Master data management',
            'Secure the Data',
            'Organization of the company around the data'
          ],
        },
        {
          name: 'SOAR : Solution Architecture',
          teacher: [{
            name: 'Frédéric Fourdrinier',
            role: 'Director World Wide Hybrid Cloud Practice | Hewlett Packard Enterprise',
          },
          {
            name: 'Yannick Neff',
            role: 'Group Cloud & Infrastructure Director | SUEZ',
          }],
          obj : 'Objectives',
          objectives: ['Understand and practice the implementation of a Solution Architecture',
            'Understand key components of infrastructure'
          ],
        },
        {
          name: 'IS Urbanization',
          teacher: [{
            name: 'Jean-Christophe Ferry',
            role: 'Owner & Co-founder | ENIOKA',
          }],
          obj : 'Objectives',
          objectives: ['Discover Information Systems reality in a company',
            'Understand Middleware base that supports it',
            'Understanding Integration issues within the Information System',
            'Grasp the concept of innovation within the IS'
          ],
          project: '/project#UBSI',
        },
      ],
    },
  
    {
      title: 'Mobility & Applications',
      courses: [
        {
          name: 'ACOO : Object-Oriented Analysis and Design',
          teacher: [{
            name: 'Robin Duval',
            role: 'Agile Coach | Groupe Renault',
          }],
          obj : 'Objectives',
          objectives: ['Toolbox for other SIGL courses',
            'Business integration',
            'Learn key concepts of UML and Object-oriented development',
            'Practice several conception approaches'
          ],
          project: '/project#ACOO',
        },
        {
          name: 'DEVO : DevOps',
          teacher: [{
            name: 'Lucas Boisserie',
            role: 'DevOps Consultant | Octo Technology',
          }],
          obj : 'Objectives',
          objectives: ['Understand DevOps added value against classical development methods',
            'Understand the DevOps transformation within a project'
          ],
        },
        {
          name: 'DSO : DevSecOps',
          teacher: [{
            name: 'Nicolas Drouin',
            role: 'Global Cloud Security Architect at Pluxee',
          }],
          obj : 'Objectives',
          objectives: ['Understand the concepts and areas of security within an information system',
            'Define a safety approach in a plan project technical and organizational',
            'Understand new security paradigms in cloud and container architectures'
          ],
        },
        {
          name: 'Agile Methodology',
          teacher: [{
            name: 'Robin Duval',
            role: 'Agile Coach | Groupe Renault',
          }],
          obj : 'Objectives',
          objectives: ['General concepts of development productivity\'s issues',
            'Experiment tools associated with Agile\'s planning and development methods',
            'Face issues such as repriorization and silver bullet'
          ],
          project: '/project#MEPA',
        },
        {
          name: 'NLPF : New Programming Languages & Frameworks',
          teacher: [{
            name: 'Robin Duval',
            role: 'Agile Coach | Groupe Renault',
          }],
          obj : 'Objectives',
          objectives: ['Have a culture of new languages and frameworks',
            'Integration in a company',
            'Carry out a comparison and analysis process'
          ],
        },
        {
          name: 'SOCRA : Software Architecture',
          teacher: [{
            name: 'Lucas Boisserie',
            role: 'DevOps Consultant | Octo Technology',
          },
          { 
            name: 'Florent Fauchille',
            role: 'Software Engineer | bettermarks GmbH',
          }],
          obj : 'Objectives',
          objectives: ['Acquire key concepts and principles of Software Architecture',
            'To put the architecture and the architect into the organization',
            'Know how to analyze the relevance of software technologies for needs',
          ],
          project: '/project#SOCRA',
        },
      ],
    },
  
    {
      title: 'Digitalization & Transformation',
      courses: [
        {
          name: 'ACCC : Management of Change',
          teacher: [{
            name: 'Jérémy Gredat',
            role: 'Olivier Girard\'s Chief of Staff | Accenture France',
          }],
          obj : 'Objectives',
          objectives: ['Understad what\'s at stake during a transformation',
            'Learn key notions of Change Management'
          ],
        },
        {
          name: 'INNO : Innovation',
          teacher: [{
            name: 'Antoine Tallon',
            role: 'Talent & leadership consulting | Korn Ferry',
          }],
          obj : 'Objectives',
          objectives: ['Use creative and innovative methods for problem solving',
            'Apply method to study cases'
          ],
        },
        {
          name: 'METH : Methods',
          teacher: [{
            name: 'Hervé Durand',
            role: 'Head of Digital Foundry | Airbus',
          }],
          obj : 'Objectives',
          objectives: ['Learn and practice several development and project management methods',
            'Discover conceptual models and their applications in a business context',
            'Take part in simulations'
          ],
        },
        {
          name: 'PIT : IT Perspectives',
          teacher: [{
            name: 'Frédéric Fourdrinier',
            role: 'Director World Wide Hybrid Cloud Practice | Hewlett Packard Enterprise',
          },
          {
            name: 'Hervé Durand',
            role: 'Head of Digital Foundry | Airbus',
          }],
          obj : 'Objectives',
          objectives: ['Undestand and control the evolution of the IT market',
            'Solve an enterprise problem by designing and creating an IoT solution',
            'Develop synthesis, analysis and innovation skills'
          ],
          project: '/project#PIT',
        },
        {
          name: 'PMDE : Project : Operating Instructions',
          teacher: [{
            name: 'Yassine Chertouk',
            role: 'Product manager | Fintech Blockchain',
          }],
          obj : 'Objectives',
          objectives: ['Learn how to approach issues using dichotomy',
            'Identify concrete solutions',
            'Deliver counsel mission',
          ],
        },
        {
          name: 'SDI : Sustainability Driven Innovation',
          teacher: [{
            name: 'Julien Guisset',
            role: 'Co-founder & Manager | EXALT',
          }],
          obj : 'Objectives',
          objectives: ['Integrate the reality principle into the world we are living in and the awareness for the issues our planet is facing : climate deregulation, peak oil, ressources depletion...',
            'Promote a transition toward a low carbon economy and the possibility to act individually or collectively in the context of IT profession',
            'Make it easier to take action in IT: apply a Sustainability-Driven software development approach to Product management, front / back development, and Infrastructure operation',
          ],
        },
      ],
    },
];