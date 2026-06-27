CERTIFICATES FOLDER
===================

The site auto-lists everything in this directory at build time.
Drop files into the right subfolder. Restart `npm run dev` (or push to
trigger a redeploy on Vercel) and they show up at /certificates.


Folder structure
----------------

  cisco/             3 files expected
  hackerrank/        1 file  expected
  infosys/           17 files expected
  spoken-tutorial/   3 files expected
                     ---
                     24 total

The link text on /certificates is the file name exactly as you save it,
so the file name IS the label. Rename your files to whatever you want
recruiters to see.


Supported formats
-----------------

  .pdf   .png   .jpg   .jpeg   .webp

PDF is strongly preferred for verifiable credentials.


Naming tips
-----------

  ✓ aws-cloud-foundations.pdf
  ✓ infosys-python-fundamentals.pdf
  ✓ spoken-tutorial-linux.pdf
  ✗ Certificate (1).pdf            ← rename, looks bad as a link
  ✗ IMG_20240412_134522.pdf        ← rename
  ✗ My Awesome Cert!!.pdf          ← spaces and symbols are ugly in URLs

Lowercase, hyphen separated, descriptive. Files are sorted alphabetically
on the page, so prefix with a number if you want a specific order:

  01-python-fundamentals.pdf
  02-data-structures.pdf
  03-algorithms.pdf


How to add a new category later
-------------------------------

Open src/lib/data.ts and add a new entry to `certificateGroups`:

  { slug: 'coursera', name: 'Coursera', description: 'Specializations' }

Then create /public/certificates/coursera/ and drop files in. Done.


Notes
-----

* Files in /public are publicly accessible — anyone with the URL can
  download them. That is the intent for verifiable credentials. Do not
  put sensitive PDFs in this folder.
* The .gitkeep file in each subfolder is just a placeholder to keep the
  empty directory in git. You can delete it once you add real files.
* The "Certifications: 24" number in the hero stats lives in
  src/lib/data.ts → profile.stats. Update it if your total changes.
