export const socials = [
  // {
  //   name: "Facebook",
  //   icon: "mdi:facebook",
  //   link: "https://www.facebook.com/",
  // },
  {
    name: "Twitter",
    icon: "mdi:twitter",
    link: "https://www.twitter.com/tade_niji06",
  },
  {
    name: "Instagram",
    icon: "mdi:instagram",
    link: "https://www.instagram.com/_prince_otf",
  },
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/olutunmise-adeniji-16a846250",
  },
];

export const navItems = [
  { name: "Dashboard", icon: "mdi:view-dashboard", path: "/dashboard" },
  { name: "My Wardrobe", icon: "mdi:hanger", path: "/wardrobe" },
  // { name: "Outfit Suggestions", icon: "mdi:tshirt-crew", path: "/outfits" },
  // { name: "Style Recommendations", icon: "mdi:star", path: "/recommendations" },
  // { name: "Wishlist", icon: "mdi:heart", path: "/wishlist" },
  { name: "Settings", icon: "mdi:cog", path: "/settings" },
  {name: "Premium", icon: "mdi:crown", path: "/premium"}
];

  // Categories for the tabs
 export const categories = [
    { id: "all", name: "All Items", icon: "mdi:hanger" },
    { id: "tops", name: "Tops", icon: "mdi:tshirt-crew" },
    { id: "bottoms", name: "Bottoms", icon: "mingcute:shorts-fill" },
    { id: "shoes", name: "Shoes", icon: "mdi:shoe-heel" },
    { id: "accessories", name: "Accessories", icon: "mdi:necklace" },
  ];


  //plans
  export const plans = [
    {
      id: "basic",
      name: "Basic",
      description: "Essential styling features for casual users",
      monthlyPrice: 4.99,
      yearlyPrice: 49.99,
      features: [
        "Basic wardrobe management",
        "Limited outfit suggestions",
        "Weather-based recommendations",
        "Basic style profile",
      ],
      color: "bg-blue-500",
      recommended: false,
    },
    {
      id: "pro",
      name: "Pro",
      description: "Advanced features for style enthusiasts",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        "Unlimited wardrobe items",
        "Advanced outfit suggestions",
        "Occasion-based styling",
        "Seasonal trend updates",
        "Style history analytics",
        "Priority support",
      ],
      color: "bg-primary-green",
      recommended: true,
    },
    {
      id: "elite",
      name: "Elite",
      description: "Premium experience for fashion connoisseurs",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        "All Pro features",
        "Personal stylist consultations",
        "Brand recommendations",
        "Exclusive style guides",
        "Early access to new features",
        "Shopping assistant with discounts",
        "Custom color analysis",
      ],
      color: "bg-purple-600",
      recommended: false,
    },
  ];

  export const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      quote:
        "The Elite plan has completely transformed how I plan my outfits. The personal stylist consultations are worth every penny!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Chen",
      role: "Business Professional",
      quote:
        "As someone who struggles with fashion choices, the Pro plan has been a game-changer. I get compliments on my outfits all the time now.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Aisha Williams",
      role: "Student",
      quote:
        "Even on the Basic plan, I've been able to maximize my wardrobe and create stylish outfits I never would have thought of myself.",
      avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    },
  ]