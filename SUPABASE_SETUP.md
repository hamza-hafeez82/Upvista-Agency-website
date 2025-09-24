# Supabase Consultation Form Setup Guide

## 1. Database Setup

Run this SQL in your Supabase SQL Editor:

```sql
-- Create consultations table
CREATE TABLE IF NOT EXISTS consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(50),
  project_type VARCHAR(100) NOT NULL,
  budget VARCHAR(100),
  timeline VARCHAR(100),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_consultations_email ON consultations(email);
CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON consultations(created_at DESC);

-- Create update trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger
CREATE TRIGGER update_consultations_updated_at 
    BEFORE UPDATE ON consultations 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public consultations insert" ON consultations
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read consultations" ON consultations
    FOR SELECT USING (auth.role() = 'authenticated');
```

## 2. Environment Variables

Add these to your `.env.local` file:

```env
# Supabase (you already have these)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Email Configuration
RESEND_API_KEY=your_resend_api_key
BUSINESS_EMAIL=info@upvistadigital.com
```

## 3. Email Service Setup (Resend)

1. Go to [resend.com](https://resend.com)
2. Sign up for an account
3. Get your API key from the dashboard
4. Add your domain (optional but recommended)
5. Add the API key to your environment variables

## 4. Testing

1. Fill out the consultation form on your website
2. Check your Supabase dashboard to see the new record
3. Check your email for the notification
4. The client should receive a confirmation email

## 5. Viewing Submissions

You can view all consultation submissions in your Supabase dashboard:
- Go to your Supabase project
- Navigate to Table Editor
- Select the `consultations` table
- View all submitted forms with timestamps

## 6. Email Templates

The system sends two emails:
1. **Business Notification**: Sent to your business email with all form details
2. **Client Confirmation**: Sent to the client thanking them and setting expectations

## 7. Optional: Admin Dashboard

You can create a simple admin dashboard to view submissions by creating a new page that queries the consultations table with proper authentication.
