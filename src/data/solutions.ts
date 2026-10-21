export const solutions = {
  'workforce-management': {
    title: 'Workforce Management Software Solutions | VYQDA',
    description: 'Explore workforce management workflows for attendance records, shift planning and operational reporting, including the Timenox product.',
    name: 'Workforce Management',
    eyebrow: 'WORKFORCE & ATTENDANCE',
    intro: 'Make workforce records easier to manage and review',
    lead: 'When attendance, shift information and reporting live in disconnected places, routine administration becomes harder to follow. Start by defining the records your team needs, who maintains them and how managers use them.',
    challenge: 'Attendance and shift processes often vary across teams, locations and job types. A useful system should make the expected process clear without pretending every organisation works the same way.',
    needs: [
      { title: 'Attendance capture', body: 'Define how staff record start and end times, what evidence is required and how exceptions are handled. Browser-based QR attendance may fit some teams; others may need a different process.' },
      { title: 'Shift planning and exceptions', body: 'Document scheduled hours, shift changes, missed punches, leave-related exceptions and the person responsible for resolving each discrepancy.' },
      { title: 'Manager review and reporting', body: 'Decide which summaries supervisors need, how frequently records are reviewed and how corrections are approved before information is used for payroll or administration.' },
      { title: 'Device and location realities', body: 'Check the phones, browsers, connectivity and site conditions employees actually use. GPS or photo verification should be considered only where appropriate and clearly communicated.' }
    ],
    approach: [
      'Map the current attendance and shift process, including exceptions and approval responsibilities.',
      'Decide whether a ready-made attendance product fits or whether custom workflows are needed.',
      'Test the process with representative staff and managers before broad rollout.',
      'Agree on record ownership, support, retention and how process changes will be managed.'
    ],
    product: 'Timenox',
    productUrl: '/products/timenox/',
    productText: 'Explore Timenox attendance software',
    related: 'For distributed employees whose work extends beyond attendance records, compare the field-operations approach on Timenox 360.',
    relatedUrl: '/solutions/field-operations/'
  },
  'field-operations': {
    title: 'Field Operations Software Solutions | VYQDA',
    description: 'Plan software for distributed field teams, operational workflows, structured records and manager visibility with VYQDA.',
    name: 'Field Operations',
    eyebrow: 'DISTRIBUTED TEAMS & OPERATIONS',
    intro: 'Bring more structure to work happening away from the office',
    lead: 'Field operations can involve people working across sites, customer locations or service areas. Before choosing software, define the activities that need to be recorded, the evidence required and how office teams will review the information.',
    challenge: 'A field tool is only useful when it reflects the real working day. Connectivity, device access, location permissions, exceptions and the difference between check-in records and continuous tracking all affect the design.',
    needs: [
      { title: 'Field activity records', body: 'Specify what a worker needs to submit: a visit record, task status, note, photo, time entry or another business-specific update. Avoid collecting information that is not needed for the process.' },
      { title: 'Site and assignment context', body: 'Clarify how assignments are created, how staff identify the correct site and what should happen when a location, schedule or assignment changes.' },
      { title: 'Connectivity and devices', body: 'Test the actual devices and network conditions used in the field. If offline work is required, treat offline capture and later synchronisation as explicit requirements to design and verify.' },
      { title: 'Operational review', body: 'Choose the summaries supervisors need, define escalation paths for incomplete records and make responsibility for follow-up visible.' }
    ],
    approach: [
      'Follow a field worker through a typical day and document normal and exceptional cases.',
      'Separate required proof of an activity from optional location or photo data.',
      'Evaluate whether Timenox 360 is a suitable starting point or whether custom software is required.',
      'Pilot with a small representative group and validate reporting, permissions and support processes.'
    ],
    product: 'Timenox 360',
    productUrl: '/products/timenox-360/',
    productText: 'Explore Timenox 360',
    related: 'If the primary need is employee attendance and shift records rather than broader field workflows, review Timenox separately.',
    relatedUrl: '/solutions/workforce-management/'
  },
  'restaurant-technology': {
    title: 'Restaurant Technology & POS Software | VYQDA',
    description: 'Evaluate restaurant point-of-sale workflows, order handling, billing and operational requirements with VYQDA and Vyfoo.',
    name: 'Restaurant Technology',
    eyebrow: 'RESTAURANT OPERATIONS',
    intro: 'Connect the steps between taking an order and closing the bill',
    lead: 'Restaurant technology should be evaluated against the way a venue takes orders, sends them for preparation, handles changes and settles bills. The right setup depends on service style, staff roles, devices and the systems already in use.',
    challenge: 'A POS decision affects front-of-house routines and day-to-day administration. A feature list alone cannot confirm fit: the team should walk through real order scenarios and identify what happens when something changes.',
    needs: [
      { title: 'Order and billing flow', body: 'Map how orders are entered, amended, cancelled and converted into bills. Include dine-in, takeaway or other service modes only if the restaurant actually uses them.' },
      { title: 'Staff roles and controls', body: 'Define who can open bills, apply permitted adjustments, cancel transactions and review end-of-shift records. Confirm how actions are recorded and reviewed.' },
      { title: 'Devices and peripherals', body: 'Check the intended operating devices, printers, cash drawer and other peripherals before rollout. Compatibility should be verified for the specific configuration rather than assumed.' },
      { title: 'Payments and reporting', body: 'List required payment methods, settlement steps and reports. Confirm any payment-provider, accounting or delivery-platform integration separately before committing to it.' }
    ],
    approach: [
      'Document the venue’s service model and run through typical and exception-based order scenarios.',
      'Confirm the required hardware, payment workflow and staff permissions.',
      'Evaluate Vyfoo against the documented needs and validate the setup in the restaurant environment.',
      'Prepare staff guidance and a practical support path for service hours and end-of-day tasks.'
    ],
    product: 'Vyfoo Restaurant POS',
    productUrl: '/products/vyfoo/',
    productText: 'Explore Vyfoo Restaurant POS',
    related: 'For requirements that go beyond the available product workflow, discuss custom application development and integration scope.',
    relatedUrl: '/services/custom-software-development/'
  },
  'retail-software': {
    title: 'Retail Billing & Inventory Software Solutions | VYQDA',
    description: 'Assess retail billing, catalogue and stock-related workflows with VYQDA Retail and custom software development options.',
    name: 'Retail Software',
    eyebrow: 'RETAIL BILLING & STOCK WORKFLOWS',
    intro: 'Build a clearer view of everyday retail transactions',
    lead: 'Retail software should support the store’s actual selling and stock routines. Start with the product catalogue, billing steps, returns, stock changes and reports the team relies on before deciding which features or integrations are essential.',
    challenge: 'A retail workflow can become difficult to reconcile when the same product or transaction is recorded differently across tools. The solution needs clear ownership of product data, transaction corrections and stock adjustments.',
    needs: [
      { title: 'Product catalogue and pricing', body: 'Define product identifiers, variants, price changes, tax treatment and who is authorised to update catalogue information. Validate edge cases before migrating existing records.' },
      { title: 'Billing, returns and corrections', body: 'Map the sale from item entry to receipt, including discounts, cancellations, exchanges and returns. Make sure the team knows how corrections are recorded and approved.' },
      { title: 'Stock movement and reconciliation', body: 'Identify which actions change stock quantities and how purchases, sales, damage, transfers or manual adjustments are recorded where those workflows are in scope.' },
      { title: 'Store reporting and integrations', body: 'Specify the daily and periodic reports managers need. Treat accounting, barcode, payment, e-commerce or multi-branch connections as requirements to confirm, not automatic capabilities.' }
    ],
    approach: [
      'Review the store’s current catalogue, billing process, stock records and exception handling.',
      'Confirm the product and reporting needs that are essential for the first rollout.',
      'Evaluate VYQDA Retail against the agreed workflow and verify required device compatibility.',
      'Plan data cleanup, staff onboarding, transaction checks and post-launch support.'
    ],
    product: 'VYQDA Retail',
    productUrl: '/products/retail/',
    productText: 'Explore VYQDA Retail',
    related: 'If the workflow spans multiple systems or has store-specific rules, review custom software development as a separate option.',
    relatedUrl: '/services/custom-software-development/'
  }
};
