/**
 * Open roles at Sorta Famous, shown on /careers. Each role expands into its
 * full job description; applications go to the HR inbox by email.
 */
export const CAREERS_EMAIL = "humanresources@sortafamous.in";

export type JobSection = {
  title: string;
  /** Paragraphs shown before the bullet list. */
  paras?: string[];
  items?: string[];
  /** Paragraphs shown after the bullet list. */
  after?: string[];
  /** Sub-groups with their own heading, e.g. the numbered responsibilities. */
  groups?: { title: string; items: string[] }[];
};

export type Job = {
  slug: string;
  title: string;
  team: string;
  /** One line for the collapsed row. */
  summary: string;
  meta: { label: string; value: string }[];
  sections: JobSection[];
};

export const jobs: Job[] = [
  {
    slug: "executive-assistant-to-founder",
    title: "Executive Assistant to Founder",
    team: "Founder’s office",
    summary:
      "A high-trust role managing the Founder’s professional and personal priorities, and acting as a key coordination point across the agency.",
    meta: [
      { label: "Location", value: "Mumbai" },
      { label: "Experience", value: "5–8 years preferred" },
      { label: "Type", value: "Full-time" },
      { label: "Reports to", value: "Founder" },
      { label: "Industry", value: "Marketing, PR & Communications" },
    ],
    sections: [
      {
        title: "About the role",
        paras: [
          "We are looking for a highly organised, proactive, sharp, and discreet Executive Assistant to the Founder to manage the Founder’s day-to-day professional and personal requirements and act as a key coordination point across the agency.",
          "This is a high-trust role that goes significantly beyond traditional calendar and administrative management. The Executive Assistant will be responsible for helping the Founder manage professional priorities, internal coordination, meetings, follow-ups, client and business matters, travel, personal commitments, and day-to-day logistics.",
          "The EA will work closely with the Founder and coordinate with internal teams, clients, business partners, vendors, service providers, and personal contacts as required.",
          "The ideal candidate should be comfortable working in a fast-paced marketing and communications environment, handling multiple priorities simultaneously, exercising sound judgment, maintaining strict confidentiality, and following through on responsibilities until they are closed.",
          "A critical part of this role is understanding when to act independently, when to follow up, and when a matter requires the Founder’s approval or intervention.",
        ],
      },
      {
        title: "Key responsibilities",
        groups: [
          {
            title: "Founder & calendar management",
            items: [
              "Manage the Founder’s professional and personal calendar, including meetings, calls, appointments, commitments, and important dates.",
              "Prioritise meetings and commitments based on urgency, importance, and the Founder’s priorities.",
              "Ensure there are no scheduling conflicts or missed commitments.",
              "Prepare the Founder for upcoming meetings with relevant briefs, documents, presentations, context, and background information.",
              "Coordinate internal and external meetings, including Microsoft Teams calls.",
              "Maintain a clear view of the Founder’s daily, weekly, and monthly priorities.",
              "Proactively identify scheduling issues and recommend solutions rather than waiting for conflicts to arise.",
              "Ensure adequate time is blocked for important business priorities, preparation, travel, and personal commitments.",
            ],
          },
          {
            title: "Follow-ups & task management",
            items: [
              "Maintain a comprehensive tracker of tasks, instructions, decisions, and follow-ups assigned by the Founder.",
              "Ensure timely closure of pending matters without requiring repeated reminders.",
              "Follow up with internal teams on pending deliverables, deadlines, approvals, and updates.",
              "Ensure action points from meetings are documented, assigned, and followed through.",
              "Proactively escalate delays, blockers, missed deadlines, and critical issues to the Founder.",
              "Ensure important decisions and instructions from the Founder are accurately communicated to the relevant individuals.",
              "Maintain visibility on open items until they are fully resolved rather than considering a follow-up complete simply because a reminder has been sent.",
            ],
          },
          {
            title: "Internal coordination",
            items: [
              "Act as a central coordination point between the Founder and various agency teams, including PR, Social Media, Brand, Digital Marketing, Business Development, HR, and Operations.",
              "Coordinate with department heads and managers to obtain regular updates required by the Founder.",
              "Track important team deliverables and highlight areas requiring the Founder’s attention.",
              "Assist in organising weekly and monthly review meetings.",
              "Prepare meeting agendas, Minutes of Meeting (MoMs), and action trackers.",
              "Ensure decisions taken during meetings are communicated and subsequently actioned.",
              "Facilitate smooth information flow between the Founder and relevant departments without creating unnecessary meetings or communication gaps.",
            ],
          },
          {
            title: "Client & business coordination",
            items: [
              "Assist the Founder in managing communication and coordination with key clients, business partners, and external stakeholders.",
              "Coordinate client meetings, calls, proposals, presentations, and follow-ups.",
              "Maintain trackers for important clients, partnerships, and business opportunities.",
              "Ensure client-related requests requiring the Founder’s intervention are brought to the Founder’s attention and followed through until closure.",
              "Support the Founder in preparing for pitches, business meetings, negotiations, and strategic discussions.",
              "Ensure important client commitments and Founder-level follow-ups are not missed.",
            ],
          },
          {
            title: "Business development support",
            items: [
              "Assist with tracking leads, prospects, proposals, meetings, and follow-ups.",
              "Coordinate with the Business Development team to ensure timely updates on important prospects and opportunities.",
              "Help schedule discovery calls, pitches, and business meetings.",
              "Maintain an organised database of key contacts, prospects, partners, founders, and opportunities.",
              "Conduct basic research on prospective clients, brands, founders, industries, and market opportunities when required.",
              "Flag important pending proposals, follow-ups, and opportunities requiring the Founder’s attention.",
            ],
          },
          {
            title: "Research & strategic support",
            items: [
              "Conduct research on competitors, brands, events, influencers, prospective clients, partnerships, and potential business opportunities.",
              "Prepare concise and useful research summaries and briefing notes for the Founder.",
              "Support the Founder with presentations, reports, documents, proposals, and other business material.",
              "Track relevant industry news, campaigns, trends, and developments that may be useful for the Founder or agency.",
              "Organise information in a manner that allows the Founder to make decisions quickly without having to independently search for background information.",
            ],
          },
          {
            title: "Personal & lifestyle management",
            items: [
              "Assist the Founder with personal calendar management, appointments, reservations, commitments, and important dates.",
              "Coordinate personal travel, including flights, hotels, transportation, itineraries, and related logistics.",
              "Manage and follow up on personal appointments, bookings, renewals, deliveries, reservations, and other time-sensitive requirements.",
              "Coordinate with household staff, drivers, vendors, service providers, consultants, and personal contacts when required.",
              "Assist with personal purchases, gifting, reservations, events, and special arrangements as required.",
              "Maintain relevant personal records, confirmations, documents, and important information in an organised and confidential manner.",
              "Coordinate personal and professional schedules to avoid conflicts and ensure effective management of the Founder’s time.",
              "Handle personal correspondence and coordination on behalf of the Founder when specifically authorised.",
              "Anticipate upcoming requirements and proactively flag deadlines, appointments, travel requirements, renewals, bookings, or logistical concerns.",
              "Maintain complete confidentiality and discretion regarding the Founder’s personal life, schedule, family, contacts, travel, and other private matters.",
            ],
          },
          {
            title: "Administrative & operational support",
            items: [
              "Manage important documents, files, records, correspondence, and information.",
              "Maintain organised physical and digital folders and ensure important documents are easily accessible.",
              "Coordinate with vendors, consultants, service providers, and external stakeholders when required.",
              "Assist with professional and personal travel planning, itineraries, bookings, and logistics.",
              "Support the Founder with ad-hoc administrative and operational requirements.",
              "Handle sensitive company and personal information with complete discretion.",
            ],
          },
        ],
      },
      {
        title: "Authority & escalation",
        paras: [
          "The Executive Assistant acts as an extension of the Founder for the purposes of coordination, communication, follow-ups, scheduling, information gathering, and execution tracking.",
          "The role requires initiative and independent judgment; however, coordination authority should not be interpreted as independent management authority.",
          "Unless specifically authorised by the Founder, the Executive Assistant should not independently:",
        ],
        items: [
          "Alter company policies, working hours, attendance requirements, or operational processes.",
          "Make HR, hiring, termination, compensation, or disciplinary decisions.",
          "Change reporting structures or departmental responsibilities.",
          "Make financial commitments, approve budgets, or commit company expenditure.",
          "Make commitments to clients, employees, vendors, or external stakeholders on behalf of the Founder where approval is required.",
          "Override decisions made by department heads or managers within their functional areas.",
          "Communicate a personal decision as a decision of the Founder without the Founder’s approval.",
        ],
        after: [
          "Where there is uncertainty regarding authority, the EA is expected to escalate the matter rather than assume approval.",
          "The EA is expected to exercise judgment in routine coordination matters while ensuring that management, policy, financial, HR, and strategic decisions remain with the Founder or the relevant authorised department head.",
        ],
      },
      {
        title: "Key skills & competencies",
        items: [
          "Excellent organisational and time-management skills.",
          "Strong verbal and written communication.",
          "Exceptional follow-up and task-closure ability.",
          "Ability to prioritise multiple professional and personal requirements simultaneously.",
          "Strong attention to detail.",
          "Highly proactive approach and ability to anticipate requirements.",
          "Ability to distinguish between matters that can be handled independently and those requiring escalation.",
          "Ability to work under pressure and manage tight deadlines.",
          "Strong interpersonal and coordination skills.",
          "High level of discretion, maturity, and confidentiality.",
          "Comfortable communicating with senior stakeholders, clients, founders, employees, vendors, and external partners.",
          "Ability to communicate firmly and professionally without overstepping functional authority.",
          "Good understanding of the marketing, PR, advertising, or communications ecosystem is preferred.",
          "Strong research, documentation, and presentation skills.",
          "Proficiency in Microsoft Office 365, Excel/Google Sheets, PowerPoint, Microsoft Teams, Outlook, and task/project management tools.",
        ],
      },
      {
        title: "What we are looking for",
        paras: ["The ideal candidate is someone who:"],
        items: [
          "Is highly proactive and takes genuine ownership of responsibilities.",
          "Does not need to be reminded repeatedly about pending tasks.",
          "Can independently manage the Founder’s calendar and priorities.",
          "Anticipates requirements rather than simply responding to instructions.",
          "Has strong follow-through and accountability and takes tasks through to closure.",
          "Understands the difference between urgent, important, and non-essential matters.",
          "Knows when to act independently and when to seek the Founder’s approval.",
          "Is comfortable following up firmly with senior employees and external stakeholders while maintaining professionalism.",
          "Maintains clear written records of instructions, decisions, commitments, and follow-ups.",
          "Escalates unresolved matters rather than allowing them to remain pending.",
          "Can manage both professional and personal responsibilities with maturity and discretion.",
          "Is resourceful and solution-oriented when unexpected situations arise.",
          "Understands that access to the Founder’s professional and personal information requires an exceptionally high level of trust and confidentiality.",
          "Can bring structure, organisation, and predictability to a fast-moving Founder’s office.",
        ],
      },
      {
        title: "Nature of the role",
        paras: [
          "This is a hands-on Executive Assistant role involving both business and personal management.",
          "The successful candidate will be expected to take ownership of coordination and execution while respecting defined decision-making boundaries. The objective of the role is to ensure that the Founder’s time, priorities, commitments, communication, and follow-ups are managed efficiently and that important matters do not fall through the cracks.",
          "The role requires flexibility, responsiveness, sound judgment, discretion, and a strong sense of accountability.",
        ],
      },
    ],
  },
  {
    slug: "business-development-executive",
    title: "Business Development Executive",
    team: "Business development",
    summary:
      "Drive revenue growth by sourcing new clients, generating leads, and pitching tailored communication campaigns.",
    meta: [
      { label: "Location", value: "Mumbai" },
      { label: "Experience", value: "1–3 years" },
      { label: "Type", value: "Full-time" },
    ],
    sections: [
      {
        title: "Role overview",
        paras: [
          "A Business Development Executive drives revenue growth by sourcing new clients, generating leads, and pitching tailored communication campaigns. They identify market opportunities, build relationships with prospective brands, and collaborate with the PR team to seal strategic accounts.",
        ],
      },
      {
        title: "Key responsibilities",
        groups: [
          {
            title: "Lead generation",
            items: [
              "Identify, research, and connect with prospective clients (e.g., startups, corporate brands, executives) through cold outreach, LinkedIn, and networking.",
            ],
          },
          {
            title: "Pitch & proposal creation",
            items: [
              "Develop compelling PR proposals, capabilities decks, and campaign strategies that address the specific media and branding needs of prospects.",
            ],
          },
          {
            title: "Client pitching",
            items: [
              "Lead or assist in pitch meetings, demonstrating how the agency’s media relations, crisis management, and digital PR can achieve the client’s business goals.",
            ],
          },
          {
            title: "Relationship building",
            items: [
              "Nurture relationships with prospective and existing clients, identifying opportunities to upsell services like influencer marketing or event PR.",
            ],
          },
          {
            title: "Market analysis",
            items: [
              "Monitor competitor activities, industry trends, and changing media landscapes to identify emerging sectors and new business opportunities.",
            ],
          },
          {
            title: "Contract negotiation",
            items: [
              "Manage deal negotiations, pricing strategies, and contract closures to ensure profitable agreements for the agency.",
            ],
          },
          {
            title: "Internal collaboration",
            items: [
              "Work closely with the PR account and creative teams to ensure a smooth onboarding and seamless transition of new clients.",
            ],
          },
        ],
      },
      {
        title: "Qualifications & requirements",
        groups: [
          {
            title: "Education",
            items: [
              "Bachelor’s degree in Public Relations, Marketing, Communications, or Business Administration.",
            ],
          },
          {
            title: "Experience",
            items: [
              "1–3 years of proven B2B sales or business development experience, preferably within a PR, advertising, or media agency.",
            ],
          },
          {
            title: "Communication skills",
            items: [
              "Exceptional verbal, written, and presentation skills (especially in storytelling and persuasive communication).",
            ],
          },
          {
            title: "Network",
            items: [
              "Strong existing network of industry contacts and a demonstrated ability to network effectively at corporate and industry events.",
            ],
          },
          {
            title: "Digital literacy",
            items: [
              "Familiarity with CRM software (like Salesforce or HubSpot), LinkedIn Sales Navigator, and lead tracking tools.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "senior-business-development-manager",
    title: "Senior Business Development Manager",
    team: "Business development",
    summary:
      "Drive growth and expand the agency’s client portfolio, owning the end-to-end sales cycle and long-term relationships with brands and partners.",
    meta: [
      { label: "Location", value: "Mumbai, on-site" },
      { label: "Type", value: "Full-time" },
    ],
    sections: [
      {
        title: "Role description",
        paras: [
          "The Senior Business Development Manager is a full-time, on-site role based in Mumbai, responsible for driving growth and expanding the agency’s client portfolio. This role involves identifying and pursuing new business opportunities, managing the end-to-end sales cycle, and building strong, long-term relationships with brands and partners.",
          "The individual will collaborate closely with leadership and account teams to develop proposals, pitch PR and communication strategies, and align client needs with Sorta Famous’s services. Day-to-day activities include conducting market and industry research, preparing presentations, negotiating contracts, tracking performance against revenue targets, and providing regular business development reports.",
          "The role also includes representing the agency at events and networking opportunities to enhance brand visibility and generate leads.",
        ],
      },
      {
        title: "Qualifications",
        items: [
          "Business development and sales skills, including lead generation, pipeline management, and contract negotiation.",
          "Client relationship management and stakeholder engagement skills, with the ability to build trust and maintain long-term partnerships.",
          "Strategic thinking and planning skills for identifying growth opportunities, defining go-to-market approaches, and achieving revenue targets.",
          "Communication and presentation skills, including the ability to craft compelling proposals, pitch complex ideas, and articulate value clearly.",
          "Experience in PR, communications, marketing, or agency environments, with familiarity in media strategy and brand positioning.",
          "Strong analytical skills for interpreting market trends, assessing competition, and generating data-driven insights.",
          "Proven track record in a senior business development or similar role, ideally with regional or national responsibility.",
          "Bachelor’s degree in Business, Marketing, Communications, or a related field; an advanced degree is an advantage.",
          "Comfort working in a fast-paced, collaborative setting and taking ownership of targets and outcomes.",
          "Ability to work on-site in Mumbai and occasionally attend client meetings, events, and industry gatherings.",
        ],
      },
    ],
  },
  {
    slug: "accountant",
    title: "Accountant",
    team: "Finance",
    summary:
      "Own the agency’s books end to end, from billing and payroll to statutory compliance, taxation and monthly MIS.",
    meta: [
      { label: "Location", value: "Mumbai" },
      { label: "Type", value: "Full-time" },
    ],
    sections: [
      {
        title: "Roles & responsibilities",
        groups: [
          {
            title: "Bookkeeping & accounts management",
            items: [
              "Maintain accurate and up-to-date books of accounts for Sorta Famous across all transactions — income, expenditure, assets, and liabilities.",
              "Record and reconcile day-to-day financial transactions in the accounting software on a timely basis.",
              "Manage accounts payable and accounts receivable — processing invoices, tracking due dates, and ensuring timely payments and collections.",
              "Perform monthly bank reconciliations across all company accounts and resolve discrepancies promptly.",
              "Maintain petty cash records and ensure all cash transactions are documented with supporting vouchers.",
              "Ensure all financial entries are supported by accurate documentation — invoices, receipts, purchase orders, and approval records.",
            ],
          },
          {
            title: "Client billing & revenue tracking",
            items: [
              "Raise client invoices in accordance with signed agreements, retainer schedules, and project milestones.",
              "Track all outstanding receivables and follow up with clients on overdue payments in coordination with the account servicing team.",
              "Maintain a live revenue tracker reflecting billed, collected, and outstanding amounts per client.",
              "Reconcile invoices raised against contracts and scope-of-work documents to ensure billing accuracy.",
              "Flag revenue delays, billing disputes, or collection risks to the Founder in a timely manner.",
              "Prepare monthly revenue summaries and collections reports for management review.",
            ],
          },
          {
            title: "Vendor & expense management",
            items: [
              "Process vendor invoices, verify supporting documents, and ensure timely payment within agreed credit terms.",
              "Maintain a vendor master — contact details, payment terms, GST numbers, and bank account information.",
              "Track and reconcile all staff reimbursement claims against approved expense policies and supporting receipts.",
              "Manage monthly office expense tracking across categories — rent, utilities, subscriptions, travel, and miscellaneous.",
              "Verify that all vendor payments are supported by valid contracts or purchase orders and carry appropriate approvals.",
              "Identify cost overruns or unusual expenses and bring them to the attention of the Founder or management.",
            ],
          },
          {
            title: "Payroll processing",
            items: [
              "Process monthly payroll for all employees accurately and on time, in coordination with the HR team.",
              "Maintain payroll records — salary registers, deduction schedules, arrears, and increments — for all employees.",
              "Calculate and deduct statutory contributions — TDS, PF, ESIC, and Professional Tax — as applicable per employee eligibility.",
              "Coordinate with HR to incorporate joining, exit, leave without pay, and mid-month changes into payroll calculations.",
              "Issue salary slips to all employees each month and maintain a secure payroll filing system.",
              "Ensure payroll disbursements are processed through correct bank channels and all transfer records are maintained.",
            ],
          },
          {
            title: "Statutory compliance & taxation",
            items: [
              "Ensure timely filing of GST returns (GSTR-1, GSTR-3B) and maintain accurate input tax credit records.",
              "Manage TDS deductions, deposits, and quarterly TDS return filings (Form 24Q, 26Q) within due dates.",
              "Coordinate with the company’s Chartered Accountant for income tax filings, advance tax computations, and annual assessments.",
              "Maintain records for PF and ESIC contributions, ensure monthly deposits, and file returns within statutory deadlines.",
              "Track Professional Tax obligations by state and ensure timely payment and registration compliance.",
              "Maintain a statutory compliance calendar and proactively flag upcoming deadlines to the Founder.",
              "Respond to statutory notices, assessments, or queries in coordination with the CA and management.",
            ],
          },
          {
            title: "Financial reporting & MIS",
            items: [
              "Prepare monthly P&L statements, balance sheet summaries, and cash flow reports for management review.",
              "Develop and maintain an MIS dashboard tracking key financial metrics — revenue, expenses, margins, and outstanding receivables.",
              "Prepare budget-vs-actual reports on a monthly basis, highlighting variances and providing explanations.",
              "Assist the Founder in annual budgeting, financial forecasting, and cost planning exercises.",
              "Support preparation of financial data for audits, board reviews, investor presentations, or funding discussions as required.",
              "Maintain all financial records in an organised, audit-ready format at all times.",
            ],
          },
          {
            title: "Reporting & governance",
            items: [
              "Submit weekly finance updates to the Founder covering collections, pending payments, and upcoming statutory deadlines.",
              "Maintain a complete and organised filing system for all financial documents — physical and digital.",
              "Adhere to all agency policies and procedures as set out in the Sorta Famous HR Policy Manual.",
              "Ensure strict confidentiality of all financial, payroll, and business data at all times.",
              "Cooperate fully with internal or external auditors and provide required documentation promptly.",
            ],
          },
        ],
      },
    ],
  },
];

/** Pre-filled email for an application to one role. */
export function applyHref(job: Job) {
  const subject = `Application: ${job.title}`;
  const body = `Hi Sorta Famous team,\n\nI'd like to apply for the ${job.title} role. My CV is attached.\n\n`;
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
