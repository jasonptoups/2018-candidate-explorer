# 2018 Candidate Explorer

## Purpose
Allow users to quickly view all the Democratic Party candidates for 2018 and filter them by various characteristics (e.g., age, gender, profession, race, sexuality). Users should then be able to save their favorite candidates to their "ticket," where they can then quickly access candidate webpages to donate or find opportunities to volunteer. 

## Stack
* Database: MongoDB with 2 models: candidates and users
* Backend: Express on Node
* Connection: API
* View engine: Vue on JavaScript and html

## Dependencies
* Node
* Express
* Mongoose
* Body-Parser
* Passport (Cookie-Parser, )

## High-level structure:
### Models
Candidates
* Name
* Photo: link? 
* State
* District
* Age
* Gender
* Sexuality
* Website
* Professions:
  * Educator
  * Veteran
  * Law
  * Public Servant
  * Experienced politician
  * Business
  * Academic
  * STEM

Users
* Username
* Password
* Saved candidates: (IDs only)

### Router
Public routes:
* Get /candidates: Shows all the candidates with dynamic filter options (through VUE). Allows user to save a candidate to 
* Update /candidates/id: updates a candidate's fields
* Create /candidates/new: creates a new candidate
* Delete candidates/id: deletes a candidate

Log-in routes:
* Create account
* Log in
* Logout

Secret routes:
* View your saved candidates

### Source Data
* Data is available from the FEC.gov API. It will have the Name, Age, Gender, State, and District fields. I will have to manually enter the remaining

### Target bonuses:
1. Authentication
2. Import data from the fec.gov api
3. Paginate list views (?)
4. Allow photo uploading and persist... hmmm. 

## Stages
1. Build seed file
2. Build DB connection and seed the DB
3. Build APIs for front-end
4. Build framework html page with Bulma
5. Turn framework page into functioning first page