import Image from "next/image";

export function PresentationFooter () {
    return (
        <footer className="flex items-center justify-start ml-6 gap-4">
        <a
          className="flex items-center justify-center font-semibold gap-1"
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
          className="flex items-center justify-center font-semibold gap-1"
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
    );
}