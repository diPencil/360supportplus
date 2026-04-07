#!/bin/bash

# SUPPORTPLUS - SSH Deployment Script for Hostinger

echo "🚀 Starting SUPPORTPLUS deployment to Hostinger..."

# Build the project
echo "📦 Building the project..."
npm run build

# Create deployment directory
echo "📁 Creating deployment directory..."
rm -rf deploy
mkdir deploy

# Copy built files
echo "📋 Copying built files..."
cp -r out/* deploy/

# Copy additional files
echo "📄 Copying additional files..."
cp deploy/.htaccess deploy/.htaccess

# Create .htaccess for Hostinger
cat > deploy/.htaccess << 'EOF'
# SUPPORTPLUS - Hostinger Configuration

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>

# Enable browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Handle Next.js routing
RewriteEngine On

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^/]+)/$ /$1 [R=301,L]

# Handle Next.js static files
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^_next/(.*)$ /_next/$1 [L]

# Handle main page
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^$ /index.html [L]

# Handle 404 errors
ErrorDocument 404 /404.html
EOF

echo "✅ Deployment files ready in 'deploy' directory"
echo "📤 Upload the contents of 'deploy' folder to your Hostinger public_html directory"
echo "🎉 Deployment preparation complete!"

