# RUET Campus Lost & Found

A web-based Lost and Found Management System developed for Rajshahi University of Engineering & Technology (RUET) using the MERN stack.

The application allows students to report lost or found belongings, search for items, submit ownership claims, and manage their listings through a centralized platform.

## Project Objectives

The main objectives of this project are:

- Provide a centralized platform for reporting lost and found items on campus.
- Help students search for missing belongings efficiently.
- Allow students to submit ownership claims for listed items.
- Enable item owners to review and approve or reject claims.
- Provide secure authentication using university email addresses.
- Maintain persistent records of items and claims using MongoDB.

## Technologies Used

| Component | Technology |
|---|---|
| Frontend | React.js, Vite, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT, Password Hashing |
| API Testing | Jest, Supertest |
| Version Control | Git, GitHub |
| Continuous Integration | GitHub Actions |
| Architecture | REST API |

## Functional Modules

### 1. User Authentication
- Register using a university email address ending in `@ruet.ac.bd`.
- Log in using an email address and password.
- Protect application endpoints using JWT authentication.
- Store passwords securely using hashing.

### 2. Lost and Found Item Management
- Post lost or found items.
- Provide item details, including title, category, location, and description.
- Browse available item listings.
- Manage personal listings.

### 3. Search and Filtering
- Search items using keywords.
- Filter listings by category.
- Filter listings by lost or found status.
- Browse matching results.

### 4. Ownership Claim Management
- Submit claims for items posted by other users.
- Provide a reason or explanation for the claim.
- View submitted claims.
- Track claim status.

### 5. Claim Review and Approval
- Review claims submitted for personal listings.
- Approve or reject ownership claims.
- Update claim status accordingly.
- Restrict claim decisions to the listing owner.

### 6. User Dashboard
- Display an overview of campus item listings.
- Provide navigation to major application modules.
- Show listing statistics and relevant information.

## Software Design Patterns

Three design patterns from different categories are used in this project.

### 1. Factory Pattern (Creational)

The Factory Pattern is used to create item objects with consistent fields and default values.

**Purpose:** Simplify item creation and centralize validation and initialization logic.

**Implementation:** `server/patterns/itemFactory.js`

### 2. Adapter Pattern (Structural)

The Adapter Pattern converts internal item data into a consistent response format.

**Purpose:** Separate internal database representation from the data exposed through the application interface.

**Implementation:** `server/patterns/itemAdapter.js`

### 3. Strategy Pattern (Behavioral)

The Strategy Pattern supports different approaches to searching and filtering items.

**Purpose:** Organize search behavior and make filtering logic easier to extend.

**Implementation:** `server/patterns/searchStrategies.js`

## Installation and Setup

### Prerequisites

Make sure the following software is installed:

- Node.js and npm
- MongoDB Community Server
- Git
- Visual Studio Code or another code editor

MongoDB Compass is optional but useful for inspecting the database.

### Step 1: Clone the Repository

Open PowerShell and run:

```bash
git clone https://github.com/SuptiPal/campus-lost-found.git
cd campus-lost-found
```

### Step 2: Configure the Backend

Open a terminal in the server directory:

```powershell
cd server
npm install
Copy-Item .env.example .env
```

Open the `.env` file and configure the database connection and JWT secret:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/campus_lost_found
JWT_SECRET=replace_with_a_long_random_secret
```

**Important:** Never commit your `.env` file or JWT secret to GitHub.

Start the backend:

```powershell
npm run dev
```

The backend runs on port `5000` by default.

### Step 3: Configure the Frontend

Open another terminal in the project directory:

```powershell
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite, usually:

```text
http://localhost:5173
```

If that port is occupied, Vite may use another port, such as `5174`.

### Step 4: Start MongoDB

Ensure that the MongoDB service is running.

For local development, the database connection is:

```text
mongodb://127.0.0.1:27017
```

The application uses the `campus_lost_found` database.

### Step 5: Register and Log In

1. Open the application.
2. Register using an email address ending in `@ruet.ac.bd`.
3. Choose a password containing at least eight characters.
4. Log in using the registered credentials.
5. Access the dashboard and application modules.

**Note:** University email suffix validation is implemented for demonstration purposes. Email ownership verification is not included.

## How to Use the Application

### Posting an Item

1. Log in to the application.
2. Navigate to the item posting section.
3. Select whether the item is lost or found.
4. Enter the item details.
5. Submit the form.
6. View the newly created listing.

### Searching for an Item

1. Open the item listing section.
2. Enter a keyword.
3. Apply category or item-type filters.
4. Browse the matching results.

### Submitting an Ownership Claim

1. Log in using an account different from the listing owner's account.
2. Open an appropriate item listing.
3. Select the claim option.
4. Enter the required claim information.
5. Submit the claim.

### Reviewing a Claim

1. Log in as the user who posted the item.
2. Navigate to the claim management section.
3. Review the submitted claim.
4. Approve or reject the request.
5. Check the updated claim status.

## Testing

The backend includes automated tests using Jest and Supertest.

Tests cover API behavior, design patterns, and claim-related service logic.

### Run Unit Tests

```powershell
cd server
npm test
```

### Generate Test Coverage

```powershell
npm run test:coverage
```

The command generates a test coverage summary.

### Continuous Integration

GitHub Actions automatically runs backend tests when changes are pushed or pull requests are created.

The workflow helps identify failing tests before changes are merged into the main branch.

## Version Control and Development Workflow

Git and GitHub are used to manage the project.

The development workflow includes:

- Maintaining a main branch.
- Creating feature branches.
- Committing changes with meaningful messages.
- Opening pull requests.
- Reviewing and revising code.
- Running automated tests.
- Merging completed changes.

Since this is an individual assignment, the development and review activities are performed by the project author.

## UML and Documentation

The project includes PlantUML source files in the `docs` directory.

These diagrams help document the system's structure and relationships.

The project report covers requirements, design decisions, implementation, testing, and reflection on the development process.

## Current Limitations

The application is intended for academic demonstration.

Some features that would be useful in a production system include:

- University email ownership verification.
- Password reset functionality.
- Advanced image storage.
- Email notifications.
- Rate limiting and additional security controls.
- Administrative moderation.
- Production deployment.

## Future Improvements

Possible future improvements include:

- Integrating university email verification.
- Supporting image uploads for lost and found items.
- Adding notifications for claim updates.
- Improving item matching and recommendations.
- Introducing an administrative dashboard.
- Deploying the application for wider campus access.

## Project Information

**Project Title:** RUET Campus Lost & Found  
**Course:** CSE 3206 — Software Engineering Sessional  
**Department:** Computer Science and Engineering  
**Institution:** Rajshahi University of Engineering & Technology (RUET)  
**Developer:** Supti Pal  
**Roll:** 2203049  
**Project Type:** Individual Academic Project

## Conclusion

RUET Campus Lost & Found provides a centralized system for managing lost and found belongings within the university campus. The application combines user authentication, item management, searching, and ownership claim processing in a single platform.

The project demonstrates practical application of MERN stack development, software design patterns, automated testing, database integration, and version control. It also provides opportunities to apply software engineering principles throughout the development process.