import styled from 'styled-components'

const MobileNavbarWrapper = styled.nav`
  @media (min-width: 768px) {
    display: none;
  }
  .logo {
    width: 60px;
  }
  .container {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--primary-1);
  }
  .container-header {
    display: flex;
    justify-content: space-between;
    .menu-icon {
      margin-top: 1rem;
      margin-right: 1rem;
      font-size: 2rem;
      color: var(--primary-8);
    }
  }
  .links {
    transition: var(--transition);
    height: 0px;
    transition: var(--transition);
    background-color: var(--white);
    overflow: hidden;
    .link {
      display: grid;
      a {
        margin-left: 1rem;
      }
      svg {
        font-size: 1.5rem;
        margin-right: 1rem;
        color: var(--primary-8);
        .active {
          color: var(--primary-1);
        }
      }
    }
  }
`
export default MobileNavbarWrapper
