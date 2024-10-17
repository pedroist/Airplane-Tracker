# S64 Fullstack Challenge Submission

## Name and Contact Details
- Pedro Castro
- pedro.tiago.castro.ist@gmail.com
- +351 91 69 27 622 or +34 674 98 94 40

## Assumptions Made
1. The SQLite database structure will remain consistent with the provided schema.
2. The backend will always be running on localhost:3000.
3. The frontend and backend will be run separately in development.
4. Users have modern browsers that support ES6+ features.
5. Used Prisma as the ORM for the database.

## Differences from a Production System
1. Error Handling: In a production system, I would implement more robust error handling and logging, including:
   - Centralized error handling middleware for the Express backend
   - Error boundaries in React for the frontend
   - Integration with a logging service like Sentry or Logstash

2. Authentication and Authorization: This demo doesn't include any user authentication or authorization. In a real system, I would implement:
   - JWT-based authentication
   - Role-based access control for different API endpoints

3. Performance Optimizations:
   - Implement caching strategies (e.g., Redis) for frequently accessed data

4. Security Measures:
   - Implement rate limiting to prevent abuse
   - Use HTTPS for all communications
   - Sanitize user inputs to prevent XSS attacks

5. Containerization: Use Docker to containerize the application for consistent deployment across different environments.

6. CI/CD Pipeline: Set up a continuous integration and deployment pipeline using tools like Jenkins, GitLab CI, or GitHub Actions.

## Additional Tests for a Real System
1. Integration Tests:
   - Test the interaction between the frontend and backend
   - Ensure data consistency across the entire application flow

2. End-to-End Tests:
   - Use tools like Cypress or Selenium to simulate user interactions
   - Test the entire user flow from landing on the page to navigating through multiple pages of data

3. Cross-browser and Cross-device Tests:
   - Ensure consistent functionality across different browsers and devices

4. API Tests:
   - Comprehensive testing of API endpoints in case there was more endpoints added
   - Test edge cases and error scenarios
