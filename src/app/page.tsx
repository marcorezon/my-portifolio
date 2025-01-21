import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-primary-dark to-primary-grey rounded-3xl shadow-primary-grey">
      <main>
        <ol>
          <li>
            Hello.
          </li>
          <li>My name is Marco</li>
        </ol>
      </main>
      <footer className="flex items-center justify-end">
        <a
          className="flex items-center justify-center"
          href="https://github.com/marcorezon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/githubLogo.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center justify-center"
          href="https://www.linkedin.com/in/marco-rezon-4770b1222/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/linkedInBlackLogo.wine.svg"
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}