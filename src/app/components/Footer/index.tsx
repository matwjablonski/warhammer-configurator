import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-4">
    <p>Fanowski niekomercyjny projekt.</p>
    <nav>
      <ul className="flex justify-center space-x-4">
      <li>
          <Link href="/privacy">
            Polityka prywatności
          </Link>
        </li>
        <li>
          <Link href="https://mateuszjablonski.com" target="_blank">
            O autorze
          </Link>
        </li>
      </ul>
    </nav>
  </footer>
)
