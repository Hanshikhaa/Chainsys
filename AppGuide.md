# BLUVANTA: THE DEFINITIVE APPLICATION MANUAL & USER GUIDE

Welcome to the exhaustive administrative and customer manual for Bluvanta. This document provides elaborate details on every menu, sub-menu, and feature integrated into the ecosystem.

---

### 📑 Table of Contents

1.  [🛍️ Part 1: The Storefront Experience (Customer Portal)](#part-1)
    *   1.1 Authentication & Profile (Identify vs. Register)
    *   1.2 Top Navigation & Quick Actions (Search, Cart, Theme)
    *   1.3 The "EXPLORE" Strategic Menu (Full Breakdown)
    *   1.4 Smart Search & Real-time Discovery
    *   1.5 Product Interaction (Wishlist, Details, Add to Cart)
    *   1.6 Checkout Architecture (Step-by-Step Flow)
    *   1.7 Orders & Post-Purchase Satisfaction
    *   1.8 Careers & Recruitment (Submit Applications)
2.  [🛡️ Part 2: The Admin Monitoring & Control Portal (Backoffice)](#part-2)
    *   2.1 Secure Session Initialization (Admin Login)
    *   2.2 Dashboard Command Center (Metric Orbs & Cortex AI)
    *   2.3 Catalog Management (Automated Ingestion)
    *   2.4 Inquiry Hub (Messages & Career Streams)
    *   2.5 Sentiment Hub & Feedback Verification
    *   2.6 Inventory Matrix & Vendor Monitoring
    *   2.7 Knowledge Base (AI Document Ingestion)
3.  [🤖 Part 3: AI Support & Intelligence Layer](#part-3)
    *   3.1 Bluvanta AI Assistant (Process Flows & Loaders)
    *   3.2 Restricted Information Protocols
4.  [🌓 Part 4: Universal System Components](#part-4)
    *   4.1 Global Notification System
    *   4.2 Dynamic Theme Switching
5.  [🏢 Part 5: Identity & Philosophy](#part-5)

---

<a name="part-1"></a>
## 🛍️ Part 1: The Storefront Experience (Customer Portal)

### 1.1 Authentication: Signing In & Profiles
To unlock the full potential of the platform, users must authenticate.
*   **STEP 01: Identify:** Enter your mail ID and a multi-character password on the [Login Page](http://localhost:5173/login).
*   **STEP 02: Register:** New users can sign up instantly to create a local profile indexed by their username.
*   **My Account:** Once logged in, the [Profile Page](http://localhost:5173/profile) displays your account type, security token, and tenure in the ecosystem.

### 1.2 Top Navigation & Quick Actions
The header serves as the primary control strip:
*   **Logo (Briefcase Icon):** Instantly redirects to the [Home Page](http://localhost:5173/).
*   **Smart Search Bar:** Filters the entire catalog as you type. It recognizes names, categories, and attributes.
*   **Theme Toggle (Sun/Moon):** Switches between the professional Light mode and the futuristic Dark mode.
*   **Cart Icon:** Displays a real-time count of items in your bag. Redirects to the [Cart Page](http://localhost:5173/cart).
*   **User Information:** Displays the active user's name and provides a "Disconnect" button for secure logout.

### 1.3 The "EXPLORE" Strategic Menu
Clicking the **EXPLORE** button (Three Lines icon) reveals a comprehensive categorization:
*   **🛍️ Shop Section:** 
    *   **Home:** The landing page with featured banners and pastel sections.
    *   **Shop All:** The [Full Product Grid](http://localhost:5173/products) showing the entire inventory.
    *   **Browse Categories:** A filtered view targeting specific departments like Electronics or Fashion.
    *   **Deals & Offers:** Accesses the "discount" filtered view for seasonal drops.
*   **👤 Account Section:**
    *   **Wishlist:** View products you have hearted (saved for later).
    *   **Track Orders:** See the fulfillment lifecycle of your previous purchases.
    *   **My Account:** Update profile details and view security status.
*   **ℹ️ Info Section:**
    *   **Inventory/Vendors:** Restricted links (visible only to admins) for quick backoffice access. ⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.
    *   **Careers:** The [Recruitment Hub](http://localhost:5173/contact) where users apply for roles.
    *   **About Bluvanta:** Philosophical background and technical vision.

### 1.4 Smart Search & Discovery
The search engine utilizes real-time real-time filtering:
1.  **Direct Hits:** Matches product names and descriptions.
2.  **Breadcrumb Nav:** Filter results by Category (Rose), Sub-Category (Blue), or Sub-Type (Sage).
3.  **Real-time Count:** Displays exactly how many items matched the query in the inventory.

### 1.5 Product Interaction
*   **Eye Icon (Preview):** Opens the [Product Detail Page](http://localhost:5173/products/:id) for descriptions and vendor info.
*   **Heart Icon (Save):** Toggles items into your personal [Wishlist](http://localhost:5173/wishlist).
*   **Cart Icon (Quick Add):** Pushes the item directly to the shopping bag without leaving the grid.
*   **Size Selection:** For Fashion items, choose from **XXS, XS, S, M, L, XL, XXL**.

### 1.6 Checkout Architecture (User Flow)
1.  **Review Bag:** Adjust quantities or remove items on the [Cart Page](http://localhost:5173/cart).
2.  **Order Summary:** Real-time calculation of Subtotal, Tax (GSTR@18%), and Shipping.
3.  **Checkout Credentials:** Fill in the verified shipping address on the [Checkout Page](http://localhost:5173/checkout).
4.  **Payment Verification:** Select "Credit Card" or "UPI" on the [Payment Page](http://localhost:5173/payment) to confirm the transaction.

### 1.7 Orders & Post-Purchase Satisfaction
*   **Orders Page:** Displays a persistent list of past transactions with unique Order IDs and Total values.
*   **Success Modal:** A high-impact popup appears after payment verification.
*   **Customer Feedback:** Integrated directly into the success modal. Users share sentiment (Elite, Good, Poor) which is ingested by the Admin Sentiment Hub.

#### 📦 How to track orders?
To track your order in the Bluvanta app, follow these steps:
1.  **Open the Bluvanta app** and sign in to your account if you haven’t already.
2.  **Navigate to Orders:** Tap the “Orders” or “My Orders” section from the main menu, or jump directly to the [Orders Page](http://localhost:5173/orders).
3.  **Find Your Purchase:** Locate the order you want to track from the list of recent purchases.
4.  **View Details:** Tap on that order to open its details.
5.  **Tracking Interface:** You’ll see a “Track Order” button or a map showing the current delivery status.
6.  **Real-time Updates:** If the order is out for delivery, you can view real‑time updates, estimated arrival time, and the courier’s name.
7.  **Support:** For any issues (e.g., delayed delivery), use the “Help” or “Contact Support” option within the order details to get assistance.
8.  **Status Note:** If you don’t see a tracking option, the order may still be processing. Check back later or contact support for more information.

#### 🔄 Return Policy & Initiating a Return
Bluvanta offers a seamless 30-Day Return Policy for all delivered products. If you are not satisfied with your purchase, you can easily request a return directly from the application.

1.  **Navigate to Returns:** Go to the dedicated [Returns Page](http://localhost:5173/returns) where all your eligible and returned orders are tracked.
2.  **Locate a Delivered Order:** Find an order with the status `Received`.
3.  **Initiate Return:** Click the "Initiate Return" button next to the status.
4.  **Fill the Return Form:** A modal will appear asking for:
    *   **Reason for Return:** Select from options like Defective / Damaged, Wrong Item Received, No Longer Needed, etc.
    *   **Return Method:** Choose between a "Refund to Original Payment" or an "Exact Replacement".
    *   **Additional Comments:** Provide any optional context to help our logistics team.
5.  **Confirm Return:** Click "Confirm Return". The order status will automatically update to `Return Requested`, and our team will contact you shortly to process the request.

### 1.8 Careers & Recruitment Hub (Join the Ecosystem)
Bluvanta is a premium decentralized trade protocol. To apply for a career at Bluvanta, follow these unique steps:
> [!IMPORTANT]
> **Applying for a Job:** All job applications must be submitted directly through our integrated Careers Page. Please ensure you have your resume (PDF/DOCX) ready for upload.

1.  **Navigate to the Recruitment Hub:** Go to the [Careers Page](http://localhost:5173/contact) (also the Contact Page).
2.  **Select a Role:** Browse the open positions such as AI Logistics Specialist, Frontend Architect, or Procurement Manager.
3.  **Submit Credentials:** Use the secure form to provide your Name, Email, and a detailed "Experience Summary".
4.  **Upload Attachments:** You MUST upload your Resume or Portfolio in PDF/DOCX format using the "Choose File" button.
5.  **Dispatch Application:** Click "Initiate Application" or "Send Message". Your submission will be automatically tagged with `[JOB APP]` for priority review by the System Administrator.
6.  **Tracking:** Once submitted, wait for an official response which you can track in your portal under notifications.

#### ❓ Frequently Asked Questions
**Q: How do I apply for a job at Bluvanta?**
A: Navigate to the [Careers/Contact Page](http://localhost:5173/contact) , fill in your details, upload your PDF resume, and click the submit button. Ensure your application is tagged with "Job Application" or "Career Inquiry".

---

<a name="part-2"></a>
## 🛡️ Part 2: The Admin Monitoring & Control Portal (Backoffice)

### 2.1 Secure Session Initialization (Admin Login)

**Feature desription:**
The Admin Portal login provides verified administrators with secure access to the platform’s monitoring and management tools. Only accounts with pre‑authorized administrative roles (e.g., admin@bluvanta.com) can initiate a session.

**Navigation Steps:**
1. Open the [Admin Login Page](http://localhost:5173/admin-login).
2. Enter your authorized admin email address and password.
3. Click the “Sign In” button.
4. Upon successful authentication, you will be redirected to the Admin Dashboard.

**Required Inputs or Prerequisites:**
- A verified administrator account (email and password).
- Access from a secure network or device approved for admin use.

**Feature Link:** 
[Admin Login](http://localhost:5173/admin-login)
⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.

### 2.2 Dashboard Command Center (Metric Orbs)

**Feature Description:**
The Admin Dashboard is the primary strategic hub, providing real-time metric visualization and system health monitoring.

**Navigation Steps:**
1. Log in to the Admin Portal.
2. The Dashboard is the default landing page upon successful authorization.

**Required Inputs or Prerequisites:**
- Active administrative session.
- Secure terminal connection.

**Feature Link:**
⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.

### 2.3 Catalog Management (Product Operations)

**Feature Description:**
Administrators use the Catalog Hub to manage the global storefront, including adding, updating, and removing products.

**Navigation Steps:**
1. From the Admin Sidebar, select "Catalog Hub".
2. Navigate to "Product Inventory" or "Manage Collection".

**Required Inputs or Prerequisites:**
- Administrative authorization.
- Valid SKU and product metadata.

**Feature Link:**
⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.

### 2.4 Inquiry Hub (Global Streams)

**Feature Description:**
The Inquiry Hub manages communications, allowing admins to filter between Support Messages and Job Applications.

**Navigation Steps:**
1. From the Admin Sidebar, select "Inquiry Hub".
2. Choose between "Support Stream" and "Recruitment Matrix".

**Required Inputs or Prerequisites:**
- Communication management clearance.

**Feature Link:**
⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.

### 2.5 Sentiment Hub (Feedback Verification)

**Feature Description:**
The Sentiment Hub tracks customer satisfaction through ratings and allows for feedback verification.

**Navigation Steps:**
1. From the Admin Sidebar, select "Sentiment Hub".
2. Filter through "Verified Reviews" or "System Ratings".

**Required Inputs or Prerequisites:**
- Access to client relationship management tools.

**Feature Link:**
⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.

### 2.6 Inventory Matrix & Vendor Monitoring

**Feature Description:**
A technical matrix for monitoring SKUs, pricing, stock levels, and vendor reliability.

**Navigation Steps:**
1. From the Admin Sidebar, select "Inventory Matrix".
2. Use the search filters for SKUs or Vendor IDs.

**Required Inputs or Prerequisites:**
- Data analytics clearance.

**Feature Link:**
⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.

### 2.7 Knowledge Base (AI Document Ingestion)

**Feature Description:**
Allows administrators to expand the AI's intelligence by uploading support documentation.

**Navigation Steps:**
1. From the Admin Sidebar, select "AI Knowledge Hub".
2. Use the Secure Upload modal to ingest .txt, .md, .csv, .docx, or .pdf files.

**Required Inputs or Prerequisites:**
- Knowledge management authorization.
- Valid document format (.txt, .md, .csv, .docx, .pdf).

**Feature Link:**
⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.

---

<a name="part-3"></a>
## 🤖 Part 3: AI Support & Intelligence Layer

### 3.1 Bluvanta AI Assistant
The AI Assistant (bottom-right icon) provides sophisticated support:
*   **Progress Loading Ring:** A circular animation appears around the icon and inside bot responses to show real-time processing status.
*   **Persistent Process Flow:** Every response includes a collapsible "Process Flow" dropdown that details the AI's reasoning steps. This information remains available throughout the chat duration.

### 3.2 AI Mandatory Response Protocol (Admin Features)
For any queries related to Part 2 (Admin Portal), the AI must strictly follow this structure:

1. **Feature Description:** [Summary of functionality]
2. **Navigation Steps:** [Literal path from the sidebar/login]
3. **Required Inputs or Prerequisites:** [Required roles/data]
4. **Feature Link:** ⚠️ Note: This feature is restricted for regular users and accessible only to verified administrators.

**CRITICAL:** The AI must NEVER provide a clickable link or URL for administrative features. The "Feature Link" section must exclusively contain the mandatory restriction note.

---

<a name="part-4"></a>
## 🌓 Part 4: Universal System Components

### 4.1 Global Notification System
Unified system alerts appear at the top-right:
*   **Success (Green):** Confirms positive actions like Order Placement or Profile Update.
*   **Error (Red):** Alerts for Access Denied or Invalid Credentials.
*   **Info (Blue):** System guidance and status updates.

### 4.2 Dynamic Theme Switching
The system supports a persistent theme engine. Toggling the Sun/Moon icons in the header or admin sidebar updates the CSS variables globally across both Storefront and Admin portals.

---

<a name="part-5"></a>
## 🏢 Part 5: Identity & Philosophy

**What is Bluvanta?**
*   **Blu:** Symbolizes trust, reliability, and intelligence.
*   **Vanta:** Represents advantage, forward vision, and strategic growth.
**Philosophy:** We are building the premium, decentralized future of business management and global trade discovery.

---

*© 2026 Bluvanta. This guide is dynamically maintained for all system operators.*
