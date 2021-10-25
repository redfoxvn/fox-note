import {google} from 'googleapis';

const CLIENT_ID = '981374906453-95tmk8r96ru45kmiqkuepbsp6mck67jd.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URL = 'http://localhost:8080/oauthcallback';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL,
);

const scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
];

export const url: string = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',
  // If you only need one scope you can pass it as a string
  scope: scopes,
});
