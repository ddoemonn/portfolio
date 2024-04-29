// pages/api/resume.ts
import fs from 'fs';
import path from 'path';

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'public', 'Resume.pdf');
  const stat = fs.statSync(filePath);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}
