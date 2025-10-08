# API Integration Guide - ColorWaves Corporate Website

## Overview
This document explains how the corporate website integrates with the ColorWaves backend API using axios and static token authentication.

## Configuration

### Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:9004/api/v1
NEXT_PUBLIC_STATIC_API_TOKEN=CW2024API_9x7k2m8n5p1q4r6s3t7u2v9w5x8y1z4
```

**Important:**
- The static token must match the one configured in the backend
- Default token: `CW2024API_9x7k2m8n5p1q4r6s3t7u2v9w5x8y1z4`
- Restart the dev server after updating `.env.local`

## API Structure

### API Client (`src/lib/api.ts`)

The API client is configured with:
- **Base URL**: From `NEXT_PUBLIC_API_URL` environment variable
- **Authentication**: Static token sent as `Authorization: Bearer <token>`
- **Timeout**: 30 seconds (for file uploads)
- **Error Handling**: Automatic error parsing and user-friendly messages

## Available APIs

### 1. Newsletter API

```typescript
import { newsletterAPI } from '@/lib/api';

// Subscribe to newsletter
await newsletterAPI.subscribe(email);

// Unsubscribe from newsletter
await newsletterAPI.unsubscribe(email);
```

**Backend Endpoint**: `POST /newsletter/subscribe` (Public)

**Payload**:
```json
{
  "email": "user@example.com"
}
```

### 2. Contact API

```typescript
import { contactAPI } from '@/lib/api';

await contactAPI.submitMessage({
  fullName: "John Doe",
  email: "john@example.com",
  phoneNumber: "+234123456789", // optional
  subject: "Inquiry about services",
  message: "I would like to know more about your services..."
});
```

**Backend Endpoint**: `POST /contacts` (Public)

**Field Mapping**:
- `fullName` → `name`
- `phoneNumber` → `phone`

### 3. Project Requests API

```typescript
import { projectRequestsAPI, uploadAPI } from '@/lib/api';

// Upload images first
const uploadResult = await uploadAPI.uploadImages(files, 'project-requests');
const imageUrls = uploadResult.data.map(file => file.fileUrl);

// Submit project request
await projectRequestsAPI.create({
  fullName: "John Doe",
  email: "john@example.com",
  phoneNumber: "+234123456789",
  companyName: "ABC Company", // optional
  projectTitle: "Office Renovation",
  projectDescription: "We need to renovate our office space...",
  budget: "₦500,000 - ₦1,000,000", // optional
  timeline: "1-2 months", // optional
  servicesNeeded: ["Commercial Painting", "Color Consulting"], // optional
  imageUrls: imageUrls // optional
});
```

**Backend Endpoint**: `POST /project-requests` (Static Token Required)

**Field Mapping**:
- `fullName` → `clientName`
- `servicesNeeded` → `services`
- `imageUrls` → `images`

### 4. Partnership Requests API

```typescript
import { partnershipRequestsAPI } from '@/lib/api';

await partnershipRequestsAPI.create({
  fullName: "John Doe",
  companyName: "ABC Company",
  contactPerson: "John Doe",
  email: "john@example.com",
  phoneNumber: "+234123456789",
  partnershipType: "Contractor Partnership",
  description: "We are interested in partnering...",
  website: "https://example.com", // optional
  companySize: "11-50 employees",
  industry: "Construction"
});
```

**Backend Endpoint**: `POST /partnership-requests` (Static Token Required)

### 5. Upload API

```typescript
import { uploadAPI } from '@/lib/api';

// Upload single image
const result = await uploadAPI.uploadImage(file, 'folder-name');
console.log(result.data.fileUrl); // Use this URL

// Upload multiple images
const result = await uploadAPI.uploadImages(files, 'folder-name');
const urls = result.data.map(file => file.fileUrl);
```

**Backend Endpoints**:
- `POST /upload/image` (Static Token Required)
- `POST /upload/images` (Static Token Required)

## Form Implementations

### Newsletter Subscription (Footer)
**Location**: `src/components/footer.tsx`

**Features**:
- Email validation
- Loading state
- Success/error toast notifications
- Form reset after submission

### Contact Form
**Location**: `src/app/contact/page.tsx`

**Features**:
- All fields validated
- API integration with proper field mapping
- Loading state with disabled inputs
- Success/error toast notifications
- Form reset after submission

### Project Request Form
**Location**: `src/components/project-request-form.tsx`

**Features**:
- Image upload before form submission
- Progress indication during upload
- Multiple file upload support
- API integration with field transformation
- Success/error toast notifications
- Form reset after submission

**Image Upload Flow**:
1. User selects images
2. On submit, images are uploaded first
3. Upload URLs are obtained
4. Form data is submitted with image URLs
5. Success/error feedback is displayed

### Partnership Request Form
**Location**: `src/components/partnership-request-form.tsx`

**Features**:
- All fields properly mapped to backend DTO
- Loading state
- Success/error toast notifications
- Form reset after submission

## Toast Notifications

All forms use `sonner` for toast notifications, configured in `src/app/layout.tsx`:

```typescript
<Toaster 
  position="top-right"
  expand={true}
  richColors
  closeButton
/>
```

**Toast Types**:
- `toast.success()` - Green success messages
- `toast.error()` - Red error messages
- `toast.info()` - Blue informational messages

## Error Handling

All API calls are wrapped in try-catch blocks with:
1. **Type-safe error handling** (no `any` types)
2. **User-friendly error messages**
3. **Automatic toast notifications**
4. **Form state management** (loading, reset, etc.)

## Backend Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response
```json
{
  "statusCode": 400,
  "message": "Error message",
  "error": "Bad Request"
}
```

## Testing

To test the integrations:

1. **Start the backend**:
   ```bash
   cd backend
   npm run start:dev
   ```

2. **Start the frontend**:
   ```bash
   cd corporate-website
   npm run dev
   ```

3. **Test each form**:
   - Newsletter subscription (Footer)
   - Contact form (`/contact`)
   - Project request (`/project-request`)
   - Partnership request (`/partnership`)

4. **Verify in backend**:
   - Check database for new entries
   - Monitor backend logs for API calls

## Troubleshooting

### Static Token Error
**Error**: "Static token is required"

**Solution**:
1. Verify `.env.local` exists with correct token
2. Restart dev server: `npm run dev`
3. Check backend configuration matches

### Upload Errors
**Error**: "Failed to upload images"

**Solutions**:
1. Verify backend upload service is configured
2. Check file size limits (default: 5MB per image, 10 images max)
3. Ensure images are valid image files
4. Check Backblaze/storage configuration in backend

### API Connection Errors
**Error**: "Failed to connect to API"

**Solutions**:
1. Verify backend is running on correct port
2. Check `NEXT_PUBLIC_API_URL` is correct
3. Verify CORS is configured in backend
4. Check network/firewall settings

## Production Deployment

For production deployment:

1. Update `.env.local` with production API URL
2. Use secure static token (change from default)
3. Configure backend with same token in `.env`
4. Test all forms thoroughly
5. Monitor error logs

## Security Notes

- Static token is stored in environment variables
- Never commit `.env.local` to version control
- Use different tokens for dev/staging/production
- Rotate tokens periodically
- Monitor API usage for suspicious activity

