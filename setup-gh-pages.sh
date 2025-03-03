#!/bin/bash

# Create and switch to gh-pages branch
git checkout -b gh-pages

# Ensure the branch has all the necessary files
# (You might want to run this from your main branch first, then switch)
git add index.html data.json README.md 
git commit -m "Initial GitHub Pages setup"

# Push the branch to GitHub
git push origin gh-pages

echo "gh-pages branch created and pushed to GitHub"
echo "Now go to repository Settings > Pages to configure deployment"
