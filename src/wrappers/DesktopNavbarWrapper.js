import styled from 'styled-components'

const DesktopNavbarWrapper = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    background-color: var(--primary-1);
  }
  .navbar {
    ul {
      display: flex;
      a {
        padding: 1rem;
        text-align: center;
      }
    }
  }

  .icon {
    width: 30px;
  }
  .social-icons {
    width: 200px;
    ul {
      display: flex;
      gap: 1rem;
      text-align: center;
    }
  }
  .logo-container {
    width: 200px;
  }
  .logo {
    width: 80px;
    height: 80px;
    display: block;
    margin: 0 auto;
  }
`
export default DesktopNavbarWrapper
