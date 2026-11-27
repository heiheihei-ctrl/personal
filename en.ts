import type { Project } from './types';

export type ProjectEn = Pick<Project, 'title' | 'description' | 'tags' | 'summary' | 'implementation'>;

/**
 * English content for every case study.
 * Chinese stays in constants.tsx / projectSummaries.ts, so the two languages
 * can be edited independently without touching layout code.
 */
export const EN_PROJECTS: Record<string, ProjectEn> = {
  'formade-sports': {
    title: 'Formade Sports Equipment Store',
    description: `🏀 A Shopify storefront for Formade, a sports equipment brand covering basketball, football, volleyball, American football and pickleball. The site connects brand storytelling, collection browsing and product detail into one clear purchase path.

🎨 Visual direction:
• Black and white base with gold announcement bars, category blocks and brand marks
• Full-bleed court photography and close-up material shots that highlight performance
• Condensed bold headlines, generous whitespace and a tidy product grid

🛍️ Pages and features:
• Home page combines hero, brand intro, best-seller tabs, reviews, brand story and journal
• Sport-based collection entries, with a basketball section split into competition, training and custom series
• Size-based shopping entry, grouped product lists and horizontal browsing
• Product pages with thumbnail gallery, size and quantity selection, stock hints, add-to-cart and express checkout
• Material highlights, in-page navigation and related product recommendations
• Custom gear, bundle offers, newsletter and brand content entries

🎯 Outcome: turns sport-driven browsing into a structured path from category to product to checkout.`,
    tags: ['Shopify', 'Sports gear', 'Brand visual', 'Collection browsing', 'Product detail'],
    summary: {
      problem: 'A multi-sport brand needed one clear shopping path',
      responsibility: 'Brand, collection and product template customization',
      techStack: ['Shopify', 'Product gallery', 'Collection navigation'],
      result: 'Unified brand story, category browsing and checkout',
    },
    implementation: [
      'Built the home page around court photography, collection tabs, reviews and brand story to match the competitive sports identity.',
      'Organized products by sport and added a basketball section with competition, training and custom sub-collections.',
      'Designed the product page around gallery, size, stock, add-to-cart and express checkout, with related product recommendations.',
    ],
  },

  'packaging-workshop': {
    title: 'Packaging Workshop · 3D Box Preview',
    description: `A flat packaging artwork is hard to judge before it is printed. Packaging Workshop turns a 2D dieline into a box you can rotate, resize and re-skin in the browser.

Core features:
• 2D / 3D side by side: inspect cut lines and folds while watching the folded box
• Custom dimensions: width, height, depth and tuck flaps, or start from a preset
• Artwork replacement: upload a design and preview it on the box
• Fold animation: scrub from flat sheet to standing box to closed lid
• Free camera: drag to rotate, scroll to zoom, double-click to reset
• SVG export: download the dieline for further design work

Built as a fast, single-purpose tool for packaging exploration and client sign-off before sampling.`,
    tags: ['Vibe Coding', '3D preview', 'Packaging', 'Artwork mapping', 'SVG export'],
    summary: {
      problem: 'Flat artwork cannot show how a box will look assembled',
      responsibility: 'End-to-end build of the preview tool',
      techStack: ['3D visualization', 'SVG', 'Texture mapping'],
      result: 'Resize, re-skin and preview a box in the browser',
    },
    implementation: [
      'Rendered the 2D dieline next to the 3D box, labelling cut and fold lines.',
      'Added dimension inputs, preset box types and artwork replacement for quick comparison.',
      'Animated the folding sequence and added rotate, zoom and SVG export.',
    ],
  },

  'carve-site': {
    title: 'Carve — Cross-border Shopify Storefront',
    description: `🛍️ A Shopify storefront customized for a cross-border brand, with a React front end and a Node.js middle layer sitting in front of Shopify.

✨ Technical highlights:
• React storefront with a fast, app-like browsing experience
• Node.js integration with the Shopify Admin and Storefront APIs via GraphQL
• Automated product retrieval, inventory lookup and order creation
• Mobile-first responsive layouts across the whole purchase flow

🎯 Business value: a complete path from product discovery to checkout, without locking the brand into a stock theme.`,
    tags: ['React', 'Node.js', 'Shopify API', 'GraphQL', 'TailwindCSS'],
    summary: {
      problem: 'A cross-border brand needed a complete online transaction flow',
      responsibility: 'Storefront build and front/back-end API integration',
      techStack: ['React', 'Node.js', 'Shopify API', 'GraphQL'],
      result: 'Product browsing, inventory lookup and order creation connected',
    },
    implementation: [
      'Built the product browsing interface in React and adapted the layout for mobile.',
      'Connected a Node.js layer to the Shopify API and GraphQL to handle products, inventory and orders.',
    ],
  },

  'posefootwear-site': {
    title: 'POSE Footwear — Brand E-commerce Site',
    description: `👟 The official e-commerce site for POSE, a recovery footwear brand under Cloud Walk Technology, presenting the brand and product range to a global audience.

🏢 Brand context:
• Cloud Walk Technology is based in Hangzhou and focuses on footwear innovation
• POSE combines its Anti-stress technology, ergonomic design and new materials for post-workout recovery and long periods of standing or walking
• The group also runs FIZO, a custom footwear brand using 3D printing and sustainable materials

✨ Technical highlights:
• Local theme development and debugging with Shopify CLI
• Responsive layouts built with TailwindCSS for desktop and mobile
• Deep theme customization for new arrivals, scenario-based collections and campaign pages
• Smoother product browsing and checkout to improve conversion

🎯 Business value: a global storefront that carries the brand idea of caring for every step.`,
    tags: ['Shopify CLI', 'TailwindCSS', 'Responsive', 'Liquid', 'E-commerce'],
    summary: {
      problem: 'A footwear brand needed a global storefront and sales channel',
      responsibility: 'Brand pages and purchase flow customization',
      techStack: ['Shopify CLI', 'Liquid', 'TailwindCSS'],
      result: 'Brand, product and campaign content in one storefront',
    },
    implementation: [
      'Organized new arrivals, scenario collections and campaign sections in the Shopify theme.',
      'Used TailwindCSS to adapt product browsing and purchase interactions for desktop and mobile.',
    ],
  },

  'bluebox-jp-site': {
    title: 'Bluebox Japan — Shopify Storefront',
    description: `🛏️ The Japan-market Shopify storefront for BLUEBOX, a sleep brand under Wanwu Anshui Technology, built to open an overseas e-commerce channel.

🏢 Brand context:
• Founded in 2019, BLUEBOX sells mattresses and sleep products
• Its Z1 memory-foam spring mattress offers a 100-night trial and a 25-year spring warranty, and has won Red Dot and Asia sleep-tech awards
• The brand passed RMB 800 million in platform sales in 2023 and runs more than 120 experience stores in China

✨ Technical highlights:
• Shopify CLI for local theme development, hot reload and deployment
• TailwindCSS responsive layouts for desktop and mobile
• Theme customization for Japanese product presentation and purchase flow
• Refined brand visuals and page interactions for overseas shoppers

🎯 Business value: a dedicated Japanese storefront that carries the brand's sleep philosophy into a new market.`,
    tags: ['Shopify CLI', 'TailwindCSS', 'Responsive', 'Liquid', 'E-commerce'],
    summary: {
      problem: 'A sleep brand needed a dedicated Japanese storefront',
      responsibility: 'Shopify theme and brand page customization',
      techStack: ['Shopify CLI', 'Liquid', 'TailwindCSS'],
      result: 'A Japan-ready brand e-commerce portal',
    },
    implementation: [
      'Developed locally with Shopify CLI and customized brand and product templates.',
      'Adapted responsive layouts and the Japanese purchase flow with TailwindCSS.',
    ],
  },

  'ziraspark-csfq': {
    title: 'ZiraSpark — Acetate Hair Clip Store',
    description: `🎀 The Shopify storefront for ZiraSpark, an acetate hair accessory brand built around a quiet-luxury aesthetic.

🎨 Brand direction:
• Cream, beige and deep brown palette with serif headlines and generous whitespace
• Product photography focused on natural light and the depth of the acetate material
• A "COLOR YOUR HAIR DAY" hero, collection entries, product grid and brand story

✨ Technical highlights:
• Shopify CLI for local development, hot reload and deployment, closely matching the Figma design
• Custom Liquid templates for home, product, FAQ and contact pages
• Colour/size variant selection, reviews, FAQ accordion and related products
• Responsive layouts that keep the visual language consistent on desktop and mobile

🎯 Business value: a storefront that balances design craft with conversion for a new accessory collection.`,
    tags: ['Shopify CLI', 'Liquid', 'Figma to theme', 'Responsive', 'E-commerce'],
    summary: {
      problem: 'A hair accessory brand needed a faithful Figma-to-Shopify build',
      responsibility: 'Theme development, design restoration and interactions',
      techStack: ['Shopify CLI', 'Liquid'],
      result: 'Home, product and service pages customized',
    },
    implementation: [
      'Converted the Figma design into Liquid templates for home, product and service pages.',
      'Implemented variant selection, FAQ accordion and related products, then adapted everything for mobile.',
    ],
  },

  'armor-lite': {
    title: 'ArmorLite — Stab-proof Gear Store',
    description: `🛡️ An English-language Shopify storefront for ArmorLite, a stab-proof and protective gear brand. The store has to explain a technical product clearly, keep a tactical visual identity and still make buying simple.

🎨 Visual direction:
• Dark navy base with electric blue accents, tactical photography and technical diagrams
• Product education built into the page: protection levels, nano-weave structure and FAQ
• Clear size, colour and bundle choices on every product

🛍️ Pages and features:
• Home page with hero, protection-level explainer, product showcase, technology section and FAQ
• Collection page with filters for availability, price and product type
• Product cards with colour variants, price, badges and add-to-cart
• Gift cards, shipping protection and customization products as separate SKUs
• Multi-currency and multi-language storefront settings

🎯 Outcome: a store that makes a niche protective product easy to understand and easy to buy.`,
    tags: ['Shopify', 'Liquid', 'Product education', 'Collection filters', 'Multi-currency'],
    summary: {
      problem: 'A technical protective product needed clear explanation and a simple purchase path',
      responsibility: 'Storefront build, product templates and collection filters',
      techStack: ['Shopify', 'Liquid', 'TailwindCSS'],
      result: 'A complete English storefront with education, filters and checkout',
    },
    implementation: [
      'Built a tactical visual system with protection-level explainers, technology diagrams and FAQ content.',
      'Implemented collection filters, variant-aware product cards and a streamlined add-to-cart flow.',
      'Configured multi-currency, multi-language and supporting SKUs such as gift cards and shipping protection.',
    ],
  },

  'tai': {
    title: 'TAI — AI Creative & Collaboration Workflow',
    description: `TAI is an AI creative platform for architecture, education and design teams. A visual node canvas connects text prompts, reference images and generative models so users can organize material, explore options and refine results inside one workflow.

Role and timeline:
I have owned the development and iteration of the product since June 2026, and continue to work on both the core creation tools and the enterprise collaboration features.

Core features:
• Visual workflow: nodes and connections combine prompts, images and generation tasks, with branching and reusable results
• Multi-model image generation: Nano Banana and Seedream support text-to-image and image-to-image, model tiers, aspect ratios and output resolution, previewed inside the node
• Architecture design: sketch, site boundary and text requirements become renderings, then bird's-eye plans, entrance views, corridors, floor plans, elevations and sections
• Canvas and project organization: project switching, zoom, minimap, text, drawing and layer tools
• Platform services: Chinese/English switching, membership, credits, invite codes and an enterprise entry point

Enterprise collaboration:
Multiple members can work on the same canvas, with avatars and live cursors showing who is where while they iterate on shared assets, nodes and results.

Outcome: turns scattered image-generation steps into a connected, visual workflow that teams can work in together.`,
    tags: ['AI image generation', 'Visual workflow', 'Architecture', 'Realtime collaboration', 'Solo build'],
    summary: {
      problem: 'AI creation steps were scattered and team collaboration was hard to connect',
      responsibility: 'Sole developer since June 2026, ongoing iteration',
      techStack: ['React', 'NestJS'],
      result: 'Node-based creation flow and enterprise multi-user collaboration',
    },
    implementation: [
      'Built the visual node canvas in React to connect prompts, reference images and generated results.',
      'Built backend services in NestJS for multi-model image generation and workflow logic.',
      'Extended the platform with architecture-focused generation, multi-view output and enterprise collaboration with member presence and live cursors.',
    ],
  },

  'superbox-mcp': {
    title: 'SuperBox MCP — 8 AI Tools for Business Data',
    description: `An MCP server that exposes SuperBox business capabilities to AI assistants. Instead of copying data into a chat window, users can ask a question in Claude, ChatGPT or WorkBuddy and let the assistant call standardized tools.

What it does:
• Wraps order, store and reporting APIs as 8 standardized MCP tools
• Handles authentication, parameter validation and error responses
• Returns structured data that assistants can summarize, chart or explain
• Works with any MCP-compatible client through a single configuration

Example: "Check last month's orders for the Guangming store and analyze the trend" returns order counts, status breakdowns and a month-over-month chart directly in the assistant.

Outcome: turns internal business data into a conversational interface without building a custom chatbot.`,
    tags: ['MCP', 'AI tools', 'Node.js', 'API integration', 'Data analysis'],
    summary: {
      problem: 'Business data was locked inside dashboards and manual exports',
      responsibility: 'MCP server design and 8 tool integrations',
      techStack: ['MCP', 'Node.js', 'REST API'],
      result: 'AI assistants can query and analyze business data directly',
    },
    implementation: [
      'Designed the MCP tool schema and wrapped order, store and reporting APIs as 8 standardized tools.',
      'Added authentication, parameter validation and structured error handling.',
      'Verified the connector in MCP-compatible clients, including natural-language order analysis with charts.',
    ],
  },

  'erp-system': {
    title: 'ERP Enterprise Management System',
    description: `🏢 An enterprise ERP platform covering day-to-day business processes.

✨ Highlights:
• Jimu Report integration for flexible report configuration and display
• Multi-dimensional statistics for management decisions
• Modular architecture that is easy to extend and maintain
• A complete permission system to protect sensitive data

💻 Implementation: a modern stack combined with Jimu Report to deliver practical reporting and management tools.`,
    tags: ['Jimu Report', 'Enterprise', 'Data management', 'Permissions', 'Reporting'],
    summary: {
      problem: 'Business data and reports needed one management system',
      responsibility: 'Business modules, reporting and permissions',
      techStack: ['Jimu Report'],
      result: 'Business management and multi-dimensional reporting in one place',
    },
    implementation: [
      'Organized data management by business module and controlled access with a permission system.',
      'Integrated Jimu Report for configurable reports and multi-dimensional statistics.',
    ],
  },

  'project-management': {
    title: 'Personal Project Management System',
    description: `📊 A complete system for managing personal projects.

✨ Core features:
• Notes for project-related information
• Project statistics across key metrics
• Profit tracking for each project
• Full lifecycle tracking from creation to completion

💻 Implementation:
• Vue front end with a modern interface
• Laravel back end with reliable services
• Decoupled architecture for performance and maintainability

🎯 Value: a focused tool that helps a solo developer stay organized and measure progress.`,
    tags: ['Vue', 'Laravel', 'Project management', 'Statistics', 'Profit tracking'],
    summary: {
      problem: 'Project progress, income and notes were hard to manage together',
      responsibility: 'Full-stack development of the management system',
      techStack: ['Vue', 'Laravel'],
      result: 'Project lifecycle and profit data in one place',
    },
    implementation: [
      'Built project, note and statistics interfaces in Vue with Laravel services behind them.',
      'Connected project creation, progress tracking and profit reporting into one workflow.',
    ],
  },

  'online-monitoring': {
    title: 'Online Monitoring System',
    description: `📹 A real-time monitoring system that brings RTSP camera streams into the browser, with sensor data alongside the video.

✨ Core features:
• Converts internal RTSP streams into browser-playable video
• Supports multiple cameras at the same time
• Displays water-quality readings such as pH and dissolved oxygen
• Charts and dashboards for sensor trends

💻 Implementation:
• Streaming conversion from RTSP to web playback
• Decoupled front and back ends for stable delivery
• Real-time data collection and display

🎯 Value: a visual monitoring solution for water-quality and environmental scenarios.`,
    tags: ['RTSP', 'Streaming', 'Live monitoring', 'Sensors', 'Visualization'],
    summary: {
      problem: 'Internal RTSP camera streams could not play in the browser',
      responsibility: 'Stream conversion and monitoring data display',
      techStack: ['RTSP', 'Stream transcoding'],
      result: 'Multiple live video feeds and water-quality metrics on the web',
    },
    implementation: [
      'Converted RTSP camera streams into browser-playable video.',
      'Connected sensor data and displayed water-quality metrics with charts and dashboards.',
    ],
  },

  'septic-tank-monitoring': {
    title: 'Septic Tank Monitoring System',
    description: `🗺️ A map-based monitoring system for septic tank devices, combining equipment location with live status.

✨ Core features:
• Map markers for every monitoring device
• Live equipment status and readings
• Bulk management of multiple monitoring points
• Colour and icon coding for device health

💻 Implementation:
• Map API integration for accurate positioning
• Real-time data endpoints for device status
• Responsive layout for desktop and mobile

🎯 Value: helps operators locate devices quickly and see status at a glance.`,
    tags: ['Map', 'Device monitoring', 'Realtime status', 'Visualization', 'GIS'],
    summary: {
      problem: 'Distributed devices were hard to locate and monitor',
      responsibility: 'Map display and device data integration',
      techStack: ['Map API', 'GIS'],
      result: 'Monitoring points and device status on one map',
    },
    implementation: [
      'Marked device locations on the map and organized multi-point information.',
      'Connected device status data and represented it with marker colours and icons.',
    ],
  },

  'cjh': {
    title: 'SuperBox — IoT Self-service Storage Mini Program',
    description: `SuperBox (Bo⁺X) is a WeChat mini program that connects online rental with offline smart storage. Customers choose a locker, book it and unlock it themselves, covering luggage storage, furniture storage and goods transfer.

IoT and self-service access:
• Integrates smart locker locks so rental orders are tied to physical units
• Slide-to-unlock so customers can open their locker from the order page
• Displays an access code for offline keypad entry
• Organizes locker use and access around the rental order

Core business features:
• Multi-store selection with city and district filters, distance, unit number, volume, size, price, photos and video
• Self-service rental with weekly or monthly terms, start date, duration and referral source
• Order and locker management: start/end dates, contract status, return, exchange, authorized users, item list and agreement
• Arrival guidance with pedestrian and vehicle directions plus video and photo instructions
• Supporting services: verification, invoices, feedback, Meituan/Dianping redemption and coupon tasks

Outcome: ties IoT device control into the rental business and removes manual handover from the customer journey.`,
    tags: ['IoT', 'Smart locks', 'Self-service', 'Slide to unlock', 'Storage rental'],
    summary: {
      problem: 'Storage rental and locker access depended on on-site staff',
      responsibility: 'Rental flow and IoT integration, ongoing iteration',
      techStack: ['UniApp', 'Go'],
      result: 'Self-service booking, payment and slide-to-unlock',
    },
    implementation: [
      'Built locker selection, rental booking and order management in UniApp, including weekly/monthly terms and start dates.',
      'Built Go services that connect smart locks and other IoT devices to rental orders and physical units.',
      'Added slide-to-unlock and code-based access, plus returns, exchanges, authorized users and arrival guidance.',
    ],
  },

  'hx-deer': {
    title: 'HX Deer — Paid Knowledge Mini Program',
    description: `📚 A paid knowledge mini program with fine-grained permissions, built for education organizations.

🔐 Core features:
• Three user roles: standard, VIP and teacher
• Permission-controlled resources to protect paid content
• In-app top-up and payment
• A resource store that closes the knowledge loop

💻 Architecture: UniApp and TailwindCSS for cross-platform UI; JWT authentication and custom annotation interception on the backend.`,
    tags: ['UniApp', 'TailwindCSS', 'RuoYi', 'JWT', 'Payments'],
    summary: {
      problem: 'Paid resources needed role-based access control',
      responsibility: 'Paid knowledge and tiered permission features',
      techStack: ['UniApp', 'TailwindCSS', 'RuoYi', 'JWT'],
      result: 'Resource store, top-up and tiered access connected',
    },
    implementation: [
      'Built cross-platform resource browsing and store interfaces with UniApp and TailwindCSS.',
      'Used JWT authentication and annotation-based interception for standard, VIP and teacher access, connected to top-up payments.',
    ],
  },

  'xh-affair': {
    title: 'Xiang Houshi — Cemetery Booking Mini Program',
    description: `🏛️ An O2O platform for cemetery plot selection and booking, bringing a traditional industry online.

📍 Core capabilities:
• Browse cemetery areas with a 3D visualization of plot distribution
• Smart plot booking with live availability
• Full order lifecycle management
• Accurate single and double plot logic with synchronized status

⚡ Technical challenge: the complex plot-type rules and status synchronization that the traditional process relied on.`,
    tags: ['UniApp', 'uView-Plus', 'Vite', 'Business logic'],
    summary: {
      problem: 'Plot types were complex and booking status had to stay accurate',
      responsibility: 'Plot selection, booking and order logic',
      techStack: ['UniApp', 'uView-Plus', 'Vite'],
      result: 'Single and double plot selection with booking flow',
    },
    implementation: [
      'Built cemetery area and plot distribution views with an online selection entry.',
      'Handled single/double plot rules, booking status sync and the order lifecycle.',
    ],
  },

  'h5-campaign': {
    title: 'Interactive Marketing H5',
    description: `🎪 High-performance interactive marketing pages built for engagement.

🎬 Technical highlights:
• Lazy-loaded images plus debounce and throttle for smooth performance
• Tuned to run well on low-end phones

🎮 Interactions:
• "Spin & Win" style game to raise participation
• "Maze" challenge to reinforce the brand

📈 Value: playful interactions that lift conversion and shareability.`,
    tags: ['Performance', 'GSAP', 'Lazy loading', 'Mobile'],
    summary: {
      problem: 'Marketing interactions had to stay fun on low-end devices',
      responsibility: 'H5 interactions and performance optimization',
      techStack: ['GSAP', 'Lazy loading', 'Debounce/throttle'],
      result: 'Spin and maze games delivered with smooth performance',
    },
    implementation: [
      'Implemented the spin and maze games with GSAP-driven motion.',
      'Reduced load and interaction cost with lazy loading, debounce and throttle.',
    ],
  },

  'yxt': {
    title: 'Yixuetong — Quiz & Exam System H5',
    description: `📖 A complete online learning and exam system for education organizations.

🎯 Core features:
• Large question bank with type and tag management
• Smart practice that records wrong answers and progress
• Timed online exams with auto-submit and scoring
• Learning analytics with visual reports and weak-point detection

💻 Implementation: solo full-stack delivery, from UI and backend logic to database design and deployment.

✨ Highlight: performance tuned across devices so students can study without friction.`,
    tags: ['Full-stack', 'Question bank', 'Online exam', 'Analytics'],
    summary: {
      problem: 'Practice, exams and progress tracking needed one system',
      responsibility: 'Solo full-stack build, database design and deployment',
      techStack: ['Java', 'Vue'],
      result: 'Question bank, exams and learning reports in one flow',
    },
    implementation: [
      'Built question types, categories and tags, plus practice and wrong-answer tracking.',
      'Implemented timed exams, submission and scoring, with progress and weak-point reports.',
      'Delivered the front end, back end, database and deployment independently.',
    ],
  },

  'gongcha': {
    title: 'Gong Cha — Online Ordering Site',
    description: `🧋 An online ordering site for a Gong Cha bubble tea store.

🛒 Core features:
• Product display with categories and clear pricing
• Cart with add, remove and quantity changes
• Complete order submission flow
• Responsive layout for desktop and mobile

💻 Implementation: front-end development with a modern stack and a smooth interaction model.
• Lottie animations for richer motion

🎨 Design: a clean, easy-to-use interface that makes browsing and ordering simple.`,
    tags: ['Front-end', 'Cart', 'Responsive', 'UX', 'Lottie'],
    summary: {
      problem: 'The store needed a simple way to browse and order online',
      responsibility: 'Front-end and motion development',
      techStack: ['Lottie', 'Responsive layout'],
      result: 'Product, cart and order submission experience',
    },
    implementation: [
      'Built product display, cart add/remove and quantity controls.',
      'Integrated Lottie animations and adapted the ordering pages for desktop and mobile.',
    ],
  },

  'gkzyt': {
    title: 'Gaokao Volunteer Helper Mini Program',
    description: `🎓 A mini program that helps students choose university applications with data.

📊 Core features:
• University search with detailed profiles
• Historical admission score lookup
• Recommendations based on score and interests
• Multiple application plans for comparison

💻 Implementation: front-end development with UniApp, running smoothly inside WeChat.

✨ Value: a practical, easy-to-use tool for one of the most stressful decisions students face.`,
    tags: ['Front-end', 'UniApp', 'Data display', 'UX'],
    summary: {
      problem: 'Students needed one place to compare universities and plans',
      responsibility: 'UniApp mini program front end',
      techStack: ['UniApp'],
      result: 'Universities, score lines and application plans',
    },
    implementation: [
      'Built university search, historical score lines and recommendation views in UniApp.',
      'Organized multiple application plans for comparison inside WeChat.',
    ],
  },

  'hbzdcsm': {
    title: 'What Should I Eat — Life Helper Mini Program',
    description: `🍜 A life helper mini program for two very modern problems: decision fatigue and overspending.

🎲 Core features:
• A 3D ball interaction that randomly picks food
• Expense tracking for daily income and spending
• Calorie logging for healthier eating
• A decision helper for "what should I eat today?"

💡 Value: playful interactions plus practical tools that help young users make better daily choices.

✨ Design: the 3D ball makes the decision feel like a game instead of a chore.`,
    tags: ['UniApp', '3D interaction', 'Expense tracking', 'Calories', 'UX'],
    summary: {
      problem: 'Daily food choices and spending lacked a simple tool',
      responsibility: 'Life helper features and playful interactions',
      techStack: ['UniApp', '3D interaction'],
      result: 'Random food picker, expense log and calorie tracking',
    },
    implementation: [
      'Used a 3D ball interaction to present random food results.',
      'Built expense logging, calorie records and decision tools in UniApp.',
    ],
  },

  'xypt': {
    title: 'Lazy Help — Campus Errand Mini Program',
    description: `🏃 A campus life mini program for errand services.

🎯 Core features:
• Errand order publishing and management
• Runner acceptance and order matching
• Real-time status tracking
• Ratings that keep service quality up

🏆 Award: entry for the 6th "Chuanzhi Cup" national college IT skills competition, WeChat mini program track.

💻 Implementation: a modern front-end stack with a smooth experience for campus users.`,
    tags: ['UI design', 'Mini program', 'Campus service', 'Chuanzhi Cup'],
    summary: {
      problem: 'Campus errands needed a clear order and acceptance flow',
      responsibility: 'Campus service UI and flow design',
      techStack: ['Jingdong Design'],
      result: 'Publishing, acceptance, tracking and rating flow',
    },
    implementation: [
      'Designed the order publishing, acceptance and status tracking flow for students and runners.',
      'Designed service ratings and core screens as a Chuanzhi Cup entry.',
    ],
  },

  'lxxd': {
    title: 'Lianxian Xindong — Social Mini Program',
    description: `💕 A social mini program with content, interaction and lightweight transactions.

🎯 Core features:
• Post and manage image/text updates
• Likes and comments for social interaction
• Invite friends to grow the network
• Order management for social services
• Withdrawals for user earnings

💻 Implementation:
• A modern mini program stack with a smooth experience
• Real-time messages and status updates
• Secure payment and withdrawal flows

🎯 Value: one place for social content, interaction and transactions.`,
    tags: ['Social', 'Posts', 'Interaction', 'Orders', 'Withdrawals'],
    summary: {
      problem: 'Social content, interaction and transactions needed one home',
      responsibility: 'Social mini program business features',
      techStack: ['UniApp'],
      result: 'Posts, invites, orders and withdrawals connected',
    },
    implementation: [
      'Built image/text posts, likes, comments and friend invitations.',
      'Connected orders, payments and withdrawals with message and status updates.',
    ],
  },
};

export interface BlogEn {
  title: string;
  excerpt: string;
  tags: string[];
}

export const EN_BLOG: Record<string, BlogEn> = {
  'shopify-tailwind-responsive': {
    title: 'Shopify CLI + TailwindCSS: building a fast responsive storefront',
    excerpt:
      'Lessons from POSE Footwear and Bluebox Japan on using TailwindCSS inside a Shopify theme, with a mobile-first workflow and a maintainable structure.',
    tags: ['Shopify CLI', 'TailwindCSS', 'Responsive', 'Liquid'],
  },
  'mini-program-performance': {
    title: 'Mini program performance: the details that keep it smooth',
    excerpt:
      'Practical techniques from H5 and UniApp projects: image lazy loading, debounce and throttle, rendering cost and low-end device testing.',
    tags: ['Performance', 'UniApp', 'H5', 'Optimization'],
  },
  'portfolio-tech-stack': {
    title: 'Building this portfolio with React + TailwindCSS',
    excerpt:
      'The stack behind this site, from Vite and React Router to responsive layout, project structure and the decisions that kept it simple.',
    tags: ['React', 'Vite', 'TailwindCSS', 'Portfolio'],
  },
};

export const EN_BLOG_CONTENT: Record<string, string> = {
  'shopify-tailwind-responsive': `After working on POSE Footwear and the Bluebox Japan storefront, I settled into a Shopify CLI + TailwindCSS workflow. This article records the parts that made the biggest difference.

## Why Shopify CLI + TailwindCSS

Shopify CLI gives you local theme development, hot reload and one-command deployment, which shortens the path from design file to launch. TailwindCSS makes responsive layout work faster and more predictable through utility classes — especially on e-commerce projects that have to work well on desktop and mobile.

Traditional Shopify themes often accumulate a pile of custom CSS files. With TailwindCSS we can:

• Use utility classes directly inside Liquid templates, so we switch between style files less often
• Handle breakpoints quickly with sm / md / lg
• Keep the final CSS small with JIT mode, so the theme still loads fast

## Project structure

A clear theme structure is the basis for teamwork. I usually organize it like this:

• sections/ — configurable page blocks (hero, product list, brand story)
• snippets/ — reusable UI pieces (product card, nav item)
• assets/ — compiled CSS/JS and static files
• templates/ — page-level templates

The TailwindCSS entry file lives in assets/ and is compiled by Shopify CLI in watch mode. Liquid and styles can then be developed in parallel.

## Three keys to responsive design

**1. Mobile first**

Start from the smallest screen and enhance upward. The navigation, for example, collapses into a hamburger menu on mobile and becomes a horizontal nav from the md breakpoint — the same interaction used on the POSE site.

**2. Images and media**

On an e-commerce site, responsiveness is more than layout:

• Use srcset or Shopify's image_url filters to load the right size
• One product column on mobile, two on tablet, three on desktop
• Reduce banner height on mobile so the first screen is not all image

**3. Touch-friendly targets**

Buttons and links should have a tap area of at least 44×44px. High-frequency actions such as cart and wishlist need to be easy to reach on mobile. These details directly affect conversion.

## Liquid + TailwindCSS

Expose options in the section schema (heading, background colour, collection), let Liquid bind the data and let TailwindCSS handle the visuals. A "new arrivals" section, for example, lets the merchant pick a collection; Liquid loops through the products and every card shares the same Tailwind spacing and radius classes. Change one class and the whole site follows.

## Localization notes for Japan

For the Bluebox Japan storefront, responsive layout was only part of the work:

• Japanese line-breaking and typography habits
• Currency and price formatting (yen)
• Font loading strategy for Noto Sans JP across devices

Tailwind's typography plugin helps with long-form content, but Japanese line-height and letter-spacing usually need separate tuning.

## Performance checklist

• Enable Tailwind's purge/content config so only used classes ship
• Lazy-load images below the fold
• Minify and combine CSS to keep theme.css small
• Avoid large inline style blocks inside Liquid

## Wrap-up

Shopify CLI + TailwindCSS keeps the commerce power of Shopify while giving you a modern front-end workflow. Responsive is not a shrunken desktop page — it is a full-path adaptation from information architecture to interaction to performance.

If you are working on a similar Shopify project, feel free to reach me through the About page.`,

  'mini-program-performance': `Performance work usually lives in a hundred small details, not one big rewrite. These are a few techniques from H5 campaigns and mini program projects that paid off quickly.

## Image lazy loading

List pages and image grids are where lazy loading matters most. Intersection Observer is the first choice: load when the image enters the viewport, and release resources when it leaves. In UniApp, wrap it in a shared lazy-image component instead of reimplementing it on every page.

## Debounce and throttle

Search inputs, scroll listeners and window resize events need debounce or throttle. Without them, low-end Android devices stutter and can even go blank.

## Subpackages and on-demand loading

Mini programs have a main-package size limit. Move non-first-screen pages into subpackages and use preloadRule to warm the packages users are likely to open. That balances experience and download size.

## Closing

There is no silver bullet for performance, but every small improvement shows up in session time and conversion. Measure, iterate, repeat.`,

  'portfolio-tech-stack': `This portfolio is also a front-end exercise. I chose Vite + React + TailwindCSS for fast iteration, light deployment and a consistent visual language.

## Data-driven

All project information lives in constants.tsx and the types live in types.ts; page components only handle display and routing. Adding a Shopify project or a blog post means extending the data files, not rewriting the page structure.

## Routing and pages

HashRouter keeps static hosting simple. The work list, project detail, about page, blog list and article detail are separate routes, with a shared navbar and footer.

## Visual language

The light blue gradient, rounded cards and dark footer carry through the project cards and blog cards, with consistent hover motion and spacing.

## Next

The blog is live. I will keep adding technical articles and gradually improve Markdown rendering and code highlighting.`,
};

