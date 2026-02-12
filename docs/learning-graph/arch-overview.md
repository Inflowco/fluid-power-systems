Great question! Let me explain it like building a really cool book with your friends.

  The Parts of Our System

  1. VS Code — Your Desk and Workspace

  Think of VS Code like a super fancy desk where you write. It's a program on your
  computer where you can see all your files (like chapters of the book), type new words,
  and organize everything. It has a file explorer on the side (like drawers in your desk)
   and a big area in the middle where you type.

  2. MkDocs — The Book-Making Machine

  You write your chapters in plain text files (called Markdown — it's like typing with a
  few special symbols for bold, headers, etc.). MkDocs is a machine that takes all those
  plain text files and turns them into a beautiful website with a table of contents,
  navigation, search, and nice formatting. You feed it ingredients (your .md files), and
  it bakes a website.

  - mkdocs serve — lets you preview the book on your own computer
  - mkdocs build — bakes the final website
  - mkdocs gh-deploy — sends the baked website to the internet

  3. GitHub — The Cloud Locker

  GitHub is like a locker in the cloud where you store your book project so it's safe and
   backed up. It also:
  - Keeps a history of every change (so if you mess up, you can go back in time)
  - Hosts the finished website for free (GitHub Pages) so anyone in the world can read it
  - Lets other people see and contribute to the project

  4. Claude Code — Your AI Writing Assistant

  That's me! I'm like a really smart helper sitting next to you at the desk. I can:
  - Write new chapters or fix existing ones
  - Rename and reorganize files
  - Run the book-making machine for you
  - Search through the whole project to find things
  - Remember things about the project between conversations

  How They All Work Together

  You (the author)
    │
    ▼
  VS Code (your desk) ◄──► Claude Code (your helper)
    │                              │
    │  You write .md files         │  I read, write, and
    │  and see the project         │  organize files too
    │                              │
    ▼                              ▼
  MkDocs (book-making machine)
    │
    │  Turns .md files into a website
    │
    ▼
  GitHub (cloud locker + website host)
    │
    │  Stores everything safely
    │  Publishes the website
    │
    ▼
  Readers see: dmccreary.github.io/fluid-power-systems

  The everyday flow:
  1. You open VS Code (or talk to me in the terminal)
  2. We edit Markdown files together — chapters, sims, config
  3. MkDocs bakes those files into a pretty website
  4. Git pushes everything to GitHub for safekeeping
  5. GitHub Pages serves the website to the world

  The Markdown files are the single source of truth — everything else is built from them.