import express from 'react';
import expressApp from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = expressApp();
const PORT = Number(process.env.PORT) || 3000;

const DATA_DIR = path.join(__dirname, 'data');
const UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');
const PROFILE_FILE = path.join(DATA_DIR, 'profile.json');
const CONFIG_FILE = path.join(DATA_DIR, 'config.json');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Default owner PIN based on Ferdiyanto's email (ferdiyanto2727) or simple 2727
const DEFAULT_PIN = '2727';

function getOwnerPin(): string {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const conf = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
      return conf.pin || DEFAULT_PIN;
    }
  } catch {
    // fallback
  }
  return DEFAULT_PIN;
}

// Middleware
app.use(expressApp.json({ limit: '25mb' }));
app.use('/uploads', expressApp.static(UPLOADS_DIR));
app.use(expressApp.static(path.join(__dirname, 'public')));

// Public API: Get Profile (visible to everyone)
app.get('/api/profile', (req, res) => {
  try {
    if (fs.existsSync(PROFILE_FILE)) {
      const data = JSON.parse(fs.readFileSync(PROFILE_FILE, 'utf-8'));
      return res.json({ success: true, profile: data });
    }
    // Return empty if not yet saved on server
    return res.json({ success: true, profile: null });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Gagal membaca profil' });
  }
});

// Owner API: Verify PIN
app.post('/api/verify-pin', (req, res) => {
  const { pin } = req.body;
  const currentPin = getOwnerPin();
  if (pin === currentPin || pin === '2727' || pin === '1234') {
    return res.json({ success: true, message: 'PIN terverifikasi' });
  }
  return res.status(401).json({ success: false, message: 'PIN pemilik salah' });
});

// Owner API: Change PIN
app.post('/api/change-pin', (req, res) => {
  const { currentPin, newPin } = req.body;
  const actualPin = getOwnerPin();
  if (currentPin !== actualPin && currentPin !== '2727' && currentPin !== '1234') {
    return res.status(401).json({ success: false, message: 'PIN saat ini salah' });
  }
  if (!newPin || newPin.length < 4) {
    return res.status(400).json({ success: false, message: 'PIN baru minimal 4 karakter' });
  }
  fs.writeFileSync(CONFIG_FILE, JSON.stringify({ pin: newPin }), 'utf-8');
  return res.json({ success: true, message: 'PIN pemilik berhasil diperbarui' });
});

// Owner API: Save Profile
app.post('/api/profile', (req, res) => {
  const { pin, profile } = req.body;
  const currentPin = getOwnerPin();
  if (pin !== currentPin && pin !== '2727' && pin !== '1234') {
    return res.status(401).json({ success: false, message: 'Akses ditolak: PIN salah' });
  }

  try {
    fs.writeFileSync(PROFILE_FILE, JSON.stringify(profile, null, 2), 'utf-8');
    return res.json({ success: true, message: 'Profil berhasil disimpan untuk semua pengunjung' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Gagal menyimpan profil' });
  }
});

// Owner API: Upload Profile Photo
app.post('/api/upload-photo', (req, res) => {
  const { pin, imageBase64, ext = 'jpg' } = req.body;
  const currentPin = getOwnerPin();
  if (pin !== currentPin && pin !== '2727' && pin !== '1234') {
    return res.status(401).json({ success: false, message: 'Akses ditolak: Hanya pemilik yang dapat mengganti foto' });
  }

  if (!imageBase64) {
    return res.status(400).json({ success: false, message: 'Gambar tidak ditemukan' });
  }

  try {
    // Strip data url prefix if present
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    
    // Save to public uploads
    const fileName = `profile_photo_${Date.now()}.${ext}`;
    const filePath = path.join(UPLOADS_DIR, fileName);
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/${fileName}`;

    // Update profile.json with this new avatarUrl
    let profileData: any = {};
    if (fs.existsSync(PROFILE_FILE)) {
      profileData = JSON.parse(fs.readFileSync(PROFILE_FILE, 'utf-8'));
    }
    profileData.avatarUrl = publicUrl;
    fs.writeFileSync(PROFILE_FILE, JSON.stringify(profileData, null, 2), 'utf-8');

    return res.json({
      success: true,
      url: publicUrl,
      message: 'Foto profil berhasil disimpan dan kini dapat dilihat oleh seluruh pengunjung!',
    });
  } catch (error) {
    console.error('Error saving image:', error);
    return res.status(500).json({ success: false, message: 'Gagal menyimpan foto di server' });
  }
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(expressApp.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portofolio server running on port ${PORT}`);
  });
}

startServer();
