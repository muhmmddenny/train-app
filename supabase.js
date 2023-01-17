import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabase_url = 'https://ktwegrzmpyvziddjvswx.supabase.co';
const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0d2VncnptcHl2emlkZGp2c3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ3Nzg3NDUsImV4cCI6MTk3MDM1NDc0NX0.RsMafH6-LXOmyYJdXgHgNkA6NmZgnPhyp74LpHueZus';
const supabase = createClient(supabase_url, supabase_key, {
  localStorage: AsyncStorage,
});

export default supabase;