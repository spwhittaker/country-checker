import React from "react";
import styled from "styled-components";
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  justify-self: flex-end;
  justify-self: flex-end;
  * {
    font-size: 70%;
  }

  p a {
    text-decoration: none;
    color: ${(props) => props.theme.secondaryBackground};
    font-size: 100%;
  }
`;
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  let copyrightString;
  if (year === 2019) {
    copyrightString = `Copyright © 2019 Stephen Whittaker`;
  } else {
    copyrightString = `Copyright © 2019 - ${year} Stephen Whittaker`;
  }

  return (
    <StyledFooter>
      <p>
        <a href='#top' alt='Top of the Page'>
          Go to Top
        </a>
      </p>
      <p>
        <a
          href='https://github.com/spwhittaker/'
          target='_blank'
          rel='noopener noreferrer'
          alt='Github link for Stephen Whittaker'
        >
          {copyrightString}
        </a>
      </p>
      <p>
        <a
          href='mailto:stephenwhittaker23@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          alt='Get in touch'
        >
          Contact
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
