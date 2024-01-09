import {
  CallIconContact,
  InqueryIcon,
  MailIconContact,
  SkypeIcon,
} from "@/assets/svg/ContactUsSvg";

export const projectType = [
  {
    question: "2. What is your next project about?*",
    answers: [
      { name: "Website" },
      { name: "Mobile Application" },
      { name: "Game Development" },
      { name: "Blockchain" },
      { name: "UI & UX Design" },
      { name: "AI & ML" },
      { name: "Cloud Computing" },
      { name: "Internet of Things" },
      { name: "Enterprise Solutions" },
    ],
  },
];

export const budget = [
  {
    question: "3. What will be our involvement in your project?*",
    answers: [
      { name: "I don’t know yet" },
      { name: "$5k-$10k" },
      { name: "$10k-$20k" },
      { name: "$20k-$30k" },
      { name: "$30k-$40k" },
      { name: ">$40K" },
    ],
  },
];

export const radioTextArr1 = [
  {
    question: "3. What will be our involvement in your project?*",
    options: [
      { id: 1, label: "Design & Development" },
      {
        id: 2,
        label:
          "Design Only (We designing your product, you will develop yourself)",
      },
      {
        id: 3,
        label:
          "Development Only (We Developing Web & App, you provide us with designs)",
      },
    ],
  },
];

export const progressArr = [
  {
    number: "1",
    heading: "Get a comprehensive free technical consultation.",
    subHeading:
      "Following a discussion of your project, we will provide you with a full technical consultation regarding the technology stack we employ and which technology would be most suited for your project.",
  },
  {
    number: "2",
    heading:
      "We will provide you an all-inclusive proposal paper for your Project.",
    subHeading:
      "We will provide you an all-inclusive proposal document that includes all of the features, timetable, pricing, and smallest details related to your project after we have a firm hold on it.",
  },
  {
    number: "3",
    heading:
      "We will provide you an all-inclusive proposal paper for your Project.",
    subHeading:
      "Once you've approved the proposal and given us the go-ahead for the project, we'll assemble an all-star team to realize your vision and go above and beyond your expectations.",
  },
];

export const socialLinksArr = [
  {
    icon: <MailIconContact />,
    heading: "Sales & Marketing",
    subHeading1: "hello@devriser.com",
    subHeading2: "",
  },
  {
    icon: <SkypeIcon />,
    heading: "Skype",
    subHeading1: "Devriser",
    subHeading2: "",
  },
  {
    icon: <InqueryIcon />,
    heading: "HR Inquiry",
    subHeading1: "hr@devriser.com",
    subHeading2: "+1 123-123-1212 (US)",
  },
  {
    icon: <CallIconContact />,
    heading: "Sales Inquiry",
    subHeading1: "+1 123-123-1212 (US)",
    subHeading2: "+1 123-123-1212 (US)",
  },
];
