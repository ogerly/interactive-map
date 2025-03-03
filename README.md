# Interactive Map Project

This project displays an interactive map with various locations and filtering capabilities.

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
