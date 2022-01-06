export const Layout: React.FC = ({ children }) => (
  <>
    <header></header>
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <span>Menu</span>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <main>{children}</main>
    <footer></footer>
  </>
);
