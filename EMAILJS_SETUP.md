# EmailJS Setup Guide

This guide will help you configure EmailJS to send emails directly from the contact form.

## Step 1: Sign Up for EmailJS

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to https://dashboard.emailjs.com/admin
2. Click on "Email Services" in the left menu
3. Click "Add New Service"
4. Choose your email provider (Gmail recommended)
5. Follow the setup instructions:
   - For Gmail: You'll need to generate an App Password
   - Go to your Google Account → Security → 2-Step Verification → App Passwords
   - Generate a new app password for "Mail"
   - Use this password in EmailJS setup
6. Save the Service ID (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in the left menu
2. Click "Create New Template"
3. Use this template structure:

**Template Name:** Contact Form

**Subject:** New Contact Form Submission: {{subject}}

**Content:**
```
You have received a new message from your website contact form.

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your website contact form.
Reply to: {{reply_to}}
```

4. Set "To Email" to: `mdzaman.gits@gmail.com`
5. Save the template and note the Template ID

## Step 4: Get Your Public Key

1. Go to "Account" → "General" in the EmailJS dashboard
2. Find your "Public Key" (it looks like: `user_xxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Update the Code

Open `src/pages/contact.js` and replace the following placeholders:

1. **Public Key** (line ~31):
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
   Replace `YOUR_PUBLIC_KEY` with your actual public key from Step 4

2. **Service ID** (line ~58):
   ```javascript
   await emailjs.send(
       'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
   ```
   Replace `YOUR_SERVICE_ID` with your Service ID from Step 2

3. **Template ID** (line ~59):
   ```javascript
       'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
   ```
   Replace `YOUR_TEMPLATE_ID` with your Template ID from Step 3

## Step 6: Test

1. Save the file
2. Run `npm start` to test locally
3. Fill out the contact form and submit
4. Check your email at `mdzaman.gits@gmail.com`
5. You should receive the email directly!

## Troubleshooting

- **Error: "Invalid public key"**: Make sure you copied the entire public key correctly
- **Error: "Service not found"**: Verify your Service ID is correct
- **Error: "Template not found"**: Verify your Template ID is correct
- **No email received**: Check your spam folder and verify the email service is properly configured

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Gmail, Outlook, and other email services

For more emails, consider upgrading to a paid plan.

