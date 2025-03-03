# Interactive Map Project

This project displays an interactive map with various locations and filtering capabilities.

## Features and Functionality

This frontend prototype offers the following features:

### Map Visualization
- Interactive OpenStreetMap integration using Leaflet.js
- Custom markers with color-coded icons representing different location types
- Pan and zoom capabilities for easy navigation
- Initial view centered on the DACH region (Germany, Austria, Switzerland)

### Location Types
- Home: Personal residences
- Firma: Companies and corporate locations
- Wirkungsbereich: Areas of influence/effect
- Unternehmen: Businesses and enterprises
- Projekt: Various project locations
- Tisch: Meeting tables/places

### Filtering Capabilities
- Filter locations by type using the dropdown menu
- Text search functionality to find locations by title or description
- Toggle to display service areas for businesses and companies

### Interactive Elements
- Clickable markers that reveal detailed information
- Information panel with location details slides in from the right
- Service area visualization for business-type locations (5km radius for companies, 3km for businesses)
- Color-coded legend for easy identification of location types

### Data Structure
- Locations stored in a structured JSON format
- Each location contains type, geographic coordinates, icon, and descriptive information
- Easily extensible to include additional location types or data fields

## Local Development

To run the project locally:

1. Make sure you have Node.js installed on your system
2. Open a terminal in the project directory
3. Run the following command to start the development server:
   ```
   npm start
   ```
   Or simply use:
   ```
   npx http-server
   ```

4. Open your browser and navigate to http://localhost:8080

## GitHub Pages Deployment

This project uses a dedicated `gh-pages` branch for GitHub Pages deployment:

1. Push changes to your `main` branch first
2. GitHub Actions will automatically deploy to the `gh-pages` branch
3. Go to repository settings on GitHub
4. In the left sidebar, click on "Pages"
5. Under "Source", select the `gh-pages` branch
6. Click "Save"

Your site will be published at: `https://[your-username].github.io/[repository-name]/`

### Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

1. Push the code to your GitHub repository
2. Go to your repository settings on GitHub
3. In the left sidebar, click on "Pages"
4. Under "Source", select the branch you want to deploy (usually "main")
5. Click "Save"

Your site will be published at: `https://[your-username].github.io/[repository-name]/`

### Important Notes for GitHub Pages Deployment

- Make sure your repository name is the same as specified in your links
- If you're using a custom domain, add a CNAME file to your repository
- All paths in the HTML, CSS, and JavaScript files should be relative paths

## Project Structure

- `index.html` - Main application file with the interactive map
- `data.json` - Contains all the map location data
- `server.js` - Local development server (not used in GitHub Pages)
- `package.json` - Project configuration

## Credits

- Maps powered by [Leaflet.js](https://leafletjs.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- UI components from [Bootstrap](https://getbootstrap.com/)
